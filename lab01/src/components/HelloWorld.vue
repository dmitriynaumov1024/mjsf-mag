<script setup>
let keys = [
  "name", "group", "speciality"
]

let me = {
  name: "Дмитро Наумов",
  group: "8.1213-іпз",
  speciality: "інженерія програмного забезпечення"
}

let locale = {
  name: "ім'я",
  group: "група",
  speciality: "спеціальність"
}

let greeting = "Hell to world!"
</script>

<template>
  <h3>{{greeting}}</h3>
  <table>
    <template v-for="key in keys">
      <tr>
        <td>{{locale[key]}} :</td>
        <td>{{me[key]}}</td>
      </tr>
    </template>
  </table>
</template>
