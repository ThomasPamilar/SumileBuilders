import './profilecreation.css'
import Back from '../../images/back.png'
import User from '../../images/user.png'
import React,{useState} from 'react'
const ProfileCreation = () =>{
    const [bday, setBday] = useState('text');
    const [started, setStarted] = useState('text');
    return(
        <section className="container">
            <div className='header'><img src={Back} alt="back" className="backButton"/>Employee Information</div>
            <div className='basic_info'>

                <div className='pictureContainer'>
                    <img src={User} className="pictureBox" alt="user" />
                    <p>Choose File</p>
                </div>
                <div className='textBoxContainer'>
                    <input type="text" className='textBox name' placeholder='Name' />
                    <input 
                        type={bday} 
                        className='textBox bday'  
                        onFocus={() => setBday('date')} 
                        onBlur={() => setBday('text')} 
                        placeholder='Bday' />
                    <input type="text" className='textBox contact' placeholder='Contact #' />
                    <input type="text" className='textBox address' placeholder='Address' />
                    <input type="text" className='textBox rate' placeholder='Rate' />
                    <input 
                        type={started}
                        className='textBox started' 
                        onFocus={() => setStarted('date')} 
                        onBlur={() => setStarted('text')}
                        placeholder='Date Started' />
                    <input type="text" className='textBox team' placeholder='Team Name' />
                </div>
            </div>

        </section>
    )
}
export default ProfileCreation