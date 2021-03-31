import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import user from './model/user';
import startup from './model/startup';
import investor from './model/investor';
import news from './model/news';

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

router.route('/registerStartup').post((req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let fullName = req.body.fullName;
    let establishmentDate = req.body.establishmentDate;
    let registrationNumber = req.body.registrationNumber;
    let taxId = req.body.taxId;
    let firstName = req.body.firstName;
    let middleName = req.body.middleName;
    let lastName = req.body.lastName;
    let address = req.body.address;
    let municipality = req.body.municipality;
    let city = req.body.city;
    let country = req.body.country;
    let phoneNumber = req.body.phoneNumber;
    let email = req.body.email;
    let website = req.body.website;
    let socialNetworks = req.body.socialNetworks;
    let businessType = req.body.businessType;
    let employeeNumber = req.body.employeeNumber;
    let phase = req.body.phase;
    let income1 = req.body.income1;
    let income2 = req.body.income2;    
    let income3 = req.body.income3;
    let profit1 = req.body.profit1;
    let profit2 = req.body.profit2;
    let profit3 = req.body.profit3;
    let projectProposal = req.body.projectProposal;
    let amount = req.body.amount;
    let ipStatus = req.body.ipStatus;
    let patentInfo = req.body.patentInfo;
    let logo = req.body.logo;

    startup.collection.insertOne({'username' : username, 'password' : password, 'fullName' : fullName, 'establishmentDate' : establishmentDate,
    'registrationNumber' : registrationNumber, 'taxId' : taxId, 'firstName' : firstName, 'middleName' : middleName, 'lastName' : lastName,
    'address' : address, 'municipality' : municipality, 'city' : city, 'country' : country, 'phoneNumber' : phoneNumber, 'email' : email,
    'website' : website, 'socialNetworks' : socialNetworks, 'businessType' : businessType, 'employeeNumber' : employeeNumber, 'phase' : phase, 
    'income1' : income1, 'income2' : income2, 'income3' : income3, 'profit1' : profit1, 'profit2' : profit2, 'profit3' : profit3, 
    'projectProposal' : projectProposal, 'amount' : amount, 'ipStatus' : ipStatus, 'patentInfo' : patentInfo, 'logo' : logo
    });
    user.collection.insertOne({'username' : username, 'password' : password, 'type' : "startup"});
    res.json({message: 1});    
});

router.route('/registerInvestor').post((req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let fullName = req.body.fullName;
    let establishmentDate = req.body.establishmentDate;
    let registrationNumber = req.body.registrationNumber;
    let taxId = req.body.taxId;
    let firstName = req.body.firstName;
    let middleName = req.body.middleName;
    let lastName = req.body.lastName;
    let address = req.body.address;
    let municipality = req.body.municipality;
    let city = req.body.city;
    let country = req.body.country;
    let phoneNumber = req.body.phoneNumber;
    let email = req.body.email;
    let website = req.body.website;
    let socialNetworks = req.body.socialNetworks;
    let businessType = req.body.businessType;
    let employeeNumber = req.body.employeeNumber;
    let income1 = req.body.income1;
    let income2 = req.body.income2;    
    let income3 = req.body.income3;
    let profit1 = req.body.profit1;
    let profit2 = req.body.profit2;
    let profit3 = req.body.profit3;
    let investorType = req.body.investorType;
    let servicesType = req.body.servicesType;
    let investFrom = req.body.investFrom;
    let investTo = req.body.investTo;
    let logo = req.body.logo;

    investor.collection.insertOne({'username' : username, 'password' : password, 'fullName' : fullName, 'establishmentDate' : establishmentDate,
    'registrationNumber' : registrationNumber, 'taxId' : taxId, 'firstName' : firstName, 'middleName' : middleName, 'lastName' : lastName,
    'address' : address, 'municipality' : municipality, 'city' : city, 'country' : country, 'phoneNumber' : phoneNumber, 'email' : email,
    'website' : website, 'socialNetworks' : socialNetworks, 'businessType' : businessType, 'employeeNumber' : employeeNumber,
    'income1' : income1, 'income2' : income2, 'income3' : income3, 'profit1' : profit1, 'profit2' : profit2, 'profit3' : profit3, 
    'investorType' : investorType, 'servicesType' : servicesType, 'investFrom' : investFrom, 'investTo' : investTo, 'logo' : logo
    });
    user.collection.insertOne({'username' : username, 'password' : password, 'type' : "investor"});
    res.json({message: 1});    
});

