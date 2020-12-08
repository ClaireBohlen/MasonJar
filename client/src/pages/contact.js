import React from 'react';
import axios from 'axios';
import Nav from "../components/Nav";
import "../index.css"
import Footer from '../components/Footer'
import developers from "../developers.json";
import DeveloperCard from "../components/DeveloperCard";


class Contact extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      developers: developers,
    }
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST", 
      url:"http://localhost:3002/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent."); 
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    this.setState({name: ``, email: ``, message: ``})
  }
  
  render() {
    return(
      <>
      <div className="contact-container">
        <Nav />
        <div className ="row suggestion-row">
          <div className="container col-5 home-container">
            <div className="aboout-form">
              <h1 className = "h1-contact">Meet the Team!</h1>
                {this.state.developers.map(developer => (
                    <DeveloperCard {...developer} /> 
                ))}
            </div>
          </div>
        
          <div className="container col-5 home-container signup">
            <div className="form-container-backdrop">
              <h1 className = "h1-contact">Contact Us</h1>
                <p className="p-contact">Didn't see something you like? Make a suggestion to the Shaker Team!</p>
              <div className="App">
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                  <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                  </div>
                  <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                  </div>
                  <div className="form-group">
                      <label htmlFor="message">Suggestion</label>
                      <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                  </div>
                  <button type="submit" className="btn btn-primary button-contact-form">Submit</button>
                </form>
              </div>
            </div>
          </div>
         </div>
         <Footer/>
      </div>
      </>
    );
  }

  onNameChange(event) {
	  this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	  this.setState({email: event.target.value})
  }

  onMessageChange(event) {
	  this.setState({message: event.target.value})
  }
}

export default Contact;