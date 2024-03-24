import { colors } from "@/shared/enums";
import { Box, ScrollArea, Title } from "@mantine/core";
import React from "react";

export const Description = () => {
  return (
    <Box>
      <Title fz={20} mb={24}>
        About (User name)
      </Title>
      <ScrollArea h={190} scrollbars="y" color={colors.gray} fz={16}>
        <p>
          Razom, which means “together” in Ukrainian, believes deeply in the
          enormous potential of dedicated volunteers around the world united by
          a single goal: to unlock the potential of Ukraine. Razom works towards
          that mission by creating spaces where people meet, partner and do.
        </p>
        <p>
          Razom was born out of the Revolution of Dignity in 2014 when millions
          of people worked together and risked their lives to build a pathway to
          a better future for Ukraine. Maidan successfully cleared the path for
          new leadership and reforms, and inspired countless citizens to get
          involved in the process. Soon after, in an effort to stifle and punish
          Ukraine’s progress, Russia invaded and annexed Crimea and began a war
          in Eastern Ukraine that it continues to fund and sustain today.
        </p>
        <p>
          With such conditions some might think the odds are stacked against
          Ukraine, but Razom is here to break that narrative. Everyday we see
          individuals and organizations working to create opportunities and a
          better future for themselves and their communities. Our mission is to
          help accelerate their individual and collective contributions through
          projects that unlock Ukraine’s potential and build toward a more
          prosperous, democratic nation.
        </p>
        <p>
          Razom initiates short and long-term projects, or collaborates on
          existing projects with partner organizations, which help Ukraine stay
          on the path of fostering democracy and prosperity. We’ve grown a
          diverse community of volunteers and collaborators across the US and
          Ukraine which allows us to create spaces where people can meet,
          partner, and execute on these projects.
        </p>
        Razom initiates short and long-term projects, or collaborates on
        existing projects with partner organizations, which help Ukraine stay on
        the path of fostering democracy and prosperity. We’ve grown a diverse
        community of volunteers and collaborators across the US and Ukraine
        which allows us to create spaces where people can meet, partner, and
        execute on these projects.
      </ScrollArea>
    </Box>
  );
};
