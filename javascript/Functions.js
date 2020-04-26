let hello = function(name)
{
  console.log('welcome  '+name);
  console.log('logged in '+name+'  thank you');

}

hello('debasish')

//default parameters
let add = function(num1=10,mum2=10)
{
  let sum=num1+mum2
  return sum
}
let result = add()
console.log(result);
