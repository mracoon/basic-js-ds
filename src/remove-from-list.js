const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}*/

function removeKFromList(l, k) {

  function deleteFromHead(list, k) {
    if (list.value === k) {
      let result = new ListNode(list.next.value)
      result.next = list.next.next
      return result
    }
    return l
  }

  while (l.value === k) { //удалене из головы
    l = deleteFromHead(l, k)
  }

  let prev = l
  let current = l.next
  let next = l.next.next

  while (current.next !== null) {
    if (current.value === k) {
      prev.next = next
    } else {
      prev = current
    }
    current = next
    next = current.next
  }

  if (current.value === k) { //удаление в хвосте
    prev.next = null
  }

  return l
}

module.exports = {
  removeKFromList
};
