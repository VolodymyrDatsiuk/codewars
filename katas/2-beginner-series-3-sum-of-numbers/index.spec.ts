import { assert } from "chai";
import { getSum } from "./index";

describe("getSum", () => {
  it("Sample Tests", () => {
    assert.strictEqual(getSum(0, -1), -1);
    assert.strictEqual(getSum(0, 1), 1);
  });

  it("Negatives Tests", () => {
    assert.strictEqual(getSum(-143, -23), -10043);
  });
});
