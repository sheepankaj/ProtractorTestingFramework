describe("MouseHover TestSuite", function(){
    it("Mouse Hovers Test cases", function(){
        browser.waitForAngularEnabled(false);
        browser.get("https://opensource-demo.orangehrmlive.com/");
        browser.manage().window().maximize();
        browser.sleep(2000);
        console.log("Open the website successfully");

        element(by.id("txtUsername")).sendKeys("Admin");
        element(by.id("txtPassword")).sendKeys("admin123");
        element(by.id("btnLogin")).click();
        browser.sleep(2000);
        console.log("Login successfully");

        var adminSection=element(by.id("menu_admin_viewAdminModule"));
        var usermgmtmenu=element(by.id("menu_admin_UserManagement"));
        var users=element(by.id("menu_admin_viewSystemUsers"));
        browser.actions().mouseMove(adminSection).mouseMove(usermgmtmenu).mouseMove(users).click().perform();
        browser.sleep(3000);
        console.log("Mouse Hover actions are performed correctly and website closed successfully");

    })
})