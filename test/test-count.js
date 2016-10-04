/* global require describe it */
var wordCount = require('../routes/count.js').wordCount;
import {
  expect
} from 'chai';

describe('testing wordCount function', () => {
  it('parses correctly', () => {
    expect(wordCount([])).to.deep.equal({});
    expect(wordCount({ 'abc': 0 })).to.deep.equal({'a': 1, 'b': 1, 'c': 1});
  });
  it('will accept an object with multiple keys and combine them', () => {
    expect(wordCount({ 'abc': 0, 'acb': 0 })).to.deep.equal({'a': 2, 'b': 2, 'c': 2});
  });
});
