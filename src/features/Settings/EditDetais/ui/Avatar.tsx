"use client";
import React, { ChangeEvent } from "react";
import { Avatar, Box, Input } from "@mantine/core";
import user_img from "@/public/user_2.svg";
import { colors } from "@/shared/enums";
import { toBase64 } from "@/shared/lib/utils";

export const AvatarEl = ({ src }: { src: string }) => {
  const [img, setImg] = React.useState(src);

  React.useEffect(() => {
    setImg(src);
  }, [src]);

  async function onChange(e: ChangeEvent<HTMLInputElement>) {
    const formData = new FormData();
    const files = e.target?.files;
    if (!files) return;
    const reader = await toBase64(files[0], (val) => {});
    reader.onload = async () => {
      formData.append("avatar", String(reader.result));
      const data = await fetch(`/api/profile/avatar`, {
        method: "post",
        body: formData,
      }).then((res) => res.json());
      setImg(data);
    };
  }

  return (
    <Box mb={28}>
      <Box pos="relative">
        <Input
          type="file"
          accept="image/*"
          w={"100%"}
          h={"100%"}
          style={{ opacity: 0, zIndex: 5 }}
          styles={{ input: { width: "100%", height: "100%" } }}
          pos="absolute"
          top={0}
          left={0}
          name="avatar"
          onChange={onChange}
        />
        <Avatar
          src={img ? img : user_img.src}
          w={100}
          bg={colors.lightGray}
          h={100}
          radius="lg"
          size="md"
          p={16}
          style={{
            backgroundSize: "cover",
            flexShrink: 0,
            // borderTop: "3px dashed",
          }}
          styles={{
            image: {
              borderRadius: 10,
            },
          }}
          alt={"logo"}
        />
      </Box>
    </Box>
  );
};
