<script setup lang="ts">
import PushPageButton from '~/components/PushPageButton.vue'
import { useTodoState } from '~/composables/useTodoState';
const {complete} = useTodoState()

</script>
<template>
  <div>
    <p class="text-5xl mx-3 mb-3">Complete</p>
    <push-page-button title="未完了" path="/"></push-page-button>
    <v-card v-for="(value, index) in complete" :title="value" class="mb-3 mx-3">
    </v-card>
  </div>
</template>
