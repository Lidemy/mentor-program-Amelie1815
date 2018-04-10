// Implementation of stack and queue
function Stack() {
	let list = [];
	this.push = function(n) {
		list.push(n);
	};
	this.pop = function() {
		return list.pop();
	};
};

function Queue () {
    let list = [];
    this.push = function(n) {
        list.push(n);
    };
    this.pop = function() {
        return list.shift();
    };
};

// These work as well
function Stack() {
    let list = [];
    return {
        push: (n) => list.push(n),
        pop: () => list.pop()
    };
};

function Queue() {
    let list = [];
    return {
        push: (n) => list.push(n),
        pop: () => list.shift()
    };
};

// Test
var stack = new Stack();
stack.push(10);
stack.push(5);
console.log(stack.pop()); // 5
console.log(stack.pop()); // 10

var queue = new Queue();
queue.push(1);
queue.push(2);
console.log(queue.pop()); // 1
console.log(queue.pop()); // 2