function minMovesToSeat(seats,students) {
  seats.sort((a, b) => a - b); // Sort seats array
    students.sort((a, b) => a - b); // Sort students array

    let moves = 0;
    const n = seats.length;

    // Calculate total moves required
    for (let i = 0; i < n; i++) {
        moves += Math.abs(seats[i] - students[i]);
    }

    return moves;  
};
