const btn = document.querySelector('.btn')
const popupContainer = document.querySelector('.popup-container')
const closeBtn = document.querySelector('.close-btn')

btn.addEventListener('click', () => {
  btn.classList.add('open')
  popupContainer.classList.add('open')
})

closeBtn.addEventListener('click', () => {
  btn.classList.remove('open')
  popupContainer.classList.remove('open')
})
