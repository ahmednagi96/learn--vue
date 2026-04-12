
import { ref, watch } from "vue";
export function useStorage(key,val=null){


    let value=ref(read());
    function read(){
      return    Json.parse(localStorage.getItem(key)) ?? val;
    }
    watch(value,write);
    function write(){
            if(value.value == "" || value === null){
                localStorage.removeItem(key)
            }else{
                localStorage.setItem(key,JSON.stringify(value.value));
            }
    }
    return value;
    
}