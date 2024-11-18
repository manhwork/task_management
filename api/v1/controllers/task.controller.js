const Task = require("../models/task.model");

// [GET] /api/v1/task

module.exports.index = async (req, res) => {
    try {
        const find = {
            deleted: false,
        };

        if (req.query.status) {
            find.status = req.query.status;
        }

        const sort = {};
        if (req.query.sortKey && req.query.sortValue) {
            sort[req.query.sortKey] = req.query.sortValue;
        }

        const task = await Task.find(find).sort(sort);

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
