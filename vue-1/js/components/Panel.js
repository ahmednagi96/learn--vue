export default {
  template: `
  <div class="relative inline-block mb-10">

  <slot/>
  <div v-if="$slots.head1" class="text-green-500">
  <slot name="head1"/>
  </div>
<div v-if="$slots.head2" class="text-blue-500">
  <slot name="head2"/>
  </div>
  </div>
    
    `,
};
