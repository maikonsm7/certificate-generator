import { Component } from '@angular/core';
import { PrimaryButton } from "../../_components/primary-button/primary-button";
import { FormsModule } from '@angular/forms';
import { ActivyItem } from "../../_components/activy-item/activy-item";

@Component({
  selector: 'app-certificate-form',
  imports: [PrimaryButton, FormsModule, ActivyItem, FormsModule],
  templateUrl: './certificate-form.html',
  styleUrl: './certificate-form.css',
})
export class CertificateForm {
  name: string = '';
  activy: string = '';
  activies: string[] = ['Angular', 'TypeScript', 'JavaScript'];
}
