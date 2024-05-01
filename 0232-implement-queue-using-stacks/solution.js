var MyQueue = function() {
    this.stack1 = [];
    this.stack2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    // If stack2 is empty, move elements from stack1 to stack2
    if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
    }

    // Pop the front element from stack2
    return this.stack2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    // If stack2 is empty, move elements from stack1 to stack2
    if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
    }

    // Peek the front element from stack2 without removing it
    return this.stack2[this.stack2.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack1.length === 0 && this.stack2.length === 0;
};
