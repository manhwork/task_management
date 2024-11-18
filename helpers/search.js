module.exports = (query) => {
    const objectSearch = {
        keyword: "",
    };
    if (query.keyword) {
        const regex = new RegExp(query.keyword, "gi");
        objectSearch.keyword = regex;
    }
    return objectSearch;
};
