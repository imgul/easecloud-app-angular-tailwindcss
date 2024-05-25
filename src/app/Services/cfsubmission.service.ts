import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CFSubmission {
    id: number;
    name: string;
    email: string;
    message: string;
    user_id: number;
    ip: string;
    user_agent: string;
    request_uri: string;
    http_host: string;
    created_at: string;
    updated_at: string;
    comments: string;
    comments_at: string;
    comments_by: string;
    cf_inbox_type_id: number;
    contact_form_id: number;
    cf_label_id: number;
    read_at: string;
    deleted_at: string;
    starred_at: string;
    archived_at: string;
    spam_score: number;
    spam_reported_at: string;
}

export interface CFSubmissionData {
    name: string;
    email: string;
    message: string;
}

@Injectable({
  providedIn: 'root'
})
export class CFSubmissionService {

  private apiGetUrl = 'https://slim-php.xsill.com/api/cf-submissions';
  private apiPostUrl = 'https://slim-php.xsill.com/api/cf-submissions';

  // private apiGetUrl = 'http://localhost:8080/api/cf-submissions';
  // private apiPostUrl = 'http://localhost:8080/api/cf-submissions';

  constructor(private http: HttpClient) { }

  getCFSubmissions(): Observable<CFSubmission[]> {
    return this.http.get<CFSubmission[]>(this.apiGetUrl);
  }

  submit(CFSubmissionData: CFSubmissionData) {
    return this.http.post(this.apiPostUrl, CFSubmissionData);
  }

}
