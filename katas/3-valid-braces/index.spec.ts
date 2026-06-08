import { assert } from "chai";
import { validBraces } from "./index";

describe("solution", () => {
  it("should handle basic tests", () => {
    assert.strictEqual(validBraces("()"), true);
    assert.strictEqual(validBraces("[(])"), false);
    assert.strictEqual(validBraces("[({})](]"), false);
    assert.strictEqual(validBraces(")[({})]()"), false);
  });
});
