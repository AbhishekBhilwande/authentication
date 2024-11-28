// app.js
import express from 'express';
import router from './routes/loginroute.mjs'; 
import conn from './db/conn.mjs';
import cookieParser from 'cookie-parser';
const app = express();
const PORT = 8000;

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);


app.listen(PORT, () => {
    console.log(`Server is live at http://localhost:${PORT}`);
});
