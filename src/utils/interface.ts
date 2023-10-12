export interface VideoProps {
  _id: number;
  title: string;
  description: string;
  duration: string;
  video_url: string;
  thumbnail_ulr: string;
  is_private: number;
  harga: number;
  published_date: string;
  categories: string;
  tags: string;
  views: number;
  instructor: string;
  online: boolean;
  private_token: string;
}

export interface NewsProps {
  id: number;
  title: string;
  content: string;
  description: string;
  published_date: string;
  image: string;
  video: string;
  tags: string;
  categories: string;
  published: boolean;
  region: string;
  website_url: string;
}

export interface ConferenceProps {
  conference_id: string;
  title: string;
  description: string;
  image: string;
  start_date: string;
  end_date: string;
  location: string;
  organizer: string;
  website_url: string;
  registration_required: boolean;
  speakers: string;
  is_free: boolean;
  topic: string;
  created_at: string;
  updated_at: string;
}

export interface Item {
  id: number;
}


export interface HeaderProps {
  heading?: string;
  subheading?: string;
}

export interface FormData {
  name: string;
  email: string;
}

export interface RegionProps {
  selectedRegion: string;
}

export interface SearchProps {
  search: string;
  holder: string;
  onSetSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface VideoPlayerProps {
  video_url: string;
  thumbnail_ulr: string;
}

export interface MemberProps {
  nama: string;
  username: string;
  password: string;
  nama_sertifikat: string;
  subspesialisasi: string;
  asal_institusi: string;
  pas_foto: string;
  sertifikat: string;
  no_seri: string;
  no_serkom: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  no_idi: string;
  npa_pdki: any;
  created_at: string;
  updated_at: string;
  is_ex_leader: boolean;
  is_leader: boolean;
}