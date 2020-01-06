$(document).on('turbolinks:load', function() {
$(function(){
  $('form').on('change', 'input[type="file"]','#image', function(e) {
    console.log("#image")
    var file = e.target.files[0],
        reader = new FileReader(),
        $preview = $(".preview");
        t = this;

    reader.onload = (function(file) {
      return function(e) {
        $preview.append($('<img>').attr({
                  src: e.target.result,
                  width: "150px",
                  heigth: "150px",
              }));
      };
    })(file);
    reader.readAsDataURL(file);
  });
});
});