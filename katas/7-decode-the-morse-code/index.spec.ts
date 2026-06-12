import { assert } from "chai";
import { decodeMorse } from "./index";

describe("Tests", () => {
  it("decodes a sentence", () => {
    assert.strictEqual(
      decodeMorse(".... . -.--   .--- ..- -.. ."),
      "HEY JUDE",
    );
  });

  it("decodes a single character", () => {
    assert.strictEqual(decodeMorse(".-"), "A");
  });

  it("ignores extra spaces", () => {
    assert.strictEqual(decodeMorse("   .   .   "), "E E");
  });

  it("decodes service codes", () => {
    assert.strictEqual(decodeMorse("...---..."), "SOS");
  });
});
