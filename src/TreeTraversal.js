let Queue = require('./Queue');

let print = console.log;

function TreeTraversal() {

    this.PathResult = [];

    this.init = function(first) {

        if(first) this.PathResult = [];
    }
    this.end = function(first) {

        if(first) print(`Path:${JSON.stringify(this.PathResult)}`);
    }
    this.processNode = function(node) {

        this.PathResult.push(node.value);
    }
    this.recursively_PreOrderTraversal = function (t, first) {

        this.init(first);
        this.processNode(t);

        if(t.left) this.recursively_PreOrderTraversal(t.left);
        if(t.right) this.recursively_PreOrderTraversal(t.right);

        this.end(first);
    }
    this.recursively_InOrderTraversal = function (t, first) {

        this.init(first);
        if(t.left) this.recursively_InOrderTraversal(t.left);

        this.processNode(t);

        if(t.right) this.recursively_InOrderTraversal(t.right);

        this.end(first);
    }
    this.recursively_PostOrderTraversal = function(t, first) {

        this.init(first);

        if(t.left) this.recursively_PostOrderTraversal(t.left);
        if(t.right) this.recursively_PostOrderTraversal(t.right);

        this.processNode(t);
        this.end(first);
    }
    this.breadthFirst = function(t) {

        this.init(true);
        let q = new Queue();
        q.enqueue(t);

        while(!q.isEmpty()) {

            let node = q.dequeue();

            this.processNode(node);

            if(node.left) q.enqueue(node.left);
            if(node.right) q.enqueue(node.right);
        }
        this.end(true);
    }
}

module.exports = TreeTraversal;

