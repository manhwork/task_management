const Task = require("../models/task.model");

const paginationHelper = require("../../../helpers/pagination");

// [GET] /api/v1/task

module.exports.index = async (req, res) => {
    try {
        const find = {
            deleted: false,
        };

        // lọc theo trạng thái
        if (req.query.status) {
            find.status = req.query.status;
        }

        // sắp xếp theo tiêu chí
        let sort = {
            title: "desc",
        };
        if (req.query.sortKey && req.query.sortValue) {
            sort = {};
            sort[req.query.sortKey] = req.query.sortValue;
        }

        // phân trang
        const totalItems = await Task.countDocuments({
            deleted: false,
        });
        const objectPagination = {
            limitItem: 2,
            currentPage: 1,
        };

        const pagination = paginationHelper(
            objectPagination,
            req.query,
            totalItems
        );

        const task = await Task.find(find)
            .sort(sort)
            .limit(pagination.limitItem)
            .skip(pagination.skip);

        res.json(task);
    } catch (error) {
        res.json("Not fould!");
    }
};

// [GET] /api/v1/task/detail/:id

module.exports.detail = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        const task = await Task.findOne({
            deleted: false,
            _id: id,
        });
        res.json(task);
    } catch (error) {
        res.json("Not fould");
    }
};
