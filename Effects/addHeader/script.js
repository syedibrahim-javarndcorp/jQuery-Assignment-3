$("body").delegate("header","click", function () {
    $(this).after("<header>New Header Added</header>")
})