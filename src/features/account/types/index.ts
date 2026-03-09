export interface Address {
  id: string;
  label: string;
  street: string;
  ward: string;
  district: string;
  city: string;
  isDefault: boolean;
}

export type Gender = "male" | "female" | "other";

export interface BirthDate {
  day: number | "";
  month: number | "";
  year: number | "";
}

export interface UserProfile {
  fullName: string;
  username: string;
  email: string;
  phone: string;
  birthDate: BirthDate;
  gender: Gender | "";
  avatar: string | null;
  addresses: Address[];
}
