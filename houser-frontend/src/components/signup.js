import React, { Component } from 'react';
import axiosInstance from '../axiosApi';
// import { useHistory } from 'react-router-dom';
import axios from 'axios';



export class signup extends Component {

    constructor() {  
        super();  
      
        this.state = {  
          Email: '', 
          Name: '',
          Mob_no: '', 
          Password: '',
          Re_password: '',
        }  

        this.Email = this.Email.bind(this);  
        this.Password = this.Password.bind(this);  
        this.Name = this.Name.bind(this);  
        this.Re_password = this.Re_password.bind(this);  
        this.Mob_no = this.Mob_no.bind(this);  
        this.register = this.register.bind(this);
    }

    Email(event) {  
        this.setState({ Email: event.target.value })  
    }  
      
    Mob_no(event) {  
        this.setState({ Mob_no: event.target.value })  
    }  
      
    Password(event) {  
        this.setState({ Password: event.target.value })  
    } 
    
    Re_password(event) {  
        this.setState({ Re_password: event.target.value })  
    } 
    
    Name(event) {  
        this.setState({ Name: event.target.value })  
    }  

    

    async register(event) {   

        event.preventDefault();
        // try {
        //     const response = await axiosInstance.post('/users/', {
        //         name: this.state.Name,  
        //         password: this.state.Password,  
        //         email: this.state.Email,  
        //         mob_number: this.state.Mob_no,  
        //         re_password: this.state.Re_password
        //     });
        //     return response;
        // } catch (error) {
        //     console.log(error.stack);
        //     this.setState({
        //         errors:error.response.data
        //     });
        // }
        // axiosInstance
		// 	.post(`users/`, {
		// 		name: this.state.Name,  
        //         password: this.state.Password,  
        //         email: this.state.Email,  
        //         mob_number: this.state.Mob_no,  
        //         re_password: this.state.Re_password
		// 	})
		// 	.then((res) => {
		// 		//history.push('/login');
		// 		console.log(res);
		// 		console.log(res.data)
		// 	}).catch(function (err){
        //         console.log(err)
        //     });
            

        axios.post('http://localhost:8000/auth/users/',{
            name: this.state.Name,  
            password: this.state.Password,  
            email: this.state.Email,  
            mob_number: this.state.Mob_no,  
            re_password: this.state.Re_password
        })
        .then(function (res){
            console.log(res.data)
            // localStorage.setItem('token', res.data.access);
            localStorage.setItem('user', res.config.data);
            console.log(localStorage.getItem('user'));
        }).catch(function (err){
            console.log(err)
        })
        
    }  
    
    render() {
        return (
            <div className="row">
                <div className="col col-md-4 mx-auto px-4 border border-secondary rounded">
                    <form className="">
                        <h2 className="my-4 text-success"><u>Register</u></h2>

                        <div className="form-group mb-3">
                            <input type="email" className="form-control" onChange={this.Email} placeholder="Enter email" />
                        </div>

                        <div className="form-group mb-3">
                            <input type="text" className="form-control" onChange={this.Name} placeholder="Enter name" />
                        </div>

                        <div className="form-group mb-3">
                            <input type="text" className="form-control" onChange={this.Mob_no} placeholder="Mob. number" />
                        </div>

                        <div className="form-group mb-3">
                            <input type="password" className="form-control" onChange={this.Password} placeholder="Enter password" />
                        </div>

                        <div className="form-group mb-3">
                            <input type="password" className="form-control" onChange={this.Re_password} placeholder="Re-enter password" />
                        </div>

                        <button type="submit" onClick={this.register} className="btn btn-outline-success btn-lg btn-block my-2">Register</button>
                        <p className="forgot-password text-right">
                            Already registered? <a href="#">log in</a>
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}

export default signup
