function setInnerText(id, value) {
    const element = document.getElementById(id);
    element.innerText = value;
}
function price(id, value) {
    const totalPrice = document.getElementById(id).innerText;
    const convertedCost = parseInt(totalPrice);
    const sum = convertedCost + parseInt(value);
    setInnerText('total-price', sum);
}
function hideDiv(){
    const couponField = document.getElementById('coupon-checker');
    couponField.classList.add('hidden');
}

function grandPrice(status) {
    const totalPrice = document.getElementById('total-price').innerText;
    const convertedCost = parseInt(totalPrice);
    const inputField = document.getElementById('input-field');
    const inputFieldText = inputField.value;
    if(status == undefined){
        setInnerText('grand-total', convertedCost);
    }
        else {
        
        if(inputFieldText == 'NEW15'){
           const discount = convertedCost * 0.15;
           const grandPrice = convertedCost - discount;
           setInnerText('grand-total',grandPrice);
           hideDiv();
        }
        else if(inputFieldText == 'Couple 20'){
            const discount = convertedCost * 0.2;
            const grandPrice = convertedCost - discount;
            setInnerText('grand-total',grandPrice);
            hideDiv();
        }
       
    }
}

