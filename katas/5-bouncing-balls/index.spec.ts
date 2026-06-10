import { assert } from "chai";
import { bouncingBall } from "./index";

describe("Fixed Tests", () => {
  it("Basic tests", () => {
    assert.strictEqual(bouncingBall(3.0, 0.66, 1.5), 3);
    assert.strictEqual(bouncingBall(30.0, 0.66, 1.5), 15);
    assert.strictEqual(bouncingBall(30.0, 0.75, 1.5), 21);
    assert.strictEqual(bouncingBall(30, 0.4, 10), 3);
    assert.strictEqual(bouncingBall(15.9, 1, 1.9), -1);
  });
});
