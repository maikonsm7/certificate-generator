import { Component } from '@angular/core';
import { PrimaryButton } from "../primary-button/primary-button";
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificate-item',
  imports: [PrimaryButton],
  templateUrl: './certificate-item.html',
  styleUrl: './certificate-item.css',
})
export class CertificateItem {
  id: string = '6';

  constructor(private router: Router) { }

  viewCertificate() {
    this.router.navigateByUrl(`/certificates/${this.id}`);
  }

}
