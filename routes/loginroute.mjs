// loginroute.mjs
import { Router } from 'express';
import { submit, login ,logout} from '../controller/logincontroller.mjs';
import authmiddleware from '../middleware/authmiddleware.mjs';

const router = Router(); 

router.get('/', (req, res) => {
    res.send('Welcome to the home page!');
});
router.post('/submit', submit);
router.post('/login', login);
router.post('/logout',logout);


router.use(authmiddleware); 
router.get('/home',(req,res)=>{
    res.send("this is home page");
})

export default router;

