import { Container } from "react-bootstrap"
import NavBar2 from '../../Components/NavBar2/NavBar2'
import './AddArticle.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAsterisk } from "@fortawesome/free-solid-svg-icons"
const AddArticle = () => {
    return (
        <section className="addarticle">
            <NavBar2/>
            <Container>
                <div className="title">
                    <h2>Add New Article</h2>
                </div>
                <form action="">
                <div className="input1">
                    <label htmlFor="" className='label'>Title</label>
                    <FontAwesomeIcon className='star' icon={faAsterisk} />
                    <input type="text" className='article-title' />
                </div>
                <div className="input2">
                    <label htmlFor="" className='label'>Content</label>
                    <FontAwesomeIcon className='star' icon={faAsterisk} />
                    <input type="text" className='content' />
                </div>
                <div className="input3">
                    <label htmlFor="" className='label'>Choose image</label>
                    <FontAwesomeIcon className='star' icon={faAsterisk} />
                    <input type="file" className='picture' />
                </div>
                <div className="button">
                    <button>Save</button>
                </div>
            </form>
            </Container>
        </section>
    )
}

export default AddArticle