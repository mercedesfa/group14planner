  import './Login.css'
 import email_icon from '../assets/email.png'
 import password_icon from '../assets/password.png'
 
  export default function Login() {
      
      return (
          <div className='container'>
              <div className="header">
                  <div className="text">Login</div>
                  <div className="underline"></div>
              </div>
              <div className="inputs">
                  <div className="input">
                      <img src={email_icon} alt="" />
                      <input type="email" placeholder="Email"/>
                  </div>
                  <div className="input">
                      <img src={password_icon} alt="" />
                      <input type="password" placeholder="Password"/>
                  </div>
              </div>
              <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>
              <div className="new-here">New Here? <span>Click Here!</span></div>
              <div className="submit-container">
                  <div className="submit">Login</div>
              </div>
          </div>
      )
  }
  