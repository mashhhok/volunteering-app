import React from "react";
import { UserInfoMenu } from "./UserInfoMenu";
import { UserInfoTable } from "./UserInfoTable";

interface IUserInfoRow {
  firstName: string;
  lastName: string;
  avatar: string | null;
}

export const UserInfoRow = ({ firstName, lastName, avatar }: IUserInfoRow) => {
  return (
    <UserInfoMenu
    firstName={firstName}
    lastName={lastName}
    avatar={avatar}
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
