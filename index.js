/**
 * 处理页面滚动时导航栏的状态
 */
let scrolling = false
let isNavDisplay = false

window.onscroll = () => {
    scrolling = true
}

setInterval(() => {
    if (scrolling == true) {
        scrolling = false
        // 决定导航栏是否隐藏
        if (isNavDisplay == false && window.scrollY >= 400) { // 显示
            isNavDisplay = true
            $("nav").animate({top: "0"}, 200)
        }
        else if (isNavDisplay == true && window.scrollY < 300) { // 隐藏
            isNavDisplay = false
            $("nav").animate({top: "-60px"}, 200)
        }
    }
}, 300)

