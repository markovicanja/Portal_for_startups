import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Investor = new Schema({
    username: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    establishmentDate: {
        type: Date,
        required: true
    },
    registrationNumber: {
        type: String,
        required: true
    },
    taxId: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    municipality: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    socialNetworks: {
        type: String,
        required: true
    },
    businessType: {
        type: String,
        required: true
    },
    employeeNumber: {
        type: Number,
        required: true
    },
    income1: {
        type: String,
        required: true
    },
    income2: {
        type: String,
        required: true
    },
    income3: {
        type: String,
        required: true
    },
    profit1: {
        type: String,
        required: true
    },
    profit2: {
        type: String,
        required: true
    },
    profit3: {
        type: String,
        required: true
    },
    investorType: {
        type: String,
        required: true
    },
    servicesType: {
        type: String,
        required: true
    },
    investFrom: {
        type: String,
        required: true
    },
    investTo: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    }
});

export default mongoose.model('Investor', Investor, 'investors');