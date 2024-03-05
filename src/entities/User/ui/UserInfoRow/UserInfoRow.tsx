import React from "react";
import { UserInfoMenu } from "./UserInfoMenu";
import { UserInfoTable } from "./UserInfoTable";
import { capitalizeStr } from "../../lib/utils/capitalizeStr";
import { logout } from "@/shared/auth";

interface IUserInfoRow {
  firstName: string | undefined;
  lastName: string | undefined;
  avatar: string | null | undefined;
}

export const UserInfoRow = async (props: IUserInfoRow) => {
  const firstName = props.firstName ? capitalizeStr(props.firstName) : "~";
  const lastName = props.lastName ? capitalizeStr(props.lastName) : "~";
  return (
    <UserInfoMenu
      firstName={firstName}
      lastName={lastName}
      avatar={props.avatar}
      logOutFn={logout}
      userInfo={
        <UserInfoTable
          firstName={firstName}
          lastName={lastName}
          avatar={props.avatar}
        />
      }
    />
  );
};
