
const counterEl = document.querySelector('.counter')

let incrementButtonEl = document.querySelector('.counter__increment-button');

let decreaseButtonEl = document.querySelector('.counter__decrement-button');

let resetButtonEl = document.querySelector('.counter__reset-button')

let counterVAlueEl = document.querySelector('.counter__value')

let counterTitleEl = document.querySelector('.counter__title')

let incrementCounter = function(){

    //  Select the recent value
    const recentValue = counterVAlueEl.textContent;
    
    // Convert the value to number type
    const counterValueAsNumber = parseInt(recentValue);
    
    // Increase the value 1 step
    let newValue = counterValueAsNumber + 1;

    // Check the newValue not to be more than 5
    if (newValue > 5){

        counterEl.classList.add('counter--limit');

        counterTitleEl.innerHTML = 'Limit! BUY <b> PRO </b>  FOR > 5';

        newValue = 5;

        // incrementButtonEl.disabled = true;
        // decreaseButtonEl.disabled = true;
        

    } 

    
    // Set the new value 
    
    counterVAlueEl.textContent = newValue;

    incrementButtonEl.blur();
    
    
    
    }


incrementButtonEl.addEventListener('click', incrementCounter );

decreaseButtonEl.addEventListener('click', function(){

    //  Select the recent value
    const recentValue = counterVAlueEl.textContent;
    
    // Convert the value to number type
    const counterValueAsNumber = parseInt(recentValue);
    
    // Decrease the value 1 step
    const newValue = counterValueAsNumber - 1;

    counterTitleEl.textContent = 'FANCY COUNTER';


    // check if new value is less than 0
    let checkedNewValue = newValue < 0 ? 0 : newValue;
    
    // Set the new value 
    
    counterVAlueEl.textContent = checkedNewValue;

    counterTitleEl.textContent = 'FANCY COUNTER';

    counterEl.classList.remove('counter--limit');

    decreaseButtonEl.blur();
    
    
    
    })


    resetButtonEl.addEventListener('click',function(){
        
        let resetValue = counterVAlueEl.textContent = 0;

        counterTitleEl.textContent = 'FANCY COUNTER';

        counterEl.classList.remove('counter--limit');

        // incrementButtonEl.disabled = false;
        // decreaseButtonEl.disabled = false;


        resetButtonEl.blur();



    })

document.addEventListener('keyup', incrementCounter)







