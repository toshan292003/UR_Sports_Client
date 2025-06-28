import * as act from "./actions"
import {v4 as uuidv4} from "uuid"

interface GlobalReducerInterface{
    notify: {
        msg: string,
        type: "SUCCESS" | "ERROR" | "WARNING",
        id: string
    }[]
}

const initState: GlobalReducerInterface = {
    notify: []
}

interface GlobalAction {
    type: string;
    payload: any;
}

export const global_reducer = (state: GlobalReducerInterface = initState, action: GlobalAction) => {
    switch (action.type) {
        case act.CALL_NOTIFY: 
            const new_notif = {id: uuidv4(), msg: action.payload.msg, type: action.payload.type}
            const isDuplicate = state.notify.some(notif => notif.msg === new_notif.msg && notif.type === new_notif.type)
            if(!isDuplicate)
                return { ...state, notify: [...state.notify, new_notif]}
            return state
        
        case act.CLOSE_NOTIFY:
            const newlist = state.notify.filter((notif)=>{
                return notif.id !== action.payload.id
            })
            return {...state, notify: newlist}

        case act.RESET_NOTIFY:
            return {...state, notify: []}
        
        default: return state;
    }
}