module.exports = {
    'My first test case' : function(browser) {
        browser.url("https://phptravels.com/demo/")
        .waitForElementVisible("body")
        .waitForElementVisible(".copyright")
        .assert.containsText("h4.main-title", "Demo Credentials for Frontend and Backend")
        .end();
    }
}