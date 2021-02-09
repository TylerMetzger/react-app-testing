const axios = require('axios');

exports.getRandomUser = async () => {
    let res = await axios.get("https://randomuser.me/api")
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        })
    return res;
}