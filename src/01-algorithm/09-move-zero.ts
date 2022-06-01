/**
 * @description 移动 0 到数组末尾
 * @author Kevin
 */

/**
 * 移动 0 到数组的末尾（嵌套循环）
 * @param arr number arr
 */
export function moveZero1(arr: number[]): void {
  const length = arr.length;
  if (length === 0) return;

  let zeroLength = 0;

  // O(n^2)
  for (let i = 0; i < length - zeroLength; i++) {
    if (arr[i] === 0) {
      arr.push(arr[i]);
      arr.splice(i, 1); // 本身就有O(n)
      i--; // 数组截取了一个元素， i 要递减，否则连续 0 就会有错误
      zeroLength++; // 累加 0 的长度
    }
  }
}

/**
 * 移动 0 到数组末尾（双指针）
 * @param arr number arr
 */
export function moveZero2(arr: number[]): void {
  const length = arr.length;
  if (length === 0) return;

  let i;
  let j = -1; // 指向第一个0

  for (i = 0; i < length; i++) {
    if (arr[i] === 0) {
      // 第一个0
      if (j < 0) {
        j = i;
      }
    }

    if (arr[i] !== 0 && j >= 0) {
      // 交换
      const n = arr[i];
      arr[i] = arr[j];
      arr[j] = n;
      j++;
    }
  }
}

// // 功能测试
// const arr = [1, 0, 3, 4, 0, 0, 11, 0];
// moveZero2(arr);
// console.log(arr); // [1, 3, 4, 11, 0, 0, 0, 0]