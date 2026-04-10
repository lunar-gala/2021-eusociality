import { describe, it, expect } from "vitest";
import {
  LANDING_PAGE_STATES,
  PATH_TO_STATE,
  STATE_TO_PATH,
  NAV_LINK_INFO,
} from "../constants";

describe("constants — landing page state enum", () => {
  it("each landing page state has a unique string value", () => {
    const values = Object.values(LANDING_PAGE_STATES);
    const unique = new Set(values);
    expect(unique.size).toBe(values.length);
  });

  it("STATE_TO_PATH entries all map back to known states", () => {
    const allStates = new Set(Object.values(LANDING_PAGE_STATES));
    for (const state of Object.keys(STATE_TO_PATH)) {
      expect(allStates.has(state)).toBe(true);
    }
  });

  it("mobile PATH_TO_STATE maps every nav link to a known state", () => {
    const allStates = new Set(Object.values(LANDING_PAGE_STATES));
    for (const navLink of NAV_LINK_INFO) {
      const mapped = PATH_TO_STATE.mobile[navLink.link_name];
      expect(mapped).toBeDefined();
      expect(allStates.has(mapped)).toBe(true);
    }
  });
});
