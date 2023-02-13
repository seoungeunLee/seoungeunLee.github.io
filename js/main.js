

$(document).ready(function(){
  $(".box").click(function(){
    $(this).toggleClass('on');
    $(".button").toggleClass('on');
  });

});



// !age count
const today = new Date();
const birthDate = new Date(1999, 10, 17); // 생일

let age = today.getFullYear()
          - birthDate.getFullYear()
          + 1;

dovument.getElementById("age").innerHTML = age;
