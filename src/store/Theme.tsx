import * as act from "./actions"

interface ThemeStateInterface{
    mode: "light" | "dark"
}

const initState: ThemeStateInterface = {
    mode: "light"
}

interface ThemeAction {
    type: string;
    payload?: "light" | "dark";
}

export const themeReducer = (state: ThemeStateInterface = initState, action: ThemeAction) => {
    switch (action.type) {
        case act.CHANGETHEME: return { ...state, mode: (state.mode === "light" ? "dark" : "light") }
        default: return state;
    }
}