import { RedBlackNode } from './RedBlackNode';

export class RedBlackTree<T> {
  root: RedBlackNode<T> = RedBlackNode.sentinel;
  getRank: (payload: T) => number;

  constructor(getRank: (payload: T) => number) {
    this.getRank = getRank;
  }

  rbInsert(item: T) {
    const rank = this.getRank(item);
    const itemNode = new RedBlackNode(item, rank);
    let x = this.root;
    let y = RedBlackNode.sentinel;
    while (x !== RedBlackNode.sentinel) {
      y = x;
      if (itemNode.rank < x.rank) {
        x = x.left;
      } else {
        x = x.right;
      }
    }
    itemNode.parent = y;
    if (y === RedBlackNode.sentinel) {
      this.root = itemNode;
    } else if (itemNode.rank < y.rank) {
      y.left = itemNode;
    } else {
      y.right = itemNode;
    }

    itemNode.left = RedBlackNode.sentinel;
    itemNode.right = RedBlackNode.sentinel;
    itemNode.color = 'red';

    this.rbInsertFixup(itemNode);
  }

  // iterate over the tree in order
  *[Symbol.iterator]() {
    const stack: Array<RedBlackNode<T>> = [];
    let current = this.root;
    while (stack.length || current !== RedBlackNode.sentinel) {
      while (current !== RedBlackNode.sentinel) {
        stack.push(current);
        current = current.left;
      }

      while (stack.length) {
        current = stack.pop()!;
        yield current.value!;
        current = current.right;
      }
    }
  }

  leftRotate(x: RedBlackNode<T>) {
    const y = x.right;
    x.right = y.left;
    if (y.left !== RedBlackNode.sentinel) {
      y.left.parent = x;
    }
    y.parent = x.parent;
    if (x.parent === RedBlackNode.sentinel) {
      this.root = y;
    } else if (x === x.parent.left) {
      x.parent.left = y;
    } else {
      x.parent.right = y;
    }
    y.left = x;
    x.parent = y;
  }

  rightRotate(y: RedBlackNode<T>) {
    const x = y.left;
    y.left = x.right;
    if (x.right !== RedBlackNode.sentinel) {
      x.right.parent = y;
    }

    x.parent = y.parent;

    if (y.parent === RedBlackNode.sentinel) {
      this.root = x;
    } else if (y === y.parent.right) {
      y.parent.right = x;
    } else {
      y.parent.left = x;
    }
    x.right = y;
    y.parent = x;
  }

  private rbInsertFixup(insertNode: RedBlackNode<T>) {
    // parent most be black, so we fix
    while (insertNode.parent.color === 'red') {
      if (insertNode.parent === insertNode.parent.parent.left) {
        const y = insertNode.parent.parent.right;
        if (y.color === 'red') {
          insertNode.parent.color = 'black';
          y.color = 'black';
          insertNode.parent.parent.color = 'red';
          insertNode = insertNode.parent.parent;
        } else {
          if (insertNode === insertNode.parent.right) {
            insertNode = insertNode.parent;
            this.leftRotate(insertNode);
          }
          insertNode.parent.color = 'black';
          insertNode.parent.parent.color = 'red';
          const parentOfParent = insertNode.parent.parent;
          this.rightRotate(insertNode.parent.parent);
        }
      } else {
        const y = insertNode.parent.parent.left;
        if (y.color === 'red') {
          insertNode.parent.color = 'black';
          y.color = 'black';
          insertNode.parent.parent.color = 'red';
          insertNode = insertNode.parent.parent;
        } else {
          if (insertNode === insertNode.parent.left) {
            insertNode = insertNode.parent;
            this.rightRotate(insertNode);
          }
          insertNode.parent.color = 'black';
          insertNode.parent.parent.color = 'red';
          const parentOfParent = insertNode.parent.parent;
          this.leftRotate(insertNode.parent.parent);
        }
      }
    }
    this.root.color = 'black';
  }
}
