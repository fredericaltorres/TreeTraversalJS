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
    this.showTreeRecursively_PreOrderTraversal = function (t, first) {

        this.init(first);
        this.processNode(t);

        if(t.left) this.showTreeRecursively_PreOrderTraversal(t.left);
        if(t.right) this.showTreeRecursively_PreOrderTraversal(t.right);

        this.end(first);
    }
    this.showTreeRecursively_InOrderTraversal = function (t, first) {

        this.init(first);
        if(t.left) this.showTreeRecursively_InOrderTraversal(t.left);

        this.processNode(t);

        if(t.right) this.showTreeRecursively_InOrderTraversal(t.right);

        this.end(first);
    }
    this.showTreeRecursively_PostOrderTraversal = function(t, first) {

        this.init(first);

        if(t.left) this.showTreeRecursively_PostOrderTraversal(t.left);
        if(t.right) this.showTreeRecursively_PostOrderTraversal(t.right);

        this.processNode(t);
        this.end(first);
    }
    this.showTreeBreadthFirst = function(t) {

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

