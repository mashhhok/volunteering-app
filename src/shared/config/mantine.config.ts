import { createTheme } from "@mantine/core";

export const theme = createTheme({
  colors: {},
  defaultGradient: { from: "orange.4", to: "red", deg: 45 },
  defaultRadius: "xs",
  components: {
    Button: {
      defaultProps: {},
    },
  },
  fontFamily: 'Montserrat'
});
