module.exports = (objectPagination, query, totalItems) => {
    if (query.page) {
        objectPagination.currentPage = parseInt(query.page);
    }

    if (query.limit) {
        objectPagination.limitItem = query.limit;
    }

    objectPagination.totalItems = totalItems;

    objectPagination.numberPages = Math.ceil(
        totalItems / objectPagination.limitItem
    );

    objectPagination.skip =
        (objectPagination.currentPage - 1) * objectPagination.limitItem;

    return objectPagination;
};
