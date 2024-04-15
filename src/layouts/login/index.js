import './index.scss'
import svgLogo from '../../assets/images/grafana_icon.svg'
import {useState} from "react";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom";

export function LoginLayout(){
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const nav = useNavigate()

  const handleSubmit = () => {
    return nav('/')
  }

  const checkValidate = (value) => {
    if (value.lengh <= 8) {
      toast('Username is required')
    }
  }

  return (<>
    <ToastContainer className='custom' position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"/>
    <div className='login-page'>
      <div className='login-page__from'>
        <div className='login-page__from__header'>
          <img src={svgLogo} alt='Grafana Logo'/>
          <h1>Welcome to Grafana</h1>
        </div>
        <div className='login-page__from__body'>
          <div className='login-page__from__body__input'>
            <label htmlFor='username-input'>Email or username <span style={{color: "red"}}>*</span></label>
            <br/>
            <input id='username-input' value={username} onChange={(e) => setUsername(e.target.value)} type='text'
                   placeholder='Email or Username' onBlur={e => checkValidate(e.target.value)} required/>
          </div>
          <div className='login-page__from__body__input'>
            <label htmlFor='password-input'>Password <span style={{color: "red"}}>*</span></label>
            <br/>
            <input id='password-input' value={password} onChange={(e) => setPassword(e.target.value)}
                   onBlur={e => checkValidate(e.target.value)} type='password'
                   placeholder='Password' required/>
          </div>
          <hr/>
          <div className='login-page__from__body__submit'>
            <button onClick={handleSubmit}>Log in</button>
            <br/>
            <a href='/forgot'>
              Forgot your password?
            </a>
          </div>
        </div>
      </div>

      <div className='login-page__footer'>
        <div className='login-page__footer__item'>Documentation</div>
        <div className='login-page__footer__item'>Support</div>
        <div className='login-page__footer__item'>CommunityOpen</div>
        <div className='login-page__footer__item'>Sourcev9.3.6 (978237e7cb)</div>
        <div className='login-page__footer__item'>New version available!</div>
      </div>
    </div>
  </>)
}