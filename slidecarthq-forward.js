if (!window.SLIDECART) {
  (function () {
    var url = 'https://cdn.jsdelivr.net/gh/apphq/slidecart-dist@latest/slidecarthq.js?' + new Date().getTime()
    var s = document.createElement('script')
    s.type = 'text/javascript'
    s.src = url
    var x = document.querySelector('body')
    x.appendChild(s)
  })()
}
