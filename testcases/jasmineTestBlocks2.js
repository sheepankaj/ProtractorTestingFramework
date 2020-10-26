const { isMainThread } = require("worker_threads")

describe("First describe block", function()
{
    it("first it block", function()
    {
        console.log("This is first it block in first describe block");
    })
})

describe("Second describe block", function()
{
    it("second it block", function()
    {
        console.log("This is second it block in second describe block");
    })
})

//ignore this block
xdescribe("Third describe block", function()
{
    it("Third it block", function()
    {
        console.log("This is third it block in third describe block");
    })
})

//execute this only
fdescribe("Fourth describe block", function()
{
    it("Fourth it block", function()
    {
        console.log("This is fourth it block in fourth describe block");
    })
})