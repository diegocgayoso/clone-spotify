import { Router } from '@angular/router';
import { IUser } from './../interfaces/IUsers';
import { SpotifyConfig } from './../../environments/environment';
import { Injectable } from '@angular/core';
import Spotify from 'spotify-web-api-js';
import { SpotifyPlaylistFromPlaylist, SpotifyUserFromUser } from '../common/spotifyHelper';
import { IPlaylist } from '../interfaces/IPlaylist';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  spotifyApi: Spotify.SpotifyWebApiJs = null;
  user: IUser;

  constructor(private router: Router) {
    this.spotifyApi = new Spotify();
  }

  async initUser() {
    if (!!this.user)
      return true;

    const token = localStorage.getItem('token');
    if (!token)
      return false;

    try {
      this.setAccessToken(token);
      await this.getSpotifyUser();
      return !!this.user;
    } catch (exc) {
      return false;
    }
  }

  async getSpotifyUser() {
    const userInfo = await this.spotifyApi.getMe();
    this.user = SpotifyUserFromUser(userInfo);
    // console.table(userInfo)
  }

  getUrlLogin() {
    const authEndpoint = `${SpotifyConfig.authEndpoint}?`;
    const clientId = `client_id=${SpotifyConfig.clientId}&`;
    const redirectUrl = `redirect_uri=${SpotifyConfig.urlRedirect}&`;
    const scopes = `scope=${SpotifyConfig.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;
    return authEndpoint + clientId + redirectUrl + scopes + responseType;
  }

  getTokenUrlCallback() {
    if (!window.location.hash) {
      return ''
    }
    const params = window.location.hash.substring(1).split('&');

    return params[0].split('=')[1];
  }

  setAccessToken(token: string) {
    this.spotifyApi.setAccessToken(token);
    localStorage.setItem('token', token);
  }

  async searchPlaylistUser(offset = 0, limit = 50): Promise<IPlaylist[]> {
    const playlists = await this.spotifyApi.getUserPlaylists(this.user.id, { offset, limit });
    console.log(playlists.items.pop().images.pop().url);

    return playlists.items.map(SpotifyPlaylistFromPlaylist)
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login'])

  }
}
