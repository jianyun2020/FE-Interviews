/**
 * @description 快速排序
 * @author Kevin
 */

/**
 * 快速排序（使用 splice）
 * @param arr number arr
 */
export function quickSort1(arr: number[]): number[] {
  const length = arr.length;
  if (length === 0) return arr;

  const midIndex = Math.floor(length / 2);
  const midValue = arr.splice(midIndex, 1)[0];

  const left: number[] = [];
  const right: number[] = [];

  // 注意： 这里不能直接用length，而是用arr.length。因为arr已经被splice给修改了
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];
    if (n < midValue) {
      // 小于 midValue ，则放在 left
      left.push(n);
    } else {
      // 大于 midValue， 则放在 right
      right.push(n);
    }
  }

  return quickSort1(left).concat([midValue], quickSort1(right));
}

/**
 * 快速排序（使用 slice）
 * @param arr number arr
 */
export function quickSort2(arr: number[]): number[] {
  const length = arr.length;
  if (length === 0) return arr;

  const midIndex = Math.floor(length / 2);
  const midValue = arr.slice(midIndex, midIndex + 1)[0];

  const left: number[] = [];
  const right: number[] = [];

  // 注意： 这里不能直接用length，而是用arr.length。因为arr已经被splice给修改了
  for (let i = 0; i < arr.length; i++) {
    if (i !== midIndex) {
      const n = arr[i];
      if (n < midValue) {
        // 小于 midValue ，则放在 left
        left.push(n);
      } else {
        // 大于 midValue， 则放在 right
        right.push(n);
      }
    }
  }

  return quickSort1(left).concat([midValue], quickSort1(right));
}

// 功能测试
// const arr1 = [1, 6, 2, 7, 3, 8, 4, 9, 5];
// console.info(quickSort2(arr1)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]


// 性能测试
// const arr1 = []
// for (let i = 0; i < 10 * 10000; i++) {
//     arr1.push(Math.floor(Math.random() * 1000))
// }
// console.time('quickSort1')
// quickSort1(arr1)
// console.timeEnd('quickSort1') // quickSort1: 93.406982421875 ms

// const arr2 = []
// for (let i = 0; i < 10 * 10000; i++) {
//     arr2.push(Math.floor(Math.random() * 1000))
// }
// console.time('quickSort2')
// quickSort2(arr2)
// console.timeEnd('quickSort2') // quickSort2: 81.572021484375 ms

// // 单独比较 splice 和 slice
// const arr1 = []
// for (let i = 0; i < 10 * 10000; i++) {
//     arr1.push(Math.floor(Math.random() * 1000))
// }
// console.time('splice')
// arr1.splice(5 * 10000, 1)
// console.timeEnd('splice')
// const arr2 = []
// for (let i = 0; i < 10 * 10000; i++) {
//     arr2.push(Math.floor(Math.random() * 1000))
// }
// console.time('slice')
// arr2.slice(5 * 10000, 5 * 10000 + 1)
// console.timeEnd('slice')
