import AssignmentList from "./AssignmentList.js";
export default{

    components:{AssignmentList},
    template:`
        <section class="max-w-5xl mx-auto py-10 px-4">
            <header class="mb-10 text-center">
                <h1 class="text-4xl font-extrabold text-slate-900 mb-2">My Daily Tasks</h1>
                <p class="text-slate-500">Keep track of your progress and stay productive.</p>
            </header>

            <div class="grid md:grid-cols-2 gap-8 items-start">
                <assignment-list :assignments="filter.inprogress" title="In Progress" class="border-t-4 border-t-amber-400"></assignment-list>
                <assignment-list :assignments="filter.completed" title="Completed" class="border-t-4 border-t-emerald-400"></assignment-list>
            </div>

            <form  @submit.prevent="add" class="max-w-md mx-auto mt-12 ">
                <div class="flex shadow-sm rounded-lg overflow-hidden border border-slate-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all">
                    <input 
                        v-model="newAssignment"
                        placeholder="What needs to be done?" 
                        class="w-full px-4 py-3 text-slate-700 outline-none bg-white"
                    />
                    <button 
                        type="submit" 
                        class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-bold transition-colors shrink-0"
                    >
                        Add
                    </button>
                </div>
            </form>
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
        add(e){
          //e.preventDefault();
          if(this.newAssignment.trim() === "") return ;
          this.asssingments.push({
            name:this.newAssignment,
            completed:false,
            id:this.asssingments.length + 1
          });
          this.newAssignment="";
        }
      }
      ,data() {
        return {

          newAssignment:"",
          asssingments: [
            {
              name: "Data 1",
              completed: false,
              id: 1,
            },
            {
              name: "Data 2",
              completed: false,
              id: 2,
            },
            {
              name: "Data 3",
              completed: false,
              id: 3,
            },
          ],
        };
      },
}