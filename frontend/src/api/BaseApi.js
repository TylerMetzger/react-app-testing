const axios = require('axios')

exports.default = axios.create({
	baseURL: "http://localhost:5000/",
	responseType: "json",
});