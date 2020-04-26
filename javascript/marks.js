let percent=0
//let grade
let marks=function(marks,totalMarks)
{
  percent=((marks/totalMarks)*100)

  if (percent>=90) {
    console.log(' grade=A');
  }
  if (percent>=80 && percent<90) {
    console.log(' grade=B');
  }
  if (percent>=70 && percent<80) {
  console.log(' grade=C');
  }
  if (percent<70) {
  console.log(' grade=D');
      }
      return percent
}

console.log('The percentage is '+marks(85,100));
