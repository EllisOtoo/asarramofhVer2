let toggleOpenButton = document.getElementById('toggleOpen');
let toggleOpenButton02 = document.getElementById('toggleOpen02');
let successPara   = document.getElementById ('requestSuccessMsg');


toggleOpenButton.addEventListener('click',  ()=>  {
    console.log ('helllo')
    let formDiv = document.getElementsByClassName('formDiv')[0];
    formDiv.classList.toggle("openForm")
    
    console.log ('hello')
   /*  setTimeout(()=> { //*Applies after 3s
        formDiv.classList.toggle("addPaddingToForm")
    }, 3000) */
}
)
toggleOpenButton02.addEventListener('click',  ()=>  {
    console.log ('helllo')
    let formDiv = document.getElementsByClassName('formDiv')[1];
    formDiv.classList.toggle("openForm")
    
    console.log ('hello')
   /*  setTimeout(()=> { //*Applies after 3s
        formDiv.classList.toggle("addPaddingToForm")
    }, 3000) */
}
)


let formParent01 = document.getElementById('formParent01');
let requestSuccessMsg = document.getElementById('requestSuccessMsg')

if(requestSuccessMsg) {
    setTimeout(() => {
      console.log(formParent01)
      requestSuccessMsg.parentNode.removeChild(requestSuccessMsg)
    }, 4000);

}



let sillyString = "Ellis "
console.log (sillyString.length);
