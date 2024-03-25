import { VerificationProcess } from "@/processes/VerificationProcess";
import React from "react";

interface IProps {
  params: {
    id: string;
  };
}

const VerificationPage = ({ params }: IProps) => {
  return <VerificationProcess pageId={params.id} />;
};

export default VerificationPage;
