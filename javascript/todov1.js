let todoList = {
  day : 'Monday',
  meetings : 0,
  meetingDone : 0,
meetingsLeft : function(num) {
  this.meetings=this.meetings+num;
  return `You have ${this.meetings} meetings on ${this.day}`

},
resetDay : function()
{
  this.meetings=0
  return `LEft over meeting is ${this.meetings}`
}

}

console.log(todoList.meetingsLeft(6));
console.log('After doing all meetings');
console.log(todoList.resetDay());
