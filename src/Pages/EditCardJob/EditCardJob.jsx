import { Container } from 'react-bootstrap'
import NavBar2 from '../../Components/NavBar2/NavBar2'
import './EditCardJob.css'
function EditCardJob() {
    return (
        <section className='editjob'>
        <NavBar2/>
        <Container>
            <div className="title">
                <h2>Edit Job</h2>
            </div>
            <form action="">
                <div className="input1">
                    <label htmlFor="" className='label'>Company name</label>
                    <input type="text" className='company-name' />
                </div>
                <div className="input2">
                    <label htmlFor="" className='label'>Job title</label>
                    <input type="text" className='job-title' />
                </div>
                <div className="input3">
                    <label htmlFor="" className='label'>Level</label>
                    <input type="text" className='level' />
                </div>
                <div className="input4">
                    <label htmlFor="" className='label'>Experience</label>
                    <input type="text" className='experience' />
                </div>
                <div className="input5">
                    <label htmlFor="" className='label'>Time</label>
                    <input type="text" className='time' />
                </div>
                <div className="input6">
                    <label htmlFor="" className='label'>Skills</label>
                    <input type="text" className='skills' />
                </div>
                <div className="input7">
                    <label htmlFor="" className='label'>Address</label>
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

export default EditCardJob