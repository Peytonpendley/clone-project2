import "./SendMail.css"
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';

function SendMail() {

    return(
        <div className="sendMail">
            <div className="sendMail__header">
                <h1>New message</h1>
                <CloseIcon className="sendMail__close"/>
            </div>
            <form>
                <input type="" />
                <input type="" />
                <input type="" />

                <div className="sendMail__options">
                    <Button className="sendMail__send">Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail