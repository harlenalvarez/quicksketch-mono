export class RedBlackNode<T> {
  public static readonly sentinel = new RedBlackNode<any>(null, 0);
  public left: RedBlackNode<T> = RedBlackNode.sentinel;
  public right: RedBlackNode<T> = RedBlackNode.sentinel;
  public parent: RedBlackNode<T> = RedBlackNode.sentinel;
  public value: T | null = null;
  public rank: number = 0;
  public color: 'black' | 'red' = 'black';

  constructor(value: T, rank: number) {
    this.value = value;
    this.rank = rank;
  }
}
