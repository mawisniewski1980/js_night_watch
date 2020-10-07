module.exports = {

    'Google search' : function(browser) {
        
        var google = browser.page.google()

        google.navigate()
        .assert.title('Google')
        .assert.visible('@searchBar')
        .setValue('@searchBar', 'nightwatch')
        .click('@submit');
        
        browser.end();
    }
}