<script setup>

import { useTeamStore } from "@/stores/TeamStore.js";

let teamData=useTeamStore();
</script>
<template>
<footer class="mt-12 bg-gray-100 py-4 text-center text-gray-600">
    <h5 class="font-semibold text-lg">{{teamData.name}} - {{ teamData.spots }} Member Team</h5>
    <div id="hello">

    </div>
  </footer>
</template>
