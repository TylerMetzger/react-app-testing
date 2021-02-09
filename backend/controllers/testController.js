const testDAO = require("../daos/testDAO.js");
const catchErrors = require("../util/catchErrors.js");

exports.create = async (req, res) => {
    catchErrors(res, async () => {
        return testDAO.registerUser(req.body);
    })
}