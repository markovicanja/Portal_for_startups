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
app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
//# sourceMappingURL=server.js.map