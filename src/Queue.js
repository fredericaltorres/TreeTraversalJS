// A simple queue
function Queue() {

    this._queue = [];

    this.enqueue = function(v) {
        this._queue.push(v);
    }
    this.dequeue = function() {
        return this._queue.shift();
    }
    this.isEmpty = function() {
        return this._queue.length === 0;
    }
}

module.exports = Queue;
