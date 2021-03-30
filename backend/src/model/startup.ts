import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Startup = new Schema({
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
    phase: {
        type: String,
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
        type: Number,
        required: true
    },
    profit3: {
        type: String,
        required: true
    },
    projectProposal: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    ipStatus: {
        type: Number,
        required: true
    },
    patentInfo: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    }
});

export default mongoose.model('Startup', Startup, 'startups');