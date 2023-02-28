import "./SendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";

function SendMail() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data)
  }
  
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h1>New message</h1>
        <CloseIcon className="sendMail__close" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="To"
          type="email"
          {...register("to", { required: true })}
        />
        {errors?.to && <p className="senMail__error">To is Required!</p>}
        <input
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        />
        <div className="sendMail__message">
        <input
          placeholder="Message..."
          type="text"
          {...register("message", { required: true })}
        />
        </div>
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
