const NOT_LETTER_REGEX = /[^a-zA-Z ]/g;
const WHITESPACE_CHARACTER_REGEX = /\s+/;
const pickOnlyWords = data => data.replace(NOT_LETTER_REGEX, " ").split(WHITESPACE_CHARACTER_REGEX).filter((word) => word !== '').sort();
const getCounts = arr => {
    const hashMap = new Map();
    for (const val of arr) {
        if (!hashMap.get(val)) {
            hashMap.set(val, 1);
        } else {
            const num = hashMap.get(val);
            hashMap.set(val, num + 1);
        }
    }
    return hashMap;
}

module.exports = {
    pickOnlyWords,
    getCounts
};
