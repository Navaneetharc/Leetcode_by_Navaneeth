/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    
    insert(word) {
        let node = this.root;
        for (let ch of word) {
            if (!node.children[ch]) node.children[ch] = new TrieNode();
            node = node.children[ch];
        }
        node.isEnd = true;
    }
    
    getPrefix(word) {
        let node = this.root;
        let prefix = "";
        for (let ch of word) {
            if (!node.children[ch]) break;
            prefix += ch;
            node = node.children[ch];
            if (node.isEnd) return prefix;
        }
        return word;
    }
}

var replaceWords = function(dictionary, sentence) {
    const trie = new Trie();
    for (let root of dictionary) trie.insert(root);
    return sentence
        .split(" ")
        .map(word => trie.getPrefix(word))
        .join(" ");
};
