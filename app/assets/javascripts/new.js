$(document).on('turbolinks:load', function() {

  $(function(){
    $('form').on('change', 'input[type="file"]','#image', function(e) {
      console.log("#image")
      var file = e.target.files[0],
          reader = new FileReader(),
          $preview = $(".preview");
          t = this;
          $delete = $(
            `<div class="btn-box">
              <div class="btn-delete" ,id="delete">削除</div>
            </div>`
          );

      reader.onload = (function(file) {
        return function(e) {
          $preview.append($delete);
          $(`.btn-delete`).prepend($('<img>').attr({
                    src: e.target.result,
                    width: "150px",
                    heigth: "150px",
                }));
        };
      })(file);
      reader.readAsDataURL(file);
    });
  });
  $('.preview').on('click','.btn-delete',function(){
    $(this)
      .parent()
      .remove()
  });
});