function getNextValidCharIndex(str: string, index: number): number {
    let backspaceCount = 0;

    while (index >= 0) {
        if (str[index] === '#') {
            backspaceCount++;
            index--;
        } else if (backspaceCount > 0) {
            backspaceCount--;
            index--;
        } else {
            break;
        }
    }

    return index;
}


function backspaceCompare(s: string, t: string): boolean {
    let i = s.length - 1;
    let j = t.length - 1;

    while (i >= 0 || j >= 0) {
        i = getNextValidCharIndex(s, i);
        j = getNextValidCharIndex(t, j);

        if (i < 0 && j < 0) {
            return true; // Both strings are empty.
        }
        if (i < 0 || j < 0 || s[i] !== t[j]) {
            return false; // Mismatch found.
        }

        i--;
        j--;
    }

    return true; // Strings are equal.
}
