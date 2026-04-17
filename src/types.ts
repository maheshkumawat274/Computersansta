export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  benefits: string[];
  image: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  caption: string;
}

export interface ContactQuery {
  id: string;
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
  createdAt: string;
  isRead: boolean;
}
