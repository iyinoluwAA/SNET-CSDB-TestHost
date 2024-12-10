import '../styles/SetUsernamePassword.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/SNET-Logo.png';
import { useState } from 'react';


const SetUsernamePassword = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return ( 
        <>
        <section className="form-container">
        <img src={logo} alt="App Logo" className="appLogo" />

            <h2>Set Username and Password</h2>
            <form className="UpForm" > 
                <input 
                 type="text"
                 className="input"
                 placeholder="Username"
                 // value={username}
                 required
                 />
                 <div className="password-input-container">
                  <input 
                    type={passwordVisible ? "text" : "password"}
                    className="input"
                    placeholder="Password"
                    // value={username}
                    required
                 />
                  <span
                        id="togglePassword"
                        className="eye-icon"
                        onClick={togglePasswordVisibility}
                    >
                       <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
                    </span>
                 </div>
                 <button type="submit">Save</button>
                 <p className="error-message">error</p>
            </form>
        </section>
        </>
     );
}
 
export default SetUsernamePassword;