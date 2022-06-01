/**
 * @description 两数之和
 * @author Kevin
 */

/**
 * 寻找和为n的两个数（嵌套循环）
 * @param arr 
 * @param n 
 * @returns 
 */
export function findTwoNumbers1(arr: number[], n: number): number[] {
  const res: number[] = [];

  const length = arr.length;
  if (length === 0) return res;

  // O(n^2)
  for (let i = 0; i < length - 1; i++) {
    const n1 = arr[i];
    let flag = false; // 是否得到了结果

    for (let j = i + 1; j < length; j++) {
      const n2 = arr[j];
      
      if (n1 + n2 === n) {
        res.push(n1);
        res.push(n2);
        flag = true;
        break;
      }
    }

    if (flag) break;
  }

  return res;
}

/**
 * 查找和为n的两个数（双指针）
 * @param arr 
 * @param n 
 * @returns 
 */
export function findTwoNumbers2(arr: number[], n: number) {
  const res: number[] = [];

  const length = arr.length;
  if (length === 0) return res;

  let i = 0; // 头
  let j = length - 1; // 尾

  // O(n)
  while(i < j) {
    const n1 = arr[i];
    const n2 = arr[j];
    const sum = n1 + n2;

    if (sum > n) {
      // sum大于n，则j向前移动
      j--;
    } else if (sum < n) {
      // sum小于n，则i向后移动
      i++;
    } else {
      // 相等
      res.push(n1);
      res.push(n2);
      break;
    }
  }

  return res;
}


// 功能测试
// const arr = [1, 2,1, 2,1, 2,1, 2,1, 2,1, 2,1, 2,1, 2,1, 2,1, 2,1, 2,1, 2,1, 2,1, 2, 4, 7, 11, 15]
// console.log(findTwoNumbers2(arr, 15)); // [4, 11]

// console.time('findTwoNumbers1')
// for (let i = 0; i < 100 * 10000; i++) {
//     findTwoNumbers1(arr, 15)
// }
// console.timeEnd('findTwoNumbers1') // findTwoNumbers1: 490.584228515625 ms

// console.time('findTwoNumbers2')
// for (let i = 0; i < 100 * 10000; i++) {
//     findTwoNumbers2(arr, 15)
// }
// console.timeEnd('findTwoNumbers2') // findTwoNumbers2: 72.509033203125 ms
