// Author
export interface AuthorType {
  firstName?: string;
  lastName?: string;
  job?: string | undefined;
  bio?: string | undefined;
  image?: string;
  social?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  }
}
