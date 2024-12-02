// loginroute.mjs
import { Router } from 'express';
import { submit, login ,logout,getdetails} from '../controller/logincontroller.mjs';
import authentication  from '../middleware/authmiddleware.mjs';
import checkauth from '../middleware/checkauth.mjs'

const router = Router(); 

router.get('/', (req, res) => {
    res.send('Welcome to the home page!');
});
router.post('/submit', submit);
router.post('/login', login);
router.post('/logout',logout);


router.use(authentication); 
router.get('/home',(req,res)=>{
    res.send("this is home page");
})
router.get('/user',checkauth,getdetails);
export default router;

