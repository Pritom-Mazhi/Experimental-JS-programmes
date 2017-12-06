for (var i=1;i<=100;i++){
  var print = "" ;
  
  if (i % 3 == 0)
    {
      print += "Fizz";
    }
  
  if (i % 5 == 0)
    {
      print += "Buzz";
    }
  console.log(print ||i  );   
}
    
    
