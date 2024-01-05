function maxWidthOfVerticalArea(points: number[][]): number {
    // Extract x-coordinates from the points
    const xCoordinates = points.map(point => point[0]);
    
    // Sort the x-coordinates
    xCoordinates.sort((a, b) => a - b);
    
    // Find the maximum difference between consecutive x-coordinates
    let maxWidth = 0;
    for (let i = 0; i < xCoordinates.length - 1; i++) {
        const width = xCoordinates[i + 1] - xCoordinates[i];
        maxWidth = Math.max(maxWidth, width);
    }
    
    return maxWidth;
};
