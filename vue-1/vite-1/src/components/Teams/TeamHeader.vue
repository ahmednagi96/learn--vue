<script setup>
defineProps({
    teamData:Object
})
</script>

<template>
<header class="flex justify-between">
    <div>
      <button
        class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
        :disabled="teamData.members.length === teamData.spots"
        
      >
        Add Member ({{ teamData.spots - teamData.members.length }} Spots Left)
      </button>
    </div>
    <div>
      <div class="inline-flex items-center text-3xl relative">
        <img
          src="../../images/smile.png"
          alt="smile"
          class="mr-2"
          style="width: 50px; height: 50px; object-fit: contain"
        />
        <h3>{{teamData.name}}  Team</h3>
        <div
          class="bg-green-400 w-5 h-5 text-xs text-white rounded-full flex justify-center items-center absolute -right-4 -top-2"
        >
        {{teamData.spots}} 
        </div>
      </div>
    </div>
  </header>
</template>
