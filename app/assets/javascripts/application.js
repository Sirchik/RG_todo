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

const KEY_CODE_ENTER = 13;
const KEY_CODE_ESC = 27;

$(document).on("page:update", function() {
  $('div[id^=todo_list_]').click(function () {
    $('#todo_list_1_items'.replace('1', $(this).attr('id').replace('todo_list_', ''))).toggle()
  });
  $('.todo_list_edit').click(function() {
    var title_form = $(this).parents('div').parents('div').children('.td_title').children('.edit_todo_list');
    var title_input = title_form.children('.input_title');
    title_form.children('label').hide();
    title_input.show();
    title_input.focus();

    title_input.click(function(){
      return false;
    });
    return false;
  });
  $('.row').hover(
    function() {
      $(this).find('.action_buttons').show();
    },
    function() {
      $(this).find('.action_buttons').hide();
    }
  )
  $(document).find('.action_buttons').hide();

  $('.new_todo_item').keypress(function(event){
    if(event.keyCode === KEY_CODE_ENTER) {
      if( $(this).children('#todo_item_content').val().length === 0 ) {
        alert("Task name can't be empty");
        return false;
      }
    }
  })
  // $(".notice").html("");
  // $(".alert").html("");
});

function edit_cancel() {
  $(document).find('.td_title').children().find('#todo_list_title').hide();
  $(document).find('.td_title').children().find('label').show();
};

// $(document).ready(function() {
//   $(document).find('.todo_items_wrapper').hide();
// });

$(document).click(function() {
  edit_cancel();
});

$(document).keyup(function(event){
  if(event.keyCode === KEY_CODE_ESC){
    edit_cancel();
  }
})

