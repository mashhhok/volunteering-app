import { RequestCard } from "@/entities/DonationRequest";
import { Box, Flex } from "@mantine/core";
import React from "react";

export const CardsList = () => {
  return (
    <Flex wrap={"wrap"} gap={25}>
      {[...Array(5)].map((item) => (
        <RequestCard
          key={item}
          companyName={"ASD sad"}
          avatarUrl={""}
          requestTitle={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
          }
          requestDescription={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repudiandae voluptas doloremque eius provident inventore aut vel deleniti at a obcaecati voluptatum dolores, quos, asperiores dignissimos ipsa consectetur magnam. Nesciunt!"
          }
          requestStatus={"pending"}
          imageUrl={""}
          verifiedAndTrusted={false}
          needMoney={1000}
          collectedMoney={1000}
        />
      ))}
    </Flex>
  );
};
