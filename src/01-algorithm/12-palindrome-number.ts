/**
 * @description 对称数
 * @author Kevin
 */


/**
 * 查询 1-max 的所有对称数（数组反转）
 * @param max 最大值
 */
export function findPalindromeNumbers1(max: number): number[] {
  const res: number[] = [];
  if (max <= 0) return res;

  for (let i = 1; i <= max; i++) {
    // 转换为字符串，转换为数组，再反转，比较
    const s = i.toString();
    if (s === s.split('').reverse().join('')) {
      res.push(i);
    }
  }

  return res;
}

/**
 * 查询 1-max 的所有对称数（字符串前后比较）
 * @param max 最大值
 */
export function findPalindromeNumbers2(max: number): number[] {
  const res: number[] = [];
  if (max <= 0) return res;

  for (let i = 1; i <= max; i++) {
    const s = i.toString();
    const length = s.length;

    // 字符串头尾比较
    let falg = true;
    let startIndex = 0; // 字符串开始
    let endIndex = length - 1; // 字符串结束
    while (startIndex < endIndex) {
      if (s[startIndex] !== s[endIndex]) {
        falg = false;
        break;
      } else {
        // 继续比较
        startIndex++;
        endIndex--;
      }
    }

    if (falg) res.push(i);
  }

  return res;
}

/**
 * 查询 1-max 的所有对称数（翻转数字）
 * @param max 最大值
 */
export function findPalindromeNumbers3(max: number): number[] {
  const res: number[] = []
  if (max <= 0) return res

  for (let i = 1; i <= max; i++) {
    let n = i;
    let rev = 0; // 存储反转数

    // 生成反转数
    while (n > 0) {
      rev = rev * 10 + n % 10;
      n = Math.floor(n / 10);
    }

    if (i === rev) res.push(i);
  }

  return res;
}

// 功能测试
// console.info(findPalindromeNumbers1(200))



// 性能测试
// console.time('findPalindromeNumbers1')
// findPalindromeNumbers1(100 * 10000)
// console.timeEnd('findPalindromeNumbers1') // findPalindromeNumbers1: 373.846923828125 ms

// console.time('findPalindromeNumbers2')
// findPalindromeNumbers2(100 * 10000)
// console.timeEnd('findPalindromeNumbers2') // findPalindromeNumbers2: 37.56494140625 ms

// console.time('findPalindromeNumbers3')
// findPalindromeNumbers3(100 * 10000)
// console.timeEnd('findPalindromeNumbers3') // findPalindromeNumbers3: 34.061279296875 ms
