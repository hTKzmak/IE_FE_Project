import style from "./Contact.module.css"

import {ReactComponent as Instagram} from "./icons/ic-instagram.svg"
import {ReactComponent as WhatsApp} from "./icons/ic-whatsapp.svg"

function Contact(){
    return(
        <div className={style.contact}>
            <h1>Contact</h1>
            <div className={style.contactBlocks}>
                <div className={style.contactBlock}>
                    <p>Phone</p>
                    <h1>+7 (499) 350-66-04</h1>
                </div>
                <div className={style.contactBlock}>
                    <p>Socials</p>
                    <div className={style.socialMedia}>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com"><Instagram/></a>
                        <a target="_blank" rel="noreferrer" href="https://www.whatsapp.com"><WhatsApp/></a>
                    </div>
                </div>
                <div className={style.contactBlock}>
                    <p>Address</p>
                    <a target="_blank" rel="noreferrer" href="https://maps.app.goo.gl/1okmu45voKEVEYGh9"><h1>Dubininskaya Ulitsa, 96, Moscow, <br/> Russia, 115093</h1></a>
                </div>
                <div className={style.contactBlock}>
                    <p>Working Hours</p>
                    <h1>24 hours a day</h1>
                </div>
            </div>
        </div>
    )
}

export default Contact