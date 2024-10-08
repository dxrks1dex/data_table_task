import { StaticImageData } from "next/image";

export interface IUser {
  name: string;
  email: string;
  status: string;
  role: string;
  place: string;
  avatar: StaticImageData;
}
