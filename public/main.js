const marked = require('marked')

module.exports = (() => {
  let prev = document.getElementById('mdPreview')
  let mkdown = document.getElementById('md')
  prev.innerHTML = marked(mkdown.innerHTML)
  mkdown.addEventListener('change', (event) => {
    prev.innerHTML = marked(event.target.innerHTML)
    console.log('in callback :)')
  })
})()
