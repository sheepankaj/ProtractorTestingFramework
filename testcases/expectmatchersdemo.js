describe("expectdemo", function()
{
    it("expect testcase1",function()
    {
        let x=100;
        expect(x).toBe(100);
        expect(x).not.toBe(200);
        expect(x).toBeGreaterThan(50);
        expect(x).toBeLessThan(200);
        expect(x).not.toBeNaN();
    })
    it("expect testcase2",function()
    {
        let x="India is great";
        expect(x).toEqual('India is great');
        expect(x).not.toEqual('India is not a continent');
    })
    it("expect testcase3",function()
    {
        let x=[100,200,300];
        //expect(x).toBe([100,200,300]); //failed
        expect(x).toEqual([100,200,300]);
        expect(x).toContain(200);
    })
    it("expect testcase4",function()
    {
        let x=[100,200,300];
        y=x;
        expect(x).toBe(y);
    })
    it('expect Testcase5', function() {
       
        browser.get('http://www.angularjs.org');
        browser.manage().window().maximize();
        expect(browser.getTitle()).toBe('AngularJS — Superheroic JavaScript MVW Framework');
        expect(browser.getTitle()).toContain("JavaScript MVW Framework");
    });
})