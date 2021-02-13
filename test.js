function myFunction1() {
    document.getElementById("a").stepUp();
  }
  function myFunction2(){
    document.getElementById("a").stepDown();
  }

  function myFunction3() {
    document.getElementById("b").stepUp();
  }
  function myFunction4(){
    document.getElementById("b").stepDown();
  }
  function myFunction5() {
    document.getElementById("c").stepUp();
  }
  function myFunction6(){
    document.getElementById("c").stepDown();
  }



  function calculateAmount(val) {
    var tot_price = val * 1000;
    var r = document.getElementById('tot_amount');
    r.value = tot_price;
}

function calculateAmount2(val) {
    var tot_price2 = val * 50;
    var r = document.getElementById('tot_amount_s');
    r.value = tot_price2;
}

function calculateAmount3(val) {
    var tot_price3 = val * 70;
    var r = document.getElementById('tot_amount_c');
    r.value = tot_price3;
}


function calculate() {
  var field1=document.getElementById("tot_amount").value;
  var field2=document.getElementById("tot_amount_s").value;
  var field3=document.getElementById("tot_amount_c").value;
 
  var result=parseFloat(field1)+parseFloat(field2)+parseFloat(field3)

  if (! isNaN(result))
  {

    document.getElementById("answer").innerHTML="the total price is " +result +"  Dt" ;
  }

}

function changeimage1()
{
document.getElementById("image1").src= "aime2.png";
}


function changeimage2 ()
{
document.getElementById("image2").src= "aime2.1.png";
}



function changeimage3()
{
document.getElementById("image3").src= "aime2.2.png";
}


