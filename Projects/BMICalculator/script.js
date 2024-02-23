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
        //results.innerHTML = `<span>${BMI_value}<br>
        //According to the guide:<br></span>`
        if(BMI_value<=18.6)
            results.innerHTML = `Your BMI is ${BMI_value} and You have Under-Weight`

        else if(BMI_value>18.6 && BMI_value<=24.9)
            results.innerHTML = `Your BMI is ${BMI_value} and You have Normal-Weight`

        else
            results.innerHTML = `Your BMI is ${BMI_value} and You have Over-Weight`


    }

    
})