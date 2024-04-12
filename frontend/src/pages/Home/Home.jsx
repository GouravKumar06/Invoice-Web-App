import React from 'react';
import './Home.css';
import { useNavigate,Link } from 'react-router-dom';

import Card from '../../components/shared/Card/Card';
import Button from '../../components/shared/Button/Button';

const Home = () => {
    const signInLinkStyle = {
      color: '#0077ff',
      fontWeight: 'bold',
      textDecoration: 'none',
      marginLeft: '10px',
    };

    const history = useNavigate();
    function startRegister() {
      history('/register');
    }
    return (
        <div className="cardWrapper">
            <Card title="Welcome to Codershouse!" icon="logo">

              {/* children */}
                <p className="text">
                  We’re working hard to get Codershouse ready for everyone!
                  While we wrap up the finishing youches, we’re adding people
                  gradually to make sure nothing breaks
                </p>

                <div>
                  <Button onClick = {startRegister} text="Get your username" />
                </div>

                <div className='signinWrapper'>
                  <span className='hasInvite'>
                    Have an invite text?
                  </span>
                  <Link style={signInLinkStyle} to="/login">
                    Sign in
                  </Link>
                </div>
            </Card>
        </div>
    );
};

export default Home;