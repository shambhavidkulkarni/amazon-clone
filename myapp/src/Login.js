import { Link,useNavigate } from 'react-router-dom'
import React,{useState} from 'react'
import { auth } from './firebase'
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import './Login.css'

function Login() {
    const navigate=useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    

    
const auth = getAuth();

const signIn=e=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
        //successfully created new user and password
        // useNavigate.push('/')
        navigate('/')
    })
    .catch((error)=>alert(error.message))
}

    const register=e=>{
        e.preventDefault();

        // auth
        // .createUserWithEmailAndPassword(email,password)
        // .then((auth)=>{
        //     //successfully created new user and password
        //     console.log(auth);
        // })
        // .catch((error)=>alert(error.message))

        

        
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            //successfully created new user and password

            // var user=userCredential.user;
            // console.log(user);
            navigate('/')
        })
        .catch((error)=>alert(error.message))    
    }


  return (
    <div className='login'>
        <Link to='/'>
        <img 
        className='login__logo'
        src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
        alt=''
        />
        </Link>
        <div className='login__container'>
            <h1>Sign in</h1>

            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type='password'value={password} onChange={e => setPassword(e.target.value)}/>

                <button type="submit" onClick={signIn} className='login__signInButton'>Sign In</button>
            </form>

            <p>By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>

            <button onClick={register} className='login__registerButton'>Create your amazon account</button>
        </div>
    </div>
  )
}

export default Login