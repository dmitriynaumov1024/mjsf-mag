const noChildren = {
    input: true,
    meta: true,
    br: true,
    link: true,
    img: true
}

export const tooltipDirective = {
    mounted(element, binding, vnode) {
        vnode._tooltip = { } // vnode can be used like a storage :D
        let options = binding.value
        /*
        options {
            text: String
            html: Boolean
            show: Boolean,
            condition: String[] 'always'|'focus'|'click'|'hover' 
            delay: Number,
            position: String 'top'|'right'|'bottom'|'left'|'pointer'
            align: String 'start'|'center'|'end'
        }
        */

        let elTooltip = document.createElement("span")
        elTooltip[options.html? "innerHTML": "innerText"] = options.text

        elTooltip.classList.add(
            "t-tooltip", 
            "t-position-"+options.position, 
            "t-align-"+options.align, 
            "t-posmode-absolute",
            ...(options.condition.map(item=> "t-show-"+item))
        )

        if (elTooltip.classList.contains("t-show-click")) {
            element.removeAttribute("clicked")
            vnode._tooltip.onclick = (evt)=> {
                if (evt.target == element) {
                    element.setAttribute("clicked", "")
                    evt.stopPropagation()
                }
                else {
                    element.removeAttribute("clicked")
                }
            }
            document.addEventListener("click", vnode._tooltip.onclick)
        }

        if (elTooltip.classList.contains("t-position-pointer")) {
            vnode._tooltip.onmousemove = (evt)=> {
                elTooltip.style.top = evt.offsetY + 16 + "px"
                elTooltip.style.left = evt.offsetX + 5 + "px"
            }
            element.addEventListener("mousemove", vnode._tooltip.onmousemove)
        }

        if (options.show === false) {
            elTooltip.setAttribute("show", options.show)
        }

        if (options.delay > 0) {
            elTooltip.style.transitionDelay = (options.delay - 100) + "ms"
            elTooltip.style.transitionDuration = "200ms"
        }

        if (noChildren[element.tagName.toLowerCase()]) {
            let wrapper = document.createElement("div")
            wrapper.classList.add("t-safe-wrapper")
            element.replaceWith(wrapper)
            wrapper.appendChild(element)
            wrapper.appendChild(elTooltip)
        }
        else {
            element.appendChild(elTooltip)
        }
    },
    beforeUnmount (element, binding, vnode) {
        if (vnode._tooltip?.onclick) {
            document.removeEventListener("click", vnode._tooltip.onclick)
        }
        if (vnode._tooltip?.onmousemove) {
            document.removeEventListener("onmousemove", vnode._tooltip.onmousemove)
        }
    }
}
