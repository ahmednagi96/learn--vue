import Assignment from "./Assignment.js"
import AssignmentTags from "./AssignmentTags.js";
export default {
   components:{Assignment,AssignmentTags},
    template:`
       <div v-show="assignments.length" class="bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-sm h-fit">
    <div class="flex justify-between items-center mb-5">
        <h3 class="font-bold text-slate-800 text-lg uppercase tracking-wider">
            {{ title }}
        </h3>
        <span class="bg-slate-200 text-slate-600 px-2.5 py-0.5 rounded-full text-xs font-bold">
            {{ assignments.length }}
        </span>
    </div>

         <assignment-tags 
         :initial-tags="assignments.map(a=>a.tags)"
         v-model:currentTag="currentTag"
         ></assignment-tags>

    <ul class="space-y-3">
        <assignment   
            v-for="assingment in assignmentsfiltered" 
            :key="assingment.id"
            :assingment="assingment"
        ></assignment>
    </ul>
</div>
    `,
    props:{
        assignments:Array,
        title:String
    },
   data(){
    return {
      currentTag:"all"
    }
   },
    computed:{
      assignmentsfiltered(){
        if(this.currentTag ==='all'){
          return this.assignments;
        }
        return this.assignments.filter(a=> a.tags === this.currentTag);
      }
    }
  
}