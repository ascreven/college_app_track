$(document).ready(function(){
    var url = ""
    $.ajax({
      url: url,
      type: "get",
      dataType: "json"
      // $.ajax takes an object as an argument with at least three key-value pairs...
      // (1) The URL endpoint for the JSON object.
      // (2) Type of HTTP request.
      // (3) Datatype. Usually JSON.
    }).done(function(response){
      console.log(response)
    }).fail(function(){
      console.log("Ajax request fails!")
    }).always(function(){
      console.log("This always happens regardless of successful ajax request or not.")
    })
})
