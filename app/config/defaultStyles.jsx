import { Platform } from "react-native"
import colors from "./colors"

export default {
  colors,
  text: {
    // flex: 1,
    width: '100%',
    color: colors.dark,
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: 'Avenir'
      },
      android: {
        fontSize: 18,
        fontFamily: 'Roboto'
      }
    }),
    padding: 0,
  }
}