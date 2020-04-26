// const myElements = document.querySelectorAll('.classone')
// console.log(myElements);
const pElement = document.querySelector('p')
pElement.textContent='I sm being changed using js'

// const allPElments=document.querySelectorAll('p')
// allPElments.forEach(function(p){
// p.remove
// })

document.querySelector('button').addEventListener('click',(event) => {
    //alert('button pressed')
    event.target.textContent='Thanks for clicking'
    alert('button pressed')
})

//track input
document.querySelector('#myform').addEventListener('input',(event2)=>
{
    console.log(event2.target.value);
    
    
})

