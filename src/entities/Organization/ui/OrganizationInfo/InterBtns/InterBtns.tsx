"use client";
import { ShadowBtn } from "@/shared/ui";
import { Flex, Box } from "@mantine/core";
import React from "react";
import { OutBoxSVG, TopRightArrowSVG } from "@/shared/svg";
import { Link } from "@/shared/ui/Link";
import { SitesModalForOwner } from "./SitesModalForOwner";
import { SitesModelForAll } from "./SitesModelForAll";
import { IDictionary } from "@/shared/config/i18n.config";

export const InterBtns = ({
  isMe,
  sites,
  dict,
}: {
  isMe: boolean;
  sites: {
    facebook: string;
    google: string;
    instagram: string;
    telegram: string;
    whatsapp: string;
  };
  dict: IDictionary;
}) => {
  const [sitesModalOpen, setSitesModalOpen] = React.useState(false);
  function onShareClick() {
    const shareObj = {
      url: location.href,
      title: "Unitary Aid",
    };
    navigator.share(shareObj);
  }

  function sitesOpen() {
    setSitesModalOpen(true);
  }
  function sitesClose() {
    setSitesModalOpen(false);
    console.log(sitesModalOpen);
  }

  React.useEffect(() => {
    if (sitesModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [sitesModalOpen]);

  return (
    <Flex wrap="wrap" gap={20}>
      <Box onClick={onShareClick}>
        <ShadowBtn rightSection={<OutBoxSVG />} size="lg" px={35}>
          Share
        </ShadowBtn>
      </Box>
      <Box>
        <Box>
          <Box onClick={sitesOpen}>
            <ShadowBtn size="lg" px={35}>
              Site
            </ShadowBtn>
          </Box>
          {isMe ? (
            <SitesModalForOwner
              dict={dict}
              sites={sites}
              open={sitesModalOpen}
              onClose={sitesClose}
            />
          ) : (
            <SitesModelForAll
              dict={dict}
              sites={sites}
              open={sitesModalOpen}
              onClose={sitesClose}
            />
          )}
        </Box>
      </Box>

      {isMe ? (
        <Link href="/verification">
          <ShadowBtn size="lg" px={35} rightSection={<TopRightArrowSVG />}>
            Verify account
          </ShadowBtn>
        </Link>
      ) : (
        <ShadowBtn size="lg" px={35}>
          Send a message
        </ShadowBtn>
      )}
    </Flex>
  );
};
