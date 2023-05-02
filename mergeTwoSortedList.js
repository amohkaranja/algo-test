
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

class ListNode {
    constructor(val, next) {
      this.val = val;
      this.next = next;
    }
  }
  var mergeTwoLists = function(list1, list2) {
    var output = new ListNode();
    var current = output;
    while (list1 != null && list2 != null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    if (list1 != null) {
        current.next = list1;
    } else if (list2 != null) {
        current.next = list2;
    } else {
        current.next = null;
    }
    return output.next;
};
console.log(mergeTwoLists([1,3,4],[1,2,4]));
//Output: [1,1,2,3,4,4]