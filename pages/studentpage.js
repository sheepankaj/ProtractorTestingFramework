let studentpage=function(){
    let enterName=element(by.name("name"));
    let enterContact=element(by.name("contact"));
    let selectOnevaluefromDropdownlist=element(by.name("subject"));
    let enterMarks=element(by.name("marks"));
    let submitButton=element(by.css("input[value=Submit]"));

    this.get=function(url)
    {
        browser.get(url);
    }

    this.setName=function(name)
    {
        enterName.sendKeys(name);
    }
    this.setContact=function(contact)
    {
        enterContact.sendKeys(contact);
    }

    this.setSubject=function(sub)
    {
        selectOnevaluefromDropdownlist.element(by.xpath("//option[contains(text(),'"+sub+"')]")).click();
    }

    this.setMarks=function(marks)
    {
        enterMarks.sendKeys(marks);
    }

    this.clickSubmit=function()
    {
        submitButton.click();
    }

    this.verifyResult=function(name,contact,sub,marks)
    {
        let rows=element.all(by.tagName('tr'));
        expect(rows.get(0).element(by.xpath("//td[2]")).getText()).toBe(name);
        expect(rows.get(0).element(by.xpath("//td[3]")).getText()).toBe(contact);
        expect(rows.get(0).element(by.xpath("//td[4]")).getText()).toBe(sub);
        expect(rows.get(0).element(by.xpath("//td[5]")).getText()).toBe(marks);
    }
};
module.exports=new studentpage();