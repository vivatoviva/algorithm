const maze = [
  [0, 1, 0, 0, 0,],
  [0, 1, 0, 1, 0,],
  [0, 0, 0, 1, 0,],
  [0, 1, 1, 1, 0,],
  [0, 0, 0, 1, 0,],
]; // 0代表路，1代表墙壁，找出从左上角到右下角的最短路径

// 广度优先（BFS）
const initCallbacks = (callbacks = {}) => {
  const initiatedCallback = callbacks;
  const stubCallback = () => {};
  const allowTraversalCallback = (
    () => {
      const seen = {};
      return ({ nextVertex, previousVertex, currentVertex }) => {
        const { maze_i, maze_j } = nextVertex;
        const vertexKey = `@${maze_i}@${maze_j}@`;
        if(maze_i < 0 || maze_i >= maze.length || maze_j >= maze[0].length || maze_j < 0) {
          return false;
        }
        if (!previousVertex) {
          const { maze_i, maze_j } = currentVertex;
          const currentVertexKey = `@${maze_i}@${maze_j}@`;
          seen[currentVertexKey] = true;
        }
        if (!seen[vertexKey] && maze[maze_i][maze_j] === 0) {
          seen[vertexKey] = true;
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

const BFS = (maze, startVertex, originCallbacks) => {
  const callbacks = initCallbacks(originCallbacks);
  const vertexQueue = [];
  let previousVertex = null;

  vertexQueue.push(startVertex);

  while(vertexQueue.length) {
    const currentVertex = vertexQueue.shift();
    const { maze_i, maze_j } = currentVertex;

    callbacks.enterVertex({ currentVertex, previousVertex });
    if (maze_i === maze.length - 1 && maze_j === maze[0].length - 1) {
      return true;
    }
    const optional = [
      { maze_i , maze_j: maze_j - 1 },
      { maze_i, maze_j: maze_j + 1 },
      { maze_i: maze_i - 1, maze_j },
      { maze_i: maze_i + 1, maze_j},
    ];

    optional.forEach(nextVertex => {
      if (callbacks.allowTraversal({ nextVertex, currentVertex, previousVertex })) {
        vertexQueue.push(nextVertex);
      }
    })
    callbacks.leaveVertex({ currentVertex, previousVertex });
    previousVertex = currentVertex;
  }
  return false;
}
console.log(BFS(maze, { maze_i: 0, maze_j: 0 }));
