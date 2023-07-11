$("nav").load("/public/html/nav.html", "data", () => {
    /**
     * 将mask置于其后
     */
    {
        $("nav").append("<div class='nav-mask'></div>")
    }
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
                "name": "Tags",
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
        let temp_program_pc = $("#nav-program-pc")
        let temp_program_mb = $("#nav-program-mb")
        let text_program_pc = temp_program_pc.html()
        let text_program_mb = temp_program_mb.html()
        for (let v of NAV_DATA) {
            /**
             * 快速替换{name}和{href}
             * @param {string} str template里含有{href}和{name}的内容
             * @returns {string} 替换成功的str
             */
            let rep = (str) => str.replace("{href}", v.href)
                .replace("{name}", v.name)
            // PC端
            temp_program_pc.before(rep(text_program_pc))
            // 移动端
            temp_program_mb.before(rep(text_program_mb))
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
                $(".site-title").fadeOut(500)
            },
            hide: () => {
                $(".nav-mask").fadeOut(500)
                $(".site-title").fadeIn(500)
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
                setTimeout(() => {
                    isShow = true
                }, 500)
            }
        })
        // 关闭侧边栏
        $(".nav-mask").click(() => {
            if (isShow === true) {
                menuMask.hide()
                asideNavContent.hide()
                setTimeout(() => {
                    isShow = false
                }, 500)
            }
        })
    }
})
$("footer").load("/public/html/footer.html")

$("#mask").fadeOut(1000)