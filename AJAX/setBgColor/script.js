$(".focus").focusin(function(){
    $(this).attr('class', 'focused');
});

$(".focus").focusout(function(){
    $(this).attr('class', 'notfocused ');
});
