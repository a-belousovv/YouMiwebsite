
const item = document.querySelectorAll('.together__item');
item.forEach((item) => {
  item.addEventListener("click",() => {
    item.classList.toggle('together__item-active')
    
  }  )
} )

