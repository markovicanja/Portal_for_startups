import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  investorType: string;
  servicesType: string;
  investFrom: string;
  investTo: string;
  msgInvestor: string;

  registerStartup() {

  }

  registerInvestor() {
    
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
