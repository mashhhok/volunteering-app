import { CreateFundraiserProcess } from "@/processes/CreateFundraiserProcess";
import React from "react";

interface ICreateFundraiserPage {
  params: {
    page: string;
  };
}

const CreateFundraiserPage = ({ params }: ICreateFundraiserPage) => {
  return <CreateFundraiserProcess page={params.page} />;
};

export default CreateFundraiserPage;
