import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AbstractService } from './abstract-service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NewsletterSubscription } from '../_models/newsletter-subscription';

@Injectable({
  providedIn: 'root'
})
export class NewsletterSubscriptionService extends AbstractService<NewsletterSubscription> {

  constructor(protected _http: HttpClient, protected _snackBar : MatSnackBar) {
    super(_http, environment.apiUrl+"/api/NewsletterSubscriptions/", _snackBar);
  }
}
