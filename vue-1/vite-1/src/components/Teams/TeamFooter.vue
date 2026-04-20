<script setup>

defineProps({
    teamData:Object
})
</script>
<template>
<footer class="mt-12 bg-gray-100 py-4 text-center text-gray-600">
    <h5 class="font-semibold text-lg">{{teamData.name}} - {{ teamData.spots }} Member Team</h5>
  </footer>
</template>
