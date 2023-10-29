import { useEffect } from "react";

export function useEsc(close){
    useEffect(function(){
        function handlePress(e){
            if (e.key === 'Escape') {
                close();
            }
        }
        document.addEventListener("keydown",handlePress)
    
        return () => document.removeEventListener("keydown",handlePress)
    },[close])

}