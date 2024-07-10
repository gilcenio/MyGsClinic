import { StyleSheet } from "react-native";
import theme from "../../Global/theme";

interface IStylesheetInterface {
  backgroundColor?: string
}


export const globalStyles = ({backgroundColor}: IStylesheetInterface) =>
  StyleSheet.create({
    content: {
      flex: 1,
      backgroundColor: backgroundColor ? backgroundColor : theme.base.base_1,
      padding: 20,
    }
  }
);