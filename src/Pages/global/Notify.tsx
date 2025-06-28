import { useSelector } from "react-redux"
import styles from "./Notify.module.css"
import { RootState } from "../../reducer"
import NotifyCard, { NotifyCardPropsInterfact } from "./Notify_Card"

export default function Notify() {
    const notifications: NotifyCardPropsInterfact[] = useSelector((state: RootState)=>state.global_reducer.notify)
    console.log("Notifications : ",notifications)
    return (
        <div className={`${styles.noitfy_box}`}>
            {
                notifications.map((notif: NotifyCardPropsInterfact,index)=>{
                    return (
                        <NotifyCard id={notif.id} msg={notif.msg} type={notif.type} />
                    )
                })
            }
        </div>
    )
}