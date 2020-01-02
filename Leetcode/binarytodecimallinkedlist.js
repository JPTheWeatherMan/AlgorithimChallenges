const getDecimalValue = function(head) {
  let a = ""
  let iter = head
  while(iter != null){
      a += iter.val
      iter = iter.next
  }
  return parseInt(a, 2)
};