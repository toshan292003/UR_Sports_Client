import { useEffect, useState } from "react"
import styles from "./Navbar.module.css"
import { RootState } from "../../reducer"
import { useDispatch, useSelector } from "react-redux"
import { CALL_NOTIFY, RESET_NOTIFY } from "../../store/actions"

interface formDataInterface {
    username: string,
    email: string,
    password: string,
    confirm_password: string
}

export default function Signup() {
    const [formdata, setformdata] = useState<formDataInterface>({
        username: "",
        email: "",
        password: "",
        confirm_password: ""
    })
    const notify_list = useSelector((state: RootState) => state.global_reducer.notify)
    const dispatch = useDispatch();

    const OnLogin = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch({type: CALL_NOTIFY, payload: {msg: `something ${Math.random()}`, type: "SUCCESS"}});
    }

    const HandleFormDataChange = (type: "username" | "password" | "email" | "confirm_password", value: string) => {
        setformdata(prevvalue => ({
            ...prevvalue,
            [type]: value
        }))
    }

    return (
        <div className={`${styles.navbox} --dds-flex-center`}>
            <form>
                <input type="text" placeholder="Username" onClick={(e) => {HandleFormDataChange("username", (e.target as HTMLInputElement).value)}} />
                <input type="text" placeholder="email" onClick={(e) => {HandleFormDataChange("email", (e.target as HTMLInputElement).value)}} />
                <input type="text" placeholder="Password" onClick={(e) => {HandleFormDataChange("password", (e.target as HTMLInputElement).value)}} />
                <input type="text" placeholder="Confirm Password" onClick={(e) => {HandleFormDataChange("confirm_password", (e.target as HTMLInputElement).value)}} />
                <button onClick={OnLogin}>Login</button>
            </form>

            <button onClick={()=>{
                dispatch({type: RESET_NOTIFY, payload: null})
            }}>Reset</button>
        </div>
    )
}