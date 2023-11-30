let num1 = document.querySelector('#99-num-1')
let num2 = document.querySelector('#99-num-2')
let btn = document.querySelector('#99-btn')
let response = document.querySelector('#response')

btn.addEventListener('click' ,(e) =>{
    let n1 = +num1.value;
    let n2 = +num2.value;
    let tid = type.value;
    
    if(isNaN(n1) || isNaN(n2) || !tid){
        return;
    }
     
    let thead = '<tr><th></th>';
    for(let i=1 ; i<num1; i++){
        thead += `<th>${i}</th>`;

    }
    thead +='</tr>';

    let tbody = '';
    for(let j=1 ; j<num2; j++){
        thead += `<th>${j}</th>`;
        
    }
    thead +='</tr>'
})
