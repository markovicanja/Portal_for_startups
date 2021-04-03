import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000'

  login(username) {
    const data = {
      username: username
    }
    return this.http.post(`${this.uri}/login`, data);
  }

  getStartup(username) {
    const data = {
      username: username
    }
    return this.http.post(`${this.uri}/getStartup`, data);
  }

  getInvestor(username) {
    const data = {
      username: username
    }
    return this.http.post(`${this.uri}/getInvestor`, data);
  }

  registerStartup(username, password, fullName, establishmentDate, registrationNumber, taxId, firstName, middleName, lastName, address,
    municipality, city, country, phoneNumber, email, website, socialNetworks, businessType, employeeNumber, phase, 
    income1, income2, income3, profit1, profit2, profit3, projectProposal, amount, ipStatus, patentInfo, logo) {
    const data = {
      username: username,
      password: password,
      fullName: fullName,
      establishmentDate: establishmentDate,
      registrationNumber: registrationNumber,
      taxId: taxId,
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      address: address,
      municipality: municipality,
      city: city,
      country: country,
      phoneNumber: phoneNumber,
      email: email,
      website: website,
      socialNetworks: socialNetworks,
      businessType: businessType,
      employeeNumber: employeeNumber,
      phase: phase,
      income1: income1,
      income2: income2,
      income3: income3,
      profit1: profit1,
      profit2: profit2,
      profit3: profit3,
      projectProposal: projectProposal,
      amount: amount,
      ipStatus: ipStatus,
      patentInfo: patentInfo,
      logo: logo
    }
    return this.http.post(`${this.uri}/registerStartup`, data);
  }

  registerInvestor(username, password, fullName, establishmentDate, registrationNumber, taxId, firstName, middleName, lastName, address,
    municipality, city, country, phoneNumber, email, website, socialNetworks, businessType, employeeNumber, 
    income1, income2, income3, profit1, profit2, profit3, investorType, servicesType, investFrom, investTo, logo) {
    const data = {
      username: username,
      password: password,
      fullName: fullName,
      establishmentDate: establishmentDate,
      registrationNumber: registrationNumber,
      taxId: taxId,
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      address: address,
      municipality: municipality,
      city: city,
      country: country,
      phoneNumber: phoneNumber,
      email: email,
      website: website,
      socialNetworks: socialNetworks,
      businessType: businessType,
      employeeNumber: employeeNumber,
      income1: income1,
      income2: income2,
      income3: income3,
      profit1: profit1,
      profit2: profit2,
      profit3: profit3,
      investorType: investorType,
      servicesType: servicesType,
      investFrom: investFrom,
      investTo: investTo,
      logo: logo
    }
    return this.http.post(`${this.uri}/registerInvestor`, data);
  }

  registerAdmin(username, password) {
    const data = {
      username: username,
      password: password
    }
    return this.http.post(`${this.uri}/registerAdmin`, data);
  }

  getUser(username) {
    const data = {
      username: username
    }
    return this.http.post(`${this.uri}/login`, data);
  } 
  
  updateStartup(oldUsername, newUsername, password, fullName, taxId, address,
    municipality, phoneNumber, email, website, businessType, 
    projectProposal, amount, ipStatus, patentInfo) {
    const data = {
      oldUsername: oldUsername,
      newUsername: newUsername,
      password: password,
      fullName: fullName,
      taxId: taxId,
      address: address,
      municipality: municipality,
      phoneNumber: phoneNumber,
      email: email,
      website: website,
      businessType: businessType,
      projectProposal: projectProposal,
      amount: amount,
      ipStatus: ipStatus,
      patentInfo: patentInfo
    }
    return this.http.post(`${this.uri}/updateStartup`, data);
  }
  
  updateInvestor(oldUsername, newUsername, password, fullName, taxId, address,
    municipality, phoneNumber, email, website, businessType) {
    const data = {
      oldUsername: oldUsername,
      newUsername: newUsername,
      password: password,
      fullName: fullName,
      taxId: taxId,
      address: address,
      municipality: municipality,
      phoneNumber: phoneNumber,
      email: email,
      website: website,
      businessType: businessType
    }
    return this.http.post(`${this.uri}/updateInvestor`, data);
  }

  updateUser(oldUsername, newUsername, password) {
    const data = {
      oldUsername: oldUsername,
      newUsername: newUsername,
      password: password
    }
    return this.http.post(`${this.uri}/updateUser`, data);
  }

    
  getAllStartups() {
    return this.http.get(`${this.uri}/getAllStartups`);
  }

  getAllInvestors() {
    return this.http.get(`${this.uri}/getAllInvestors`);
  }

  getAllUsers() {
    return this.http.get(`${this.uri}/getAllUsers`);
  }

  getAllNews() {
    return this.http.get(`${this.uri}/getAllNews`);
  }

  insertNews(name, text, category, date, time, author, visibility, selectedStartups, selectedInvestors) {
    const data = {
      name: name,
      text: text,
      category: category,
      date: date,
      time: time,
      author: author,
      visibility: visibility,
      selectedStartups: selectedStartups,
      selectedInvestors: selectedInvestors
    }
    return this.http.post(`${this.uri}/insertNews`, data);
  }

  archiveNews(name) {
    const data = {
      name: name
    }
    return this.http.post(`${this.uri}/archiveNews`, data);
  }
  
  removeNews(name) {
    const data = {
      name: name
    }
    return this.http.post(`${this.uri}/removeNews`, data);
  }
  
  deleteNews(name) {
    const data = {
      name: name
    }
    return this.http.post(`${this.uri}/deleteNews`, data);
  }

  getAllSurveys() {
    return this.http.get(`${this.uri}/getAllSurveys`);
  }

  removeSurveyForStartup(name, fullName) {
    const data = {
      name: name,
      fullName: fullName
    }
    return this.http.post(`${this.uri}/removeSurveyForStartup`, data);
  }

  setSurveyAnswers(name, questions, filled) {
    const data = {
      name: name,
      questions: questions,
      filled: filled
    }
    return this.http.post(`${this.uri}/setSurveyAnswers`, data);
  }

  insertSurvey(name, author, isPublic, questions) {
    const data = {
      name: name,
      author: author,
      questions: questions,
      isPublic: isPublic
    }
    return this.http.post(`${this.uri}/insertSurvey`, data);
  }

}
