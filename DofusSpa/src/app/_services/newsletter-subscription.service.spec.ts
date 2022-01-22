/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NewsletterSubscriptionService } from './newsletter-subscription.service';

describe('Service: NewsletterSubscription', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsletterSubscriptionService]
    });
  });

  it('should ...', inject([NewsletterSubscriptionService], (service: NewsletterSubscriptionService) => {
    expect(service).toBeTruthy();
  }));
});
