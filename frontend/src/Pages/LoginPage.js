
import './LoginPage.css';
// import { useHistory } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

import jwtDecode from 'jwt-decode';
import { useEffect, useRef,useState } from 'react';
import { width } from '@mui/system';
import Feedback from './Feedback';





const loadScript = (src) =>
new Promise((resolve, reject) => {
  if (document.querySelector(`script[src="${src}"]`)) return resolve()
  const script = document.createElement('script')
  script.src = src
  script.onload = () => resolve()
  script.onerror = (err) => reject(err)
  document.body.appendChild(script)
})


// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const LoginPage = () => {

    

    const history = useNavigate();

    const[user,setUser]=useState({});

    const googleButton = useRef(null);
  
    useEffect(() => {
        console.log("hii")
      const src = 'https://accounts.google.com/gsi/client'
      const id = "850437360379-h1u1l3i31ja9scja53s2rvnjqa976iid.apps.googleusercontent.com"
  
      loadScript(src)
        .then(() => {
            
          /*global google*/
          console.log(google)
          google.accounts.id.initialize({
            client_id: id,
            callback: handleCredentialResponse,
          })
          google.accounts.id.renderButton(
             
            googleButton.current, 
            { theme: 'outline', size: 'large' } 
          )
        })
        .catch(console.error)
  
    }, [])
  
    function handleCredentialResponse(response) {
      console.log("Encoded JWT ID token: " + response.credential);
      var userObject=jwtDecode(response.credential);
      console.log(userObject);
      console.log(userObject);
      setUser(userObject);
      document.getElementById('signInDive').hidden=true;
      history('/Ratings');
    }
  
    function handleSignOut(event){
      setUser({});
      document.getElementById( 'signInDive').hidden=false;
    }
    return <div>

    
   
  

        <div className='pictureSide'>
           
           <img className='Picture1' src='Group 15.png' alt='playground'/>
           <img className='Picture2' src='pngkey 1.png' alt='playground'/>
           <img className='Picture3' src='Component 2.png' alt='playground'/>

        </div>
        <div className='loginSide'>

            <div className='logContain'  >
            <h1>Welcome Back</h1>
            <p>Maecenas sagittis eros quis erat suscipit, vitae.</p>

            <div className='loginContainer'>
            <label>Email</label><br></br>
            <input placeholder='Enter Your Email' type={'text'}></input><br></br>
           
            <label>Password</label><br></br>
            <input placeholder='Enter Your Password' type={'password'}></input>
            </div>

            <a href='' className='forgetPassword'>Forget Password?</a><br></br>

            <button type='submit'>Sign in</button>
         
          
 <div id='signInDive'  ref={googleButton}  style={{width:800}} ></div>

 {/* {
        user && <div>

        <img src={user.picture}></img>
        <h3>{user.name}</h3>
        <button onClick={ (e) =>handleSignOut(e)}>Sign Out</button> 
        </div>


        
    } */}
            
           


 
             
           
           

            </div>
            
        </div>
    </div>
}

LoginPage.propTypes = propTypes;
LoginPage.defaultProps = defaultProps;
// #endregion

export default LoginPage;