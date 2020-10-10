module.exports = {
    '@tags' : ['google'],
    'Google advanced search: Elon Musk'(browser) {
        const mainQuery = 'Elon Musk';
        const mainQueryInputSelector = 'input[name="as_q"]';
        const languageDropDownOpenSelector = '#lr_button';
;       const languageDropDownOptionSelector = '.goog-menuitem[value="lang_be"]';
;       const lastUpdateDropDownOpenSelector = '#as_qdr_button';
;       const lastUpdateDropDownOptionSelector = '.goog-menuitem[value="m"]';
        const submitButtonSelector = '.jfk-button[type="submit"]';
        const resultsPageQuerySelector = '#searchform input[name="q"][value="${mainQuery}"]';

        debugger;

        browser
        .url('https://www.google.com/advanced_search')
        .setValue(mainQueryInputSelector, mainQuery)
        .click(languageDropDownOpenSelector)
        .click(languageDropDownOptionSelector)
        .click(lastUpdateDropDownOpenSelector)
        .click(lastUpdateDropDownOptionSelector)
        .perform(() => {debugger;});

        browser.click(submitButtonSelector)
        .assert.urlContains('as_q=Elon+Musk', 'Query is Elon Musk');
    
        browser.assert.visible(resultsPageQuerySelector, 'Is visible');
        
        browser.saveScreenshot('tests_output/google.png');
    }
}