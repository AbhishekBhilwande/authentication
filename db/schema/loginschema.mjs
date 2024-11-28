//loginschema.mjs
import mongoose from 'mongoose';
const loginSchema = new mongoose.Schema({
    id:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
});
const Login = mongoose.model("Login",loginSchema);
export default Login;