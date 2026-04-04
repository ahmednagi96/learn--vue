import Assignment from "./Assignment.js"
export default {
   
   components:{Assignment},
    template:`
     <div v-show="assignments.length">
        <h3>{{title}}</h3>
        <ul>
         <assignment   
         v-for="assingment in assignments" :key="assingment.id"

         :assingment="assingment"
         ></assignment>
        </ul>
      </div>
    `,
    props:{
        assignments:Array,
        title:String
    }
}