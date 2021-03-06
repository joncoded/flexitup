$(document).ready(function() {

  $('select').on('change', function() {
    var classToAdd = $(this).attr('id') + '-' + $(this).val();
    $('.code-wrap').html("flex-wrap: " + $('#flex-wrap').val() + ";");
    $('.code-dire').html("flex-direction: " + $('#flex-direction').val() + ";");
    $('.code-just').html("justify-content: " + $('#justify-content').val() + ";");
    $('.code-line').html("align-items: " + $('#align-items').val() + ";");
    $('ul').removeClassStartingWith($(this).attr('id')).addClass(classToAdd);
  });

  /* https://stackoverflow.com/a/40158516 */
  $.fn.removeClassStartingWith = function (filter) {
    $(this).removeClass(function (index, className) {
        return (className.match(new RegExp("\\S*" + filter + "\\S*", 'g')) || []).join(' ')
    });
    return this;
  };
  
});