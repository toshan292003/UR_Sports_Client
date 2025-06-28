import { useDispatch } from "react-redux"
import styles from "./Notify.module.css"
import { CLOSE_NOTIFY } from "../../store/actions";
import { useEffect, useState } from "react";

export interface NotifyCardPropsInterfact{
    id: string,
    msg: string,
    type: "SUCCESS" | "ERROR" | "WARNING"
}

export default function NotifyCard({id,msg,type}:NotifyCardPropsInterfact){
    const dispatch = useDispatch();
    const [animateOut,setAnimateOut] = useState<boolean>(false);
    const color = {
        background: type === "SUCCESS" ? "green" :
                    type === "ERROR" ? "red" : 
                    type === "WARNING" ? "yellow": "black",
        color: type === "SUCCESS" ? "green" :
                    type === "ERROR" ? "red" : 
                    type === "WARNING" ? "yellow": "black"
    }
     const RemoveNotify = () => {
        setAnimateOut(true);
        setTimeout(() => {
        dispatch({ type: CLOSE_NOTIFY, payload: { id } });
        }, 300);
    };
    useEffect(() => {
        const timer = setTimeout(() => {
            RemoveNotify();
        }, 3000);
        return () => clearTimeout(timer);
    }, []);
    return(
        <>
            <div className={`${styles.notify_card} ${animateOut ? styles.animate_out : styles.animate_in}`} style={color}>
                <span>{msg}</span>
                <span onClick={RemoveNotify}>&#10006;</span>
            </div>
        </>
    )
}