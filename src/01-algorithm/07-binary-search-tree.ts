/**
 * @description 二叉搜索树
 * @author Kevin
 */

export interface ITreeNode {
  value: number;
  left: ITreeNode | null;
  right: ITreeNode | null;
}

const arr: number[] = [];

/**
 * 二叉树前序遍历
 * @param node tree node
 * @returns
 */
function preOrderTraverse(node: ITreeNode | null) {
  if (node == null) return;
  arr.push(node.value);
  preOrderTraverse(node.left);
  preOrderTraverse(node.right);
}

/**
 * 二叉树中序遍历
 * @param node tree node
 * @returns
 */
function inOrderTraverse(node: ITreeNode | null) {
  if (node == null) return;
  inOrderTraverse(node.left);
  arr.push(node.value);
  inOrderTraverse(node.right);
}

/**
 * 二叉树后序遍历
 * @param node tree node
 * @returns
 */
function postOrderTraverse(node: ITreeNode | null) {
  if (node == null) return;
  preOrderTraverse(node.left);
  preOrderTraverse(node.right);
  arr.push(node.value);
}

/**
 * 寻找BST里的第K小值
 * @param node tree node
 * @param k 第几个值
 * @returns
 */
export function getKthValue(node: ITreeNode, k: number): number | null {
  inOrderTraverse(node);
  return arr[k - 1] || null;
}

const bst: ITreeNode = {
  value: 5,
  left: {
    value: 3,
    left: {
      value: 2,
      left: null,
      right: null,
    },
    right: {
      value: 4,
      left: null,
      right: null,
    },
  },
  right: {
    value: 7,
    left: {
      value: 6,
      left: null,
      right: null,
    },
    right: {
      value: 8,
      left: null,
      right: null,
    },
  },
};

// preOrderTraverse(bst);
// console.log(arr); // [5, 3, 2, 4, 7, 6, 8]
// inOrderTraverse(bst);
// console.log(arr); // [2, 3, 4, 5, 6, 7, 8]
// postOrderTraverse(bst);
// console.log(arr); // [3, 2, 4, 7, 6, 8, 5]

// console.log(getKthValue(bst, 3)); // 4
