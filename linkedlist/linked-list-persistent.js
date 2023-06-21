function createNode(data) {
  const node = {
    data: data,
    next: null,
  };
  return node;
}

function createLinkedList() {
  const list = {
    head: null,
  };

  return list;
}

function addNode(list, node, index) {
  if ((list.heads.isEmpty() && index > 0) || index < 0) {
    console.log("invalid index");
    return;
  }

  if (list.head === null) {
    list.head = node;
    return list;
  }

  let iterator = list.head;
  let iteratorIndex = 0;
  while (iteratorIndex < index) {
    iterator = iterator.next;
  }
}
