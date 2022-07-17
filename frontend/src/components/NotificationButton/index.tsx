import notificationButton from "../../assets/img/notification_icon.svg"
import "./style.css"

function NotificationButton() {

    return (
        <div className="dsmeta-red-btn">
            <img src={notificationButton} alt="notificationButton" />
        </div>
    )

}

export default NotificationButton