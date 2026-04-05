data() is dynamic so here in this lesson i used data to bund dato to input vale
@submit == v-on:submit
@submit.prevent= add(e){e.preventDefault}
 
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