class Queue {
    constructor() {
        this.items = {};
        this.head = 0;
        this.tail = 0;
    }

    // Adds new data at the end of the queue.
    enqueue(data) {
        this.items[this.tail++] = data;
    }

    // Removes data from the front of the queue and returns it. If the queue is empty, returns undefined.
    dequeue() {
        if (this.isEmpty()) return undefined;
        const result = this.items[this.head];
        delete this.items[this.head++];
        return result;
    }

    // Returns the first data from the front of the queue.
    peek() {
        if (this.isEmpty()) return undefined;
        return this.items[this.head];
    }

    // Returns the first data from the end of the queue.
    rear() {
        if (this.isEmpty()) return undefined;
        return this.items[this.tail - 1];
    }

    // Returns true if queue is empty, false otherwise.
    isEmpty() {
        return  this.head === this.tail;
    }

    // Clears the queue.
    clear() {
        while (this.head < this.tail) delete this.items[this.head++];
        this.head = 0;
        this.tail = 0;
    }

    // Returns the length of the queue.
    length() {
        if (this.tail > this.head) return this.tail - this.head;
        return 0
    }

    // Print the elements present in the queue.
    print() {
        return this.items
    }

    // Returns the queue as the array.
    toArray() {
        let arr = [];
        for(let i=this.head; i<this.tail; i++) {
            arr.push(this.items[i]); 
        }

        return arr
    }
}