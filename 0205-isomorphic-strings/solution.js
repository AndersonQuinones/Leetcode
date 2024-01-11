function isIsomorphic(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const sToTMap = new Map();
    const tToSMap = new Map();

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if (
            (sToTMap.has(charS) && sToTMap.get(charS) !== charT) ||
            (tToSMap.has(charT) && tToSMap.get(charT) !== charS)
        ) {
            return false;
        }

        sToTMap.set(charS, charT);
        tToSMap.set(charT, charS);
    }

    return true;
};
