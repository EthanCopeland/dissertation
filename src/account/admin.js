import React from 'react';
import Signin from './signin.jsx';

class Admin extends React.Component {


  state = {"authenticated":false, "email":"", "password":"", admin_status:""}

  constructor(props) {
    super(props);
    this.state = {"authenticated":false, "email":"", "password":""}
 
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  postData = (url, myJSON, callback) => {
    fetch(url, {
      method: 'POST',
      headers: new Headers(),
      body: JSON.stringify(myJSON)
    })
      .then((response) => response.json())
      .then((data) => {
        callback(data)
      })
      .catch((err) => {
        console.log("something went wrong ", err)
      }
      );
  }

  loginCallback = (data) => {
    console.log(data)
    if (data.status === 200) {
      this.setState({ "authenticated": true, admin_status:data.admin_status })
      localStorage.setItem('myToken', data.token);
    }
  }

  componentDidMount() {
    if (localStorage.getItem('myToken')) {
      this.setState({ "authenticated": true });
    }
  }

  handleLoginClick = () => {
    const url = "http://unn-w18009982.newnumyspace.co.uk/KF6012/part1/api/login"
    let myJSON = { "email": this.state.email, "password": this.state.password }
    this.postData(url, myJSON, this.loginCallback)
  }

  handleLogoutClick = () => {
    this.setState({ "authenticated": false })
    localStorage.removeItem('myToken');
  }

  handlePassword = (e) => {
    this.setState({password:e.target.value})
  }
  handleEmail = (e) => {
    this.setState({email:e.target.value})
  }

  render() {
    let page = <Signin handleLoginClick={this.handleLoginClick} email={this.state.email} password={this.props.password}
                      handleEmail={this.handleEmail} handlePassword={this.handlePassword}/>
    if (this.state.authenticated) {
      page = <div>
              <button onClick={this.handleLogoutClick}>Log out</button>        
             </div>
    }

    return (
      <div>
        <h1>Admin</h1>
      </div>
    );
  }
}

export default Admin; 