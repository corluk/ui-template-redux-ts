import { ITodoState } from './store';
import atom from "jotai"
import axios from "axios";
 
interface Todo  {
    title : string 
}

export interface ITodoState {
    list : Todo[]
    loading : boolean
}

const todoAtom = atom<ITodoState>({list:[],loading:false})
const useTodo = create<ITodoState>((set)=>({

    list : [] ,
    loading: false, 
    add : async (item: any)=> {
        await axios.get("/")
        set((state: ITodoState) => ({
            list : [ ...state.list , item ]
        }))
    }, 
    remove : (index: number)=>{ 

        set((state: ITodoState)=>({

            list : [...state.list.splice(0,index),...state.list.splice(index+1)]

        }))
    }

})) 

export {useTodo}