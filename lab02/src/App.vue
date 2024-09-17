<script setup>
import { reactive } from "vue"

import AButton from "./comp/AButton.js"
import ADropdown from "./comp/ADropdown.js"

let button1 = {
  labelText: "Save Document",
  iconSrc: "https://cdn-icons-png.flaticon.com/128/907/907027.png",
  type: "primary",
  color: "#783499",
  size: 1,
  onClick() {
    window.alert("you clicked 'Save' button!")
  }
}

let button2 = {
  labelText: "Print",
  iconSrc: "https://cdn-icons-png.flaticon.com/128/684/684906.png",
  type: "secondary",
  color: "#a93459",
  size: 1,
  onClick() {
    window.alert("you clicked 'Print' button!")
  }
}

let button3 = {
  labelText: "? About author",
  type: "inline",
  size: 1.25,
  color: "rgba(2, 137, 200, 1)",
  onClick() {
    window.alert("Дмитро Наумов, гр.8.1213")
  }
}

let dropdown1 = reactive({
  value: "",
  items: [
    "Vanilla",
    "Chocolate",
    "Fruity",
    "Phistachio",
    "Salty caramel",
    "Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "ITem 8",
    "Item 9", "Item A", "Item B", "Item C", "ITem D", "Item E", "ITem F", "Item 0"
  ]
})

</script>

<template>
  <div class="card mb-3">
    <h3 class="text-lg font-bold underline mb-2">Custom Buttons</h3>
    <AButton v-bind="button1" /> <AButton v-bind="button2" /> <AButton v-bind="button3" />
  </div>
  <div class="card mb-3">
    <h3 class="text-lg font-bold underline mb-2">Custom Searchable Dropdown</h3>
    <p>Select ice cream flavor:</p>
    <ADropdown :items="dropdown1.items" v-model="dropdown1.value">
      <template v-slot:item="{item}">
        <div>+ {{item}}</div>
      </template>
    </ADropdown>
    <p>You selected: {{dropdown1.value ?? 'nothing'}}</p>
  </div>
  <div class="mb-10"></div>
  <p>&copy; 2024 Dmytro Naumov <a href="mailto:naumov1024@gmail.com">naumov1024@gmail.com</a></p>
</template>
