import { IPlaylist } from './../../interfaces/IPlaylist';
import { Component, OnInit } from '@angular/core';
import {faHome, faMusic, faSearch} from '@fortawesome/free-solid-svg-icons';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-panel-left',
  templateUrl: './panel-left.component.html',
  styleUrls: ['./panel-left.component.scss']
})
export class PanelLeftComponent implements OnInit {

  menuSelected = 'Home';

  playlists: IPlaylist[] = [];

  //Icons
  homeIcon = faHome;
  searchIcon = faSearch;
  playlistIcon = faMusic;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.searchPlaylists();
  }

  buttonClicked(button: string){
    this.menuSelected = button;
  }

  async searchPlaylists(){
    this.playlists = await this.spotifyService.searchPlaylistUser();
    console.log(this.playlists);
  }
}
