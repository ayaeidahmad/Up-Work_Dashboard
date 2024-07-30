import { Container } from "react-bootstrap"
import NavBar2 from "../../Components/NavBar2/NavBar2"
import './EditArticle.css'
const EditArticle = () => {
    return (
        <section className='editjob'>
        <NavBar2/>
        <Container>
            <div className="title">
                <h2>Edit Article</h2>
            </div>
            <form action="">
            <div className="input1">
                    <label htmlFor="" className='label'>Title</label>
                    <input type="text" className='article-title' />
                </div>
                <div className="input2">
                    <label htmlFor="" className='label'>Content</label>
                    <input type="text" className='content' />
                </div>
                <div className="input3">
                    <label htmlFor="" className='label'>Choose image</label>
                    <input type="file" className='picture pic' />
                </div>
                <div className="button">
                    <button>Save</button>
                </div>
            </form>
        </Container>
    </section>
    )
}

export default EditArticle