import './PopupDelete.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
const PopupDelete = ({ message, onConfirm, onCancel }) => {
    return (
        <div className='popupDelete'>
        <div className='bodyPopup'>
            <FontAwesomeIcon className='icon' icon={faTriangleExclamation} />
            <h2 className='message'>{message}</h2>
            <div className='buttons'>
                <button className='ok' onClick={onConfirm}>OK</button>
                <button className='cancel' onClick={onCancel}>Cancel</button>
            </div>
        </div>
    </div>
    )
}

export default PopupDelete