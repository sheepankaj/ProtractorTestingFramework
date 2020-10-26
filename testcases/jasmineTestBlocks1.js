describe("TestSuite", function()
{
    //It will execute once before all IT block
    beforeAll(function()
    {
        console.log("Launching my App....");
    })
    //It will execute once after all IT block
    afterAll(function()
    {
        console.log("Closing my App....");
    })

    beforeEach(function()
    {
        console.log("This is Login....");
    })
    afterEach(function()
    {
        console.log("This is logout....");
    })

    it("TestCase1", function()
    {
        console.log("This is my testcase1....");
    })
    it("TestCase2", function()
    {
        console.log("This is my testcase2...");
    })
})