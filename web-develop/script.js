$("div[id!='main']").css("display", "none")

num = 0
pageNum = 0

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

    if ($("#" + pageNum).length) {
        $("div[id!='"+ pageNum + "']").css("display", "none")
        $("div[id='"+ pageNum + "']").css("display", "block")
    }

    if(num == 2) {
        $("#page2 > p > img").each(function() {
            width = (120 - $(this).width()) / 2
            $(this).css({"margin-left": width, "margin-right": width})
        })
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

    if (num >= 15 && num <= 23) {
        $("#ex").css("display", "flex")
        $("#ex > div").css("display", "block")
    }

    if (num == 16) {
        $("#ex").html("<div></div>")
    }

    if (num == 17) {
        $("#ex > div").css({"width": "20vw", "height": "40vh", "padding": "5vh 5vw", "border-radius": "10px", "box-shadow": "0px 0px 5px 1px grey"})
    }

    if (num == 19) {
        $("#ex > div").append("<p>텍스트</p>")
    }

    if (num == 21) {
        $("#ex > div").append("<img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'>")
    }

    if (num == 23) {
        $("#ex > div").append("<a href='https://www.naver.com'>하이퍼링크</a>")
    }

    if (num >= 25 && num <= 26) {
        $("#page24 > p > span:nth-of-type(" + (num - 24) + ")").animate({scrollTop: 60}, 300)
    }

    if (num == 27) {
        $("#page24 > p:nth-of-type(2)").animate({width:0, height: 0}, 300)
        $("#page24 > p:nth-of-type(3)").animate({opacity: 1}, 300)
    }

    if (num == 29) {
        $("#page28 > p:nth-of-type(1)").animate({opacity: 0, width: 0, height: 0}, 300)
        $("#page28 > p:nth-of-type(2)").animate({opacity: 0.5, marginBottom: 30}, 300)
        $("#page28 > p:nth-of-type(3)").animate({opacity: 1, marginTop: 0, height: 500}, 300)
        $("#page28 > p:nth-of-type(3) span").animate({scrollTop: 8})
        $("#page28 > p:nth-of-type(3) span:nth-of-type(2)").animate({opacity: 0, width: 0, height: 0}, 300)
        $("#page28 > p:nth-of-type(3) span:nth-of-type(4)").animate({opacity: 0, width: 0, height: 0}, 300)
        $("#page28 > p:nth-of-type(3) span:nth-of-type(6)").animate({opacity: 0, width: 0, height: 0}, 300)
        $("#page28 > p:nth-of-type(3) span:nth-of-type(8)").animate({opacity: 0, width: 0, height: 0}, 300)
        $("#page28 > p:nth-of-type(3) span:nth-of-type(10)").animate({opacity: 0, width: 0, height: 0}, 300)
    }

    if (num == 30) {
        $("#page28 > p:nth-of-type(3) > span:nth-of-type(1)").animate({scrollTop: 50}, 300)
    }

    if (num == 31) {
        $("#page28 > p:nth-of-type(3) > span:nth-of-type(3)").animate({scrollTop: 50}, 300)
    }

    if (num == 32) {
        $("#page28 > p:nth-of-type(3) > span:nth-of-type(5)").animate({scrollTop: 50}, 300)
    }

    if (num == 33) {
        $("#page28 > p:nth-of-type(3) > span:nth-of-type(7)").animate({scrollTop: 50}, 300)
    }

    if (num == 34) {
        $("#page28 > p:nth-of-type(3) > span:nth-of-type(9)").animate({scrollTop: 50}, 300)
    }

    if (num >= 35 && num <= 56) {
        $("#ex").css("display", "flex")
        $("#ex > div").css("display", "block")
    }

    if (num == 35) {
        $("#ex").css("opacity", "0")
        windowWidth = ($(window).width() * 0.6) - 100
        $("#page28").animate({width: windowWidth}, 300, function() {
            $("#ex").animate({opacity: 1}, 300)
        })
    }

    if (num == 37) {
        $("#ex > div").css("background", "red")
    }

    if (num == 38) {
        $("#ex > div").css("background", "blue")
    }

    if (num == 39) {
        $("#ex > div").css("background", "green")
    }

    if (num == 40) {
        $("#ex > div").css("background", "linear-gradient(180deg, rgba(223,0,0,1) 2.7%, rgba(214,91,0,1) 15.1%, rgba(233,245,0,1) 29.5%, rgba(23,255,17,1) 45.8%, rgba(29,255,255,1) 61.5%, rgba(5,17,255,1) 76.4%, rgba(202,0,253,1) 92.4%)")
    }

    if (num == 41) {
        $("#ex > div").css("background", "white")
    }

    if (num == 43) {
        $("#ex > div > p").css("color", "yellow")
    }

    if (num == 44) {
        $("#ex > div > p").css("color", "purple")
    }

    if (num == 45) {
        $("#ex > div > p").css("color", "pink")
    }

    if (num == 46) {
        $("#ex > div > p").css("color", "black")
    }

    if (num == 48) {
        $("#ex > div > p").animate({fontSize: 60}, 300)
    }

    if (num == 49) {
        $("#ex > div > p").animate({fontSize: 120}, 300)
    }

    if (num == 50) {
        $("#ex > div > p").animate({fontSize: 10}, 300)
    }

    if (num == 51) {
        $("#ex > div > p").animate({fontSize: 40}, 300)
    }

    if (num == 53) {
        $("#ex > div").animate({width: 100}, 300)
    }

    if (num == 54) {
        windowWidth = ($(window).width() * 0.2)
        $("#ex > div").animate({width: windowWidth, height: 400}, 300)
    }

    if (num == 55) {
        windowHeight = ($(window).height() * 0.4)
        $("#ex > div").animate({height: windowHeight}, 300)
    }

    if (num == 56) {
        windowWidth = ($(window).width() * 0.2)
        $("#ex > div > img").animate({width: windowWidth}, 300)
    }

    if (num >= 58 && num <= 59) {
        $("#page57 > p > span:nth-of-type(" + (num - 57) + ")").animate({scrollTop: 60}, 300)
    }

    if (num == 61) {
        $("#page61").css("display", "flex")
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