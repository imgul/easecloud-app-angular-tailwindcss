import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CFSubmissionService} from "../../Services/cfsubmission.service";
import {NgIf} from "@angular/common";
import {SpinnerComponent} from "../../Utilities/spinner/spinner.component";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    NgIf,
    SpinnerComponent
  ],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})

export class ContactPageComponent {

  protected name: string = '';
  protected email: string = '';
  protected message: string = '';

  is_loading: boolean = false;
  loadingTitle: string = 'Validating...';

  errors: any = [];

  constructor(private cFSubmissionService: CFSubmissionService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  submit(): void {

    this.is_loading = true;
    this.loadingTitle  = 'Sending...';

    let inputData = {
      name: this.name,
      email: this.email,
      message: this.message
    }

    this.cFSubmissionService.submit(inputData)
      .subscribe({
        next: (data: any) => {
          this.is_loading = false;
          this.errors = [];
          this.name = '';
          this.email = '';
          this.message = '';
          this.toastr.success(data.message, 'Success!');
        },
        error: (error) => {
          this.is_loading = false;
          this.errors = error.error.errors;
          this.toastr.error(error.error.message, 'Error Occurred!');
        }
      });
  }

}
