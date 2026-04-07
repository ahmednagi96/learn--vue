import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";
export default{

    components:{AssignmentList,AssignmentCreate},
    template:`
        <section class="max-w-5xl mx-auto py-10 px-4">
            <header class="mb-10 text-center">
                <h1 class="text-4xl font-extrabold text-slate-900 mb-2">My Daily Tasks</h1>
                <p class="text-slate-500">Keep track of your progress and stay productive.</p>
            </header>

            <div class="grid md:grid-cols-2 gap-8 items-start">
                <assignment-list :assignments="filter.inprogress" title="In Progress" class="border-t-4 border-t-amber-400">
                  <assignment-create  @add="addAssignment"></assignment-create>   
                </assignment-list>
                <assignment-list :assignments="filter.completed" title="Completed" class="border-t-4 border-t-emerald-400" can-show 
                v-if="showList"
                @toggleList="showList = !showList"
                ></assignment-list>
            </div>

        
        </section>
    `,
    computed: {
       
        filter(){
            return {
                inprogress:this.asssingments.filter(a => !a.completed),
                completed:this.asssingments.filter(a => a.completed)
            };
        }
      }, 
      
      methods:{
        addAssignment(name){
          if(name === "") return ;
          this.asssingments.push({
            name:name,
            completed:false,
            id:this.asssingments.length + 1
          });
        }
      }
      ,data() {
        return {
          asssingments: [],
          showList:true
        };
      },
      created(){
        fetch("http://localhost:3006/assignments")
          .then(response=>response.json())
          .then(assignments=>this.asssingments=assignments);
      }
}