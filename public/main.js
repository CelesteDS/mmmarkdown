$(document).ready(() => {
  console.log('in document dot ready')
  document.getElementById('save').addEventListener('click', () => {
    console.log('in event listener')
    let file = document.getElementById('md').innerHTML
    let fileName = document.getElementById('filename').innerHTML
    let body = { fileName, file }
    fetch('/save', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'text/plain'}),
      body
    })

  })
})
