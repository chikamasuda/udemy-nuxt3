<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  }
})

const router = useRouter()

const pushPage = (path) => {
  router.push(path)
}
</script>

<template>
  <v-row class="ma-10 text-5xl justify-center">
    <v-btn @click="pushPage(path)">
      {{ title }}
    </v-btn>
  </v-row>
</template>