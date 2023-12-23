function isPathCrossing(path) {
    // Initial coordinates at the origin
    let x = 0, y = 0;
    // Set to store visited locations
    const visited = new Set(['0,0']);

    // Iterate through each direction in the path
    for (let direction of path) {
        // Update coordinates based on the current direction
        switch (direction) {
            case 'N':
                y++;
                break;
            case 'S':
                y--;
                break;
            case 'E':
                x++;
                break;
            case 'W':
                x--;
                break;
        }

        // Form a string representation of the current location
        const currentLocation = `${x},${y}`;

        // Check if the current location has been visited before
        if (visited.has(currentLocation)) {
            return true; // Path crosses itself
        }

        // Add the current location to the set of visited locations
        visited.add(currentLocation);
    }

    // If the entire path is traversed without crossing, return false
    return false;
}
