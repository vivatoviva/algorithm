/**
 * @param {number} capacity 容量
 * @description{O（1）时间复杂度内完成对应的操作}
 * @description {对应的数据结构是map}
 */
// { key, value, next, last}
var LRUCache = function(capacity) {
    this.maxCapcity = capacity; // 最大容量
    this.head = null; // 指向链表头结点
    this.hashMap = {}; // 作为hashMap的实现
    this.currentCapcity = 0;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.hashMap[key]) {
        return -1;
    }
    // 将链表和hashMap结合起来处理
    const { last , next } = this.hashMap[key];
    if (last) {
        last.next = next;
    }
    if (next) {
        next.last = last;
    }
    this.hashMap[key].last = null;
    this.hashMap[key].next = null;
    if (this.head !== this.hashMap[key]) {
        this.hashMap[key].next = this.head;
        this.head.last = this.hashMap[key];
        this.head = this.hashMap[key];
    }
    return this.hashMap[key].value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.hashMap[key]) {
        // 重新设置
        this.hashMap[key].value = value;
        this.get(key);
        return;
    }
    if (this.currentCapcity >= this.maxCapcity) {
        // 删除老元素
        let head = this.head;
        while(head.next) {
            head = head.next;
        }
        const { key, last, } = head;
        this.hashMap[key] = null;
        // 处理链表
        if (last) {
            last.next = null;
        }
        this.currentCapcity--;
    }
    // 增加新的元素
    this.hashMap[key] = {
        key,
        value,
        next: null,
        last: null,
    }
    this.hashMap[key].next = this.head;
    if (this.head) {
        this.head.last = this.hashMap[key];
    }
    this.head = this.hashMap[key];
    this.currentCapcity++;
};


const cache = new LRUCache( 2 /* 缓存容量 */ );

cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));       // 返回  1

cache.put(3,3)
// cache.put(3, 3);    // 该操作会使得密钥 2 作废
// cache.get(2);       // 返回 -1 (未找到)
console.log(cache.get(2));
cache.put(4, 4);    // 该操作会使得密钥 1 作废
console.log(cache.get(1));       // 返回 -1 (未找到)
// cache.get(3);       // 返回  3
// cache.get(4);       // 返回  4
console.log(cache.get(3))
console.log(cache.get(4));
cache.put(1);
cache.put(2,2);
cache.put(3,3);
console.log(cache.get(2))


class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
    }

    get(key) {
        let val = this.map.get(key);
        if (typeof val === 'undefined') { return -1 };
        this.map.delete(key);
        this.map.set(key, val);
        return val;
    }

    put(key, value) {
        if (this.map.has(key)) { 
            this.map.delete(key);
        }
        this.map.set(key, value);
        let keys = this.map.keys();
        while (this.map.size > this.capacity) { this.map.delete(keys.next().value) };
    }
}


let LRUCache = function(capacity) {
    this.cacheSize = capacity;
    // 缓存计数器
    this.cacheIndex = 0;
    this.cacheSet = new Set();
    // 内存头节点
    this.head = null;
    // 缓存尾节点
    this.cacheShift = null;
    this.memory = {};
};

LRUCache.prototype.get = function(key) {
    let val;
    const { cacheSet, memory } = this;
    if (cacheSet.has(key)) {
        val = memory[key].value;
        // get 最后一个节点
        if (memory[key].next == null) {
            return val;
        }
        if (memory.cacheShift === memory[key] && memory.cacheShift.next) {
            memory.cacheShift = memory.cacheShift.next;
        }
        this.memorySort(key);
    } else {
        val = -1;
        console.log(-1);
    }
    
    return val;
};

LRUCache.prototype.put = function(key, value) {
    const { cacheSet, memory } = this;

    if (this.cacheIndex < this.cacheSize) {
        !cacheSet.has(key) && this.cacheIndex++;
        cacheSet.add(key)
    } else {
        if (!cacheSet.has(key)) {
            cacheSet.delete(memory.cacheShift.key);
            memory.cacheShift.next && (memory.cacheShift = memory.cacheShift.next);
            cacheSet.add(key);
        }
    }

    // 内存中有值
    if (memory.head) {
        // 内存中不存在该节点
        if (!memory[key]) {
            memory[key] = {
                prev: memory.head,
                next: null
            }
            memory.head.next = memory[key];
            memory.head = memory[key];
        } else { // 内存中存在节点
            if (memory.cacheShift === memory[key] && memory.cacheShift.next) {
                memory.cacheShift = memory[key].next;
            }
            this.memorySort(key);
        }
    } else {  // 内存为空，该节点为第一个节点
        memory[key] = {
            prev: null,
            next: null
        };
        memory.cacheShift = memory.head = memory[key];
    }

    memory[key].key = key;
    memory[key].value = value;
};

LRUCache.prototype.memorySort = function(key) {
    const { memory } = this;
    // get 的不是最后一个节点
    if (memory[key].next != null) {
        if (memory[key].prev != null) {
            memory[key].prev.next = memory[key].next;
        } else {    // 第一个节点
            memory[key].next.prev = null;
        }
        memory[key].next.prev = memory[key].prev;
        memory[key].prev = memory.head;
        memory[key].next = null;
        memory.head.next = memory[key];
        memory.head = memory[key];
    }
}

