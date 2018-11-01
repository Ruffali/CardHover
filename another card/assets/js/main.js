
$(document).ready(function () {
   var firstLi = $("#ACard .container-fluid .row .col-md-12 .myCards ul li:first-child");
   var fifthLi = $("#ACard .container-fluid .row .col-md-12 .myCards ul li:nth-child(5)");
   var sixthLi = $("#ACard .container-fluid .row .col-md-12 .myCards ul li:nth-child(6)");

   fifthLi.prevAll().css({"transform":"rotate(-10deg)"});
   sixthLi.nextAll().css({"transform":"rotate(10deg)"});
});
