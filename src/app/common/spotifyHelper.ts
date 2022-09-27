import { IPlaylist } from "../interfaces/IPlaylist";
import { IUser } from "../interfaces/IUsers";

export function SpotifyUserFromUser(user: SpotifyApi.CurrentUsersProfileResponse): IUser {
  return{
    id: user.id,
    name: user.display_name,
    imageUrl: user.images.pop().url
  }
}

export function SpotifyPlaylistFromPlaylist(playlist: SpotifyApi.PlaylistObjectSimplified): IPlaylist{
  return{
    id: playlist.id,
    name: playlist.name,
    imagemUrl: playlist.images.pop().url
  };
}
