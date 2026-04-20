<script setup>
import TeamFooter from "@/components/Teams/TeamFooter.vue";
import TeamHeader from "@/components/Teams/TeamHeader.vue";
import TeamMembers from "@/components/Teams/TeamMembers.vue";
import teamData from "@/team.json";



</script>

<template>
 <TeamHeader :team-data="teamData" />

  <div class="place-self-center flex flex-col gap-y-3">
  <TeamMembers :team-data="teamData"/>
  </div>
 <TeamFooter  :team-data="teamData"/>
</template>
