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
            $("nav").animate({ top: "0" }, 200)
        }
        else if (isNavDisplay == true && window.scrollY < 300) { // 隐藏
            isNavDisplay = false
            $("nav").animate({ top: "-60px" }, 200)
        }
    }
}, 300)

/**
 * 侧边栏导航弹出
 */
let isShow = false

// 背景黑布
let menuMask = {
    show: () => {
        let element = $(".menu-mask")
        element.attr("style", `
            animation: show 0.5s;
            animation-iteration-count: 1;
            display: block;
            background-color: #000a;
        `)
        element.animate({ width: "-=300px" }, 500)
    },

    hide: () => {
        let element = $(".menu-mask")
        element.attr("style", `
            animation: hide 0.5s;
            animation-iteration-count: 1;
            display: block;
            width: calc(100% - 300px);
        `)
        element.animate({ width: "+=300px" }, 500, () => {
            element.css("display", "none")
        })
    }
}

// 侧边栏
let asideNavContent = {
    show: () => {
        let element = $(".aside-nav-content")
        element.animate({ right: "0" }, 500)
    },

    hide: () => {
        let element = $(".aside-nav-content")
        element.animate({ right: "-300" }, 500)
    }
}

// 打开侧边栏
$("#aside-nav-button").click(() => {
    menuMask.show()
    asideNavContent.show()
    setTimeout(() => {
        isShow = true
    }, 500)
})

// 关闭侧边栏
$(".menu-mask").click(() => {
    if (isShow === true) {
        menuMask.hide()
        asideNavContent.hide()
        setTimeout(() => {
            isShow = false
        }, 500)
    }
})

