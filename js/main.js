/*  Javascript for beginners */

//1. Javascript is NOT Java!
/* They have similar name but are completely different
  Java is much more complex
  Same category as C and C++
  Javascript is a "scripting" language that uses "events"and "actions" to make your page interactive */


  //2. What can I do with Javascript?

  /* Put content in an HTML page on the fly
    Make webpages responsive
    Detect a Users Broswer & Other Info
    Create Cookies
    Vaildate forms
    Build Apps with JS frameworks
  */


  //Arrays - used to store multiple values in a variable

  var colors = ['red','blue','black'];//an array of colors
  alert(colors);//prints out 'red,blue,black'
  alert(colors[1]);//prints out 'blue'

  var colors2 = new Array('brown', 'purple', 'grey');//this is another way of writting an array

  colors2[3] = "deep blue";//not an effectice way of writing colors
  colors2.push('white');


  var numbers = [5,6,7,8]//an array with numbers
  alert(numbers[0] + numbers[2]);//prints out 11
