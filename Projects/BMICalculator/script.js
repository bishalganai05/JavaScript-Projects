const form = document.querySelector('form')

form.addEventListener('submit',function(event){
    event.preventDefault();
    const height = parseInt(document.querySelector('#height').value) ;
    const weight = parseInt(document.querySelector('#weight').value) ;
    const results = document.querySelector('#results');

    if(height === '' || height<0 || height === NaN){
        results.innerHTML=`Enter a valid height`;
    }

    else if(weight === '' || weight<0 || weight === NaN){
        results.innerHTML=`Enter a valid weight`;    
    }

    else{
        const BMI_value = ((weight/(height*height))*10000).toFixed(2);
        results.innerHTML = `<span>${BMI_value}</span>`
    }

    
})