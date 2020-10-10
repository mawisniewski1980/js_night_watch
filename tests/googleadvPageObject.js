module.exports = {
    '@tags' : ['googleadv'],
    'Google advanced search: Elon Musk'(browser) {
        const mainQuery = 'Elon Musk';
        const page = browser.page.googleAdvSearch();
        const resultsPageQuerySelector = '#searchform input[name="q"][value="${mainQuery}"]';


        page
        .navigate()
        .setQuery(mainQuery)
        .selectFilter('@languageDropDown', 'lang_it')
        .selectFilter('@lastUpdateDropDown', 'm')
        .search();

        browser.assert.urlContains('as_q=Elon+Musk', 'Query is Elon Musk');
        browser.assert.visible(resultsPageQuerySelector, 'Is visible');
        
        browser.saveScreenshot('tests_output/google.png');
    }
}