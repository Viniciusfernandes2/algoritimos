import { LinkedList } from './bubble_sort';

const list = new LinkedList<number>();
list.insert(64);
list.insert(34);
list.insert(25);
list.insert(12);
list.insert(22);
list.insert(11);
list.insert(90);

console.log("Antes da ordenação:");
let current = list.head;
while (current) {
    console.log(current.value);
    current = current.next;
}

list.bubbleSortView();

console.log("Depois da ordenação:");
current = list.head;
while (current) {
    console.log(current.value);
    current = current.next;
}
