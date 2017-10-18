$(document).ready(function() {
  $("#formBody").submit(function(event) {
    var nameInput = $("input#nameInput").val();
    var addressInput1 = $("input#addressInput1").val();
    var addressInput2 = $("input#addressInput2").val();
    var cityInput = $("input#cityInput").val();
    var stateInput = $("input#stateInput").val();
    var zipInput = $("input#zipInput").val();
    var productInput = $("select#productInput").val();

    var concatAddress = addressInput1 + addressInput2 + cityInput + stateInput + zipInput;

    $(".nameInput").text(nameInput);
    $("#concatAddress").text(concatAddress);
    $(".product").text(productInput);

    $("#receipt").show();

    event.preventDefault();

  });
});
