const add=require('./Add')
describe("addition",()=>{
  it("this is addition",()=>{
    expect(add(100000,19999)).toBe(119999)
})
});
const obj=require ('./Obj)
describe("object",()=>{
  it('Run',()=>{
     let data=obj()
     expect (data).toEqual({Name:"vega",Age:5})   
})
})
