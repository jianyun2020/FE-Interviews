/**
 * @description 切换字母大小写
 * @author Kevin
 */

/**
 * 切换字母大小写（正则表达式）
 * @param s str
 */
export function switchLetterCase1(s: string): string {
  let res = "";

  const length = s.length;
  if (length === 0) return res;

  const reg1 = /[a-z]/;
  const reg2 = /[A-Z]/;

  for (let i = 0; i < length; i++) {
    const c = s[i];
    if (reg1.test(c)) {
      res += c.toUpperCase();
    } else if (reg2.test(c)) {
      res += c.toLowerCase();
    } else {
      res += c;
    }
  }

  return res;
}

/**
 * 切换字母大小写（ASCII 编码）
 * @param s str
 */
export function switchLetterCase2(s: string): string {
  let res = "";

  const length = s.length;
  if (length === 0) return res;

  for (let i = 0; i < length; i++) {
    const c = s[i];
    const code = c.charCodeAt(0);

    if (code >= 65 && code <= 90) {
      res += c.toLowerCase();
    } else if (code >= 97 && code <= 122) {
      res += c.toUpperCase();
    } else {
      res += c;
    }
  }

  return res;
}

// // 功能测试
// const str = "100aBcD$#xYz";
// console.info(switchLetterCase1(str)); // 100AbCd$#XyZ
// console.info(switchLetterCase2(str)); // 100AbCd$#XyZ

// 性能测试
// const str = '100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz'
// console.time('switchLetterCase1')
// for (let i = 0; i < 10 * 10000; i++) {
//     switchLetterCase1(str)
// }
// console.timeEnd('switchLetterCase1') // switchLetterCase1: 497.3828125 ms

// console.time('switchLetterCase2')
// for (let i = 0; i < 10 * 10000; i++) {
//     switchLetterCase2(str)
// }
// console.timeEnd('switchLetterCase2') // switchLetterCase2: 181.017822265625 ms
