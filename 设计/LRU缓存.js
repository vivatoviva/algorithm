/**
 * @param {number} capacity 容量
 * @description{O（1）时间复杂度内完成对应的操作}
 * @description {对应的数据结构是map}
 */
var LRUCache = function(capacity) {
    this.capacity = capacity; // 最大容量
    this.currentCapacity = 0; // 当前使用次数
    this.map = {};
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    // 检查缓存中的长度和是否存在这个缓存
    if (!Object.keys(this.map).length || !this.map[key]) {
        return -1;
    }
    if (this.map[key]) {
        const { use_time, value }  = this.map[key];
        this.map[key] = {
            value,
            create_time: + new Date(),
            use_time: use_time + 1,
        }
    }
    return this.map[key].value;
};

/** 
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.currentCapacity > this.capacity && !this.map[key]) {
        // 需要删除最近最少使用的数据
        let minKey = '';
        Object.keys(this.map).forEach(key => {
            const { use_time, create_time } = this.map[key];
            if (!minKey) {
                minKey = key;
            } else {
                if (this.map[minKey].use_time <= use_time) {
                    if (this.map[minKey].use_time == use_time) {
                        // 对比时间
                        if (this.map[minKey].create_time > create_time) {
                            minKey = key
                        }
                    } else {
                        minKey = key;
                    }
                }
            }
        })
        this.map[minKey] = null;
    }
    if (!this.map[key]) {
        this.currentCapacity += 1;
    }
    this.map[key] = {
        value,
        create_time: +new Date(),
        use_time: 1,
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */