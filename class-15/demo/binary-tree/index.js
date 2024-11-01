'use strict';

class BinaryTree {

    constructor(root=null) {
        this.root = root;
    }

    // Time - O(n) where n is going to be the number of nodes
    // Space - o(h) where h is the height of the tree

    // Root - Left - Right
    preOrder() {
        let results = [];
        let _traverse = (node) => {
            results.push(node.value);
            if(node.left) _traverse(node.left);
            if(node.right) _traverse(node.right);
        }
        _traverse(this.root);
        return results;
    }


    // Time - O(n) where n is going to be the number of nodes
    // Space - o(h) where h is the height of the tree

    // Left - Root - Right
    inOrder() {
        let results = [];
        
        let _traverse = (node)=> {
            if (node.left) _traverse(node.left);
            results.push(node.value);
            if (node.right) _traverse(node.right);
        }

        _traverse(this.root);

        return results;
    }


    // Time - O(n) where n is going to be the number of nodes
    // Space - o(h) where h is the height of the tree

    // Left - Right - Root
    postOrder() {
        let results = [];
        
        let _traverse = (node) => {
            if(node.left) _traverse(node.left);
            if(node.right) _traverse(node.right);
            results.push(node.value);
        }

        _traverse(this.root);

        return results;
    }

}

module.exports = BinaryTree;