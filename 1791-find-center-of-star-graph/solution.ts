var findCenter = function(edges) {
    // Calculate the number of nodes in the star graph (n = number of edges + 1)
    const n = edges.length + 1;

    // Extract the first edge from the edges array to determine the center node
    const [u, v] = edges[0]; 

    // Check if the center node appears in the first or second position of the first edge
    if (u === edges[1][0] || u === edges[1][1]) {
        return u; // The center node is u
    } else {
        return v; // The center node is v
    }
};
