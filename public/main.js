function saveCurrent() {
  const file = document.getElementById('md').innerHTML
  const fileName = document.getElementById('filename').innerHTML
  const body = { fileName, file }
  fetch('/save', {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(body)
  }).then(res => res.json())
    .then(data => alert(data))
}

function newFile() {
  const editor = document.getElementById('md')
  document.getElementById('filename').innerHTML = 'untitled'
  editor.innerHTML = '## Type markdown here'
  document.getElementById('mdPreview').innerHTML = marked(editor.innerHTML)
}

window.onload = () => {
  document.getElementById('save').addEventListener('click', saveCurrent)
  document.getElementById('newFile').addEventListener('click', newFile)
}
