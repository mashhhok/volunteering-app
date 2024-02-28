import { RequestFullCard } from "@/widgets/RequestFullCard";
import { Box } from "@mantine/core";
import React from "react";

interface IProps {
  params: {
    id: string;
  };
}

const RequestPage = async ({ params }: IProps) => {
  // const data = (await fetch(`url/${params.id}`)).json()

  return (
    <div>
      <Box h={10} />
      <RequestFullCard
        imageUrl={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk8Jz0jK5APORb-ApjC0Zbn8SL-JqBTtxeyg&usqp=CAU"
        }
        id={"1"}
        companyName={"Help for some"}
        date={"27.02.2024 7:00"}
        requestTitle={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ut."
        }
        collectedMoney={660}
        needMoney={10000}
        spendHistory={[
          {
            id: "1",
            mdx: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia iure nemo quia ratione libero corporis sed aliquid consectetur, similique at! Illum, repellat repellendus exercitationem amet sapiente nemo minus maiores quia.",
          },
          {
            id: "2",
            mdx: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia iure nemo quia ratione libero corporis sed aliquid consectetur, similique at! Illum, repellat repellendus exercitationem amet sapiente nemo minus maiores quia.",
          },
        ]}
      />
    </div>
  );
};

export default RequestPage;
