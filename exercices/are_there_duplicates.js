function areThereDuplicates(...args) {
    // If no args then there can not be duplicates
    if (args.length === 0) {
        return false;
    }

    // Initialise structure to hold seen before values
    const seen = {}

    for (let index = 0; index < args.length; index++) {
        const elem = args[index];
        // If seen before, then there are duplicates
        if (seen[elem]) {
            return true;
        }
        // If not seen before, mark it as seen now
        seen[elem] = true;
    }

    // If we got to this point then no duplciates were found
    return false;
}

module.exports = areThereDuplicates