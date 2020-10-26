describe("DragandDrop TestSuite", function(){
    it("Drag and Drop Test case", function(){
        browser.get("https://codef0rmer.github.io/angular-dragdrop/#!/");
        browser.manage().window().maximize();
        browser.sleep(2000);
        console.log("Open the website successfully");

        var source_element=element(by.model("list1"));
        var target_element=element(by.model("list2"));
        browser.actions().dragAndDrop(source_element,target_element).perform();
        browser.sleep(3000);
        console.log("The drag and drop action performed successfully");
    })
})