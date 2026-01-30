export interface Food {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  ingredients? : {name: string, price: number}[]
  // add more if needed: category, totalSell, etc.
}

import { ISiteInfo } from '@/types';
export type UserRole = "ADMIN" | "EDITOR";
export type TRole = "EDITOR" | "ADMIN"

import type { ComponentType } from "react"

export type { ILogin, IRegister } from "./auth.type"

export interface IResponse<T> {
  statusCode: number
  success: boolean
  message: string
  data: T
}

export interface ISidebarItem {
  title: string,
  items: {
    title: string,
    url: string,
    component: ComponentType
  }[]

}
export interface IUser {
  _id: string
  name: string
  email: string
  role: "EDITOR" | "ADMIN"
  password: string
  isDeleted: boolean
  isActive: string
  isVerified: boolean
  picture: string
  createdAt: string
  updatedAt: string
}

export interface IUserApiResponse {
  data: IUser;
}

export type GetQueryParams = {
  searchTerm?: string;
  sort?: string;
  page?: number;
  limit?: number;
};

export interface IPaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
}



