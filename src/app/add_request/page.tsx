import { UserInfoColumn } from "@/entities/User";
import { getSession } from "@/shared/auth";
import { RequestForm } from "@/widgets/RequestForm";
import { Box, Flex } from "@mantine/core";
import { redirect } from "next/navigation";

const AddRequestPage = async () => {
  const session = await getSession()
  const companyName = session?.firstName + ' ' + session?.lastName
  
  if (!session) redirect('/')

  return (
    <Box>
      <Box h={10} />
      <Flex direction={"column"} align="center" gap={15}>
        <UserInfoColumn
          avatarUrl={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk8Jz0jK5APORb-ApjC0Zbn8SL-JqBTtxeyg&usqp=CAU"
          }
          name={companyName}
        />
        <RequestForm />
      </Flex>
      <Box h={30} />
    </Box>
  );
};

export default AddRequestPage;
