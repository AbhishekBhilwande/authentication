import Login from '../db/schema/loginschema.mjs'
import jwt from 'jsonwebtoken'
export const submit = async (req, res) => {
    const { id, password } = req.body;

    try {
       
        const newUser = new Login({
            id: id,
            password: password, 
        });

        const result = await newUser.save();

        if (result) {
            console.log("Data is saved successfully");
            return res.status(201).send("Data is stored successfully");
        } else {
            console.log("Failed to save data");
            return res.status(400).send("Failed to save data");
        }
    } catch (err) {
        console.error("Error during data submission:", err);
        return res.status(500).send("An error occurred");
    }
};

export const login = async (req, res) => {
    const { id, password } = req.body;

    try {
       
        const user = await Login.findOne({ id });

        if (user) {
            console.log("User found");
            if (password === user.password) {
                const user_id = user._id;
                const token = jwt.sign({user_id},"secretKey");
                res.cookie("token", token, {
                    httpOnly: true, 
                    secure: process.env.NODE_ENV === 'production',  
                    maxAge: 3600000, 
                    sameSite: 'Strict'  
                });
                return res.status(200).send("Login successful");

            } else {
                console.log("Password mismatch");
                return res.status(401).send("Invalid password");
            }
        } else {
            console.log("User not found");
            return res.status(404).send("User not found");
        }
    } catch (err) {
        console.error("Error during login:", err);
        return res.status(500).send("An error occurred");
    }
};
export const logout = (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',  
        sameSite: 'Strict'  
    });
    return res.status(200).send("Logged out successfully");
};

export const getdetails = async(req,res)=>{
    const userid = req.user_id.user_id;
    console.log(userid);
    console.log(typeof userid);
    try{
        const user = await Login.findOne({_id:userid});
        if(user){
            res.json(user);
        }else{
            res.send("user not found");
        }
    }catch{
        res.send("error");
    }
};
