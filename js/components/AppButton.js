export default {
  template: `
    <div class="flex justify-center items-center h-full">
     <button
  :class="
            {
                'bg-red-500 hover:bg-red-600 active:scale-95 transition-all text-white px-6 py-2': type === 'primary',
                'bg-blue-500 hover:bg-blue-400 active:scale-95 transition-all text-purple px-6 py-2': type === 'secondary',
                'bg-red-500 hover:bg-red-600 active:scale-95 transition-all text-black px-6 py-2': type === 'danger',
                'rounded shadow-md cursor-pointer disabled:cursor-not-allowed':true,
                'is-loading' : processing 
            }
         "
  :disabled=false
>
  <slot />
</button>
</div>
    `,
  props: {
    type: {
      type: String,
      default: "primary",
    },
    processing:{
      type:Boolean,
      default:true
      
  },
  }
};
