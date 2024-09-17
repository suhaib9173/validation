
import axios from "axios"
import { useFormik } from "formik"

export default function Login() {
  const formik=useFormik({
    initialValues:{
      email:'',
      password:''
    },onSubmit:LoginUser
    ,validate:values=>{
      const errors={};
      if(values.email.length<=10){
        errors.email="email is required";
      }
      if(values.password.length<=6){
        errors.password="password is required";
      }
      return errors;
    }
  })
   async function LoginUser(){
    const {data}=await axios.post(`https://ecommerce-node4.onrender.com/auth/signin`,formik.values);
    console.log(data);
  }
  return (
    <form onSubmit={formik.handleSubmit}>
 <div>
  
  <div className="form-floating mb-3">
    <input type="email" className="form-control" id="email" placeholder="" name="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.email} />
    <label htmlFor="email">UserEmail</label>
    {formik.errors.email&&formik.touched.email?<div className="alert alert-danger">
{formik.errors.email}
    </div>:null}
  </div>
  <div className="form-floating mb-3">
    <input type="text" className="form-control" id="password" placeholder="" onBlur={formik.handleBlur} name="password" onChange={formik.handleChange} value={formik.password} />
    <label htmlFor="password">Password</label>
    {formik.errors.password&&formik.touched.password?<div className="alert alert-danger">
{formik.errors.password}
    </div>:null}
  </div>
  <button type="submit" className="btn btn-outline-info">Login</button>
</div>
    </form>
 

  )
}
