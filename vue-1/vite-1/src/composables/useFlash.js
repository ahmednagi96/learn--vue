

import swal from "sweetalert";
export function useFlash(){
 
    function flash(title,msg,level="success"){
        swal(title,msg,level);
    }
    function flashAlert(title,msg,level="success"){
        alert("welcome");
    }

    return {
        flash,flashAlert
    }    
}