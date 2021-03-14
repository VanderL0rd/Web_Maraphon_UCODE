class Node {
    constructor(key) {
        this.key = key;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    add(value) {
        let data = new Node(value);
        if (this.head == null) {
            this.head = data;
        }
        else {
            let cur = this.head;
            while (cur.next != null) {
                cur = cur.next;
            }
            cur.next = data;
        }
    }
    remove(value) {
        console.log(value);
        let cur = this.head;
        let prev = this.head;
        while (cur != null) {
            if (cur.key === value) {
                if (cur.next === this.head.next) {
                    this.head = this.head.next;
                }
                else {
                    prev.next = cur.next;
                }
                break;
            }
            else {
                prev = cur;
                cur = cur.next;
            }
        }
        this.log();
    }
    contains(value) {
        let cur = this.head;
        while (cur != null) {
            if (cur.key == value) {
                return true;
            }
            cur = cur.next;
        }
        return false;
    }
    clear() {
        this.head = null;
    }
    log() {
        let str = "";
        let cur = this.head;
        str += cur.key + ", ";
        while (cur.next != null) {
            cur = cur.next;
            str += cur.key + ", ";
        }
        console.log(str);
    }
    count() {
        let cur = this.head;
        let size = 1;
        while (cur != null) {
            size++;
            cur = cur.next;
        }
        return size;
    }
}
function createLinkedList(arr) {
    let a = new LinkedList();
    for (let ind = 0; ind < arr.length; ind++) {
        a.add(arr[ind]);
    }
    return a;
}