router.route('/updateStartup').post((req, res) => {
    let oldUsername = req.body.oldUsername;
    let newUsername = req.body.newUsername;
    let password = req.body.password;
    let fullName = req.body.fullName;
    let taxId = req.body.taxId;
    let address = req.body.address;
    let municipality = req.body.municipality;
    let phoneNumber = req.body.phoneNumber;
    let email = req.body.email;
    let website = req.body.website;
    let businessType = req.body.businessType;
    let projectProposal = req.body.projectProposal;
    let amount = req.body.amount;
    let ipStatus = req.body.ipStatus;
    let patentInfo = req.body.patentInfo;

    startup.collection.updateOne({'username' : oldUsername}, {$set: {'username': newUsername, 'fullName' : fullName,
    'taxId' : taxId, 'address' : address, 'municipality' : municipality, 'phoneNumber' : phoneNumber, 'email' : email,
    'website' : website, 'businessType' : businessType, 'projectProposal' : projectProposal, 'amount' : amount, 
    'ipStatus' : ipStatus, 'patentInfo' : patentInfo}});
    user.collection.updateOne({'username': oldUsername}, {$set: {'username': newUsername, 'password' : password}});
    res.json({message: 1});   
});

router.route('/updateInvestor').post((req, res) => {
    let oldUsername = req.body.oldUsername;
    let newUsername = req.body.newUsername;
    let password = req.body.password;
    let fullName = req.body.fullName;
    let taxId = req.body.taxId;
    let address = req.body.address;
    let municipality = req.body.municipality;
    let phoneNumber = req.body.phoneNumber;
    let email = req.body.email;
    let website = req.body.website;
    let businessType = req.body.businessType;

    investor.collection.updateOne({'username' : oldUsername}, {$set: {'username': newUsername, 'fullName' : fullName,
    'taxId' : taxId, 'address' : address, 'municipality' : municipality, 'phoneNumber' : phoneNumber, 'email' : email,
    'website' : website, 'businessType' : businessType}});
    user.collection.updateOne({'username': oldUsername}, {$set: {'username': newUsername, 'password' : password}});
    res.json({message: 1});    
});

router.route('/getAllStartups').get((req, res) => {
    startup.find({}, (err, startup) => {
        if (err) console.log(err);
        else res.json(startup);
    });
});

router.route('/getAllInvestors').get((req, res) => {
    investor.find({}, (err, investor) => {
        if (err) console.log(err);
        else res.json(investor);
    });
});

router.route('/getAllNews').get((req, res) => {
    news.find({}, (err, news) => {
        if (err) console.log(err);
        else res.json(news);
    });
});

router.route('/insertNews').post((req, res) => {
    let name = req.body.name;
    let text = req.body.text;
    let category = req.body.category;
    let date = req.body.date;
    let time = req.body.time;
    let author = req.body.author;
    let visibility = req.body.visibility;
    let selectedStartups = req.body.selectedStartups;
    let selectedInvestors = req.body.selectedInvestors;

    news.collection.insertOne({'name' : name, 'text' : text, 'category' : category, 'date' : date, 'time' : time, 'author' : author, 
    'visibility': visibility, 'deleted': false, 'selectedStartups': selectedStartups, 'selectedInvestors': selectedInvestors });
    res.json({message: 1}); 
});

router.route('/archiveNews').post((req, res) => {
    let name = req.body.name;

    news.collection.updateOne({'name': name}, {$set: {'visibility': "Archived"}});
    res.json({message: 1});  
});

router.route('/removeNews').post((req, res) => {
    let name = req.body.name;

    news.collection.updateOne({'name': name}, {$set: {'deleted': true}});
    res.json({message: 1});  
});

router.route('/deleteNews').post((req, res) => {
    let name = req.body.name;

    news.collection.deleteOne({'name': name});
    res.json({message: 1});  
});

app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));