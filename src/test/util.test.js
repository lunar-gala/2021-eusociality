import { describe, it, expect } from "vitest";
import {
  line_number_formatter,
  name_list_formatter,
  is_modified_click,
  calculate_date_difference,
} from "../util";

describe("line_number_formatter", () => {
  it("pads single-digit indexes with a leading zero", () => {
    expect(line_number_formatter(0)).toBe("01");
    expect(line_number_formatter(8)).toBe("09");
  });

  it("leaves two-digit indexes alone (shifted by 1)", () => {
    expect(line_number_formatter(9)).toBe("10");
    expect(line_number_formatter(15)).toBe("16");
  });
});

describe("name_list_formatter", () => {
  it("returns an empty string for an empty list", () => {
    expect(name_list_formatter([])).toBe("");
  });

  it("returns a single React node for a single name", () => {
    const result = name_list_formatter(["Alice"]);
    // Single-name path returns a single <span>, not an array.
    expect(result).not.toBe("");
    expect(Array.isArray(result)).toBe(false);
  });

  it("returns an array of nodes for multiple names", () => {
    const result = name_list_formatter(["Alice", "Bob", "Carol"]);
    expect(Array.isArray(result)).toBe(true);
    // 3 names -> 3 entries (2 with comma wrappers + 1 trailing name).
    expect(result).toHaveLength(3);
  });
});

describe("is_modified_click", () => {
  it("returns false for a plain primary-button click", () => {
    expect(is_modified_click({ button: 0 })).toBe(false);
  });

  it("returns true when any modifier key is held", () => {
    expect(is_modified_click({ metaKey: true })).toBe(true);
    expect(is_modified_click({ ctrlKey: true })).toBe(true);
    expect(is_modified_click({ shiftKey: true })).toBe(true);
    expect(is_modified_click({ altKey: true })).toBe(true);
  });

  it("returns true for non-primary mouse buttons", () => {
    expect(is_modified_click({ button: 1 })).toBe(true); // middle click
    expect(is_modified_click({ button: 2 })).toBe(true); // right click
  });

  it("handles null / undefined safely", () => {
    expect(is_modified_click(null)).toBe(false);
    expect(is_modified_click(undefined)).toBe(false);
  });
});

describe("calculate_date_difference", () => {
  it("reports is_past=true for a date in the past", () => {
    const past = new Date(Date.now() - 1000 * 60);
    expect(calculate_date_difference(past).is_past).toBe(true);
  });

  it("reports is_past=false for a date in the future", () => {
    const future = new Date(Date.now() + 1000 * 60 * 60 * 24);
    const diff = calculate_date_difference(future);
    expect(diff.is_past).toBe(false);
    expect(diff.days).toBeGreaterThanOrEqual(0);
  });
});
