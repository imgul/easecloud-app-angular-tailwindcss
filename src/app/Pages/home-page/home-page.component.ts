import { Component, OnInit } from '@angular/core';
import {CFSubmission, CFSubmissionService} from "../../Services/cfsubmission.service";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {

   constructor(private cFSubmissionService: CFSubmissionService) { }

  cfSubmissions!: CFSubmission[];

   ngOnInit(): void {
     this.getCFSubmissions();
   }

  getCFSubmissions(): void {
     this.cFSubmissionService.getCFSubmissions()
       .subscribe((res: any) => {
         this.cfSubmissions = res.data.cfSubmissions;
         console.log(this.cfSubmissions)
       });
   }

}
