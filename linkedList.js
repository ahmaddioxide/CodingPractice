class ListItem {
    val = null;
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    head = null;
    tail = null;
    constructor() {}

     /**
     * @param {number} index
     * @return {number}
     */
    /* 
    int get(int i) will return the value of the ith node (0-indexed). If the index is out of bounds, return -1.
    */
    get(index) {
        if (this.head == null) {
            console.log("List is empty");
            return -1; // Changed from -1 to null
        }
        var temp = this.head;
    
        for (let i = 0; i < index; i++) {
            if (temp.next != null) {
                temp = temp.next;
            } else {
                console.log("Index out of bounds");
                return -1; 
            }
        }
        return temp.val; 
    }

    /* void insertHead(int val) will insert a node with val at the head of the list.*/
    insertHead(val) {
        if (this.head == null) {
          this.head = new ListItem(val);
          this.tail = this.head; 
          console.log("Head Added", this.head);
          return;
        }
        let newNode = new ListItem(val);
        newNode.next = this.head;
        this.head = newNode;
      }

      /* void insertTail(int val) will insert a node with val at the tail of the list.*/
    insertTail(val) {
        if (this.head == null) {
            this.head = new ListItem(val);
            this.tail = this.head;
            return;
        }
        else if(this.head == this.tail){
                this.tail = new ListItem(val);
                this.head.next = this.tail;
            

        } else {
            this.tail.next =  new ListItem(val);
            this.tail = this.tail.next;
        }
    }

    /* will remove the ith node (0-indexed). If the index is out of bounds, return false, otherwise return true.*/   
    remove(index) {
        if (this.head == null) {
            return false;
        }
        if (index == 0) {
            if (this.head == this.tail) {
                this.head = null;
                this.tail = null;
                return true;
            }
            this.head = this.head.next;
            return true;
        }
        var temp = this.head;
        for (let i = 0; i < index - 1; i++) {
            if (temp.next != null) {
                temp = temp.next;
            } else {
                return false;
            }
        }
        if (temp.next != null) { // Add this check
            temp.next = temp.next.next;
        } else {
            return false;
        }
        return true;
    }
    /*int[] getValues() return an array of all the values in the linked list, ordered from head to tail.*/
    getValues() {
        var arr=[];
        var temp = this.head;
        while(temp!=null){ 
            arr.push(temp.val);
            temp=temp.next;
        }
        return arr;
    }
}

var list = new LinkedList();
list.insertHead(10);
list.insertTail(20);
console.log(list.getValues());
console.log(list.get(3));


/**
 * Singly Linked List Node
 */
class ListNode {
    /**
     * @param {number} val - Value of the node
     * @param {ListNode} [nextNode=null] - Reference to the next node
     */
    constructor(val, nextNode = null) {
        this.val = val;
        this.next = nextNode;
    }
}

/**
 * Implementation for Singly Linked List
 */
class LinkedList {
    constructor() {
        /**
         * Initialize the list with a 'dummy' node, which makes
         * removing a node from the beginning of list easier.
         * @type {ListNode}
         */
        this.head = new ListNode(-1);
        this.tail = this.head;
    }

    /**
     * Retrieve value at index
     * @param {number} index - Index to retrieve value from
     * @returns {number} Value at index or -1 if index is out of bounds
     */
    get(index) {
        let curr = this.head.next;
        let i = 0;
        while (curr) {
            if (i === index) {
                return curr.val;
            }
            i++;
            curr = curr.next;
        }
        return -1; // Index out of bounds or list is empty
    }

    /**
     * Insert a new node at the head
     * @param {number} val - Value to insert
     */
    insertHead(val) {
        const newNode = new ListNode(val);
        newNode.next = this.head.next;
        this.head.next = newNode;
        if (!newNode.next) {
            // If list was empty before insertion
            this.tail = newNode;
        }
    }

    /**
     * Insert a new node at the tail
     * @param {number} val - Value to insert
     */
    insertTail(val) {
        this.tail.next = new ListNode(val);
        this.tail = this.tail.next;
    }

    /**
     * Remove node at index
     * @param {number} index - Index to remove node from
     * @returns {boolean} True if removal was successful, false otherwise
     */
    remove(index) {
        let i = 0;
        let curr = this.head;
        while (i < index && curr) {
            i++;
            curr = curr.next;
        }

        // Remove the node ahead of curr
        if (curr && curr.next) {
            if (curr.next === this.tail) {
                this.tail = curr;
            }
            curr.next = curr.next.next;
            return true;
        }
        return false;
    }

    /**
     * Retrieve all values in the list
     * @returns {number[]} An array containing all values in the list
     */
    getValues() {
        let curr = this.head.next;
        const res = [];
        while (curr) {
            res.push(curr.val);
            curr = curr.next;
        }
        return res;
    }
}
