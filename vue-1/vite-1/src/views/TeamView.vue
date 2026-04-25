<script setup>
import Modal from "@/components/Teams/Modal.vue";
import TeamFooter from "@/components/Teams/TeamFooter.vue";
import TeamHeader from "@/components/Teams/TeamHeader.vue";
import TeamMembers from "@/components/Teams/TeamMembers.vue";
//import teamData from "@/team.json";
import { useTeamStore } from "@/stores/TeamStore.js";
import { ref } from "vue";

let teamData = useTeamStore();
teamData.fill();

</script>

<template>
  

  <TeamHeader />

  <div class="place-self-center flex flex-col gap-y-3">
    <TeamMembers />
  </div>
  <TeamFooter />


</template>
