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
        type: String,
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
        type: String,
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
        type: String,
        required: true
    },
    patentInfo: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
    interests: {
        type: Array,
        required: true
    },
    professionalSkills: {
        type: Array,
        required: true
    },
    usernameVisibility: {
        type: Boolean,
        required: true
    },
    fullNameVisibility: {
        type: Boolean,
        required: true
    },
    establishmentDateVisibility: {
        type: Boolean,
        required: true
    },
    registrationNumberVisibility: {
        type: Boolean,
        required: true
    },
    taxIdVisibility: {
        type: Boolean,
        required: true
    },
    nameVisibility: {
        type: Boolean,
        required: true
    },
    addressVisibility: {
        type: Boolean,
        required: true
    },
    municipalityVisibility: {
        type: Boolean,
        required: true
    },
    cityVisibility: {
        type: Boolean,
        required: true
    },
    countryVisibility: {
        type: Boolean,
        required: true
    },
    phoneNumberVisibility: {
        type: Boolean,
        required: true
    },
    emailVisibility: {
        type: Boolean,
        required: true
    },
    websiteVisibility: {
        type: Boolean,
        required: true
    },
    socialNetworksVisibility: {
        type: Boolean,
        required: true
    },
    businessTypeVisibility: {
        type: Boolean,
        required: true
    },
    employeeNumberVisibility: {
        type: Boolean,
        required: true
    },
    phaseVisibility: {
        type: Boolean,
        required: true
    },
    incomeVisibility: {
        type: Boolean,
        required: true
    },
    profitVisibility: {
        type: Boolean,
        required: true
    },
    projectProposalVisibility: {
        type: Boolean,
        required: true
    },
    amountVisibility: {
        type: Boolean,
        required: true
    },
    ipStatusVisibility: {
        type: Boolean,
        required: true
    },
    patentInfoVisibility: {
        type: Boolean,
        required: true
    }
});

export default mongoose.model('Startup', Startup, 'startups');