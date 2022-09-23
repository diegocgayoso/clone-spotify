import { IUser } from "../interfaces/IUsers";

export function SpotifyUserFromUser(user: SpotifyApi.CurrentUsersProfileResponse): IUser {
  return{
    id: user.id,
    name: user.display_name,
    imageUrl: user.images.pop().url
  }
}
