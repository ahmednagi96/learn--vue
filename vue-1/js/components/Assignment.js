export default{
    template :`
        <li class="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 group">
            <label :for="assingment.id" class="flex items-center cursor-pointer w-full gap-3">
                <input 
                    type="checkbox" 
                    :id="assingment.id"
                    v-model="assingment.completed" 
                    class="w-5 h-5 rounded-md border-slate-300 text-blue-600 focus:ring-blue-500 transition-all cursor-pointer"
                />
                <span :class="{'line-through text-slate-400': assingment.completed, 'text-slate-700': !assingment.completed}" 
                      class="font-medium text-sm sm:text-base">
                    {{ assingment.name }}
                </span>
            </label>
            
            <span class="opacity-0 group-hover:opacity-100 transition-opacity text-slate-300 text-xs">#{{ assingment.id }}</span>
        </li>
    `,
    props:{
        assingment:Object 
    }

}