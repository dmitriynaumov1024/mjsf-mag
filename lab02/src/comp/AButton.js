import { h } from "vue"

export default {
    props: {
        labelText: String,      // any text
        iconSrc: String,        // any valid URL
        color: String,          // any valid css color
        type: String,           // 'primary'|'secondary'|'inline'
        size: Number            // scale in range [0.5, 4.0]
    },
    emits: [
        "click"
    ],
    render() {
        return h("button", { class: [ "button", "button-"+this.type ], style: { "font-size": `${this.size*100}%`, "--color-accent": this.color ?? "#000000" }, onClick: ()=> this.$emit("click") }, [
            this.iconSrc? h("img", { class: ["icon-15"], src: this.iconSrc }) : null,
            h("span", {}, this.labelText)
        ])
    }
}
