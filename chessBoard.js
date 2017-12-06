var size = prompt("Give me input"); 

var allocation="";

for (var i=0; i<size; i++){
  
    
    for (var j=0; j<size; j++)
    {
      if ( (i+j) % 2 == 0)
      {
        allocation += " ";
      }
      else
        allocation += "x";
    
  }
  allocation += "\n";
}

console.log(allocation);
