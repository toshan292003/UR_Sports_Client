import * as act from "./actions"

interface UserInterface{
    id: string,
    username: string,
    photo: string
}

const initstate: UserInterface = {
    id: "",
    username: "",
    photo: ""
}

export const UserReducer = (state = initstate,action: {type:string, payload:any})=>{
    switch(action.type){
        case act.SETUSER: return{ ...state, id: action.payload.id, username: action.payload.username,photo: action.payload.photo }
        default: return state;
    }
}