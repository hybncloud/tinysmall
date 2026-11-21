export const handelNodeClick =
  ({ state }) =>
  (node) => {
    if (node.disabled) return

    state.showNodes = !state.showNodes
    state.activeNodeId = node.id
  }
