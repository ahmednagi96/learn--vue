export default {
    template :`
       <div class="flex gap-2 mb-6">
            <button 

                v-for="tag in tags" 
                @click="$emit('changeTag',tag)"
                class="border rounded px-2 py-px text-xs transition-colors duration-200 border-blue-500 text-blue-500 hover:bg-blue-200 hover:text-black"
                :class="{
                'bg-blue-400 text-white ': currentTag === tag
                }"
            >
                {{ tag }}
            </button>
        </div>
    `,

    props:{
       initialTags:Array,
       currentTag:String
    }
    ,computed:{
      tags(){
        return ["all", ...new Set(this.initialTags)];
      },
    }
}