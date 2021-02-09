const API = require("./BaseApi")

exports.register = async (userData) => {
    let res = await API.default.post("/login/test", userData)
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        return error;
    });
    return res;
}
