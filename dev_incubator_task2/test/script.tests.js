"use strict";
/* eslint no-var: "off" */
/* eslint no-unused-vars: "off" */
/* eslint max-len: "off" */

mocha.setup("bdd");

let assert = chai.assert;

describe("Подсчет островов", function() {
  let arr;
  it('считает острова в уграх массива', () => {
    arr = [
      [1, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0, 1]
    ]
    assert.equal( solution(arr), 4);
  });
  it('считает острова в уграх массива', () => {
    arr = [
      [0, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 1, 1, 1, 1, 1, 1, 1, 0]
    ]
    assert.equal( solution(arr), 4);
  });
  it('тестирование направлений вдоль стенок массива', () => {
    arr = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
    let arr2 = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
    assert.equal( solution(arr), 1);
    assert.equal( solution(arr2), 1);
  });
  it('тестирование произвольного массива с островами', () => {
    arr = [
      [1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
      [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
      [0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0],
      [0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1],
      [1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1]
    ]
    assert.equal( solution(arr), 10);
  });
});

mocha.run();