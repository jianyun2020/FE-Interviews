/**
 * @description 连续字符 test
 * @author Kevin
 */

import { findTwoNumbers1 } from "./06-two-numbers-sum";
import { findContinuousChar1, findContinuousChar2 } from "./10-continuous-char";

describe("连续字符和长度", () => {
  it("正常情况", () => {
    const str = "aabbcccddeeee11223";
    const res = findContinuousChar2(str);
    expect(res).toEqual({ char: "e", length: 4 });
  });

  it("空字符串", () => {
    const res = findContinuousChar2("");
    expect(res).toEqual({ char: "", length: 0 });
  });

  it("无连续字符", () => {
    const str = "abc";
    const res = findContinuousChar2(str);
    expect(res).toEqual({ char: "a", length: 1 });
  });

  it("全部是连续字符", () => {
    const str = "aaa";
    const res = findContinuousChar2(str);
    expect(res).toEqual({ char: "a", length: 3 });
  });
});
