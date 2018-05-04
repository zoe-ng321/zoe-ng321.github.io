$(document).ready(function(){
	var number1 = "";
	var number2 = "";
	var operator = "";
	var display = $("#display");
	display.text("0");

	$(".number a").not("#clear, #negative").click(function(){
  	number1 += $(this).text();
    display.text(number1);
  });
  $("#negative").click(function(){
  	number1 = $(this).text()+number1;
    display.text(number1);
  });
  $(".operator a").not("#equal").click(function(){
  	operator=$(this).text();
    number2=number1;
    number1="";
    display.text(number2);
  });
  $("#equal").click(function(){
  	var n1=parseFloat(number1);
    var n2=parseFloat(number2);
    switch(operator){
    	case "+":
      	number1=(n2+n1).toString();
      	display.text(number1);
      	break;
      case "-":
      	number1=(n2-n1).toString();
      	display.text(number1);
      	break;
      case "*":
      	number1=(n2*n1).toString();
      	display.text(number1);
      	break;
      case "/":
      	number1=(n2/n1).toString();
      	display.text(number1);
      	break;  
      default:
      	display.text("hello");
      	break;
    }
  });
  $("#clear").click(function(){
  	number1="";
    number2="";
    operator="";
    display.text("0")
  })
  
});