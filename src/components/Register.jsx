import axios from "axios"
import { useFormik } from "formik"

export default function Register() {
  const formik=useFormik({
    initialValues:{
      userName:'',
      email:'',
      password:''
    },onSubmit:RegisterUser,
    
  })
   async function RegisterUser(){
    const {data}=await axios.post(`https://ecommerce-node4.onrender.com/auth/signup`,formik.values);
    
  }
  return (
    <form onSubmit={formik.handleSubmit}>
 <div>
  <div className="form-floating mb-3">
    <input type="text" className="form-control" id="name" placeholder="" name="userName"  onChange={formik.handleChange} value={formik.userName} />
    <label htmlFor="name">UserName </label>
    
    
  </div>
  <div className="form-floating mb-3">
    <input type="email" className="form-control" id="email" placeholder="" name="email"  onChange={formik.handleChange} value={formik.email} />
    <label htmlFor="email">UserEmail</label>
    
  </div>
  <div className="form-floating mb-3">
    <input type="text" className="form-control" id="password" placeholder="" name="password"  onChange={formik.handleChange} value={formik.password} />
    <label htmlFor="password">Password</label>
    
    
  </div>
  <button type="submit" className="btn btn-outline-info">Register</button>
</div>
    </form>
 

  )
}
