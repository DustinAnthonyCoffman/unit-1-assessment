let count = 0;
let countDisplay = document.getElementById('countDisplay')
let inputField = document.getElementById('inputField');
let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');


button1.addEventListener('click', function() {
   let num1 = parseFloat(inputField.value);
   count += num1;
   countDisplay.textContent = count;
   if (count < 0) {
       countDisplay.style.color = 'red';
   }
   else {
       countDisplay.style.color = 'black';
   }
 

})


button2.addEventListener('click', function() {
    let num2 = parseFloat(inputField.value);
    count -= num2;
    countDisplay.textContent = count;
    if (count < 0) {
        countDisplay.style.color = 'red';
    }
    else {
        countDisplay.style.color = 'black';
    }

})

