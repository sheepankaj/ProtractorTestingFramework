describe("TestSuite", function()
{
    it("Validate login", function()
    {
        browser.get("http://cafetownsend-angular-rails.herokuapp.com/login");
        browser.manage().window().maximize();
        browser.sleep(3000);
        expect(browser.getTitle()).toBe("CafeTownsend-AngularJS-Rails");
        
        element(by.model('user.name')).sendKeys("Luke");
        element(by.model('user.password')).sendKeys("Skywalker");
        element(by.buttonText('Login')).click();

        var greetMessage = element(by.id("greetings"));
        expect(greetMessage.getText()).toBe("Hello Luke");

        var logout = element(by.css('[ng-click="logout()"]'));
        expect(logout.isPresent()).toBe(true);
        logout.click();
        browser.sleep(3000);
        console.log("login and logout successfully")
 
    })
})