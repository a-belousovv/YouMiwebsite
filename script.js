
const item = document.querySelectorAll('.together__item');
item.forEach((item) => {
  item.addEventListener("click",() => {
    item.classList.toggle('together__item-active')
    
  }  )
} )

// function change(){
//     backgroundchange.forEach((elem) =>{
//     elem.classList.add('together__item_background')
//     elem.addEventListener("click",change)
//     } )
    
// }





//  function change(){
//      backgroundchange.forEach((elem) => {
//          elem.classList.toggle('together__item_background')
        
//          if(elem.classList.contains('.together__item_background')){
//              textchange.forEach((item) => {
//                  item.classList.add('together__item_color')
//              } )
//          }
//          else{
//                  item.classList.remove('together__item_color')
//         }
       
        
//    } )
// }






// console.log(together__text)
// function changebackground(){
//     together__background.classList.toggle('together__item_background')
//     if(together__background.classList.contains('together__item_background')){
//         together__text.classList.toggle('together__item_color')
//     }
//     else{
// e        together__text.classList.remove('together__item_color')
//     }
// }
// together__background.addEventListener("click",changebackground)
// console.log(changebackground)

