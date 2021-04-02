"use strict";
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
const app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.json());
mongoose_1.default.connect('mongodb://localhost:27017/startup_portal');
const conn = mongoose_1.default.connection;
conn.once('open', () => {
    console.log('mongo open');
});
const router = express_1.default.Router();
router.route('/login').post((req, res) => {
    let username = req.body.username;
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
app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
//# sourceMappingURL=server.js.map