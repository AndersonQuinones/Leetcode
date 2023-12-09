function longestCommonPrefix(strs) {
    if (!strs || strs.length === 0) {
        return "";
    }

    // Sort the array to make it easier to find the common prefix
    strs.sort();

    const firstStr = strs[0];
    const lastStr = strs[strs.length - 1];

    let i = 0;
    while (i < firstStr.length && firstStr[i] === lastStr[i]) {
        i++;
    }

    return firstStr.substring(0, i);
};
