import { stdout } from "process";

function createNode(data) {
  let node = {
    data: data,
    next: null,
  };

  return node;
}

function createLinkedList() {
  let list = {
    first: null,
    last: null,
    size: 0,
  };

  return list;
}

function append(list, node) {
  if (list.size == 0) {
    list.first = node;
    list.last = node;
  } else if (list.size == 1) {
    list.first.next = node;
    list.last = node;
  } else {
    list.last.next = node;
    list.last = node;
  }
  list.size++;

  return list;
}

function prepend(list, node) {
  if (list.size == 0) {
    append(list, node);
    return;
  } else {
    node.next = list.first;
    list.first = node;
  }
  list.size++;

  return list;
}

function insert(list, node, index) {
  if (index < 0 || index >= list.size) {
    return null;
  }

  let iterator = 1;
  let currNode = list.first;

  while (iterator < index) {
    currNode = currNode.next;
    iterator++;
  }

  node.next = currNode.next;
  currNode.next = node;
  list.size++;
}

function printList(list) {
  let currNode = list.first;

  stdout.write(`${currNode.data} `);
  while (currNode.next != null) {
    currNode = currNode.next;
    stdout.write(`${currNode.data} `);
  }
}

(function main() {
  const node1 = createNode(1);
  const node2 = createNode(2);
  const node3 = createNode(3);
  const node4 = createNode(4);
  let list = createLinkedList();

  append(list, node1);
  prepend(list, node2);
  prepend(list, node3);
  insert(list, node4, 2);
  printList(list);
  stdout.write("\n");
})();
