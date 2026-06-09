import { assert } from "chai";
import { alphabetPosition } from "./index";

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(
      alphabetPosition("The sunset sets at twelve o' clock."),
      "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11",
    );
    assert.strictEqual(
      alphabetPosition("The narwhal bacons at midnight."),
      "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20",
    );
  });

  it("ignores non-letter symbols after z in ASCII order", () => {
    assert.strictEqual(alphabetPosition("#/.l|v.)"), "12 22");
    assert.strictEqual(alphabetPosition(":tz)|wcz"), "20 26 23 3 26");
    assert.strictEqual(alphabetPosition("m$w/}+c@"), "13 23 3");
  });
});
