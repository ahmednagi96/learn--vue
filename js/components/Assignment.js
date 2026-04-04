export default{
    template :`
     <li >
            <label :for="assingment.id">
              {{assingment.name}}
              <input type="checkbox" v-model="assingment.completed" />
            </label>
          </li>
    `,
    props:{
        assingment:Object 
    }

}