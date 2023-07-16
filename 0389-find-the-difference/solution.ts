var createMap = function (string) {
    const map = new Map();

    for (let char of string) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    return map;
}

var findTheDifference = function(s, t) {
    const tMap = createMap(t);
    const sMap = createMap(s);

    for (let [key,value] of tMap) {
        if (sMap.get(key) !== value) {
            return key;
        }
    }
};
