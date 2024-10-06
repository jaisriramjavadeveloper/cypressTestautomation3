const { expect } = require("chai");
const { describe } = require("mocha");

describe("Dialog message", ()=>{
   it('Should say dialog message ',()=>{
    const message = "Record saved successfully";
    expect(message).to.equal("Record saved successfully");
   })
});