$(document).ready(function() {
  $("button").click(function(event){
    var beverage = $("#beverage").val();
    var flavor = $("input:radio[name=flavor]:checked").val();
    var color = $("#color").val();
    alert(beverage+" "+flavor+" "+color);


    event.preventDefault();
  });
});
