import { describe, it, expect } from "vitest";
import { createRoot } from "react-dom/client";
import React from "react";

/**
 * Regression guard for a React 18 automatic-batching footgun we hit in
 * `LandingPage.componentDidMount`.
 *
 * In React 16, `setState` calls from a non-React event handler (an
 * async GLTFLoader success callback in our case) were applied
 * synchronously — so reading `this.state.x` on the very next line
 * returned the value just set.
 *
 * In React 18, every `setState` is automatically batched — including
 * from async callbacks — so `this.state.x` on the next line still
 * returns the *previous* value. We hit this in the gltf load callback
 * and the entire landing-page intro animation broke because
 * `new TWEEN.Tween(this.state.object.rotation)` crashed on a null
 * `object`.
 *
 * The lesson this test encodes: inside an async callback, always read
 * the value you just captured locally, not from `this.state`.
 */
describe("React 18 automatic batching", () => {
  it("does NOT expose the new state inside the same non-React callback", async () => {
    class Thing extends React.Component {
      constructor(props) {
        super(props);
        this.state = { obj: null };
      }
      componentDidMount() {
        // Simulate an async non-React callback (e.g. GLTFLoader onLoad).
        setTimeout(() => {
          const loadedObject = { rotation: { x: 0, y: 0, z: 0 } };
          this.setState({ obj: loadedObject });
          // The footgun: in React 18, `this.state.obj` is still null here.
          // Surface that via a prop so the test can observe it.
          this.props.onCheck({
            stateDotObjWasNull: this.state.obj === null,
            localWasDefined: loadedObject != null,
          });
        }, 0);
      }
      render() {
        return null;
      }
    }

    const result = await new Promise((resolve) => {
      const container = document.createElement("div");
      document.body.appendChild(container);
      const root = createRoot(container);
      root.render(React.createElement(Thing, { onCheck: resolve }));
    });

    expect(result.stateDotObjWasNull).toBe(true);
    expect(result.localWasDefined).toBe(true);
  });
});
