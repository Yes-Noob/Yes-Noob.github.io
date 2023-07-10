$("nav").load("/public/html/nav.html", "data", () => {
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
                let element = $(".menu-mask")
                element.attr("style", `
                    animation: show 0.5s;
                    animation-iteration-count: 1;
                    background-color: #000a;
                `)
                //element.animate({ width: "-=300px" }, 500)
            },
    
            hide: () => {
                let element = $(".menu-mask")
                element.attr("style", `
                    animation: hide 0.5s;
                    animation-iteration-count: 1;
                `, () => {
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
    }
});

$("footer").load("/public/html/footer.html");
/**
 * 动画的遮罩消失
 */
{
    setTimeout(() => {
        $(".screen-mask").hide()
    }, 1000)
}
