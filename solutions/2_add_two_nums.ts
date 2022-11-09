class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l1 && !l2) return null
  const num1 = BigInt(traverseAndCollect(l1).reverse().join(""))
  const num2 = BigInt(traverseAndCollect(l2).reverse().join(""))
  const total = (num1 + num2).toString()
  let finalNode = new ListNode()
  let newNode: ListNode | null = finalNode
  if (total.length === 1) {
    return new ListNode(parseInt(total))
  }
  for (let i = total.length - 1; i >= 0; i--) {
    if (i !== 0 && newNode) {
      newNode.val = parseInt(total[i])
      newNode.next = new ListNode(parseInt(total[i - 1]))
    }
    if (newNode) newNode = newNode.next
  }
  return finalNode
}

function traverseAndCollect(l: ListNode): number[] {
  let head: ListNode | null = l
  let vals: number[] = []
  while (head) {
    vals.push(head.val)
    if (head) head = head.next
  }
  return vals
}
