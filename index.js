"use strict"

const User = require("./User")
const expect = require("chai").expect

describe("User module", () => {
	describe('"up"', () => {
	it ("should export a function", () => {
	expect(User.up).to.be.a("Function")
	})
	});

	describe('"people"', () => {
      it('should return a Promise', () => {
        const usersUpResult = User.up()
        expect(usersUpResult.then).to.be.a("Function")
        expect(usersUpResult.catch).to.be.a("Function")
      })
	});
})


describe("User module", () => {
  describe('"people"', () => {
    it('should export an array', () => {
      expect(User.people).to.be.a('array')
    })
	});
})