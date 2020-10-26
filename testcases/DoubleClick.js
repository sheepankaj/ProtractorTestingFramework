describe("DoubleClick TestSuite", function(){
    it("Double Click Test cases", function(){
        browser.waitForAngularEnabled(false);
        browser.get("http://testautomationpractice.blogspot.com/");
        browser.manage().window().maximize();
        browser.sleep(2000);
        console.log("Open the website successfully");

        var copytextbutton=element(by.xpath("//button[contains(text(),'Copy Text')]"));
        //browser.actions().mouseMove(copytextbutton).doubleClick().perform();
        browser.actions().doubleClick(copytextbutton).perform();
        browser.sleep(3000);
        console.log("Successfully double click action performed.");

    })
})