export default {
    template :`
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
    `,

    data(){
        return {
            newAssignment:""
        }
    },
    methods:{
        add(){
            if(this.newAssignment.trim() === '')return ;
            this.$emit("add",this.newAssignment);
            this.newAssignment="";
        }
    }
}