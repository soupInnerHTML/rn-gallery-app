export interface IImage {
  id: string;
  width: number;
  height: number;
  likes: string;
  liked_by_user: string;
  created_at: string;
  links: {
    original: string;
    medium: string;
  };
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  user: {
    id: string;
    username: string;
    name: string;
    portfolio_url: string;
    bio: string;
    location: string;
    total_likes: number;
    total_photos: number;
    total_collections: number;
    instagram_username: string;
    twitter_username: string;
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
  };
}
