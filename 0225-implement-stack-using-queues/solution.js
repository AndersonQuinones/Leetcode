var MyStack = function() {
    this.queue1 = [];
    this.queue2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    // Move all elements from queue1 to queue2
    while (this.queue1.length > 0) {
        this.queue2.push(this.queue1.shift());
    }

    // Add the new element to the empty queue1
    this.queue1.push(x);

    // Move elements back from queue2 to queue1
    while (this.queue2.length > 0) {
        this.queue1.push(this.queue2.shift());
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    // Pop the top element from queue1
    return this.queue1.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    // Peek the top element from queue1
    return this.queue1[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    // Check if the stack is empty
    return this.queue1.length === 0;
};
