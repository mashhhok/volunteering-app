import React from "react";
import { UserInfoMenu } from "./UserInfoMenu";
import { UserInfoTable } from "./UserInfoTable";
import { capitalizeStr } from "../../lib/utils/capitalizeStr";
import { getSession, logout } from "@/shared/auth";

interface IUserInfoRow {
  firstName: string | null;
  lastName: string | null;
  avatar: string | null | undefined;
}

export const UserInfoRow = async (props: IUserInfoRow) => {
  const session = await getSession();
  const firstName = props.firstName ? capitalizeStr(props.firstName) : "~";
  const lastName = props.lastName ? capitalizeStr(props.lastName) : "~";

  return (
    <UserInfoMenu
      firstName={firstName}
      lastName={lastName}
      avatar={props.avatar}
      logOutFn={logout}
      profilLink={`/profile/${session?.id}`}
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
