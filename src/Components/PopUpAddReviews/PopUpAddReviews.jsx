import './PopUpAddReviews.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
const PopUpAddReviews = ({ page , show, closePopup, sendReview, review, setReview, rating, setRating }) => {
    return (
        show && (
            <div className="popup">
                <div className={page==="opinion" ? "popup-inner" : "popup-inner-apply-job"}>
                    <button className="close-btn" onClick={closePopup}>
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                    <h2 style={{display : page==="opinion" ? "" : "none"}}>Add Reviews</h2>
                    <h2 style={{display : page==="opinion" ? "none" : ""}}>Apply Here</h2>
                    <form action="">
                        <div className="name w-100">
                            <label className='lable-name' htmlFor="">{page==="opinion" ? "Review" :"Name"}</label>
                            <input className='text' type="text" placeholder={page==="opinion" ? "my review is ..." : "Aya Ahmad"} value={review} onChange={(e) => setReview(e.target.value)} required/>
                        </div>
                        <div className='input2' style={{display : page==="opinion" ? "" : "none"}}>
                            <label className='lable-name' htmlFor="">Name</label>
                            <input style={{display : page==="opinion" ? "" : "none"}} className='text' type="text" placeholder="Aya Ahmad" value={rating} onChange={(e) => setRating(e.target.value)} />
                        </div>
                        <div className="input3"  style={{display : page==="opinion" ? "none" : ""}}>
                            <label className='lable-email' htmlFor="">Email </label>
                            <input style={{display : page==="opinion" ? "none" : ""}} className='text' type="email" placeholder="ayaahmad@gmail.com" value={rating} onChange={(e) => setRating(e.target.value)} />
                        </div>
                        <div className='input-file' style={{display : page==="opinion" ? "none" : ""}}>
                            <label htmlFor="file">Please enter your CV :</label>
                            <input id='file' className='file' type="file" />
                        </div>
                        <button className='send' onClick={sendReview}>Send</button>
                    </form>
                </div>
            </div>
            )
    )
}

export default PopUpAddReviews