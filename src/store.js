import { create } from "zustand"



const store = ()=>({
    tasks:[{title:"do this task !", state:'ONGOING'}]
})
export const useStore= create(store)