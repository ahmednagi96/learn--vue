<script setup>
import TeamMember from "@/components/Teams/TeamMember.vue";

defineProps({
    teamData:Object
})
</script>

<template>
      <table class="table-fixed border-spacing-2 border-separate">
      <thead>
        <th class="text-left px-6 py-2">Name</th>
        <th class="text-left px-6 py-2">Email</th>
        <th class="text-left px-6 py-2">Status</th>
      </thead>
      <tbody>
        <TeamMember
          v-for="value in teamData.members"
          :name="value.name"
          :email="value.email"
          :status="value.status"
        />
      </tbody>
    </table>
    <p class="text-right text-gray-600 italic text-white" v-show=" teamData.spots === teamData.members.length ">
      There are no remaining team spots. Upgrade to add more.
    </p>
</template>