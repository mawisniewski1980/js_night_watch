module.exports = {

  url: 'https://www.google.pl',
  
  elements: {
      
    searchBar: {
      selector: '//input[@name="q"]',
      locateStrategy: 'xpath'

    },

    submit: {
          selector: '/html/body/div[1]/div[3]/form/div[2]/div[1]/div[3]/center/input[1]',
          locateStrategy: 'xpath'
      }
  }

}