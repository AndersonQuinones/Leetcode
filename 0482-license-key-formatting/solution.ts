function licenseKeyFormatting(s: string, k: number): string {
    // Remove existing dashes and convert the string to uppercase.
    const cleanString = s.split('-').join('').toUpperCase();
    
    const n = cleanString.length;
    let formattedLicenseKey = '';
    
    // Calculate the length of the first group.
    const firstGroupLength = n % k;
    if (firstGroupLength > 0) {
        // Add the first group with a length less than 'k'.
        formattedLicenseKey += cleanString.substr(0, firstGroupLength);
        if (firstGroupLength < n) {
            // If there are more groups to follow, add a dash.
            formattedLicenseKey += '-';
        }
    }
    
    // Add the remaining groups of size 'k'.
    for (let i = firstGroupLength; i < n; i += k) {
        formattedLicenseKey += cleanString.substr(i, k);
        if (i + k < n) {
            // If there are more groups to follow, add a dash.
            formattedLicenseKey += '-';
        }
    }
    
    return formattedLicenseKey;
}
