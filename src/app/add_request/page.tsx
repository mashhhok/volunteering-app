import { UserInfoColumn } from "@/entities/User";
import { RequestForm } from "@/widgets/RequestForm";
import { Box, Flex } from "@mantine/core";

const AddRequestPage = () => {
  return (
    <Box>
      <Box h={10} />
      <Flex direction={"column"} align="center" gap={15}>
        <UserInfoColumn
          imageUrl={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk8Jz0jK5APORb-ApjC0Zbn8SL-JqBTtxeyg&usqp=CAU"
          }
          name={"Help for some"}
        />
        <RequestForm />
      </Flex>
      <Box h={30} />
    </Box>
  );
};

export default AddRequestPage;
