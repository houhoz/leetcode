const l1 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 4,
      next: null,
    },
  },
}
const l2 = {
  value: 1,
  next: {
    value: 3,
    next: {
      value: 4,
      next: null,
    },
  },
}

const mergeTwoLists = function (l1, l2) {
  if (l1 === null) {
    return l2
  }
  if (l2 === null) {
    return l1
  }
  if (l1.value < l2.value) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
}

console.log('mergeTwoLists', mergeTwoLists(l1, l2))
