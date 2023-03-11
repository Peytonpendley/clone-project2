import './EmailRow.css'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { IconButton } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { useNavigate } from "react-router-dom";

function EmailRow({ id, title, subject, description, time }) {

    const navigate = useNavigate()

    return(
        <div onClick={() => navigate(`/mail`)} className='emailRow'>
            <div className='emailRow__options'>
                <CheckBoxOutlineBlankIcon/>
                <IconButton>
                    <StarBorderIcon/>
                </IconButton>
                <IconButton>
                    <LabelImportantIcon/>
                </IconButton>
            </div>
            <h1 className='emailRow__title'>
                {title}
            </h1>
            <div className='emailRow__message'>
                <h2>{subject}
                    <span className='emailRow__description'>
                        {description}
                    </span>
                </h2>
            </div>
            <div className='emailRow__time'>
                {time}
            </div>
        </div>
    )
}

export default EmailRow