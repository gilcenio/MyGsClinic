import { useRef } from "react";
import { IChangeCardProps } from "../@Types";

export function PaginateReference(setScrollChange?: React.Dispatch<React.SetStateAction<number>>){
  const PaginateReference = useRef(({ viewableItems }: IChangeCardProps) => {
    const index = viewableItems[0].index!;
    setScrollChange && setScrollChange(index)
  })

  return PaginateReference
}