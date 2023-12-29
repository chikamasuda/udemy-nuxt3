<script setup lang="ts">
import { useTodoState } from '~/composables/useTodoState';
import PushPageButton from '~/components/PushPageButton.vue'

const text = ref('')
const { todo, complete } = useTodoState()

const addTodo = () => {
  todo.value.push(text.value)
  text.value=""
}

const addComplete = (i: number) => {
  complete.value.push(todo.value[i])
  todo.value.splice(i, 1)
}


</script>
<template>
  <push-page-button title="完了済" path="/complete"></push-page-button>
  <v-row class="ma-10 text-5xl justify-center">
    <v-text-field v-model="text"></v-text-field>
    <v-btn class="ml-3" icon @click="addTodo"><v-icon>mdi-plus</v-icon></v-btn>
  </v-row>
  <v-card v-for="(value, index) in todo" :title="value" class="mb-3 mx-3">
    <v-btn @click="addComplete(index)">完了にする</v-btn>
  </v-card>
</template>
