<script setup>
import { onMounted } from "vue";

defineProps({
    label: String,
});
let emit=defineEmits(['update:label'])

function changeTab(e) {
    let val = e.target.value,
      start = e.target.selectionStart,
      end = e.target.selectionEnd;
    e.target.value = val.substring(0, start) + "\t" + val.substring(end);
    e.target.selectionStart = e.target.selectionEnd = start + 1;  
}
</script>
<template>
  <div class="max-w-2xl mx-auto mt-10">
    <label
      for="message"
      class="block mb-2 text-sm font-semibold text-slate-700 uppercase tracking-wider"
    >
      Your Message
    </label>
    <br />

    <textarea
      @keyup="emit('update:label',$event.target.value)"
      v-text="label"
      @keydown.tab.prevent="changeTab"
      id="message"
      rows="6"
      class="w-full p-4 text-slate-700 bg-white border border-slate-200 rounded-xl shadow-sm focus:ring-4 focus:ring-blue-100 focus:border-blue-500 focus:outline-none transition-all duration-200 ease-in-out placeholder:text-slate-400 resize-none font-mono text-sm leading-relaxed"
      placeholder="Type something here..."
    />

    <p class="mt-2 text-xs text-slate-500 italic">
      Tip: Press Tab to indent (if you implemented the JS we discussed!)
    </p>
  </div>
</template>
