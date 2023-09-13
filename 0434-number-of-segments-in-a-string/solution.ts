function countSegments(s: string): number {
    // Use a regular expression to split the string into segments
    const segments = s.split(/\s+/);
    
    // Filter out empty segments (if any)
    const nonEmptySegments = segments.filter(segment => segment !== '');

    // Return the count of non-empty segments
    return nonEmptySegments.length;
};
