import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import user from './model/user';
import startup from './model/startup';
import investor from './model/investor';
import news from './model/news';
import survey from './model/survey';
import notification from './model/notification';
import ad from './model/ad';
import recommendation from './model/recommendation';
import codebook from './model/codebook';
import discussion from './model/discussion';

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/startup_portal');

const conn = mongoose.connection;

conn.once('open', () => {
    console.log('mongo open');
});

const router = express.Router();

/***** ROUTES *****/

router.route('/login').post((req, res) => {
    let username = req.body.username;
    
    user.findOne({'username' : username}, (err, user) => {
        if (err) console.log(err);
        else res.json(user);
    });
});

router.route('/loginWithNewPassword').post((req, res) => {
    let username = req.body.username;
    let newPassword = req.body.newPassword;
    
    user.collection.updateOne({'username': username}, {$set: {'password' : newPassword}});
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

    startup.collection.insertOne({'username' : username, 'fullName' : fullName, 'establishmentDate' : establishmentDate,
    'registrationNumber' : registrationNumber, 'taxId' : taxId, 'firstName' : firstName, 'middleName' : middleName, 'lastName' : lastName,
    'address' : address, 'municipality' : municipality, 'city' : city, 'country' : country, 'phoneNumber' : phoneNumber, 'email' : email,
    'website' : website, 'socialNetworks' : socialNetworks, 'businessType' : businessType, 'employeeNumber' : employeeNumber, 'phase' : phase, 
    'income1' : income1, 'income2' : income2, 'income3' : income3, 'profit1' : profit1, 'profit2' : profit2, 'profit3' : profit3, 
    'projectProposal' : projectProposal, 'amount' : amount, 'ipStatus' : ipStatus, 'patentInfo' : patentInfo, 'logo' : logo,
    'interests': [], 'professionalSkills': [], 'usernameVisibility': true, 'fullNameVisibility': true, 'establishmentDateVisibility': true, 
    'registrationNumberVisibility': true, 'taxIdVisibility': true, 'nameVisibility': true, 
    'addressVisibility': true, 'municipalityVisibility': true, 'cityVisibility': true, 
    'countryVisibility': true, 'phoneNumberVisibility': true, 'emailVisibility': true, 'websiteVisibility': true, 
    'socialNetworksVisibility': true, 'businessTypeVisibility': true, 'employeeNumberVisibility': true, 'phaseVisibility': true, 
    'incomeVisibility': true, 'profitVisibility': true, 'projectProposalVisibility': true, 'amountVisibility': true, 
    'ipStatusVisibility': true, 'patentInfoVisibility': true
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

    investor.collection.insertOne({'username' : username, 'fullName' : fullName, 'establishmentDate' : establishmentDate,
    'registrationNumber' : registrationNumber, 'taxId' : taxId, 'firstName' : firstName, 'middleName' : middleName, 'lastName' : lastName,
    'address' : address, 'municipality' : municipality, 'city' : city, 'country' : country, 'phoneNumber' : phoneNumber, 'email' : email,
    'website' : website, 'socialNetworks' : socialNetworks, 'businessType' : businessType, 'employeeNumber' : employeeNumber,
    'income1' : income1, 'income2' : income2, 'income3' : income3, 'profit1' : profit1, 'profit2' : profit2, 'profit3' : profit3, 
    'investorType' : investorType, 'servicesType' : servicesType, 'investFrom' : investFrom, 'investTo' : investTo, 'logo' : logo
    });
    user.collection.insertOne({'username' : username, 'password' : password, 'type' : "investor"});
    res.json({message: 1});    
});

router.route('/registerAdmin').post((req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    user.collection.insertOne({'username' : username, 'password' : password, 'type' : "admin"});
    res.json({message: 1});    
});

router.route('/editStartup').post((req, res) => {
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

    let usernameVisibility = req.body.usernameVisibility;
    let fullNameVisibility = req.body.fullNameVisibility;
    let establishmentDateVisibility = req.body.establishmentDateVisibility;
    let registrationNumberVisibility = req.body.registrationNumberVisibility;
    let taxIdVisibility = req.body.taxIdVisibility;
    let nameVisibility = req.body.nameVisibility;
    let addressVisibility = req.body.addressVisibility;
    let municipalityVisibility = req.body.municipalityVisibility;
    let cityVisibility = req.body.cityVisibility;
    let countryVisibility = req.body.countryVisibility;
    let phoneNumberVisibility = req.body.phoneNumberVisibility;
    let emailVisibility = req.body.emailVisibility;
    let websiteVisibility = req.body.websiteVisibility;
    let socialNetworksVisibility = req.body.socialNetworksVisibility;
    let businessTypeVisibility = req.body.businessTypeVisibility;
    let employeeNumberVisibility = req.body.employeeNumberVisibility;
    let phaseVisibility = req.body.phaseVisibility;
    let incomeVisibility = req.body.incomeVisibility;
    let profitVisibility = req.body.profitVisibility;
    let projectProposalVisibility = req.body.projectProposalVisibility;
    let amountVisibility = req.body.amountVisibility;
    let ipStatusVisibility = req.body.ipStatusVisibility;
    let patentInfoVisibility = req.body.patentInfoVisibility;

    startup.collection.updateOne({'username' : oldUsername}, {$set: {'username': newUsername, 'fullName' : fullName,
    'taxId' : taxId, 'address' : address, 'municipality' : municipality, 'phoneNumber' : phoneNumber, 'email' : email,
    'website' : website, 'businessType' : businessType, 'projectProposal' : projectProposal, 'amount' : amount, 
    'ipStatus' : ipStatus, 'patentInfo' : patentInfo, 
    'usernameVisibility': usernameVisibility, 'fullNameVisibility': fullNameVisibility, 'establishmentDateVisibility': establishmentDateVisibility, 
    'registrationNumberVisibility': registrationNumberVisibility, 'taxIdVisibility': taxIdVisibility,
    'nameVisibility': nameVisibility, 'addressVisibility': addressVisibility, 'municipalityVisibility': municipalityVisibility, 'cityVisibility': cityVisibility, 
    'countryVisibility': countryVisibility, 'phoneNumberVisibility': phoneNumberVisibility, 'emailVisibility': emailVisibility, 'websiteVisibility': websiteVisibility, 
    'socialNetworksVisibility': socialNetworksVisibility, 'businessTypeVisibility': businessTypeVisibility, 'employeeNumberVisibility': employeeNumberVisibility, 'phaseVisibility': phaseVisibility, 
    'incomeVisibility': incomeVisibility, 'profitVisibility': profitVisibility, 'projectProposalVisibility': projectProposalVisibility, 'amountVisibility': amountVisibility, 
    'ipStatusVisibility': ipStatusVisibility, 'patentInfoVisibility': patentInfoVisibility}});
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

router.route('/updateUser').post((req, res) => {
    let oldUsername = req.body.oldUsername;
    let newUsername = req.body.newUsername;
    let password = req.body.password;

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

router.route('/getAllUsers').get((req, res) => {
    user.find({}, (err, user) => {
        if (err) console.log(err);
        else res.json(user);
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

router.route('/getAllSurveys').get((req, res) => {
    survey.find({}, (err, surveys) => {
        if (err) console.log(err);
        else res.json(surveys);
    });
});

router.route('/removeSurveyForStartup').post((req, res) => {
    let name = req.body.name;
    let fullName = req.body.fullName;
    let filled = {
        startup: fullName,
        answers: null as string[]
    }

    survey.collection.updateOne({'name': name}, {$push: {'filled': filled}});
    res.json({message: 1});  
});

router.route('/setSurveyAnswers').post((req, res) => {
    let name = req.body.name;
    let questions = req.body.questions;
    let filled = req.body.filled;

    survey.collection.updateOne({'name': name}, {$push: {'filled': filled}, $set: {'questions': questions}});
    res.json({message: 1});  
});

router.route('/insertSurvey').post((req, res) => {
    let name = req.body.name;    
    let author = req.body.author;
    let questions = req.body.questions;
    let isPublic = req.body.isPublic;

    survey.collection.insertOne({'name': name, 'author': author, 'questions': questions, 'public': isPublic, 'filled': []});
    res.json({message: 1});  
});

router.route('/getAllNotifications').get((req, res) => {
    notification.find({}, (err, notifications) => {
        if (err) console.log(err);
        else res.json(notifications);
    });
});

router.route('/archiveNotification').post((req, res) => {
    let title = req.body.title;

    notification.collection.updateOne({'title': title}, {$set: {'archived': true}});
    res.json({message: 1});  
});

router.route('/removeNotification').post((req, res) => {
    let title = req.body.title;

    notification.collection.updateOne({'title': title}, {$set: {'deleted': true}});
    res.json({message: 1});  
});

router.route('/deleteNotification').post((req, res) => {
    let title = req.body.title;

    notification.collection.deleteOne({'title': title});
    res.json({message: 1});  
});

router.route('/insertNotification').post((req, res) => {
    let title = req.body.title;    
    let text = req.body.text;
    let date = req.body.date;
    let time = req.body.time;
    let author = req.body.author;    
    let type = req.body.type;
    let sendTo = req.body.sendTo;
    let startups = req.body.startups;    
    let businessType = req.body.businessType;

    notification.collection.insertOne({'title': title, 'text': text, 'date': date, 'time': time, 'author': author,
    'type': type, 'sendTo': sendTo, 'startups': startups, 'businessType': businessType, 'archived': false, 'deleted': false});
    res.json({message: 1});   
});

router.route('/getAllAds').get((req, res) => {
    ad.find({}, (err, ads) => {
        if (err) console.log(err);
        else res.json(ads);
    });
});

router.route('/removeAd').post((req, res) => {
    let title = req.body.title;

    ad.collection.updateOne({'title': title}, {$set: {'deleted': true}});
    res.json({message: 1});  
});

router.route('/deleteAd').post((req, res) => {
    let title = req.body.title;

    ad.collection.deleteOne({'title': title});
    res.json({message: 1});  
});

router.route('/insertAd').post((req, res) => {
    let title = req.body.title;    
    let text = req.body.text;
    let publishDate = req.body.publishDate;
    let publishTime = req.body.publishTime;
    let expireDate = req.body.expireDate;
    let expireTime = req.body.expireTime;
    let author = req.body.author;    
    let sendTo = req.body.sendTo;
    let startups = req.body.startups;    
    let businessType = req.body.businessType;

    ad.collection.insertOne({'title': title, 'text': text, 'publishDate': publishDate, 'publishTime': publishTime,
    'expireDate': expireDate, 'expireTime': expireTime, 'author': author,
    'sendTo': sendTo, 'startups': startups, 'businessType': businessType, 'deleted': false});
    res.json({message: 1});   
});

router.route('/getAllRecommendations').get((req, res) => {
    recommendation.find({}, (err, recommendations) => {
        if (err) console.log(err);
        else res.json(recommendations);
    });
});

router.route('/deleteRecommendation').post((req, res) => {
    let title = req.body.title;

    recommendation.collection.deleteOne({'title': title});
    res.json({message: 1});  
});

router.route('/getAllCodebooks').get((req, res) => {
    codebook.find({}, (err, codebooks) => {
        if (err) console.log(err);
        else res.json(codebooks);
    });
});

router.route('/deleteCodebook').post((req, res) => {
    let data = req.body.data;
    let category = req.body.category;

    codebook.collection.deleteOne({'data': data, 'category': category});
    res.json({message: 1});  
});

router.route('/insertCodebook').post((req, res) => {
    let data = req.body.data;    
    let category = req.body.category;
    let dateFrom = req.body.dateFrom;
    let dateTo = req.body.dateTo;

    codebook.collection.insertOne({'data': data, 'category': category, 'dateFrom': dateFrom, 'dateTo': dateTo});
    res.json({message: 1});   
});

router.route('/updateCodebook').post((req, res) => {
    let oldData = req.body.oldData;    
    let data = req.body.data;    
    let category = req.body.category;
    let dateFrom = req.body.dateFrom;
    let dateTo = req.body.dateTo;

    codebook.collection.updateOne({'data': oldData, 'category': category}, {$set: {'data': data, 'dateFrom': dateFrom, 'dateTo': dateTo}});
    res.json({message: 1});    
});

router.route('/addStartupInterest').post((req, res) => {
    let username = req.body.username;    
    let interest = req.body.interest;   

    startup.collection.updateOne({'username': username}, {$push: {'interests': interest}});
    res.json({message: 1});    
});

router.route('/deleteStartupInterest').post((req, res) => {
    let username = req.body.username;    
    let interest = req.body.interest;   

    startup.collection.updateOne({'username': username}, {$pull: {'interests': interest}});
    res.json({message: 1});    
});

router.route('/addStartupSkill').post((req, res) => {
    let username = req.body.username;    
    let skill = req.body.skill;   

    startup.collection.updateOne({'username': username}, {$push: {'professionalSkills': skill}});
    res.json({message: 1});    
});

router.route('/deleteStartupSkill').post((req, res) => {
    let username = req.body.username;    
    let skill = req.body.skill;   

    startup.collection.updateOne({'username': username}, {$pull: {'professionalSkills': skill}});
    res.json({message: 1});    
});

router.route('/getAllDiscussions').get((req, res) => {
    discussion.find({}, (err, discussions) => {
        if (err) console.log(err);
        else res.json(discussions);
    });
});

router.route('/insertDiscussion').post((req, res) => {
    let title = req.body.title;    
    let text = req.body.text;
    let category = req.body.category;
    let publishDate = req.body.publishDate;
    let publishTime = req.body.publishTime;
    let author = req.body.author;    
    let visibility = req.body.visibility;

    discussion.collection.insertOne({'title': title, 'text': text, 'category': category, 'publishDate': publishDate, 'publishTime': publishTime,
    'author': author, 'visibility': visibility, 'archived': false, 'deleted': false, 'replays': []});
    res.json({message: 1});   
});

router.route('/archiveDiscussion').post((req, res) => {
    let title = req.body.title;

    discussion.collection.updateOne({'title': title}, {$set: {'archived': true}});
    res.json({message: 1});  
});

router.route('/removeDiscussion').post((req, res) => {
    let title = req.body.title;

    discussion.collection.updateOne({'title': title}, {$set: {'deleted': true}});
    res.json({message: 1});  
});

router.route('/deleteDiscussion').post((req, res) => {
    let title = req.body.title;

    discussion.collection.deleteOne({'title': title});
    res.json({message: 1});  
});

router.route('/addDiscussionReplay').post((req, res) => {
    let title = req.body.title;
    let replay = req.body.replay;

    discussion.collection.updateOne({'title': title}, {$push: {'replays': replay}});
    res.json({message: 1});  
});

router.route('/deleteDiscussionReplay').post((req, res) => {
    let title = req.body.title;
    let replay = req.body.replay;

    console.log(title + " " + replay);

    discussion.collection.updateOne({'title': title}, {$pull: {'replays': {'replay': replay}}});
    res.json({message: 1});  
});

/***** NODE MAILER *****/
var nodemailer = require('nodemailer');
const details = require("../details.json");

app.post("/sendmail", (req, res) => {
    let user = req.body.user;

    console.log(user.name + ": " + user.email);
    sendMail(user, (info: { messageId: any; }) => {
        console.log('********** Mail is sent **********');
        res.send(info);
    });
});

async function sendMail(user: { email: any; name: any; }, callback: { (info: any): void; (arg0: any): void; }) {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: details.email,
        pass: details.password
      }
    });
  
    let mailOptions = {
      from: 'support@startus.com',
      to: user.email,
      subject: "Welcome to StartUs",
      html: `<h1>Hello ${ user.name }</h1><br>
      <h4>Thanks for joining us</h4>`
    };
  
    let info = await transporter.sendMail(mailOptions);  
    callback(info);
}

app.post("/resetPassword", (req, res) => {
    let user = req.body.user;

    resetPassword(user, (info: { messageId: any; }) => {
        console.log('********** Reset password is sent **********');
        res.send(info);
    });
});

async function resetPassword(user: { email: any; name: any; newPassword: any }, callback: { (info: any): void; (arg0: any): void; }) {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: details.email,
        pass: details.password
      }
    });
  
    let mailOptions = {
      from: 'support@startus.com',
      to: user.email,
      subject: "Reset password",
      html: `<h3>Hello ${ user.name }</h3><br>
      <p>You are receiving this mail because we have received a password reset request from your account. Your new 
      password is:</p> 
      <h3>${ user.newPassword }</h3>
      <p>It will expire in 10 minutes.</p>`
    };
  
    let info = await transporter.sendMail(mailOptions);  
    callback(info);
}

app.post("/sendMails", (req, res) => {
    let mailInfo = req.body.mailInfo;
    let emails: String[] = mailInfo.to;

    emails.forEach(e => {
        let mail = {
            from: mailInfo.from,
            to: e,
            subject: mailInfo.subject,
            html: mailInfo.html
        }

        sendMails(mail, (info: { messageId: any; }) => {
            console.log('********** Mail is sent **********');
            res.send(info);
        });
    });    
});

async function sendMails(mailInfo: { from: any; to: any; subject: any; html: any }, callback: { (info: any): void; (arg0: any): void; }) {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: details.email,
        pass: details.password
      }
    });
  
    let mailOptions = {
      from: mailInfo.from,
      to: mailInfo.to,
      subject: mailInfo.subject,
      html: mailInfo.html
    };
  
    let info = await transporter.sendMail(mailOptions);  
    callback(info);
}

app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));