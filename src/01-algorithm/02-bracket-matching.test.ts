/**
 * @description Bracket matching test
 * @author Kevin
 */

import { bracketMatching } from "./02-bracket-matching";

describe("括号匹配", () => {
  it("正常情况", () => {
    const str = "{a(b[c]d)e}";

    const res = bracketMatching(str);
    expect(res).toBe(true);
  });

  it("不匹配", () => {
    const str = "{a(b";

    const res = bracketMatching(str);
    expect(res).toBe(false);
  });

  it("顺序不一致", () => {
    const str = "{a(b[c)d]e}";

    const res = bracketMatching(str);
    expect(res).toBe(false);
  });

  it("空字符串", () => {
    const res = bracketMatching("");
    expect(res).toBe(true);
  });
});
