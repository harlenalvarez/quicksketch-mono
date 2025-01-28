import { describe, beforeAll } from 'vitest';
import { RedBlackNode } from './RedBlackNode';
import { RedBlackTree } from './RedBlackTree';

describe('Red black tree', () => {
  let values: number[] = [];
  beforeAll(() => {
    // set values out of order from 1 to 10
    values = [5, 3, 7, 2, 4, 6, 8, 1, 9, 10];
  });

  it('should insert values in order', () => {
    const tree = new RedBlackTree((x: number) => x);

    for (const value of values) {
      tree.rbInsert(value);
    }

    let last = Number.NEGATIVE_INFINITY;
    for (const value of tree) {
      expect(value).toBeGreaterThanOrEqual(last);
      last = value;
    }
  });

  it('should left and right rotate', () => {
    // manually create a tree
    const tree = new RedBlackTree((x: number) => x);
    tree.root = new RedBlackNode(7, 7);
    tree.root.right = new RedBlackNode(11, 11);
    tree.root.right.parent = tree.root;
    let x = tree.root.right;
    x.left = new RedBlackNode(9, 9);
    x.left.parent = x;
    x.right = new RedBlackNode(18, 18);
    x.right.parent = x;

    x = x.right; // 18
    x.left = new RedBlackNode(14, 14);
    x.left.parent = x;
    x.left.left = new RedBlackNode(12, 12);
    x.left.left.parent = x.left;
    x.left.right = new RedBlackNode(17, 17);
    x.left.right.parent = x.left;

    x.right = new RedBlackNode(19, 19);
    x.right.parent = x;
    x.right.right = new RedBlackNode(22, 22);
    x.right.right.parent = x.right;
    x.right.right.left = new RedBlackNode(20, 20);
    x.right.right.left.parent = x.right.right;

    let parent = x.parent;

    expect(parent.value).toBe(11);
    // now lets do a left rotate between 11 and 18
    tree.leftRotate(parent);
    // what should be the new parent be?
    expect(parent.value).toBe(11);
    expect(parent.right.value).toBe(14);

    expect(tree.root.right.value).toBe(18);
    expect(tree.root.right.left.value).toBe(11);
    expect(tree.root.right.left.right.value).toBe(14);

    // now lets do a right rotate between 18 and 11
    tree.rightRotate(x);

    expect(tree.root.right.value).toBe(11);
    expect(tree.root.right.right.value).toBe(18);
  });

  it('should insert balanced tree with black root followed by red nodes', () => {
    // lets add values
    // values 3, 7, 10, 12, 14, 15, 16, 17, 19, 20, 21, 23, 26, 28, 30, 35, 38, 39, 41, 47
    values = [
      16, 20, 23, 28, 17, 14, 10, 47, 15, 12, 19, 30, 26, 38, 21, 3, 7, 35, 39,
      41,
    ];

    // once inserted the root should be 26 if kept balanced

    const tree = new RedBlackTree((x: number) => x);
    for (const value of values) {
      tree.rbInsert(value);
    }

    expect(tree.root.value).toBe(16);

    // check that the tree is balanced by checking the height of the tree
    const queue = [tree.root];

    let level = 0;
    while (queue.length) {
      const currentLength = queue.length;
      for (let i = 0; i < currentLength; i++) {
        const current = queue.shift()!;

        if (current.left !== RedBlackNode.sentinel) {
          // if current is red then the left child should be black
          if (current.color === 'red') {
            expect(current.left.color).toBe('black');
          }
          queue.push(current.left);
        }
        if (current.right !== RedBlackNode.sentinel) {
          // if current is red then the right child should be black
          if (current.color === 'red') {
            expect(current.right.color).toBe('black');
          }
          queue.push(current.right);
        }
      }
      level++;
    }
    // there should be a max of 5 levels
    expect(level).toBeLessThanOrEqual(5);
  });
});
