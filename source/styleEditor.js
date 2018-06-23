$(document).ready(function(){
  $('input[type=submit]').on('click', function() {
    let selector = $(style_editor[name="selector"]).val();
    let property = $(style_editor[name="property"]).val();
    let value = $(style_editor[name="value"]).val();

    event.preventDefault();
    $(`${selector}`).css(property, value);
  });
});
