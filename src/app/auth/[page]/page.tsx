import { AuthProcess } from "@/processes/AuthProcess";
import React from "react";

interface IProps {
  params: {
    page: string;
  };
}

const AuthPage = ({ params }: IProps) => {
  return <AuthProcess pageId={parseInt(params.page)} />;
};

export default AuthPage;
