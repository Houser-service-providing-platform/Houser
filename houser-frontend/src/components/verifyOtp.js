import React from 'react'
import { useHistory } from 'react-router'

function VerifyOtp() {

    const history = useHistory()
    // const [error, seterror] = useState('')

    let verifyUser = async (e )=> {
        e.preventDefault()
        var error_msg = document.getElementById('error_msg');
        let response = await fetch('http://localhost:8000/auth/verify-otp/', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'email':e.target.email.value, 'otp':e.target.otp.value,})
        })
        console.log(response.otp);
        let data = await response.json()

        if(response.status === 200){
            // setAuthTokens(data)
            // setUser(jwt_decode(data.access))
            localStorage.setItem('resullt', data)
            console.log(data[0]);
            history.push('login')
        }else{
            error_msg.textContent = data.email;
        }
    }

    let validateForm =(e) => {
        var error_msg = document.getElementById('error_msg');
        var email_input = e.target.email.value;
        var otp_input = e.target.otp.value;
        if (email_input == "" || otp_input == ""){
          error_msg.textContent = "Input fields must not be empty";
          e.preventDefault()
        }
        else
        {
          if(isNaN(otp_input)){
            error_msg.textContent = "otp must be in digits";
            e.preventDefault()
          }
  
          else if(otp_input.length != 6){
            error_msg.textContent = "otp must be of 6 digits";
            e.preventDefault()
          }
  
          else {
            error_msg.textContent = "everything is fine!!";
            e.preventDefault()
            verifyUser(e);
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
                            <input type="text" className="form-control" name="otp" placeholder="Enter OTP" />
                        </div>

                        <button type="submit" className="btn btn-outline-success btn-lg btn-block my-2">Verify</button>
                        
                    </form>
                </div>
            </div>
    )
}

export default VerifyOtp

