import "./SendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux'
import { closeSendMessage } from './features/mailSlice'

function SendMail() {
  const { register, handleSubmit, watch, formState: {errors} } = useForm();
  const onSubmit = (data) => {
    console.log(data)
  }
  
  const dispatch = useDispatch()
  
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h1>New message</h1>
        <CloseIcon onClick={() => dispatch(closeSendMessage())} className="sendMail__close" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="To"
          type="email"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="senMail__error">To is required!</p>}
        <input
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        />
        {errors.subject && <p className="senMail__error">Subject is required!</p>}
        <input
          placeholder="Message..."
          type="text"
          {...register("message", { required: true })}
        />
        {errors.message && <p className="sendMail__error">Message is required!</p>}
        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            varient="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
