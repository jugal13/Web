function Stack() {
  this.stack = [];
}

Stack.prototype.push = function(element) {
  this.stack.push(element);
};

Stack.prototype.pop = function() {
  let element = this.stack.pop();
  return element;
};

Stack.prototype.print = function() {
  if (!this.stack.length) {
    console.log("Empty");
    return;
  }
  let s = [].concat(this.stack);
  s.reverse();
  s.forEach(function println(item) {
    console.log(item);
  });
};

Stack.prototype.return_top = function() {
  return this.stack[this.stack.length - 1];
};

Stack.prototype.clear = function() {
  this.stack = [];
};

module.exports = Stack;
