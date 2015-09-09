// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

// $(function() {
//   $("#todo_list_1").click(function () {
//     $('#todo_list_1_items').toggle()
//   })
// });

// $(function() {
//   $("a:regex(id, .todo_list_1)").click(function () {
//     $('#todo_list_1_items').toggle()
//   })
// });


$(function() {
  $('td[id^=todo_list_]').click(function () {
    $('#todo_list_1_items'.replace('1', $(this).attr('id').replace('todo_list_', ''))).toggle()
  })
  $('.todo_list_edit').click(function() {
    $(this).parents('tr').first().find('label').hide();
    $(this).parents('tr').first().find('#todo_list_title').show();
    $(this).parents('tr').first().find('#todo_list_title').focus();

    $(this).parents('tr').first().find('#todo_list_title').click(function(){
      return false;
    });
    return false;

  })
});

$(document).click(function() {
  $(document).find('.td_title').children().find('#todo_list_title').hide();
  $(document).find('.td_title').children().find('label').show();
})


// $(document).on('click', '.prj_edit_btn', function(){
//   $(this).parents('tr').first().find('label').hide();
//   $(this).parents('tr').first().find('#project_name').show();
//   $(this).parents('tr').first().find('#project_name').focus();

//   // TODO: Handler is addded every time it clicks
//   // Process click inside project name form to prevent it's hidding
//   $(this).parents('tr').first().find('#project_name').click(function(){
//     return false;
//   });
//   return false;
// })
