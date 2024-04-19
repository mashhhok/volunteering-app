import React from "react";
import { Container, Flex, SimpleGrid } from "@mantine/core";
import { RequestCard } from "@/entities/DonationRequest";

const RequestCards = async () => {
  // const {data} = fetch('URL')

  return (
    <Container size="90em">
      <Flex wrap={"wrap"} gap={10} justify={"center"}>
        <RequestCard
          companyName="Company Name"
          requestTitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum ea fugiat eum accusamus pariatur"
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
          location={"Kiiv"}
          categories={[]}
        />
        <RequestCard
          companyName="Company Name"
          requestTitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum ea fugiat eum accusamus pariatur"
          requestDescription={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque modi voluptas ipsam velit provident voluptate quod facilis nisi, amet adipisci. Dicta, consequatur repudiandae. Consequuntur fugiat, qui eligendi error libero recusandae."
          }
          requestStatus={"pending"}
          needMoney={10000}
          collectedMoney={3200}
          imageUrl={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk8Jz0jK5APORb-ApjC0Zbn8SL-JqBTtxeyg&usqp=CAU"
          }
          verifiedAndTrusted={false}
          location={""}
          categories={[]}
        />
        <RequestCard
          companyName="Company Name"
          requestTitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum ea fugiat eum accusamus pariatur"
          requestDescription={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque modi voluptas ipsam velit provident voluptate quod facilis nisi, amet adipisci. Dicta, consequatur repudiandae. Consequuntur fugiat, qui eligendi error libero recusandae."
          }
          requestStatus={"open"}
          needMoney={10000}
          collectedMoney={10000}
          imageUrl={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk8Jz0jK5APORb-ApjC0Zbn8SL-JqBTtxeyg&usqp=CAU"
          }
          verifiedAndTrusted={true}
          location={""}
          categories={[]}
        />
      </Flex>
    </Container>
  );
};

export default RequestCards;
