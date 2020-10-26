describe("Describe block", function()
{
    //execute this it block only
    fit("first it block", function()
    {
        console.log("This is first IT block");
    })
    it("second it block", function()
    {
        console.log("This is second IT block");
    })
    //ignore this IT block only
    xit("third it block", function()
    {
        console.log("This is third IT block");
    })
})