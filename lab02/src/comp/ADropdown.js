import { h } from "vue"

export default {
    props: {
        items: Object,
        modelValue: undefined
    },
    emits: [
        "update:modelValue"
    ],
    methods: {
        reset() {
            this.filteredItems = []
            this.selectedIndex = -1
            this.searchedText = ""
            this.expand = false
            this.$emit("update:modelValue", null)
        },
        onSearchInput(value) {
            this.input = true
            this.searchedText = value?.trim() ?? ""
            this.selectedIndex = -1
            if (this.searchedText.length > 0) {
                value = this.searchedText.toLowerCase()
                this.expand = true
                this.filteredItems = this.items.filter(item => item.toLowerCase().includes(value))
            }
            else {
                this.expand = false
            }
        },
        onClickTop() {
            if (this.expand == true) {
                this.expand = false
            }
            else if (this.expand == false && this.filteredItems.length) {
                this.expand = true
            }
        },
        onClickOutside() {
            this.expand = false
        },
        onClickListItem(value) {
            this.expand = false
            this.input = false
            this.$emit("update:modelValue", value)
        },
        onKeyboard(keyCode) {
            if (keyCode == "ArrowDown" && this.selectedIndex < this.filteredItems.length-1) {
                this.selectedIndex+=1
                if (this.$refs.dropdown && this.selectedIndex > 2) {
                    this.$refs.dropdown.scrollTop = this.$refs.dropdown.scrollHeight * (this.selectedIndex-3) / this.filteredItems.length
                }
            }
            if (keyCode == "ArrowUp" && this.selectedIndex >= 0) {
                this.selectedIndex-=1
                if (this.$refs.dropdown && this.selectedIndex < this.filteredItems.length-1) {
                    this.$refs.dropdown.scrollTop = this.$refs.dropdown.scrollHeight * (this.selectedIndex-3) / this.filteredItems.length
                }
            }
            if (keyCode == "Enter" && this.selectedIndex >= 0) {
                this.onClickListItem(this.filteredItems[this.selectedIndex])
            }
        }
    },
    data() {
        return {
            filteredItems: [],
            selectedIndex: -1,
            searchedText: this.modelValue,
            expand: false,
            input: false
        }
    },
    render() {
        return h("div", { class: ["dropdown-wrapper", "mb-2"] }, [
            h("div", { class: "top" }, [
                h("button", { 
                    class: ["button", "button-inline"], 
                    onClick: ()=> this.reset() }, "\u2a2f"),
                h("input", { 
                    value: this.input? this.searchedText : this.modelValue, 
                    placeholder: "start typing...",
                    onClick: ()=> this.onClickTop(), 
                    onKeydown: ({ code })=> this.onKeyboard(code), 
                    onInput: ({ target })=> this.onSearchInput(target.value) }),
            ]),
            this.expand? [
                h("div", { class: ["dropdown-background"], onClick: ()=> this.onClickOutside() }),
                h("div", { class: ["dropdown"], ref: "dropdown" }, [
                    this.filteredItems?.length ? 
                    this.filteredItems.map((item, i)=> {
                        return h("div", { 
                            class: ["dropdown-list-item", (i==this.selectedIndex)?"selected":null], 
                            onClick: ()=> this.onClickListItem(item) }, this.$slots.item({ item }))
                    }) :
                    h("div", { class: ["dropdown-list-item"] }, "\u2205")
                ])
            ] : 
            null
        ])
    }
}
