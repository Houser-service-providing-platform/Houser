// import React, { Component } from 'react'
// import axios from 'axios';

// var headers = {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//     }

// export class login extends Component {

//     constructor() {  
//         super();  
      
//         this.state = {  
//           Email: '',  
//           Password: '',
//         }  

//         this.Email = this.Email.bind(this);  
//         this.Password = this.Password.bind(this);  
//         this.login = this.login.bind(this);
//     }

//     Email(event) {  
//         this.setState({ Email: event.target.value })  
//     }  
            
//     Password(event) {  
//         this.setState({ Password: event.target.value })  
//     } 
    
//     login(event) {  

//         axios.post('http://localhost:8000/auth/jwt/create/',{
//             password: this.state.Password,  
//             email: this.state.Email,  
//         },{headers: headers})
//         .then(function (res){
//             console.log(res.data)
//             localStorage.setItem('access_token', res.data.access);
//             localStorage.setItem('refresh_token', res.data.refresh);
//         }).catch(function (err){
//             console.log(err)
//         })
//         event.preventDefault();
  
//         // fetch('http://localhost:8000/auth/jwt/create/', {  
//         //   method: 'post',  
//         //   headers: {  
//         //     'Accept': 'application/json',  
//         //     'Content-Type': 'application/json'  
//         //   },  
//         //   body: JSON.stringify({        
//         //     email: this.state.Email,  
//         //     password: this.state.Password,  
//         //   })  
//         // }).then((Response) => Response.json())  
//         //   .then((Result) => {  
//         //     if (Result.Status == 'Success')  
//         //             // this.props.history.push("/Dashboard"); 
//         //         alert(' User Created!!!!!') 
                 
//         //     else  
//         //       alert('Sorrrrrry !!!! Un-authenticated User !!!!!')  
//         //   })  

        
//     }  
    
//     render() {
//         return (
//             <div className="row">
//                 <div className="col col-md-4 mx-auto px-4 border border-secondary rounded">
//                     <form className="">
//                         <h2 className="my-4 text-success"><u>Login</u></h2>

//                         <div className="form-group mb-3">
//                             <input type="email" className="form-control" onChange={this.Email} placeholder="Enter email" />
//                         </div>

//                         <div className="form-group mb-3">
//                             <input type="password" className="form-control" onChange={this.Password} placeholder="Enter password" />
//                         </div>

//                         <button type="submit" onClick={this.login} className="btn btn-outline-success btn-lg btn-block my-2">Login</button>
//                         <p className="forgot-password text-right">
//                             Not registered? <a href="#">Sign up</a>
//                         </p>
//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }

// export default login

import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

function Login() {
    let {loginUser} = useContext(AuthContext)
    return (
            <div className="row">
                <div className="col col-md-4 mx-auto px-4 border border-secondary rounded">
                    <form className="" onSubmit={loginUser}>
                        <h2 className="my-4 text-success"><u>Login</u></h2>

                        <div className="form-group mb-3">
                            <input type="email" className="form-control" name="email" placeholder="Enter email" />
                        </div>

                        <div className="form-group mb-3">
                            <input type="password" className="form-control" name="password" placeholder="Enter password" />
                        </div>

                        <button type="submit" className="btn btn-outline-success btn-lg btn-block my-2">Login</button>
                        <p className="forgot-password text-right">
                            Not registered? <a href="#">Sign up</a>
                        </p>
                    </form>
                </div>
            </div>
    )
}

export default Login

