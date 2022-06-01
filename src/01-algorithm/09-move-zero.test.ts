/**
 * @description 移动 0 到数组末尾 test
 * @author Kevin
 */

import { moveZero1, moveZero2 } from "./09-move-zero";

describe("移动 0 到数组末尾", () => {
  it("正常情况", () => {
    const arr = [1, 0, 3, 4, 0, 0, 0, 8, 9];
    moveZero2(arr);
    expect(arr).toEqual([1, 3, 4, 8, 9, 0, 0, 0, 0]);
  });

  it("没有 0", () => {
    const arr = [1, 3, 4, 5];
    moveZero2(arr);
    expect(arr).toEqual([1, 3, 4, 5]);
  });

  it("全是 0", () => {
    const arr = [0, 0, 0, 0, 0];
    moveZero2(arr);
    expect(arr).toEqual([0, 0, 0, 0, 0]);
  });
});
