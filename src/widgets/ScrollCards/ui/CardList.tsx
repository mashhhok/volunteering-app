"use client";
import { EmptyCard, RequestCard } from "@/entities/DonationRequest";
import { Box, Flex, ScrollArea } from "@mantine/core";
import React from "react";
import { useScrollCardsState } from "../store";

export const CardList = (props: any) => {
  const scrollRefNode = React.useRef<HTMLDivElement>(null);
  const setScrollRef = useScrollCardsState((state) => state.setScrollRef);
  const [list, setList] = React.useState<any[]>([]);

  React.useEffect(() => {
    async function Do() {
      const res = await fetch(`/api/requests?status=pending&userId=${props.userId}`, {
        cache: "no-store",
      });
      const data = await res.json();
      setList(data.res);
      console.log(data)
    }
    Do();
  }, []);

  React.useEffect(() => {
    console.log(scrollRefNode);
    setScrollRef(scrollRefNode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScrollArea
      viewportRef={scrollRefNode}
      {...props}
      w={"100%"}
      py={15}
      px={10}
      type="always"
    >
      <Flex>
        <Box w={{ base: 0, lg: 60 }}></Box>
        <Flex gap={60}>
          {list.length < 1 ? (
            <EmptyCard />
          ) : (
            list.map((item, index) => (
              <Box key={item.id} w={440}>
                <RequestCard
                  companyName={item?.userData?.firstName}
                  requestTitle={item?.requestData?.title}
                  requestDescription={item?.requestData?.description}
                  requestStatus={item?.requestData?.status}
                  imageUrl={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk8Jz0jK5APORb-ApjC0Zbn8SL-JqBTtxeyg&usqp=CAU"
                  }
                  verifiedAndTrusted={true}
                  needMoney={item?.requestData?.needMoney}
                  collectedMoney={item?.requestData?.collectedMoney}
                  location={item?.requestData?.location}
                  categories={item?.requestData?.tags}
                />
              </Box>
            ))
          )}
        </Flex>
      </Flex>
    </ScrollArea>
  );
};
