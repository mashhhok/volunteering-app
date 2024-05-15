import { TextField } from "@/shared/ui";
import { Box, Flex, Text } from "@mantine/core";
import React from "react";

export const SocialInputs = ({
  instagram,
  facebook,
  google,
  telegram,
  whatsapp,
}: {
  instagram: string;
  facebook: string;
  google: string;
  telegram: string;
  whatsapp: string;
}) => {
  return (
    <Box>
      <Text fw={500} mb={15} ml={10}>
        Contact
      </Text>
      <Flex mb={16} gap={20} direction={{ base: "column", sm: "row" }}>
        <Box flex="1 1 auto">
          <TextField
            noColors
            title="Instagram"
            placeholder="User`s Instagram link"
            name="instagram"
            defaultValue={instagram}
          />
        </Box>
        <Box flex="1 1 auto">
          <TextField
            noColors
            title="Facebook"
            placeholder="User`s Facebook link"
            name="facebook"
            defaultValue={facebook}

          />
        </Box>
      </Flex>
      <Flex mb={16} gap={20} direction={{ base: "column", sm: "row" }}>
        <Box flex="1 1 auto">
          <TextField
            noColors
            title="Google"
            placeholder="User`s Google link"
            name="google"
            defaultValue={google}

          />
        </Box>
        <Box flex="1 1 auto">
          <TextField
            noColors
            title="Telegram"
            placeholder="User`s Telegram link"
            name="telegram"
            defaultValue={telegram}

          />
        </Box>
      </Flex>
      <Box flex="1 1 auto">
        <TextField
          noColors
          title="Whatsapp"
          name="whatsapp"
          placeholder="User`s Whatsapp link"
          defaultValue={whatsapp}

        />
      </Box>
    </Box>
  );
};
