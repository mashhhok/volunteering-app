import { createTheme } from "@mantine/core";

export const theme = createTheme({
  colors: {
    violet: [
      "#6265fc",
      "#5b5efc",
      "#5356fc",
      "#4d50ff",
      "#4347FF",
      "#3a3efc",
      "#3237fc",
      "#2b30fc",
      "#2429ff",
      "#2429ff",
    ],
    yellow: [
      "#f5d984",
      "#f5d77a",
      "#f7d774",
      "#f7d46a",
      "#FFD966",
      "#f5ce58",
      "#f2c94e",
      "#f5c842",
      "#f5c536",
      "#f7c42a",
    ],

    green: [
      "#04db7c",
      "#02c971",
      "#02b867",
      "#02a65d",
      "#018a4d",
      "#017541",
      "#006437",
      "#01522d",
      "#014225",
      "#02301c",
    ],
  },

  defaultGradient: { from: "orange.4", to: "red", deg: 45 },
  defaultRadius: "xs",
  components: {
    Button: {
      defaultProps: {
        radius: "xl",
      },
    },
  },
  fontFamily: "Montserrat",
});
