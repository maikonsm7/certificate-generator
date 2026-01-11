import { Routes } from '@angular/router';
import { CertificateList } from './_pages/certificate-list/certificate-list';
import { CertificateForm } from './_pages/certificate-form/certificate-form';
import { Certificate } from './_pages/certificate/certificate';

export const routes: Routes = [
  {path: "", component: CertificateList},
  {path: "certificates/create", component: CertificateForm},
  {path: "certificates/:id", component: Certificate},
];
