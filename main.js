$(function () {

  function counterN() {

    var startN= 0;
    var setUp = setInterval( countFun, 100 );

    function countFun() {
       startN++;
       if(startN > 99 ) {
         clearInterval( setUp );
       }else {
         $('.number').text(startN);
       }
    }

  }

  counterN();

});
