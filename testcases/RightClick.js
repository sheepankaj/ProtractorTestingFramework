describe("RightClick TestSuite", function(){
    it("Right Click Test case", function(){
        browser.waitForAngularEnabled(false);
        browser.get("https://swisnl.github.io/jQuery-contextMenu/demo.html");
        browser.manage().window().maximize();
        browser.sleep(2000);
        console.log("Open the website successfully");

        var rightclickbutton=element(by.className("context-menu-one btn btn-neutral"));
        browser.actions().click(rightclickbutton,protractor.Button.RIGHT).perform();
        browser.sleep(3000);
        console.log("Right click option displayed successfully");

    })
})