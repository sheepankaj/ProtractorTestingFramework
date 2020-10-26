describe("FramesTestSuite", function(){
    it("Test case for Frames Handle", function(){
        browser.waitForAngularEnabled(false);
        browser.get("https://www.selenium.dev/selenium/docs/api/java/index");
        browser.manage().window().maximize();
        console.log("Open the website successfully");

        browser.switchTo().frame("packageListFrame");
        element(by.linkText("org.openqa.selenium")).click();
        browser.sleep(3000);
        browser.switchTo().defaultContent();
        console.log("click on 1st Frame successfully");

        browser.switchTo().frame("packageFrame");
        element(by.linkText("WebDriver")).click();
        browser.sleep(3000);
        browser.switchTo().defaultContent();
        console.log("Click on 2nd Frame successfully");

        browser.switchTo().frame("classFrame");
        element(by.xpath("//body/div[1]/ul[1]/li[6]/a[1]")).click();
        browser.sleep(3000);
        console.log("Click on 3rd Frame successfully and closed the browser");

    })
})