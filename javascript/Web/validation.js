//alert('connect')
function formValidate(){
    let myValue = document.getElementById('myform').value
    if (isNaN(myValue) || myValue < 1 || myValue > 20) {
        console.log(myValue);
        
        alert('not a valid input')
        
    }
    else
    {
        document.getElementById('idone').textContent=myValue
        document.getElementsByClassName('classone')[0].textContent=myValue+10
        console.log(myValue);
        
    }
}