// BFS 简单实现

// 无向图
const graph = {
  'A': ['B', 'C'],
  'B': ['A', 'C', 'D'],
  'C': ['A', 'B', 'D', 'E'],
  'D': ['B', 'C', 'E', 'F'],
  'E': ['C', 'D'],
  'F': ['D'],
}

const initCallbacks = (callbacks = {}) => {
  const initiatedCallback = callbacks;
  const stubCallback = () => {};
  const allowTraversalCallback = (
    () => {
      const seen = {};
      return ({ nextVertex, previousVertex, currentVertex }) => {
        if (!previousVertex) {
          seen[currentVertex] = true;
        }
        if (!seen[nextVertex]) {
          seen[nextVertex] = true;
          return true;
        }
        return false;
      };
    }
  )()
  
  initiatedCallback.allowTraversal = callbacks.allowTraversal || allowTraversalCallback;
  initiatedCallback.enterVertex = callbacks.enterVertex || stubCallback;
  initiatedCallback.leaveVertex = callbacks.leaveVertex || stubCallback;

  return initiatedCallback;
}
// 广度优先算法（Breadth First Search）
const BFS = (graph, startVertex, originalCallbacks) => {
  const callbacks = initCallbacks(originalCallbacks);
  const vertexQueue = [];
  let previousVertex = null;

  vertexQueue.push(startVertex);

  while(vertexQueue.length) {
    const currentVertex = vertexQueue.shift();
    // 当前节点进入
    callbacks.enterVertex({ currentVertex, previousVertex });

    // 添加下一阶段的节点
    graph[currentVertex].map(nextVertex => {
      if (callbacks.allowTraversal({ nextVertex, previousVertex, currentVertex })) {
        vertexQueue.push(nextVertex);
      }
    })
    // 当前节点离开
    callbacks.leaveVertex({ currentVertex, previousVertex });
    previousVertex = currentVertex;
  }
}

console.log(BFS(graph, 'A', {
  enterVertex: ({ currentVertex }) => {
    console.log(currentVertex);
  }
}))

