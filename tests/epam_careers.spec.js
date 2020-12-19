// epam_careers.spec.js
describe('Epam.com Careers page tests', function seleniumTest() {


    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    beforeEach(function() {
        browser.waitForAngularEnabled(false);
        browser.get('https://www.epam.com');
      });
    it('should select Young Specialists skill', function () {

        // Home page
        // 1. click accept cookies
        browser.driver.findElement(by.css('button.cookie-disclaimer__button')).click();
        // 2. go Careers page
        browser.driver.findElement(by.css('li a[href *= careers]')).click();

        // Careers page
        // 1. Click Location drop down arrow and scroll to it
        const locationArrow = browser.driver.findElement(by.css('span.select2-selection__arrow'));
        browser.sleep(100);
        locationArrow.click();
        // 2. Select Minsk in the drop down
        browser.driver.findElement(by.css('li[id *= -Minsk')).click();
        // 3. Show "All Skills' dropdown
        const skillsArrow = browser.driver.findElement(by.css('div.selected-params'));
        skillsArrow.click();
        // 4. Check Young Specialists
        //await sleep(100);
        browser.sleep(100);
        browser.driver.findElement(by.xpath('//span[contains(text(), \'Young Specialists\')]')).click();
        // 5. Hide "All Skills' dropdown
        skillsArrow.click();
        // 6. Find and assert selected items element
        const youngSpecialistItem = browser.driver.findElement(by.css('ul.selected-items li[data-value=\'Young Specialists\']'));
        expect(youngSpecialistItem.getText()).toEqual('YOUNG SPECIALISTS');
    });
});