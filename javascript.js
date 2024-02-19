function decreaseNumber(element){
    // console.log(element);
    const elementID=document.getElementById(element)
    let seats= parseInt(elementID.innerText);
    seats=seats-1;
    elementID.innerText=seats;
    

}
function IecreaseNumber(element){
    console.log(element);
    const elementID=document.getElementById(element)
    let seats= parseInt(elementID.innerText);
    seats=seats+1;
    elementID.innerText=seats;
    

}




function setbacgroundColorByID(element){
    const Idelement=document.getElementById(element);
    Idelement.classList.add('bg-[#1DD100]')
    Idelement.classList.add('text-white')

}


function removebacgroundColorByID(element){
    const Idelement=document.getElementById(element);
    Idelement.classList.remove('bg-green-400')
}


// Declare an array to store clicked button IDs
let clickedButtonIDs = [];
let i=0;
function handleKeyboardButtonpress(ELEMENT, e) {
    if (i < 4) {
        setbacgroundColorByID(ELEMENT);
        decreaseNumber('seat-remaining');
        IecreaseNumber('seat-bought');

            var btnID = e.target.id;
    const value=parseInt(document.getElementById('taka').innerText)

    // console.log(btnID)
    // console.log(value);

    const selectedContainer=document.getElementById('selected-place-container')
    const li=document.createElement('li')
    const p=document.createElement('p')
    p.innerText=btnID;
    const p2=document.createElement('p2')
    p2.innerText='Economics'

    // console.log(p);
    const p1=document.createElement('p1')
    p1.innerText=value;
    // console.log(p1);

    li.appendChild(p)
    li.appendChild(p2)
    li.appendChild(p1)

    selectedContainer.appendChild(li);

   Totalvalue(value)

        i = i + 1;
    } if(i>4) {
        alert('You have purchased the maximum number of tickets');
        return;
    }


    
}
let total=0;
function Totalvalue(){
    
    
    const variable=document.getElementById('two');
    let value=parseInt(variable.childNodes[1].innerText)
    console.log(value)
    total=value+550
     variable.childNodes[1].innerText=total;
     let grand=document.getElementById('Grand')
     console.log(grand.innerText)
     grand.innerText=total;

}



function getvalue(){
    const inputField = document.getElementById('textInput');
    const readButton = document.getElementById('readButton');

        const textValue = inputField.value;
      if(textValue ==='Couple 20'){
            let grand=document.getElementById('Grand')
            console.log(grand.innerText)
            total= total-(total*0.2)
            grand.innerText=total;
        }
      if(textValue ==='NEW15'){
            let grand=document.getElementById('Grand')
            console.log(grand.innerText)
            total= total-(total*0.15)
            grand.innerText=total;
        }
        
}

 function modal(){
   const modal=document.getElementById('my_modal_4');
   modal.show();
 }

 function loading(){
    window.location.reload();
 }



