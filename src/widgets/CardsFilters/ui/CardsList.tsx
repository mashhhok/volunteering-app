import { RequestCard } from "@/entities/DonationRequest";
import { Box, Flex } from "@mantine/core";

export const CardsList = () => {
  return (
    <Flex wrap={"wrap"} gap={25}>
      {[...Array(5)].map((item) => (
        <RequestCard
          key={item}
          companyName={"ASD sad"}
          requestTitle={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
          }
          requestDescription={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repudiandae voluptas doloremque eius provident inventore aut vel deleniti at a obcaecati voluptatum dolores, quos, asperiores dignissimos ipsa consectetur magnam. Nesciunt!"
          }
          requestStatus={"pending"}
          imageUrl={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk8Jz0jK5APORb-ApjC0Zbn8SL-JqBTtxeyg&usqp=CAU"
          }
          verifiedAndTrusted={false}
          needMoney={1000}
          collectedMoney={1000}
          location={""}
          categories={[]}
        />
      ))}
    </Flex>
  );
};
