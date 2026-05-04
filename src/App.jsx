import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../../firebase"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/") // 👈 DefaultLayout (dashboard)
    } catch (err) {
      setError("Invalid Email or Password")
    }
  }

  return (
    <div style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",background:"#0f172a"}}>
      <form onSubmit={handleLogin} style={{background:"#1e293b",padding:"30px",borderRadius:"12px",width:"320px",color:"#fff"}}>
        
        <h2 style={{textAlign:"center",marginBottom:"20px"}}>
          MS INTERIOR DECORATOR
        </h2>

        {error && <p style={{color:"red"}}>{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          style={{width:"100%",padding:"10px",marginBottom:"10px"}}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          style={{width:"100%",padding:"10px",marginBottom:"15px"}}
        />

        <button type="submit" style={{width:"100%",padding:"10px",background:"#6366f1",color:"#fff",border:"none"}}>
          Login
        </button>

      </form>
    </div>
  )
}

export default Login
