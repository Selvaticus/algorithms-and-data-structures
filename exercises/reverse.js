function reverse(string) {
    if (string) {
        const last = string[string.length - 1];

        return last.concat(reverse(string.slice(0, -1)));
    }
    return "";
}

module.exports = reverse;