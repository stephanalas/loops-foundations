const chai = require('chai');
const { expect, assert } = chai

const { mostCommonChar } = require('./forLoop')

describe('forLoops', function () {
  const testStrings = [
    'Hello',
    'best test',
    '1112534',
    '',
  ];
  describe('create function that iterates through string to find most used character', function () {
    it('function exists', function () {
      assert.isOk(mostCommonChar)
    });
    
    it('returns false if parameter string is empty', function() {
      expect(mostCommonChar(testStrings[testStrings.length -1])).to.be.false
    });

    it('returns most common character', function () {
      const [hello, test, numberTest, empty] = testStrings.map(string => {
        return mostCommonChar(string)
      })
      expect(hello).to.equal('l');
      expect(test).to.equal('t');
      expect(numberTest).to.equal('1')
      expect(numberTest).to.be.a('string')
      expect(empty).to.be.false
    })

    it('BONUS: returns an array of mosted used characters if characters have the same occurence amount', function() {
      
      const test1 = 'paddington';
      const test2 = 'rupture';
      const test3 = ',,112245';
      expect(mostCommonChar(test1)).to.be.an('array').that.have.members(['d', 'n']);
      expect(mostCommonChar(test2)).to.be.an('array').that.have.members(['u', 'r']);
      expect(mostCommonChar(test3)).to.be.an('array').that.have.members([',', '1', '2']);

    })
  });
});