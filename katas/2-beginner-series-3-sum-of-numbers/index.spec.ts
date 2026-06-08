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

  it("Huge numbers", () => {
    assert.strictEqual(getSum(-1430000000, 23354252535), 271688105745239080000);
  });
});
