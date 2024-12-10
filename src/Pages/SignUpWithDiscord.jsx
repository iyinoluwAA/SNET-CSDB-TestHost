import { useState } from 'react';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { supabase } from '../Services/SupabaseClient';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import '../Styles/SignUpWithDiscord.css'
import logo from '../assets/SNET-Logo.png';
import Loading from '../Components/Loading';
// import { useNavigate } from 'react-router-dom';
import Modal from '../Components/Modal'


const SignUpWithDiscord = () => {
// const navigate = useNavigate();
const [ isLoading, setIsLoading ] = useState(false);
const[ error , setError ] = useState('');
const[showModal, setShowModal] = useState(true);

// Hide modal when user proceeds
const handleModalProceed = () => {
     setShowModal(false);
}

     const handleDiscordButton = async ()=>{
          setIsLoading(true);
          setError('');

          try {
               const { error } = await supabase.auth.signInWithOAuth({
                    provider: 'discord',
                    options : {
                         redirectTo : 'http://localhost:5173/setup-username-password'
                    },
               });
               if (error) throw error; 
                } catch (error) {
                setError('DIscord sign-up failed. please try again');
                setIsLoading(false);
                console.log(error);
                }
          }
    return ( 
          
         <section className="form-container">
               {/* Show the modal first */}
               {showModal && <Modal onProceed={handleModalProceed} />}

                {/* Show the signup form only after the modal is dismissed */}
                {!showModal && (
                     <>
                     <section id="app-content" >
                    <img src={logo} alt="App Logo" className="appLogo" />
                    <h2>SingularityNET Collobration Skill Database</h2>
                    { isLoading ? (
                    <Loading />
               ) : (
                    <button onClick={handleDiscordButton} className="discord-button" >
                    <FontAwesomeIcon  icon={faDiscord} style={{ marginRight: '8px' }} />
                    Sign up with Discord</button>
                    )};
                    { error && <p className="error-message">{error}</p> }        
                </section>   
                    </>
                )}
            </section>
          
     );
}
 
export default SignUpWithDiscord;