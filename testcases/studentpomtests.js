let studentpage = require('../pages/studentpage')
describe("Students Data TestSuite", function(){
    it("Add New Student Record Test case", function(){
        studentpage.get("https://www.trycatchclasses.com/code/demo/angular4_crud/");
        console.log("Open the website successfully");
        browser.manage().window().maximize();
        studentpage.setName("Mark");
        studentpage.setContact("Ireland");
        studentpage.setSubject("JS");
        studentpage.setMarks("100");
        studentpage.clickSubmit();
        browser.sleep(3000);
        console.log("Added new student record successfully");

        studentpage.verifyResult("Mark","Ireland","JS","100");
        console.log("verified new student record successfully");
        browser.sleep(5000);
    })
});