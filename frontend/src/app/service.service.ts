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

  loginWithNewPassword(username, newPassword) {
    const data = {
      username: username,
      newPassword: newPassword
    }
    return this.http.post(`${this.uri}/loginWithNewPassword`, data);
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
  
  editStartup(oldUsername, newUsername, password, fullName, taxId, address,
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
    return this.http.post(`${this.uri}/editStartup`, data);
  }

  updateStartup(oldUsername, newUsername, password, fullName, taxId, address,
    municipality, phoneNumber, email, website, businessType, 
    projectProposal, amount, ipStatus, patentInfo, usernameVisibility, fullNameVisibility, establishmentDateVisibility,
    registrationNumberVisibility, taxIdVisibility, nameVisibility, addressVisibility,
    municipalityVisibility, cityVisibility, countryVisibility, phoneNumberVisibility, emailVisibility, websiteVisibility,
    socialNetworksVisibility, businessTypeVisibility, employeeNumberVisibility, phaseVisibility, incomeVisibility, 
    profitVisibility, projectProposalVisibility,
    amountVisibility, ipStatusVisibility, patentInfoVisibility) {
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
      patentInfo: patentInfo,
      usernameVisibility: usernameVisibility,
      fullNameVisibility: fullNameVisibility,
      establishmentDateVisibility: establishmentDateVisibility,
      registrationNumberVisibility: registrationNumberVisibility,
      taxIdVisibility: taxIdVisibility,
      nameVisibility: nameVisibility,
      addressVisibility: addressVisibility,
      municipalityVisibility: municipalityVisibility,
      cityVisibility: cityVisibility,
      countryVisibility: countryVisibility,
      phoneNumberVisibility: phoneNumberVisibility,
      emailVisibility: emailVisibility,
      websiteVisibility: websiteVisibility,
      socialNetworksVisibility: socialNetworksVisibility,
      businessTypeVisibility: businessTypeVisibility,
      employeeNumberVisibility: employeeNumberVisibility,
      phaseVisibility: phaseVisibility,
      incomeVisibility: incomeVisibility,
      profitVisibility: profitVisibility,
      projectProposalVisibility: projectProposalVisibility,
      amountVisibility: amountVisibility,
      ipStatusVisibility: ipStatusVisibility,
      patentInfoVisibility: patentInfoVisibility
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

  sendmail(user) {
    const data = {
      user: user
    }
    return this.http.post(`${this.uri}/sendmail`, data);
  }

  resetPassword(user) {
    const data = {
      user: user
    }
    return this.http.post(`${this.uri}/resetPassword`, data);
  }

  getAllNotifications() {
    return this.http.get(`${this.uri}/getAllNotifications`);
  }

  archiveNotification(title) {
    const data = {
      title: title
    }
    return this.http.post(`${this.uri}/archiveNotification`, data);
  }
  
  removeNotification(title) {
    const data = {
      title: title
    }
    return this.http.post(`${this.uri}/removeNotification`, data);
  }
  
  deleteNotification(title) {
    const data = {
      title: title
    }
    return this.http.post(`${this.uri}/deleteNotification`, data);
  }

  insertNotification(title, text, date, time, author, type, sendTo, startups, businessType) {
    const data = {
      title: title,
      text: text,
      date: date,
      time: time,
      author: author,
      type: type,
      sendTo: sendTo,
      startups: startups,
      businessType: businessType
    }
    return this.http.post(`${this.uri}/insertNotification`, data);
  }

  sendMails(mailInfo) {
    const data = {
      mailInfo: mailInfo
    }
    return this.http.post(`${this.uri}/sendMails`, data);
  }

  getAllAds() {
    return this.http.get(`${this.uri}/getAllAds`);
  }

  removeAd(title) {
    const data = {
      title: title
    }
    return this.http.post(`${this.uri}/removeAd`, data);
  }
  
  deleteAd(title) {
    const data = {
      title: title
    }
    return this.http.post(`${this.uri}/deleteAd`, data);
  }

  insertAd(title, text, publishDate, publishTime, expireDate, expireTime, author, sendTo, startups, businessType) {
    const data = {
      title: title,
      text: text,
      publishDate: publishDate,
      publishTime: publishTime,
      expireDate: expireDate,
      expireTime: expireTime,
      author: author,
      sendTo: sendTo,
      startups: startups,
      businessType: businessType
    }
    return this.http.post(`${this.uri}/insertAd`, data);
  }

  getAllRecommendations() {
    return this.http.get(`${this.uri}/getAllRecommendations`);
  }

  deleteRecommendation(title) {
    const data = {
      title: title
    }
    return this.http.post(`${this.uri}/deleteRecommendation`, data);
  }
  
  getAllCodebooks() {
    return this.http.get(`${this.uri}/getAllCodebooks`);
  }

  deleteCodebook(codebookData, category) {
    const data = {
      data: codebookData,
      category: category
    }
    return this.http.post(`${this.uri}/deleteCodebook`, data);
  }

  insertCodebook(dataCodebook, category, dateFrom, dateTo) {
    const data = {
      data: dataCodebook,
      category: category,
      dateFrom: dateFrom,
      dateTo: dateTo
    }
    return this.http.post(`${this.uri}/insertCodebook`, data);
  }

  updateCodebook(oldData, dataCodebook, category, dateFrom, dateTo) {
    const data = {
      oldData: oldData,
      data: dataCodebook,
      category: category,
      dateFrom: dateFrom,
      dateTo: dateTo
    }
    return this.http.post(`${this.uri}/updateCodebook`, data);
  }

  addStartupInterest(username, interest) {
    const data = {
      username: username,
      interest: interest
    }
    return this.http.post(`${this.uri}/addStartupInterest`, data);
  }

  deleteStartupInterest(username, interest) {
    const data = {
      username: username,
      interest: interest
    }
    return this.http.post(`${this.uri}/deleteStartupInterest`, data);
  }

  addStartupSkill(username, skill) {
    const data = {
      username: username,
      skill: skill
    }
    return this.http.post(`${this.uri}/addStartupSkill`, data);
  }

  deleteStartupSkill(username, skill) {
    const data = {
      username: username,
      skill: skill
    }
    return this.http.post(`${this.uri}/deleteStartupSkill`, data);
  }

  getAllDiscussions() {
    return this.http.get(`${this.uri}/getAllDiscussions`);
  }

  insertDiscussion(title, text, category, publishDate, publishTime, author, visibility) {
    const data = {
      title: title,
      text: text,
      category: category,
      publishDate: publishDate, 
      publishTime: publishTime,
      author: author,
      visibility: visibility
    }
    return this.http.post(`${this.uri}/insertDiscussion`, data);
  }

  archiveDiscussion(title) {
    const data = {
      title: title
    }
    return this.http.post(`${this.uri}/archiveDiscussion`, data);
  }
  
  removeDiscussion(title) {
    const data = {
      title: title
    }
    return this.http.post(`${this.uri}/removeDiscussion`, data);
  }
  
  deleteDiscussion(title) {
    const data = {
      title: title
    }
    return this.http.post(`${this.uri}/deleteDiscussion`, data);
  }

  addDiscussionReplay(title, replay) {
    const data = {
      title: title,
      replay: replay
    }
    return this.http.post(`${this.uri}/addDiscussionReplay`, data);
  }

  deleteDiscussionReplay(title, replay) {
    const data = {
      title: title,
      replay: replay
    }
    return this.http.post(`${this.uri}/deleteDiscussionReplay`, data);
  }

}