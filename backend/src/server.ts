import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import user from './model/user';
import startup from './model/startup';
import investor from './model/investor';

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
    
    user.findOne({'username' : username}, (err, user) => {
        if (err) console.log(err);
        else res.json(user);
    });
});

router.route('/getStartup').post((req, res) => {
    let username = req.body.username;
    
    startup.findOne({'username' : username}, (err, st) => {
        if (err) console.log(err);
        else res.json(st);
    });
});

router.route('/getInvestor').post((req, res) => {
    let username = req.body.username;
    
    investor.findOne({'username' : username}, (err, inv) => {
        if (err) console.log(err);
        else res.json(inv);
    });
});


app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));