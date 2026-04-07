import Assignment from "./Assignment.js"
import AssignmentTags from "./AssignmentTags.js";
export default {
   components:{Assignment,AssignmentTags},
    template:`
     <div v-show="assignments.length" class="relative bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-sm h-fit transition-all duration-300 hover:shadow-md">
    
    <button 
        @click="$emit('toggleList')"
        v-show="canShow"
        class="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-rose-200 group"
        
    >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-5 transform group-hover:rotate-90 transition-transform duration-300">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
    </button>

    <div class="flex justify-between items-center mb-6 pr-8"> <h3 class="font-bold text-slate-800 text-lg uppercase tracking-wider border-l-4 border-blue-500 pl-3">
            {{ title }}
        </h3>
        <span class="bg-blue-100 text-blue-600 px-2.5 py-0.5 rounded-full text-xs font-black ring-1 ring-blue-200">
            {{ assignments.length }}
        </span>
    </div>

    <div class="mb-6">
        <assignment-tags 
            :initial-tags="assignments.map(a=>a.tags)"
            v-model:currentTag="currentTag"
        ></assignment-tags>
    </div>

    <ul class="space-y-3">
        <assignment   
            v-for="assingment in assignmentsfiltered" 
            :key="assingment.id"
            :assingment="assingment"
        ></assignment>
    </ul>

    <div class="mt-4 pt-4 border-t border-slate-100">
        <slot></slot>
    </div>
</div>
    `,
    props:{
        assignments:Array,
        title:String,
        canShow:{
          type:Boolean,
          default:false
        }
       
    },
   data(){
    return {
      currentTag:"all",
    }
   },
    computed:{
      assignmentsfiltered(){
        if(this.currentTag ==='all'){
          return this.assignments;
        }
        return this.assignments.filter(a=> a.tags === this.currentTag);
      }
    },
    methods:{
      toggleList(){
        this.showList= !this.showList;
      }
    }
  
}