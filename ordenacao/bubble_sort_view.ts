
import { LinkedList } from './bubble_sort';

const list = new LinkedList<number>();
list.insert(1);
list.insert(5);
list.insert(3);
list.insert(2);
list.insert(4);

console.log("Lista original:");
displayList(list);

console.log("Ordenando lista...");
list.bubbleSort();

console.log("Lista ordenada:");
displayList(list);

function displayList(list: LinkedList<number>) {
    let current = list.head;
    while (current) {
        console.log(current.value);
        current = current.next;
    }
}
