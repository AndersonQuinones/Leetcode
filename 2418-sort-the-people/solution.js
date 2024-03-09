function sortPeople(names, heights) {
    // Create an array of objects where each object contains the name and height
    const people = names.map((name, index) => ({ name, height: heights[index] }));
    
    // Sort the array of objects in descending order based on height
    people.sort((a, b) => b.height - a.height);
    
    // Extract the sorted names from the sorted array of objects
    const sortedNames = people.map(person => person.name);
    
    return sortedNames;
}
