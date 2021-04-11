import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../model/user.model';
import { Codebook } from '../model/codebook.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('UploadFileInput', { static: false }) uploadFileInput: ElementRef;
  fileUploadForm: FormGroup;
  file: any;
  fileInputLabel: string;
  imgH: number = -1;
  imgW : number = -1;
  public slika: string = null;

  constructor(private service: ServiceService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.phase = '';
    this.investorType = '';

    this.fileUploadForm = this.formBuilder.group({
      uploadedImage: ['']
    });
    this.fileInputLabel = "";
    this.getCodebookCategories();
  }

  // StartUp
  username: string;
  pass1: string;
  pass2: string;
  fullName: string;
  establishmentDate: Date;
  registrationNumber: string;
  taxId: string;
  firstName: string;
  middleName: string;
  lastName: string;
  address: string;
  municipality: string;
  city: string;
  country: string;
  phoneNumber: string;
  email: string;
  website: string;
  socialNetworks: string;
  businessType: string;
  employeeNumber: number;
  phase: string;
  income1: string;
  income2: string;
  income3: string;
  profit1: string;
  profit2: string;
  profit3: string;
  projectProposal: string;
  amount: string;
  ipStatus: string;
  patentInfo: string;
  msgStartup: string;

  // Investor
  usernameInv: string;
  pass1Inv: string;
  pass2Inv: string;
  fullNameInv: string;
  establishmentDateInv: Date;
  registrationNumberInv: string;
  taxIdInv: string;
  firstNameInv: string;
  middleNameInv: string;
  lastNameInv: string;
  addressInv: string;
  municipalityInv: string;
  cityInv: string;
  countryInv: string;
  phoneNumberInv: string;
  emailInv: string;
  websiteInv: string;
  socialNetworksInv: string;
  businessTypeInv: string;
  employeeNumberInv: number;
  income1Inv: string;
  income2Inv: string;
  income3Inv: string;
  profit1Inv: string;
  profit2Inv: string;
  profit3Inv: string;
  investorType: string;
  servicesType: string;
  investFrom: string;
  investTo: string;
  msgInvestor: string;

  // Codebooks
  codebookAddress: Codebook[];
  codebookCity: Codebook[];
  codebookCountry: Codebook[];
  codebookBusinessType: Codebook[];  
  codebookCompany: Codebook[];  
  codebookServices: Codebook[];

  registerStartup() {
    this.msgStartup = "";
    if (!this.username || !this.pass1 || !this.pass2 || !this.fullName || !this.establishmentDate ||
      !this.registrationNumber || !this.taxId || !this.firstName || !this.middleName || !this.lastName ||
      !this.address || !this.municipality || !this.city || !this.country || !this.phoneNumber ||
      !this.email || !this.website || !this.socialNetworks || !this.businessType || !this.employeeNumber ||
      !this.phase || !this.income1 || !this.income2 || !this.income3 || !this.profit1 ||
      !this.profit2 || !this.profit3 || !this.projectProposal || !this.amount || !this.ipStatus || !this.patentInfo || !this.fileInputLabel) {
      this.msgStartup = "Please fill in all the fields.";
      return;
    }
    this.service.getUser(this.username).subscribe((user: User) => {
      if (user) {
        this.msgStartup = "Username already exists.";
        return;
      }
      else {
        if (this.pass1 != this.pass2) {
          this.msgStartup = "Passwords must be same.";
          return;
        }
        this.service.registerStartup(this.username, this.pass1, this.fullName, this.establishmentDate, this.registrationNumber, this.taxId, this.firstName, this.middleName, 
        this.lastName, this.address, this.municipality, this.city, this.country, this.phoneNumber, this.email, this.website, this.socialNetworks, this.businessType, this.employeeNumber, this.phase, 
        this.income1, this.income2, this.income3, this.profit1, this.profit2, this.profit3, this.projectProposal, this.amount, this.ipStatus, this.patentInfo, this.fileInputLabel).subscribe(() => {
          this.insertCodebooks("startup");
          let user = {
            name: this.fullName,
            email: this.email
          }
          this.service.sendmail(user).subscribe(() => {
            this.router.navigate(['login']);
          });
        });
      }
    })
  }

  registerInvestor() {
    this.msgInvestor = "";
    if (!this.usernameInv || !this.pass1Inv || !this.pass2Inv || !this.fullNameInv || !this.establishmentDateInv ||
      !this.registrationNumberInv || !this.taxIdInv || !this.firstNameInv || !this.middleNameInv || !this.lastNameInv ||
      !this.addressInv || !this.municipalityInv || !this.cityInv || !this.countryInv || !this.phoneNumberInv ||
      !this.emailInv || !this.websiteInv || !this.socialNetworksInv || !this.businessTypeInv || !this.employeeNumberInv ||
      !this.income1Inv || !this.income2Inv || !this.income3Inv || !this.profit1Inv || !this.profit2Inv || !this.profit3Inv || 
      !this.investorType || !this.servicesType || !this.investFrom || !this.investTo || !this.fileInputLabel) {
      this.msgInvestor = "Please fill in all the fields.";
      return;
    }
    this.service.getUser(this.usernameInv).subscribe((user: User) => {
      if (user) {
        this.msgInvestor = "Username already exists.";
        return;
      }
      else {
        if (this.pass1Inv != this.pass2Inv) {
          this.msgInvestor = "Passwords must be same.";
          return;
        }
        this.service.registerInvestor(this.usernameInv, this.pass1Inv, this.fullNameInv, this.establishmentDateInv, this.registrationNumberInv, this.taxIdInv, this.firstNameInv, this.middleNameInv, 
        this.lastNameInv, this.addressInv, this.municipalityInv, this.cityInv, this.countryInv, this.phoneNumberInv, this.emailInv, this.websiteInv, this.socialNetworksInv, this.businessTypeInv, this.employeeNumberInv,
        this.income1Inv, this.income2Inv, this.income3Inv, this.profit1Inv, this.profit2Inv, this.profit3Inv, this.investorType, this.servicesType, this.investFrom, this.investTo, this.fileInputLabel).subscribe(() => {
          this.insertCodebooks("investor");
          let user = {
            name: this.fullNameInv,
            email: this.emailInv
          }
          this.service.sendmail(user).subscribe(() => {
            this.router.navigate(['login']);
          });
        });
      }
    })
  }
  
  onFileSelect(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const img = new Image();
      img.src = reader.result as string;
      img.onload = () => {
        this.imgH = img.naturalHeight;
        this.imgW = img.naturalWidth;
      };
    };
    this.fileInputLabel = file.name;
    this.fileUploadForm.get('uploadedImage').setValue(file);
  }

  getCodebookCategories() {
    this.codebookAddress = [];
    this.codebookCity = [];
    this.codebookCountry = [];
    this.codebookBusinessType = [];
    this.codebookCompany = [];
    this.codebookServices = [];
    this.service.getAllCodebooks().subscribe((codebooks: Codebook[]) => {
      codebooks.forEach(codebook => {
        if (codebook.category == "Address") this.codebookAddress.push(codebook);
        else if (codebook.category == "City") this.codebookCity.push(codebook);
        else if (codebook.category == "Country") this.codebookCountry.push(codebook);
        else if (codebook.category == "Business type") this.codebookBusinessType.push(codebook);
        else if (codebook.category == "Company") this.codebookCompany.push(codebook);
        else if (codebook.category == "Services") this.codebookServices.push(codebook);
      })
    }); 
  }

  insertCodebooks(user: string) {
    let date = new Date();
    let month = ("00" + (date.getMonth() + 1)).slice(-2);
    let day = ("00" + date.getDate()).slice(-2);
    let dateFrom = (date.getFullYear()) + "-" + month + "-" + day;
    let dateTo = (date.getFullYear() + 2) + "-" + month + "-" + day;

    let found = false;
    this.codebookAddress.forEach(codebook => {
      if (user == 'startup' && codebook.data == this.address) found = true;
      else if (user == 'investor' && codebook.data == this.addressInv) found = true;
    });
    if (!found) {
      if (user == 'startup') {
        this.service.insertCodebook(this.address, "Address", dateFrom, dateTo).subscribe(() => {});
      }
      else if (user == 'investor') {
        this.service.insertCodebook(this.addressInv, "Address", dateFrom, dateTo).subscribe(() => {});
      }
    }
    found = false;
    this.codebookCity.forEach(codebook => {
      if (user == 'startup' && codebook.data == this.city) found = true;
      else if (user == 'investor' && codebook.data == this.cityInv) found = true;
    });
    if (!found) {
      if (user == 'startup') {
        this.service.insertCodebook(this.city, "City", dateFrom, dateTo).subscribe(() => {});
      }
      else if (user == 'investor') {
        this.service.insertCodebook(this.cityInv, "City", dateFrom, dateTo).subscribe(() => {});
      }
    }
    found = false;
    this.codebookCountry.forEach(codebook => {
      if (user == 'startup' && codebook.data == this.country) found = true;
      else if (user == 'investor' && codebook.data == this.countryInv) found = true;
    });
    if (!found) {
      if (user == 'startup') {
        this.service.insertCodebook(this.country, "Country", dateFrom, dateTo).subscribe(() => {});
      }
      else if (user == 'investor') {
        this.service.insertCodebook(this.countryInv, "Country", dateFrom, dateTo).subscribe(() => {});
      }
    }
    found = false;
    this.codebookBusinessType.forEach(codebook => {
      if (user == 'startup' && codebook.data == this.businessType) found = true;
      else if (user == 'investor' && codebook.data == this.businessTypeInv) found = true;
    });
    if (!found) {
      if (user == 'startup') {
        this.service.insertCodebook(this.businessType, "Business type", dateFrom, dateTo).subscribe(() => {});
      }
      else if (user == 'investor') {
        this.service.insertCodebook(this.businessTypeInv, "Business type", dateFrom, dateTo).subscribe(() => {});
      }
    }
    found = false;
    this.codebookCompany.forEach(codebook => {
      if (user == 'startup' && codebook.data == this.fullName) found = true;
      else if (user == 'investor' && codebook.data == this.fullNameInv) found = true;
    });
    if (!found) {
      if (user == 'startup') {
        this.service.insertCodebook(this.fullName, "Company", dateFrom, dateTo).subscribe(() => {});
      }
      else if (user == 'investor') {
        this.service.insertCodebook(this.fullNameInv, "Company", dateFrom, dateTo).subscribe(() => {});
      }
    }
    if (user == 'investor') {
      found = false;
      this.codebookServices.forEach(codebook => {
        if (codebook.data == this.servicesType) found = true;
      });
      if (!found) {
        this.service.insertCodebook(this.servicesType, "Services", dateFrom, dateTo).subscribe(() => {});
      }
    }
    
  }

}
