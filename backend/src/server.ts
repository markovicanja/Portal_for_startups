import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/startup_portal');

const conn = mongoose.connection;

conn.once('open', () => {
    console.log('mongo open');
});

const router = express.Router();

router.route('/login').post((req, res) => {
    let username = req.body.username;
    
    // user.findOne({'korime' : username}, (err, user) => {
    //     if (err) console.log(err);
    //     else res.json(user);
    // });
});

app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));