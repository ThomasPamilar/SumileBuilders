import './login.css'
import Logo from '../../images/logo.png'
const Login = () =>{
    return(
        <div className='container scale-in-center'>
            <div className='content-container '>
                <img src={Logo} alt="logo" className="Logo" />
                <span className="divider" />
                <div className="inputs">
                    <input type="text" placeholder="Username"/>
                    <input type="text" placeholder="Password"/>
                    <span className="forgot">
                        Forgot Password?
                    </span>
                </div>
                <div className="login-button">Login</div>
            </div>
        </div>
    )
}

export default Login