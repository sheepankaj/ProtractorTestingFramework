const { Browser } = require("selenium-webdriver");

describe('myTest Suite', function() {
    it('Validate URl', function() {
       
        browser.get('https://angularjs.org/');
        browser.sleep(5000);
        browser.manage().window().maximize();
        expect(browser.getCurrentUrl()).toBe('https://angularjs.org/');
    })

    it('Validate Title of the Page', function() {
       
        browser.get('http://www.angularjs.org');
        browser.sleep(5000);
        browser.manage().window().maximize();
        expect(browser.getTitle()).toBe('AngularJS — Superheroic JavaScript MVW Framework');
    });
 });