let assert = require('chai').assert;
let expect = require('chai').expect;
let TreeTraversal = require('../src/TreeTraversal');

/*
                             F
                         /      \
                         B       G
                       /  \       \ 
                       A  D        I
                         / \      /
                        C   E    H

*/
let root = {
    value : "F",
    right : {
        value: "G",
        right:{
            value:"I",
            left : {
               value:"H" 
            }
        }
    },
    left:{
        value:"B",
        left : {
            value:"A"
        },
        right :{
            value:"D",
            left :{
                value:"C"
            },
            right : {
              value:"E"
            }
        }
    }
};

let print = console.log;

function arrayEqual(a0, a1) {
    return a0.join() == a1.join();
}

describe('TreeTraversal', () => {

    let subject;

    before(() => {
        subject = new TreeTraversal();
    });

    describe('recursively_PreOrderTraversal', () => {

        let expected = ["F","B","A","D","C","E","G","I","H"];
        it(`should return ${expected}`, () => {

            subject.recursively_PreOrderTraversal(root, true);
            expect(arrayEqual(expected, subject.PathResult)).to.be.true;
        });
    });
    describe('recursively_InOrderTraversal', () => {

        let expected = ["A","B","C","D","E","F","G","H","I"];
        it(`should return ${expected}`, () => {

            subject.recursively_InOrderTraversal(root, true);
            expect(arrayEqual(expected, subject.PathResult)).to.be.true;
        });
    });
    describe('recursively_PostOrderTraversal', () => {

        let expected = ["A","C","E","D","B","H","I","G","F"];
        it(`should return ${expected}`, () => {

            subject.recursively_PostOrderTraversal(root, true);
            expect(arrayEqual(expected, subject.PathResult)).to.be.true;
        });
    });
    describe('breadthFirst', () => {

        let expected = ["F","B","G","A","D","I","C","E","H"];
        it(`should return ${expected}`, () => {

            subject.breadthFirst(root, true);
            expect(arrayEqual(expected, subject.PathResult)).to.be.true;
        });
    });
});


