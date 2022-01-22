import { Component, OnInit } from '@angular/core';
import { NewsletterSubscriptionService } from 'src/app/_services/newsletter-subscription.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  // Model for newsletter subscription
  model : any = {};

  constructor(
    private _newsletterSubscription : NewsletterSubscriptionService
  ) { }

  // on init cycle hook
  ngOnInit() {
    
  }

  // Subscription to the newsletter
  subscribeNewsletter(){
    this._newsletterSubscription.create(this.model).subscribe();
  }

}
