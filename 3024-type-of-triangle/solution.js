const triangleType = (nums) => {
    // Check if the given sides can form a triangle
    const [a, b, c] = nums;
    if (a + b > c && a + c > b && b + c > a) {
        // Initialize counts for each side length
        const countMap = new Map();
        for (const num of nums) {
            countMap.set(num, (countMap.get(num) || 0) + 1);
        }

        // Count the number of distinct side lengths
        const distinctLengths = countMap.size;

        // If there are three distinct side lengths, it's a scalene triangle
        if (distinctLengths === 3) {
            return "scalene";
        }

        // If there are two distinct side lengths, it's either equilateral or isosceles
        if (distinctLengths === 2) {
            return "isosceles";
        }

        // If there's only one distinct side length, it's an equilateral triangle
        return "equilateral";
    } else {
        // If the sides cannot form a triangle, return "none"
        return "none";
    }
};
