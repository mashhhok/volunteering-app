import { colors } from "@/shared/enums";
import { RgbaBgLayout } from "@/shared/ui/RgbaBgLayout";
import { Box, Button, Select, Title, darken, rgba } from "@mantine/core";
import React from "react";
import { Submit } from "./Submit";

const DonationMethodPage = () => {
  const isDisabled = true;

  return (
    <RgbaBgLayout>
      <Box maw={488} w={"100%"}>
        <Title order={4} mb={40} style={{ textAlign: "center" }}>
          Add your donation method:
        </Title>
        <Select
          w={"100%"}
          data={[
            "Card",
            "Online wallet",
            "PayPal",
            "Crypto",
            "Other payment method",
          ]}
          radius={"md"}
          placeholder="Select category"
          size="md"
          styles={{
            dropdown: {
              boxShadow: `0 10px 15px -5px ${rgba(colors.black, 0.05)}`,
            },
          }}
          mb={65}
        />
        
        <Submit disabled={isDisabled} />
      </Box>
    </RgbaBgLayout>
  );
};

export default DonationMethodPage;
