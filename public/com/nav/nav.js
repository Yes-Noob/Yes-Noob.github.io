/**
 * 将mask置于其后
 */
/**
 * 处理导航栏元素
 */
{
    // 导航栏项目数据
    const NAV_DATA = [
        {
            "name": "Home",
            "href": "/index.html"
        },
        {
            "name": "Archives",
            "href": "/custom-sites/replace.html"
        },
        {
            "name": "Timeline",
            "href": "/custom-sites/replace.html"
        },
        {
            "name": "Projects",
            "href": "/custom-sites/replace.html"
        }
    ]
    let text_program_pc = $("#nav-program-pc").html()
    let text_program_mb = $("#nav-program-mb").html()
    for (let v of NAV_DATA) {
        /**
         * 快速替换 {name} 和 {href}
         */
        let rep = (str) => str.replace("{href}", v.href).replace("{name}", v.name)
        // PC端
        $("#nav-program-pc").before(rep(text_program_pc))
        // 移动端
        $("#nav-program-mb").before(rep(text_program_mb))
    }
}

/**
 * 处理页面滚动时导航栏的状态
 */
{
    const DISPLAY_POS = 300
    let scrolling = false
    let isNavDisplay = false

    window.onscroll = () => {
        scrolling = true
    }

    setInterval(() => {
        if (scrolling == true) {
            scrolling = false
            // 决定导航栏是否隐藏
            if (isNavDisplay == false && window.scrollY >= DISPLAY_POS) { // 显示
                isNavDisplay = true
                $("nav").animate({ top: "0" }, 200)
            }
            else if (isNavDisplay == true && window.scrollY < DISPLAY_POS) { // 隐藏
                isNavDisplay = false
                $("nav").animate({ top: "-60px" }, 200)
            }
        }
    }, 300)
}

/**
 * 侧边栏导航弹出
 */
{
    let isShow = false
    // 背景黑布
    let menuMask = {
        show: () => {
            $(".nav-mask").fadeIn(500)
            $(".site-title").toggle()
        },
        hide: () => {
            $(".nav-mask").fadeOut(500)
            $(".site-title").toggle()
        }
    }
    // 侧边栏
    let asideNavContent = {
        show: () => {
            $(".aside-nav-content").animate({ right: "0" }, 500)
        },
        hide: () => {
            $(".aside-nav-content").animate({ right: "-300" }, 500)
        }
    }
    // 打开侧边栏
    $("#aside-nav-button").click(() => {
        if (isShow === false) {
            menuMask.show()
            asideNavContent.show()
            setTimeout(() => { isShow = true }, 500)
        }
    })
    // 关闭侧边栏
    $(".nav-mask").click(() => {
        if (isShow === true) {
            menuMask.hide()
            asideNavContent.hide()
            setTimeout(() => { isShow = false }, 500)
        }
    })
}