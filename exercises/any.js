function any(elements, callback) {
    const last_index = elements.length - 1;
    // If no more elements to test than no element has the desired property
    if (last_index < 0) {
        return false;
    }

    // If the element has the desire property return true and don't process anymore
    if (callback(elements[last_index])) {
        return true;
    }

    return any(elements.splice(0, -1), callback);
}

module.exports = any;