const add=require('./Add')
describe("addition",()=>{
  it("this is addition",()=>{
    expect(add(100000,19999)).toBe(119999)
})
});
