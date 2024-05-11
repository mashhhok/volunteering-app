import { RequestCard } from "@/entities/DonationRequest";
import { Box, Flex } from "@mantine/core";

export const CardsList = ({ list }: { list: any[] }) => {
  return (
    <Flex wrap={"wrap"} gap={25}>
      {list.map((item) => (
        <RequestCard
          key={item}
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
      ))}
    </Flex>
  );
};
