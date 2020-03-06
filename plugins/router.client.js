export default ({ app }) => {
  app.router.afterEach((to, from) => {
    if (from && from.name) {
      window._hmt && _hmt.push(['_trackPageview', to.fullPath])
    }
  })
}
