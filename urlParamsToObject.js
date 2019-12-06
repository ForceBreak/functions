function urlParamsToObject() {
    const urlParams = new URLSearchParams(window.location.search.substr(1));
    const entries = urlParams.entries();
    let result = {}
    for(let entry of entries) {
        const [key, value] = entry;
        result[key] = value;
    }

    return result;
}
