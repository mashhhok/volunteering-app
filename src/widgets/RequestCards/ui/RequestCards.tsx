import React from "react";
import { Container, SimpleGrid } from "@mantine/core";
import { RequestCard } from "@/entities/Requests";

const RequestCards = async () => {
  // const {data} = fetch('URL')

  return (
    <Container size="xl">
      <SimpleGrid cols={{ xs: 1, sm: 2, md: 1 }}>
        <RequestCard
          id="1"
          companyName="Company Name"
          date="27.02.2024 7:00"
          requestTitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum ea fugiat eum accusamus pariatur in error est suscipit excepturi quasi ipsam atque voluptate molestiae sunt ut, quae, qui, aut a."
          avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk8Jz0jK5APORb-ApjC0Zbn8SL-JqBTtxeyg&usqp=CAU"
        />
        <RequestCard
          id="2"
          companyName="Company Name"
          date="27.02.2024 7:00"
          requestTitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum ea fugiat eum accusamus pariatur in error est suscipit excepturi quasi ipsam atque voluptate molestiae sunt ut, quae, qui, aut a."
          avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk8Jz0jK5APORb-ApjC0Zbn8SL-JqBTtxeyg&usqp=CAU"
        />
      </SimpleGrid>
    </Container>
  );
};

export default RequestCards;
