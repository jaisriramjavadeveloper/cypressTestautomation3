const { expect } = require("chai");

describe('Basic multiplication ', ()=>{
  it('Should multiply 2 numbers ', ()=>{
    const result = 2*2;
    expect(result).to.equal(4);
  })
})