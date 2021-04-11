"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = __importDefault(require("./model/user"));
const startup_1 = __importDefault(require("./model/startup"));
const investor_1 = __importDefault(require("./model/investor"));
const news_1 = __importDefault(require("./model/news"));
const survey_1 = __importDefault(require("./model/survey"));
const notification_1 = __importDefault(require("./model/notification"));
const ad_1 = __importDefault(require("./model/ad"));
const recommendation_1 = __importDefault(require("./model/recommendation"));
const codebook_1 = __importDefault(require("./model/codebook"));
const app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.json());
mongoose_1.default.connect('mongodb://localhost:27017/startup_portal');
const conn = mongoose_1.default.connection;
conn.once('open', () => {
    console.log('mongo open');
});
const router = express_1.default.Router();
/***** ROUTES *****/
router.route('/login').post((req, res) => {
    let username = req.body.username;
    user_1.default.findOne({ 'username': username }, (err, user) => {
        if (err)
            console.log(err);
        else
            res.json(user);
    });
});
router.route('/loginWithNewPassword').post((req, res) => {
    let username = req.body.username;
    let newPassword = req.body.newPassword;
    user_1.default.collection.updateOne({ 'username': username }, { $set: { 'password': newPassword } });
    user_1.default.findOne({ 'username': username }, (err, user) => {
        if (err)
            console.log(err);
        else
            res.json(user);
    });
});
router.route('/getStartup').post((req, res) => {
    let username = req.body.username;
    startup_1.default.findOne({ 'username': username }, (err, st) => {
        if (err)
            console.log(err);
        else
            res.json(st);
    });
});
router.route('/getInvestor').post((req, res) => {
    let username = req.body.username;
    investor_1.default.findOne({ 'username': username }, (err, inv) => {
        if (err)
            console.log(err);
        else
            res.json(inv);
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
    startup_1.default.collection.insertOne({ 'username': username, 'password': password, 'fullName': fullName, 'establishmentDate': establishmentDate,
        'registrationNumber': registrationNumber, 'taxId': taxId, 'firstName': firstName, 'middleName': middleName, 'lastName': lastName,
        'address': address, 'municipality': municipality, 'city': city, 'country': country, 'phoneNumber': phoneNumber, 'email': email,
        'website': website, 'socialNetworks': socialNetworks, 'businessType': businessType, 'employeeNumber': employeeNumber, 'phase': phase,
        'income1': income1, 'income2': income2, 'income3': income3, 'profit1': profit1, 'profit2': profit2, 'profit3': profit3,
        'projectProposal': projectProposal, 'amount': amount, 'ipStatus': ipStatus, 'patentInfo': patentInfo, 'logo': logo
    });
    user_1.default.collection.insertOne({ 'username': username, 'password': password, 'type': "startup" });
    res.json({ message: 1 });
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
    investor_1.default.collection.insertOne({ 'username': username, 'password': password, 'fullName': fullName, 'establishmentDate': establishmentDate,
        'registrationNumber': registrationNumber, 'taxId': taxId, 'firstName': firstName, 'middleName': middleName, 'lastName': lastName,
        'address': address, 'municipality': municipality, 'city': city, 'country': country, 'phoneNumber': phoneNumber, 'email': email,
        'website': website, 'socialNetworks': socialNetworks, 'businessType': businessType, 'employeeNumber': employeeNumber,
        'income1': income1, 'income2': income2, 'income3': income3, 'profit1': profit1, 'profit2': profit2, 'profit3': profit3,
        'investorType': investorType, 'servicesType': servicesType, 'investFrom': investFrom, 'investTo': investTo, 'logo': logo
    });
    user_1.default.collection.insertOne({ 'username': username, 'password': password, 'type': "investor" });
    res.json({ message: 1 });
});
router.route('/registerAdmin').post((req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    user_1.default.collection.insertOne({ 'username': username, 'password': password, 'type': "admin" });
    res.json({ message: 1 });
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
    startup_1.default.collection.updateOne({ 'username': oldUsername }, { $set: { 'username': newUsername, 'fullName': fullName,
            'taxId': taxId, 'address': address, 'municipality': municipality, 'phoneNumber': phoneNumber, 'email': email,
            'website': website, 'businessType': businessType, 'projectProposal': projectProposal, 'amount': amount,
            'ipStatus': ipStatus, 'patentInfo': patentInfo } });
    user_1.default.collection.updateOne({ 'username': oldUsername }, { $set: { 'username': newUsername, 'password': password } });
    res.json({ message: 1 });
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
    investor_1.default.collection.updateOne({ 'username': oldUsername }, { $set: { 'username': newUsername, 'fullName': fullName,
            'taxId': taxId, 'address': address, 'municipality': municipality, 'phoneNumber': phoneNumber, 'email': email,
            'website': website, 'businessType': businessType } });
    user_1.default.collection.updateOne({ 'username': oldUsername }, { $set: { 'username': newUsername, 'password': password } });
    res.json({ message: 1 });
});
router.route('/updateUser').post((req, res) => {
    let oldUsername = req.body.oldUsername;
    let newUsername = req.body.newUsername;
    let password = req.body.password;
    user_1.default.collection.updateOne({ 'username': oldUsername }, { $set: { 'username': newUsername, 'password': password } });
    res.json({ message: 1 });
});
router.route('/getAllStartups').get((req, res) => {
    startup_1.default.find({}, (err, startup) => {
        if (err)
            console.log(err);
        else
            res.json(startup);
    });
});
router.route('/getAllInvestors').get((req, res) => {
    investor_1.default.find({}, (err, investor) => {
        if (err)
            console.log(err);
        else
            res.json(investor);
    });
});
router.route('/getAllUsers').get((req, res) => {
    user_1.default.find({}, (err, user) => {
        if (err)
            console.log(err);
        else
            res.json(user);
    });
});
router.route('/getAllNews').get((req, res) => {
    news_1.default.find({}, (err, news) => {
        if (err)
            console.log(err);
        else
            res.json(news);
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
    news_1.default.collection.insertOne({ 'name': name, 'text': text, 'category': category, 'date': date, 'time': time, 'author': author,
        'visibility': visibility, 'deleted': false, 'selectedStartups': selectedStartups, 'selectedInvestors': selectedInvestors });
    res.json({ message: 1 });
});
router.route('/archiveNews').post((req, res) => {
    let name = req.body.name;
    news_1.default.collection.updateOne({ 'name': name }, { $set: { 'visibility': "Archived" } });
    res.json({ message: 1 });
});
router.route('/removeNews').post((req, res) => {
    let name = req.body.name;
    news_1.default.collection.updateOne({ 'name': name }, { $set: { 'deleted': true } });
    res.json({ message: 1 });
});
router.route('/deleteNews').post((req, res) => {
    let name = req.body.name;
    news_1.default.collection.deleteOne({ 'name': name });
    res.json({ message: 1 });
});
router.route('/getAllSurveys').get((req, res) => {
    survey_1.default.find({}, (err, surveys) => {
        if (err)
            console.log(err);
        else
            res.json(surveys);
    });
});
router.route('/removeSurveyForStartup').post((req, res) => {
    let name = req.body.name;
    let fullName = req.body.fullName;
    let filled = {
        startup: fullName,
        answers: null
    };
    survey_1.default.collection.updateOne({ 'name': name }, { $push: { 'filled': filled } });
    res.json({ message: 1 });
});
router.route('/setSurveyAnswers').post((req, res) => {
    let name = req.body.name;
    let questions = req.body.questions;
    let filled = req.body.filled;
    survey_1.default.collection.updateOne({ 'name': name }, { $push: { 'filled': filled }, $set: { 'questions': questions } });
    res.json({ message: 1 });
});
router.route('/insertSurvey').post((req, res) => {
    let name = req.body.name;
    let author = req.body.author;
    let questions = req.body.questions;
    let isPublic = req.body.isPublic;
    survey_1.default.collection.insertOne({ 'name': name, 'author': author, 'questions': questions, 'public': isPublic, 'filled': [] });
    res.json({ message: 1 });
});
router.route('/getAllNotifications').get((req, res) => {
    notification_1.default.find({}, (err, notifications) => {
        if (err)
            console.log(err);
        else
            res.json(notifications);
    });
});
router.route('/archiveNotification').post((req, res) => {
    let title = req.body.title;
    notification_1.default.collection.updateOne({ 'title': title }, { $set: { 'archived': true } });
    res.json({ message: 1 });
});
router.route('/removeNotification').post((req, res) => {
    let title = req.body.title;
    notification_1.default.collection.updateOne({ 'title': title }, { $set: { 'deleted': true } });
    res.json({ message: 1 });
});
router.route('/deleteNotification').post((req, res) => {
    let title = req.body.title;
    notification_1.default.collection.deleteOne({ 'title': title });
    res.json({ message: 1 });
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
    notification_1.default.collection.insertOne({ 'title': title, 'text': text, 'date': date, 'time': time, 'author': author,
        'type': type, 'sendTo': sendTo, 'startups': startups, 'businessType': businessType, 'archived': false, 'deleted': false });
    res.json({ message: 1 });
});
router.route('/getAllAds').get((req, res) => {
    ad_1.default.find({}, (err, ads) => {
        if (err)
            console.log(err);
        else
            res.json(ads);
    });
});
router.route('/removeAd').post((req, res) => {
    let title = req.body.title;
    ad_1.default.collection.updateOne({ 'title': title }, { $set: { 'deleted': true } });
    res.json({ message: 1 });
});
router.route('/deleteAd').post((req, res) => {
    let title = req.body.title;
    ad_1.default.collection.deleteOne({ 'title': title });
    res.json({ message: 1 });
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
    ad_1.default.collection.insertOne({ 'title': title, 'text': text, 'publishDate': publishDate, 'publishTime': publishTime,
        'expireDate': expireDate, 'expireTime': expireTime, 'author': author,
        'sendTo': sendTo, 'startups': startups, 'businessType': businessType, 'deleted': false });
    res.json({ message: 1 });
});
router.route('/getAllRecommendations').get((req, res) => {
    recommendation_1.default.find({}, (err, recommendations) => {
        if (err)
            console.log(err);
        else
            res.json(recommendations);
    });
});
router.route('/deleteRecommendation').post((req, res) => {
    let title = req.body.title;
    recommendation_1.default.collection.deleteOne({ 'title': title });
    res.json({ message: 1 });
});
router.route('/getAllCodebooks').get((req, res) => {
    codebook_1.default.find({}, (err, codebooks) => {
        if (err)
            console.log(err);
        else
            res.json(codebooks);
    });
});
router.route('/deleteCodebook').post((req, res) => {
    let data = req.body.data;
    let category = req.body.category;
    codebook_1.default.collection.deleteOne({ 'data': data, 'category': category });
    res.json({ message: 1 });
});
router.route('/insertCodebook').post((req, res) => {
    let data = req.body.data;
    let category = req.body.category;
    let dateFrom = req.body.dateFrom;
    let dateTo = req.body.dateTo;
    codebook_1.default.collection.insertOne({ 'data': data, 'category': category, 'dateFrom': dateFrom, 'dateTo': dateTo });
    res.json({ message: 1 });
});
router.route('/updateCodebook').post((req, res) => {
    let oldData = req.body.oldData;
    let data = req.body.data;
    let category = req.body.category;
    let dateFrom = req.body.dateFrom;
    let dateTo = req.body.dateTo;
    codebook_1.default.collection.updateOne({ 'data': oldData, 'category': category }, { $set: { 'data': data, 'dateFrom': dateFrom, 'dateTo': dateTo } });
    res.json({ message: 1 });
});
/***** NODE MAILER *****/
var nodemailer = require('nodemailer');
const details = require("../details.json");
app.post("/sendmail", (req, res) => {
    let user = req.body.user;
    sendMail(user, (info) => {
        console.log('********** Mail is sent **********');
        res.send(info);
    });
});
function sendMail(user, callback) {
    return __awaiter(this, void 0, void 0, function* () {
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
            html: `<h1>Hello ${user.name}</h1><br>
      <h4>Thanks for joining us</h4>`
        };
        let info = yield transporter.sendMail(mailOptions);
        callback(info);
    });
}
app.post("/resetPassword", (req, res) => {
    let user = req.body.user;
    resetPassword(user, (info) => {
        console.log('********** Reset password is sent **********');
        res.send(info);
    });
});
function resetPassword(user, callback) {
    return __awaiter(this, void 0, void 0, function* () {
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
            html: `<h3>Hello ${user.name}</h3><br>
      <p>You are receiving this mail because we have received a password reset request from your account. Your new 
      password is:</p> 
      <h3>${user.newPassword}</h3>
      <p>It will expire in 10 minutes.</p>`
        };
        let info = yield transporter.sendMail(mailOptions);
        callback(info);
    });
}
app.post("/sendMails", (req, res) => {
    let mailInfo = req.body.mailInfo;
    let emails = mailInfo.to;
    emails.forEach(e => {
        let mail = {
            from: mailInfo.from,
            to: e,
            subject: mailInfo.subject,
            html: mailInfo.html
        };
        sendMails(mail, (info) => {
            console.log('********** Mail is sent **********');
            res.send(info);
        });
    });
});
function sendMails(mailInfo, callback) {
    return __awaiter(this, void 0, void 0, function* () {
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
        let info = yield transporter.sendMail(mailOptions);
        callback(info);
    });
}
app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
//# sourceMappingURL=server.js.map