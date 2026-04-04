import AssignmentList from "./AssignmentList.js";
export default{

    components:{AssignmentList},
    template:`

     <assignment-list :assignments="filter.inprogress"  title="IN Progress" ></assignment-list>
     <assignment-list :assignments="filter.completed"  title="Completed" ></assignment-list>

    `,
    computed: {
       
        filter(){
            return {
                inprogress:this.asssingments.filter(a => !a.completed),
                completed:this.asssingments.filter(a => a.completed)
            };
        }
      },  data() {
        return {
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