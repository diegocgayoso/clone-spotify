import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { IUser } from 'src/app/interfaces/IUsers';

@Component({
  selector: 'app-footer-user',
  templateUrl: './footer-user.component.html',
  styleUrls: ['./footer-user.component.scss']
})
export class FooterUserComponent implements OnInit {

  logoutIcon = faSignOut;
  user: IUser = null;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.user = this.spotifyService.user;
  }

  logout(){
    this.spotifyService.logout();
  }

}
