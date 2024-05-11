import React from "react";
import { UserInfoMenu } from "./UserInfoMenu";
import { UserInfoTable } from "./UserInfoTable";
import { capitalizeStr } from "../../lib/utils/capitalizeStr";
import { logout } from "@/shared/auth";
import { getProfile } from "@/app/api/profile/getProfile";

interface IUserInfoRow {
  firstName: string | null;
  lastName: string | null;
  id: number | null;
}

export const UserInfoRow = async (props: IUserInfoRow) => {
  const firstName = props.firstName ? capitalizeStr(props.firstName) : "~";
  const lastName = props.lastName ? capitalizeStr(props.lastName) : "~";
  const profile = await getProfile()
  return (
    <UserInfoMenu
      firstName={firstName}
      lastName={lastName}
      avatar={profile?.avatar}
      logOutFn={logout}
      profilLink={`/profile/${props?.id}`}
      userInfo={
        <UserInfoTable
          firstName={firstName}
          lastName={lastName}
          avatar={profile?.avatar}
        />
      }
    />
  );
};
