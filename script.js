$("div[id!='main']").css("display", "none")

num = 0

function prev() {
    num -= 1
    pageNum = "page" + num
    if (num <= 0) {
        num = 0
        pageNum = "main"
    }
}

function next() {
    num += 1
    pageNum = "page" + num
    if (num == 0) pageNum = "main"
}

document.querySelectorAll("button").forEach( (button) => {
    button.addEventListener("click", onclickButton)
});

function onclickButton() {

    if (num < 4 || num == 8 || num > 14) {

        $("div[id!='"+ pageNum + "']").css("display", "none")
        $("div[id='"+ pageNum + "']").css("display", "block")

        if (num == 2) {
            $("#page2 > p:nth-of-type(n+2) > img").each(function() {
                $(this).css("margin", "0 " + (150 - (this.width)) / 2 + "px")
            })
        }

        if (num == 3) {
        }
        $("#page3 > p > span").scrollTop()
    }

    if (num >= 4 && num <= 6) {
        $("#page3 > p > span:nth-of-type(" + (num - 3) + ")").animate({scrollTop: 60}, 300)
    }

    if (num == 7) {
        $("#page3 > p:nth-of-type(2)").animate({width:0, height: 0}, 300)
        $("#page3 > p:nth-of-type(3)").animate({opacity: 1}, 300)
    }

    if (num == 9) {
        $("#page8 > p:nth-of-type(1)").animate({opacity: 0, width: 0, height: 0}, 300)
        $("#page8 > p:nth-of-type(2)").animate({opacity: 0.5, marginBottom: 30}, 300)
        $("#page8 > p:nth-of-type(3)").animate({opacity: 1, marginTop: 0, height: 500}, 300)
        $("#page8 > p:nth-of-type(3) span").animate({scrollTop: 8})
        $("#page8 > p:nth-of-type(3) span:nth-of-type(1)").animate({opacity: 0, width: 0, height: 0}, 300)
        $("#page8 > p:nth-of-type(3) span:nth-of-type(4)").animate({opacity: 0, width: 0, height: 0}, 300)
        $("#page8 > p:nth-of-type(3) span:nth-of-type(6)").animate({opacity: 0, width: 0, height: 0}, 300)
        $("#page8 > p:nth-of-type(3) span:nth-of-type(8)").animate({opacity: 0, width: 0, height: 0}, 300)
        $("#page8 > p:nth-of-type(3) span:nth-of-type(10)").animate({opacity: 0, width: 0, height: 0}, 300)
    }

    if (num == 10) {
        $("#page8 > p:nth-of-type(3) > span:nth-of-type(2)").animate({scrollTop: 50}, 300)
    }

    if (num == 11) {
        $("#page8 > p:nth-of-type(3) > span:nth-of-type(3)").animate({scrollTop: 50}, 300)
    }

    if (num == 12) {
        $("#page8 > p:nth-of-type(3) > span:nth-of-type(5)").animate({scrollTop: 50}, 300)
    }

    if (num == 13) {
        $("#page8 > p:nth-of-type(3) > span:nth-of-type(7)").animate({scrollTop: 50}, 300)
    }

    if (num == 14) {
        $("#page8 > p:nth-of-type(3) > span:nth-of-type(9)").animate({scrollTop: 50}, 300)
    }
}

$(document).keydown(function(event) {
    if (event.keyCode == 32 || event.which == 32 || event.keyCode == 39 || event.which == 39) {
        next()
        onclickButton()
    } else if(event.keyCode == 37 || event.which == 37) {
        prev()
        onclickButton()
    }
});