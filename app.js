const totalLink = document.querySelectorAll('a');
const highlight = document.createElement('span')
highlight.classList.add('highlight')
document.body.appendChild(highlight)

function triggerLinks(){
  let coords = this.getBoundingClientRect()

  let objCoords = {
    height: coords.height,
    width: coords.width,
    top: coords.top + window.scrollY,
    left: coords.left + window.scrollX
  }

  highlight.style.height = `${objCoords.height}px`
  highlight.style.width = `${objCoords.width}px`
  highlight.style.top = `${objCoords.top}px`
  highlight.style.left = `${objCoords.left}px`
  console.log(objCoords)
}

totalLink.forEach(link => link.addEventListener('mouseenter', triggerLinks));