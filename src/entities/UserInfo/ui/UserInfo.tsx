import React from "react";
import { UserInfoMenu } from "./UserInfoMenu";
import { UserInfoTable } from "./UserInfoTable";

interface IUserInfo {
  firstName: string;
  lastName: string;
  avatar: string | null;
}

export const UserInfo = ({ firstName, lastName, avatar }: IUserInfo) => {
  return (
    <UserInfoMenu
      userInfo={
        <UserInfoTable
          firstName={firstName}
          lastName={lastName}
          avatar={avatar}
        />
      }
    />
  );
};
