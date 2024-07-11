import { ViewToken } from "react-native";

export interface IDATAWELCOME{
  image: any
}

export interface IDATACOLOR{
  item: string | any
}

export interface IChangeCardProps {
  viewableItems: Array<ViewToken>;
  changed: Array<ViewToken>;
}