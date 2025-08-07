// Write an algorithm that finds the greatest value within a binary search tree.

function greatestValue(
  node: { value: number; rightChild?: any } | null | undefined
): number | undefined {
  if (!node) return undefined;
  if (!node.rightChild) return node.value;
  return greatestValue(node.rightChild);
}
