//function to say hello in an alert//
function sayHello() {
	alert("Welcome to Cairo Garden!");
}
  var info1= "Don't over water your plants!";
  var info2= "Plants can die so don't be depressed!";
  var info3= "Know your plant!"; 
  var list = [info1, info2, info3];
  var i = -1;  

// back and next info buttons//
function goBack() {
  var output = document.getElementById("info");
  if (i<2){
  i++;
  console.log(i);
  output.innerHTML = list[i];
  }
  else if (i === 2){
  	i = -1;  
  	}
}

function next() {
  var newOutput = document.getElementById("info");
    if (i<2){
  i++;
  console.log(i);
  newOutput.innerHTML = list[i];
  }
  else if (i === 2){
  	i = -1;  
  	}
}
