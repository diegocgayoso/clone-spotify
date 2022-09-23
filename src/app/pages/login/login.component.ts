import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private spotifyService: SpotifyService, private route: RouterModule) { }

  ngOnInit(): void {
    this.checkTokenUrlCallback()
  }

  checkTokenUrlCallback(){
    const token = this.spotifyService.getTokenUrlCallback();
    if(!!token){
      this.spotifyService.setAccessToken(token);
    };
  }

  openPageLogin() {
    window.location.href = this.spotifyService.getUrlLogin();
  }
}
