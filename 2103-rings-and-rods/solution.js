var countPoints = function(rings) {
    const map = new Map(); // Create a map to store positions for each color
    const count = new Map(); // This count map and counter variable seem unused and can be removed
    let counter = 0; // Unused counter variable

    // Loop through the input array to populate the map with colors and positions
    for (let i = 0; i < rings.length; i += 2) {
        const color = rings[i]; // Extract the color from the array
        const position = parseInt(rings[i + 1]); // Extract the position from the array and convert to integer

        if (!map.has(color)) {
            map.set(color, []); // Initialize an empty array for each color in the map if not already present
        }

        map.get(color).push(position); // Add the position to the array of the corresponding color
    }
   
    // Intersection of positions for 'B' and 'G' colors
    let array1 = intersetArr(map.get('B') ?? [], map.get('G') ?? []);    

    // Intersection of positions for 'array1' and 'R' colors, then return the number of unique positions
    return new Set(intersetArr(array1, map.get('R') ?? [])).size;
};

// Function to find the intersection of two arrays (sets)
function intersetArr(arr1, arr2) {
    let array = []; // Initialize an array to store the intersection
    let set = new Set(arr2); // Create a set from the second array for efficient lookups
    
    // Loop through the elements of the first array
    for (const num of arr1) {
        if (set.has(num)) {
            array.push(num); // If the element exists in the set, add it to the intersection array
        }
    }

    return array; // Return the array containing the intersection
}
