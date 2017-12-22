window.onload = () => {
  console.log('in document dot ready')
  document.getElementById('save').addEventListener('click', () => {
    console.log('in event listener')
    const file = document.getElementById('md').innerHTML
    const fileName = document.getElementById('filename').innerHTML
    const body = { fileName, file }
    fetch('/save', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(body)
    }).then(res => res.json())
      .then(data => alert(data))
  })
}
