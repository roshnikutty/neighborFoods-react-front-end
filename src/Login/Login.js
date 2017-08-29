import React from 'react';
import { connect } from 'react-redux';
import { login } from './action';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';


class LogIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(`INSIDE HANDLESUBMIT--- ${this.state.username.value}, ${this.state.password.value}`);
        return this.props.login({
            username: this.state.username.value,
            password: this.state.password.value
        });
    }
    render() {
        return (
            <div>
                <header>
                    {/*<h1><Link to="/">NeighborFoods</Link></h1>*/}
                    <p className="header-login-button">
                        <button className="page-login-signup-button" onClick={this.props.gotoSignup.bind(this)}>Sign Up</button>
                    </p>
                </header>
                <form onSubmit={this.handleSubmit.bind(this)} id="login-form">
                    <div className="black-box login">
                        <p><input type="text" ref={(input) => this.setState({username: input})} className="blank" placeholder="User ID" size="35" required /></p>
                        <p><input type="password" ref={(input) => this.setState({password: input})} className="blank" placeholder="Password" size="35" required /></p>
                        <p className="login_button">
                            <button className="signup-login-button" >Log In</button>
                        </p>
                    </div>
                </form>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => ({
    login: (attributes) => {
        console.log("mapDispatchToProps logging out creds", attributes);
        dispatch(login(attributes));
    },
    gotoSignup: () => dispatch(push('/signup'))
})
export default connect(null, mapDispatchToProps)(LogIn)