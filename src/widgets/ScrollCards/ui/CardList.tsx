"use client";
import { EmptyCard, RequestCard } from "@/entities/DonationRequest";
import { Box, Flex, ScrollArea } from "@mantine/core";
import React from "react";
import { useScrollCardsState } from "../store";
import { IDictionary } from "@/shared/config/i18n.config";

export const CardList = (props: any & {dict: IDictionary}) => {
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
            <EmptyCard dict={props.dict} />
          ) : (
            list.map((item, index) => (
              <Box key={item.id} w={440}>
                <RequestCard
                  id={item?.requestData?.id}
                  companyName={item?.userData?.firstName}
                  requestTitle={item?.requestData?.title}
                  requestDescription={item?.requestData?.description}
                  requestStatus={item?.requestData?.status}
                  imageUrl={item?.requestData?.imageUrl[0]}
                  verifiedAndTrusted={item?.userData?.verifiedBy}
                  needMoney={item?.requestData?.needMoney}
                  collectedMoney={item?.requestData?.collectedMoney}
                  location={item?.requestData?.location}
                  categories={item?.requestData?.tags} dict={props.dict}                />
              </Box>
            ))
          )}
        </Flex>
      </Flex>
    </ScrollArea>
  );
};
