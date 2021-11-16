import { createContext, useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom'

const AuthContext = createContext()

export default AuthContext;


export const AuthProvider = ({children}) => {
    let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? (localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? (localStorage.getItem('authTokens')) : null)
    let [loading, setLoading] = useState(true)

    const history = useHistory()

    let loginUser = async (e )=> {
        e.preventDefault()
        let response = await fetch('http://localhost:8000/auth/login/', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'email':e.target.email.value, 'password':e.target.password.value})
        })
        let data = await response.json()

        if(response.status === 200){
            console.log(data[0]);
            // setAuthTokens(data)
            // setUser(jwt_decode(data))
            setAuthTokens(data[0])
            setUser(data[0])
            
            // localStorage.setItem('authTokens', JSON.stringify(data))
            localStorage.setItem('authTokens', data[0])
            history.push('/')
        }
        else{
            alert('Something went wrong!')
        }
    }


    let logoutUser = async() => {

          let response = await fetch('http://localhost:8000/auth/logout/', {
              method:'POST',
              headers:{
                  'Content-Type':'application/json'
              },
              body:JSON.stringify({'authtoken':localStorage.authTokens})
          })
          let data = await response.json()
      
          if(response.status === 200){
              setAuthTokens(null)
              setUser(null)
              console.log('logged out');
              localStorage.removeItem('authTokens')
              history.push('/login')
          }
          else{
              alert('Something went wrong!')
          }
      
    }

    


    // let updateToken = async ()=> {

    //     let response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
    //         method:'POST',
    //         headers:{
    //             'Content-Type':'application/json'
    //         },
    //         body:JSON.stringify({'refresh':authTokens?.refresh})
    //     })

    //     let data = await response.json()
        
    //     if (response.status === 200){
    //         setAuthTokens(data)
    //         setUser(jwt_decode(data.access))
    //         localStorage.setItem('authTokens', JSON.stringify(data))
    //     }else{
    //         logoutUser()
    //     }

    //     if(loading){
    //         setLoading(false)
    //     }
    // }

    let contextData = {
        user:user,
        authTokens:authTokens,
        setAuthTokens:setAuthTokens,
        setUser:setUser,
        loginUser:loginUser,
        logoutUser:logoutUser,
    }


    useEffect(()=> {

        if(authTokens){
            setUser(authTokens)
        }
        setLoading(false)


    }, [authTokens, loading])

    return(
        <AuthContext.Provider value={contextData} >
            {loading ? null : children}
        </AuthContext.Provider>
    )
}