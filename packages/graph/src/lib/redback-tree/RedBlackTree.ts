import { RedBlackNode } from './RedBlackNode';

export class RedBlackTree<T> {
  root: RedBlackNode<T> | null = null;
  getRank: (payload: T) => number;
  constructor(getRank: (payload: T) => number) {
    this.getRank = getRank;
  }

  rbInsert(item: T) {
    const rank = this.getRank(item);
    const itemNode = new RedBlackNode(item, rank);
    if (!this.root) {
      this.root = itemNode;
      itemNode.color = 'black';
      return;
    }
    let x = this.root;
    let y = RedBlackNode.sentinel;
    while (x !== RedBlackNode.sentinel) {
      y = x;
      if (itemNode.key < x.key) {
        x = x.left!;
      }
    }
  }
}
