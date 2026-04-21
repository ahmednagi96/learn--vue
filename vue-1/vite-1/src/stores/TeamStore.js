import { defineStore } from "pinia";
import teamData from "@/team.json";
export let useTeamStore=defineStore("team",{
   
    //data
    state:()=> ({
        name:"",
        spots:0,
        members:[]
    }),

    actions:{
        async fill(){
            this.$state=await teamData;
        },
        addNewTeam(){
            this.members.push({
              name:"new Name",
              email:"new-email@email.com",
              status:"Active"
            });
        }
    }
   ,getters:{
    reamining(){
        return this.spots - this.members.length
    }
   }
});