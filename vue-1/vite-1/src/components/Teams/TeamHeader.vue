<script setup>
import { useTeamStore } from "@/stores/TeamStore.js";
import { ref } from "vue";
import Model from "@/components/Teams/Modal.vue";
import AddMemberModal from "./AddMemberModal.vue";
let teamData = useTeamStore();

</script>

<template>
  <header class="flex justify-between">
    <AddMemberModal />
    <div>
      <div class="inline-flex items-center text-3xl relative">
        <img
          src="../../images/smile.png"
          alt="smile"
          class="mr-2"
          style="width: 50px; height: 50px; object-fit: contain"
        />
        <h3>{{ teamData.name }} Team</h3>
        <div
          class="bg-green-400 w-5 h-5 text-xs text-white rounded-full flex justify-center items-center absolute -right-4 -top-2"
        >
          {{ teamData.spots }}
        </div>
      </div>
    </div>
  </header>
</template>
