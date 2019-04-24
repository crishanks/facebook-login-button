import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'

export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: '',
    name: '',
    email: '',
    image: ''
  }

  componentClicked = () => {
    console.log('clicked')
  }

  responseFacebook = (response) => {
    console.log(response)
    this.setState({
      isLoggedIn: true,
      name: response.name,
      userID: response.id,
      email: response.name,
      image: response.picture.data.url
    })
  }

  render() {
    let fbContent;
    if (this.state.isLoggedIn) {
      fbContent = (
        <div style={{
          width: '400px',
          margin: 'auto',
          background: '#f4f4f4',
          padding: '20px'
        }}>
          <img src={this.state.image} alt={this.state.name}/>
          <h2>Welcome {this.state.name}</h2>
        </div>
      )
    } else {
      fbContent = (<FacebookLogin
        appId="272849900285453"
        autoLoad={true}
        fields="name,email,picture"
        onClick={this.componentClicked}
        callback={this.responseFacebook} />
      )
    }

    return (
      <div style={{margin: '5%'}}>
        {fbContent}
      </div>
    )
  }
}