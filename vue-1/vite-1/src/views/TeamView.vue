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

let showModal = ref(false);
</script>

<template>
  <Modal @close="showModal = !showModal" :showModal="showModal">
    <template #form>
      <form  class="modal-form">
        <div class="form-group">
          <label for="email">Email Address</label>
          <input type="email" id="email"  required />
        </div>

        <div class="form-group flex-row">
          <input type="checkbox" id="status"  />
          <label for="status">Active Status</label>
        </div>

        <button type="submit" class="submit-btn">Save Changes</button>
      </form>
    </template>
  </Modal>

  <TeamHeader @add="showModal = !showModal" />

  <div class="place-self-center flex flex-col gap-y-3">
    <TeamMembers />
  </div>
  <TeamFooter />
</template>
<style scoped>
.modal-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px 0;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.submit-btn {
  background-color: #4f46e5; /* لون أزرق احترافي */
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 10px;
}

.submit-btn:hover {
  background-color: #4338ca;
}

.form-group label {
  font-weight: bold;
  font-size: 0.9rem;
}

.form-group input[type="email"] {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.flex-row {
  flex-direction: row;
  align-items: center;
  gap: 10px;
}
</style>
