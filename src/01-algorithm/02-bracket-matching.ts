/**
 * @description Bracket matching
 * @author Kevin
 */

/**
 * 判断左右括号是否匹配
 * @param left
 * @param right
 * @returns boolean
 */
function isMatch(left: string, right: string): boolean {
  if (left === "{" && right === "}") return true;
  if (left === "(" && right === ")") return true;
  if (left === "[" && right === "]") return true;
  return false;
}

/**
 * 判断括号是否匹配
 * @param str
 * @returns boolean
 */
export function bracketMatching(str: string): boolean {
  const length = str.length;
  if (length === 0) return true;

  const stack = [];

  const leftBrackets = "{([";
  const rightBrackets = "})]";

  for (let i = 0; i < length; i++) {
    const s = str[i];
    if (leftBrackets.includes(s)) {
      // 左括号 压栈
      stack.push(s);
    } else if (rightBrackets.includes(s)) {
      // 右括号，判断栈顶，如果匹配则出栈
      const top = stack[stack.length - 1];
      if (isMatch(top, s)) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}

// 功能测试
// const str = '{a(b[c]d)e}';
// console.log(bracketMatching(str)); // true