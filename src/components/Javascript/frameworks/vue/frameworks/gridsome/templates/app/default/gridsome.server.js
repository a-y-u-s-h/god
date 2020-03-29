/*
  ======================================
    
    Server API makes it possible to hook
    into various parts of Gridsome on
    server-side and add custom data to 
    GraphQL data layer. Learn more:

    https://gridsome.org/docs/server-api/
    
    --------------------------------------

    Changes here require a server restart.
    To restart, press CTRL + C in terminal
    and run `gridsome develop`

  ======================================
*/

module.exports = function(api) {
  api.loadSource(({ addCollection }) => {
    /*
      ======================================
        Use Data Store API here. More info:
        https://gridsome.org/docs/data-store-api/
      ======================================
    */
  })

  api.createPages(({ createPage }) => {
    /*
      ======================================
        Use the Pages API here. More info:
        https://gridsome.org/docs/pages-api/
      ======================================
    */
  })
}
