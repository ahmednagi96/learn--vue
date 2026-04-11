import swal from "sweetalert"

export default{
    methods:{
        flash(msg){
            swal("Success !",msg,"success");
        }
    }
}