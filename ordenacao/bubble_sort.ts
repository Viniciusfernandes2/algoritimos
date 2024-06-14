class Node<T> {
    value: T;
    next: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

export class LinkedList<T> {
    head: Node<T> | null;
    size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    insert(value: T) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    // Método para converter a lista encadeada para um array
    toArray(): T[] {
        const array: T[] = [];
        let current = this.head;
        while (current) {
            array.push(current.value);
            current = current.next;
        }
        return array;
    }

    // Método para construir uma lista encadeada a partir de um array
    fromArray(array: T[]): void {
        this.head = null;
        this.size = 0;
        for (let value of array) {
            this.insert(value);
        }
    }

    bubbleSort(): LinkedList<T> {
        if (!this.head || !this.head.next) {
            return this;
        }

        let isOrdered = false;
        let lastSwapPosition = this.size - 1;
        const array = this.toArray();

        while (!isOrdered) {
            isOrdered = true;
            let j = 0;
            while (j < lastSwapPosition) {
                if (array[j] > array[j + 1]) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                    isOrdered = false;
                }
                j++;
            }
            lastSwapPosition -= 1;
        }

        this.fromArray(array);
        return this;
    }

    bubbleSortView(): LinkedList<T> {
        if (!this.head || !this.head.next) {
            return this;
        }

        let isOrdered = false;
        let lastSwapPosition = this.size - 1;
        const array = this.toArray();
        let arrayPassCount = 0;

        console.log("Original list: ", ...array);
        while (!isOrdered) {
            isOrdered = true;
            let j = 0;
            while (j < lastSwapPosition) {
                if (array[j] > array[j + 1]) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                    isOrdered = false;
                }
                j++;
            }
            lastSwapPosition -= 1;
            arrayPassCount++;
            console.log(`List after pass #${arrayPassCount}: `, ...array);
            console.log("Last swap position: ", lastSwapPosition);
        }

        this.fromArray(array);
        return this;
    }
}
