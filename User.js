"use strict"

function up() {
	return new Promise(function(resolve){
		resolve()
	})
}

var people = ["godfrey", "tutu", "warami"]

module.exports = {
	up,
	people
}