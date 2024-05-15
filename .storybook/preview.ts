import type { Preview } from "@storybook/react";
import { MantineProvider } from "@mantine/core";
import "@/shared/styles/globals.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/dates/styles.layer.css";
import "@mantine/tiptap/styles.css";
import {theme} from '../src/shared/config/mantine.config'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => MantineProvider({children: Story(), theme: theme}),
  ],
};

export default preview;
