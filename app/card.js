// DOM : 
console.log("Hello");
//tim cac elements 
// document.getElementById("")
// document.getElementsByTagName("") => HTMLCollection
// document.getElementsByClassName("") => HTMLCollection
let card = document.querySelector(".card")

let fullNameInput = document.querySelector("input[name='full-name']");
let numberCardInput = document.querySelector("input[name='name-card']");
let bg = document.querySelector("input[name='bg']");

let cardHolderName = document.querySelector("span.card__holder__name");

let cardExpirationDate = document.querySelector("span.card__expiration__date")

let numberGroup = document.querySelectorAll(".input-number-group > input.input-number")
console.log(numberGroup)
card.addEventListener("click",() =>{
    if(card.classList.contains("is-flipped")){
        card.classList.remove("is-flipped");
    }else{
        card.classList.add("is-flipped");
    }
    
    //toggle : la mot cong tac. tim thay thi tat. ko tim thay thi bat

})

function processDate() {
    let currentMonth = new Date().getMonth()+1 ;
    if(currentMonth < 10) {
        currentMonth = "0" + currentMonth;
    }
    let currentYear= new Date().getFullYear % 100 ;
    cardExpirationDate.innerText = `${currentMonth}/${currentYear}`

}
fullNameInput.addEventListener("keyup" , (e) =>{
    cardHolderName.innerText = e.target.value;
    processDate();
  
})
fullNameInput.addEventListener("keyup" , (e) =>{
    cardHolderName.innerText = e.target.value;
   processDate();

})


numberGroup.forEach((e,index) => {
    e.addEventListener("keyup" , (el) => {
        let val = el.target.value;
        if(val.length === 4 && index !== 3){
            numberGroup[index + 1].focus();
           // console.log(numberGroup)
        }
        if (val.length > 4 ){
            el.target.value = el.target.value.slice(0,4);
            if(index !== 3 ) {
                numberGroup[index + 1].focus();
             //   console.log(numberGroup)
            }
            
        }
    })
   
})
// them elements 

// xoa cac elements

//style 

// edit attributes