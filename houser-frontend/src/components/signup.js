import React from 'react'
import { useHistory } from 'react-router'

function Signup() {

    const history = useHistory()
    // const [error, seterror] = useState('')

    let registerUser = async (e )=> {
        e.preventDefault()
        var error_msg = document.getElementById('error_msg');
        let response = await fetch('http://localhost:8000/auth/register/', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'email':e.target.email.value, 'mob_number':e.target.mob_no.value, 'password':e.target.password.value})
        })
        console.log(response.otp);
        let data = await response.json()
        console.log(data.email);

        if(response.status === 200){
            // setAuthTokens(data)
            // setUser(jwt_decode(data.access))
            localStorage.setItem('email', JSON.stringify(data))
            history.push('verify-otp')
        }else{
            error_msg.textContent = data.email;
        }
    }

    let validateForm =(e) => {
        var error_msg = document.getElementById('error_msg');
        var email_input = e.target.email.value;
        var mobile_input = e.target.mob_no.value
        var password_input = e.target.password.value;
        var rePassword_input = e.target.re_password.value;
        if (email_input == "" || password_input == "" || rePassword_input == "" || mobile_input == ""){
          error_msg.textContent = "Input fields must not be empty";
          e.preventDefault()
        }
        else
        {
          if(isNaN(mobile_input)){
            error_msg.textContent = "Mobile number must be in digits";
            e.preventDefault()
          }
  
          else if(mobile_input.length != 10){
            error_msg.textContent = "Mobile number must be of 10 digits";
            e.preventDefault()
          }
  
          else if(password_input.length < 8){
            error_msg.textContent = "Password must be of atleast 8 characters";
            e.preventDefault()
          }
  
          else if (password_input != rePassword_input){
            error_msg.textContent = "Both password field should match";
            e.preventDefault()
          }
  
          else {
            error_msg.textContent = "everything is fine!!";
            e.preventDefault()
            registerUser(e);
          }
        }
      }


    return (
            <div className="row">
                <div className="col col-md-4 mx-auto px-4 border border-secondary rounded">
                    <form className="" onSubmit={validateForm}>
                        <h2 className="my-4 text-success"><u>Register</u></h2>

                        <div  class="form-group clearfix mb-3 mt-3">
                          <h3 id = "error_msg" class ="text-danger font-weight-bold"></h3>
                        </div>

                        <div className="form-group mb-3">
                            <input type="email" className="form-control" name="email" placeholder="Enter email" />
                        </div>

                        <div className="form-group mb-3">
                            <input type="text" className="form-control" name="name" placeholder="Enter name" />
                        </div>

                        <div className="form-group mb-3">
                            <input type="text" className="form-control" name="mob_no" placeholder="Mob. number" />
                        </div>

                        <div className="form-group mb-3">
                            <input type="password" className="form-control" name="password" placeholder="Enter password" />
                        </div>

                        <div className="form-group mb-3">
                            <input type="password" className="form-control" name="re_password" placeholder="Re-enter password" />
                        </div>

                        <button type="submit" className="btn btn-outline-success btn-lg btn-block my-2">Register</button>
                        <p className="forgot-password text-right">
                            Already registered? <a href="#">log in</a>
                        </p>
                    </form>
                </div>
            </div>
    )
}

export default Signup

