$(document).ready(function(){
    var url = "https://api.data.gov/ed/collegescorecard/v1/schools?api_key=z5IdkiIm0tmyTnGPTXjFsbzrID3gWbjpMcW1Jz2b&school.degrees_awarded.predominant=3,4&school.main_campus=1&school.online_only=0&school.operating=1&_fields=id,school.name,school.city,school.state,school.zip,school.school_url,school.price_calculator_url,2013.student.size&_sort=size:desc"
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
