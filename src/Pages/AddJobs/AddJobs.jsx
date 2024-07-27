import { Container } from 'react-bootstrap'
import NavBar2 from '../../Components/NavBar2/NavBar2'
import './AddJobs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAsterisk } from '@fortawesome/free-solid-svg-icons'
const AddJobs = () => {
    return (
    <section className='addjob'>
        <NavBar2/>
        <Container>
            <div className="title">
                <h2>Add New Job</h2>
            </div>
            <form action="">
                <div className="input1">
                    <label htmlFor="" className='label'>Company name</label>
                    <FontAwesomeIcon className='star' icon={faAsterisk} />
                    <input type="text" className='company-name' />
                </div>
                <div className="input2">
                    <label htmlFor="" className='label'>Job title</label>
                    <FontAwesomeIcon className='star' icon={faAsterisk} />
                    <input type="text" className='job-title' />
                </div>
                <div className="input3">
                    <label htmlFor="" className='label'>Level</label>
                    <FontAwesomeIcon className='star' icon={faAsterisk} />
                    <input type="text" className='level' />
                </div>
                <div className="input4">
                    <label htmlFor="" className='label'>Experience</label>
                    <FontAwesomeIcon className='star' icon={faAsterisk} />
                    <input type="text" className='experience' />
                </div>
                <div className="input5">
                    <label htmlFor="" className='label'>Time</label>
                    <FontAwesomeIcon className='star' icon={faAsterisk} />
                    <input type="text" className='time' />
                </div>
                <div className="input6">
                    <label htmlFor="" className='label'>Skills</label>
                    <FontAwesomeIcon className='star' icon={faAsterisk} />
                    <input type="text" className='skills' />
                </div>
                <div className="input7">
                    <label htmlFor="" className='label'>Address</label>
                    <FontAwesomeIcon className='star' icon={faAsterisk} />
                    <input type="text" className='address' />
                </div>
                <div className="button">
                    <button>Save</button>
                </div>
            </form>
        </Container>
    </section>
    )
}

export default AddJobs