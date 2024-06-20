import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function Login() {
    const history=useNavigate();

    const [name1,setName1]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [isElementVisible, setIsElementVisible] = useState(false); // Track element visibility

    useEffect(() => {
      // Create an Intersection Observer
      const element = document.querySelector('.my-element');
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsElementVisible(true);
          }
        });
      });
  
      observer.observe(element);
  
      // Clean up the observer when component unmounts
      return () => {
        observer.unobserve(element);
      };
    }, []);

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:5000/signup",{
                email,password,name1
            })
            .then(res=>{
                if(res.data==="exist"){
                    alert("User already exists")
                }
                else if(res.data==="notexist"){
                    history("/pay",{state:{id:name1}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="d-flex align-items-center justify-content-center vh-100 container">
                <div className={`my-element ${isElementVisible ? 'fade-in' : ''}`}>
            <div class="container" style={{maxWidth:"500px"}}>
            <h1 class="text-center mb-5 container">Signup</h1>

            <form class="form-signin border-success border-start border-5 shadow" action="POST">
                <input type="text" class="form-control w-75 mb-2 ms-4" onChange={(e) => { setName1(e.target.value) }} placeholder="First name"  />
                <input type="text" class="form-control w-75 mb-2 ms-4" placeholder="Last name"  />
                <input type="email" class="form-control w-75 mb-2 ms-4" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input type="password" class="form-control w-75 mb-2 ms-4" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                <button type="submit" class="btn btn-success my-3 ms-4" onClick={submit}>Submit</button>

            </form>

            <br />

            <Link class="text-success text-decoration-none" to="/login">Login Page</Link>
            </div>
            </div>
        </div>
    )
}

export default Login