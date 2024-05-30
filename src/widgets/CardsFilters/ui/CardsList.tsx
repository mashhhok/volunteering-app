import { RequestCard } from "@/entities/DonationRequest";
import { IDictionary } from "@/shared/config/i18n.config";
import { Box, Flex } from "@mantine/core";

export const CardsList = ({ list, dict }: { list: any[], dict: IDictionary }) => {
  return (
    <Flex wrap={"wrap"} gap={25}>
      {list.map((item) => (
        <RequestCard
          key={item}
          dict={dict}
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
          categories={item?.requestData?.tags}
        />
      ))}
    </Flex>
  );
};
