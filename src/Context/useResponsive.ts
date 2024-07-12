import { useWindowDimensions } from "react-native"

export default function useResponsive(){
  const {height, width} = useWindowDimensions()

  function scaledWidth(value: number){
    return width * (value / 100)
  }

  function scaledHeight(value: number){
    return height * (value / 100)
  }

  return {
    scaledWidth,
    scaledHeight
  }
}