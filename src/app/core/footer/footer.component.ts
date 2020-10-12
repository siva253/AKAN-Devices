import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  facebookUrl = environment.akanFacebook;
  linkedInUrl = environment.akanLinkedIn;
  youtubeUrl = environment.akanYoutube;
  whatsappUrl = environment.akanWhatsapp;
  copyrightYear = environment.akanCopyRightYear;

  constructor() { }

  ngOnInit() {
  }

}
