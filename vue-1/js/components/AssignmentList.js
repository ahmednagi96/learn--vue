import Assignment from "./Assignment.js"
export default {
   
   components:{Assignment},
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
     <div class="flex gap-2 mb-6">
            <button 

                v-for="tag in tags" 
                @click="getNewAssignments(tag)"
                class="border rounded px-2 py-px text-xs transition-colors duration-200 border-blue-500 text-blue-500 hover:bg-blue-200 hover:text-black"
                :class="{
                'bg-blue-400 text-white ': newAssignment === tag
                }"
            >
                {{ tag }}
            </button>
        </div>

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
        newAssignment:"all"
      }
    },
    computed:{
      tags(){
        return ["all", ...new Set(this.assignments.map(tag=> tag.tags))];
      },
      assignmentsfiltered(){
        if(this.newAssignment ==='all'){
          return this.assignments;
        }
        return this.assignments.filter(a=> a.tags === this.newAssignment);
      }
    }
    ,methods:{
      getNewAssignments(tag){
        this.newAssignment = tag;
      }
    }
}