function testWebP(callback) {
  let webP = new Image()
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2)
  }
  webP.src =
    'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
}

testWebP(function (support) {
  if (support === true) {
    document.querySelector('html').classList.add('_webp')
  } else {
    document.querySelector('html').classList.add('_no-webp')
  }
})

document.querySelector('.header__burger').onclick = () => {
  const burger = document.querySelector('.header__burger')
  const burgerMenu = document.querySelector('.burger__menu')
     
  burger.classList.toggle('_active')
      burgerMenu.classList.toggle('_active')
      document.body.classList.toggle('_lock')
 
    const links = document.querySelectorAll('.site-navigation__link')
      links.forEach(el => { el.addEventListener('click', () => {
        burger.classList.remove('_active')
        burgerMenu.classList.remove('_active')
        document.body.classList.remove('_lock')
      })
  })
}
