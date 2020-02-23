function Queue() {
  this.queue = [];
}

Queue.prototype.enqueue = function(element) {
  this.queue.push(element);
};

Queue.prototype.dequeue = function() {
  let element = this.queue.shift();
  return element;
};

Queue.prototype.clear = function() {
  this.queue = [];
};

Queue.prototype.print = function() {
  if (!this.queue.length) {
    console.log("Queue is Empty");
    return;
  }
  let result = "";
  this.queue.forEach(function println(item) {
    result += item + " ";
  });
  console.log(result);
};

module.exports = Queue;
