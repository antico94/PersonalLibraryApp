import React, {useEffect, useRef} from 'react';
import fb from './../../assets/svg/fb.svg';
import linkedin from './../../assets/svg/linkedin.svg';
import twitter from './../../assets/svg/twitter.svg';
import './login.css';

const LoginPage = () => {
  const switchCtn = useRef(null);
  const switchC1 = useRef(null);
  const switchC2 = useRef(null);
  const switchCircle = useRef([]);
  const switchBtn = useRef([]);
  const aContainer = useRef(null);
  const bContainer = useRef(null);
  const allButtons = useRef([]);

  useEffect(() => {
    const getButtons = (e) => e.preventDefault();

    const changeForm = (e) => {
      switchCtn.current.classList.add('is-gx');
      setTimeout(() => {
        switchCtn.current.classList.remove('is-gx');
      }, 1500);

      switchCtn.current.classList.toggle('is-txr');
      switchCircle.current[0].classList.toggle('is-txr');
      switchCircle.current[1].classList.toggle('is-txr');

      switchC1.current.classList.toggle('is-hidden');
      switchC2.current.classList.toggle('is-hidden');
      aContainer.current.classList.toggle('is-txl');
      bContainer.current.classList.toggle('is-txl');
      bContainer.current.classList.toggle('is-z200');
    };

    for (let i = 0; i < allButtons.current.length; i++) {
      allButtons.current[i].addEventListener('click', getButtons);
    }
    for (let i = 0; i < switchBtn.current.length; i++) {
      switchBtn.current[i].addEventListener('click', changeForm);
    }
  }, []);

  return (
      <div className="main">
        <div className="container a-container" ref={aContainer}>
          <form className="form" id="a-form" method="" action="">
            <h2 className="form_title title">Create Account</h2>
            <div className="form__icons">
              <img className="form__icon" src={fb} alt="Facebook_Logo"/>
              <img className="form__icon" src={linkedin} alt="LinkedIn_Logo"/>
              <img className="form__icon" src={twitter} alt="Twitter_Logo"/>
            </div>
            <span className="form__span">or use email for registration</span>
            <input className="form__input" type="text" placeholder="Name"/>
            <input className="form__input" type="text" placeholder="Email"/>
            <input className="form__input" type="password"
                   placeholder="Password"/>
            <button className="form__button button submit">SIGN UP</button>
          </form>
        </div>
        <div className="container b-container" ref={bContainer}>
          <form className="form" id="b-form" method="" action="">
            <h2 className="form_title title">Sign in to Website</h2>
            <div className="form__icons">
              <img className="form__icon" src={fb} alt="Facebook_Logo"/>
              <img className="form__icon" src={linkedin} alt="LinkedIn_Logo"/>
              <img className="form__icon" src={twitter} alt="Twitter_Logo"/>
            </div>
            <span className="form__span">or use your email account</span>
            <input className="form__input" type="text" placeholder="Email"/>
            <input className="form__input" type="password"
                   placeholder="Password"/>
            <a className="form__link">Forgot your password?</a>
            <button className="form__button button submit">SIGN IN</button>
          </form>
        </div>
        <div className="switch" ref={switchCtn} id="switch-cnt">
          <div className="switch__circle"
               ref={(el) => switchCircle.current[0] = el}></div>
          <div className="switch__circle switch__circle--t"
               ref={(el) => switchCircle.current[1] = el}></div>
          <div className="switch__container" ref={switchC1} id="switch-c1">
            <h2 className="switch__title title">Already a member?</h2>
            <p className="switch__description description">
              Welcome back, we missed you!
                          </p>
              <button className="switch__button button switch-btn"
                      ref={(el) => switchBtn.current[0] = el}>
                Sign in
              </button>

          </div>
          <div className="switch__container is-hidden" ref={switchC2}
               id="switch-c2">
            <h2 className="switch__title title">Create an account</h2>
            <p className="switch__description description">
              Create an account and start your journey with us!</p>
                          <button className="switch__button button switch-btn"
                      ref={(el) => switchBtn.current[1] = el}>
                Sign up
              </button>
          </div>
        </div>
      </div>);
};
export default LoginPage;
