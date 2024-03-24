"use client";
import { EmptyCard, RequestCard } from "@/entities/DonationRequest";
import { Box, Flex, ScrollArea } from "@mantine/core";
import React from "react";
import { useScrollCardsState } from "../store";
import { useDoOnce } from "@/shared/lib/hooks/useDoOnce";

export const CardList = (props: any) => {
  const scrollRefNode = React.useRef<HTMLDivElement>(null);
  const setScrollRef = useScrollCardsState((state) => state.setScrollRef);
  const onLoad = useDoOnce(() => {
    setScrollRef(scrollRefNode);
  });

  return (
    <ScrollArea
      viewportRef={scrollRefNode}
      {...props}
      w={"100%"}
      py={15}
      px={10}
      onLoad={onLoad}
      type="always"
    >
      <Flex>
        <Box w={{base: 0, xs: 60}}></Box>
        <Flex gap={60}>
          {props.noCards ? <EmptyCard/> : [...new Array(5)].map((item, index) => (
            <Box key={index} w={440}>
              <RequestCard
                companyName="Company Name"
                requestTitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum ea fugiat eum accusamus pariatur"
                avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk8Jz0jK5APORb-ApjC0Zbn8SL-JqBTtxeyg&usqp=CAU"
                requestDescription={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque modi voluptas ipsam velit provident voluptate quod facilis nisi, amet adipisci. Dicta, consequatur repudiandae. Consequuntur fugiat, qui eligendi error libero recusandae."
                }
                requestStatus={"closed"}
                needMoney={10000}
                collectedMoney={3200}
                imageUrl={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk8Jz0jK5APORb-ApjC0Zbn8SL-JqBTtxeyg&usqp=CAU"
                }
                verifiedAndTrusted={true}
              />
            </Box>
          )) }
          
        </Flex>
      </Flex>
    </ScrollArea>
  );
};
