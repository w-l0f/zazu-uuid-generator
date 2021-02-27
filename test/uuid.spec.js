const expect = require('chai').expect
const uuid = require('../src/uuid-generator')()

describe('UUID', () => {
  describe('.generate', () => {
    it('generates uuid of length 36', () => {
      return uuid().then((results) => {
        expect(results[0].value.length).to.equal(36)
      })
    })
  })
})
