import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../model/user.model';

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
          this.router.navigate(['login']);
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
          this.router.navigate(['login']);
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

}
