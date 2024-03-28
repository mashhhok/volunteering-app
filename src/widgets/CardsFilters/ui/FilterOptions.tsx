"use client";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Menu,
  ScrollArea,
  Select,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import { LinearDivider } from "@/shared/ui";
import { colors } from "@/shared/enums";
import { FiltersSVG } from "@/shared/svg/FiltersSVG";
import { useSearchParams } from "next/navigation";
import { useReplaceSearchParams } from "@/shared/lib/hooks";

export const FilterOptions = () => {
  const searchParams = useSearchParams();
  const replaceSearchParams = useReplaceSearchParams();

  const [emergency, setEmergency] = React.useState(false);
  const [militarCars, setMilitarCars] = React.useState(false);
  const [equipment, setEquipment] = React.useState(false);
  const [military, setMilitary] = React.useState(false);
  const [drones, Drones] = React.useState(false);
  const [medical, setMedical] = React.useState(false);
  const [education, setEducation] = React.useState(false);
  const [animals, setAnimals] = React.useState(false);
  const [children, setСhildren] = React.useState(false);
  const [elderly, setЕlderly] = React.useState(false);
  const [volunteering, setVolunteering] = React.useState(false);

  const typeValues = ["All", "Verified"];
  const [location, setLocation] = React.useState<string | null>(null);

  const checkboxStateArray = [
    emergency,
    militarCars,
    equipment,
    military,
    drones,
    medical,
    education,
    animals,
    children,
    elderly,
    volunteering,
    location,
  ];

  const fundraiseArray = [
    { text: "🔥 Emergency", value: emergency, setValue: setEmergency },
    { text: "🚗 Military cars", value: militarCars, setValue: setMilitarCars },
    { text: "🥾 Equipment", value: equipment, setValue: setEquipment },
    { text: "🪖 Military", value: military, setValue: setMilitary },
    { text: "🦅 Drones", value: drones, setValue: Drones },
    { text: "💊 Medical", value: medical, setValue: setMedical },
    { text: "📚 Education", value: education, setValue: setEducation },
    { text: "🐾 Animals", value: animals, setValue: setAnimals },
    { text: "👧🏻 Сhildren", value: children, setValue: setСhildren },
    { text: "👨🏼‍🦳 Еlderly", value: elderly, setValue: setЕlderly },
    { text: "🙋🏼‍♂️ Volunteering", value: volunteering, setValue: setVolunteering },
  ];

  React.useEffect(() => {
    function parseBool(val: unknown) {
      if (!val) return false;
      return val === "true" ? true : false;
    }

    function typeValidate(val: string | null) {
      if (!val) return typeValues[0];
      if (typeValues.includes(val)) return val;
      return typeValues[0];
    }

    setEmergency(parseBool(searchParams.get("emergency")));
    setMilitarCars(parseBool(searchParams.get("militarCars")));
    setEquipment(parseBool(searchParams.get("equipment")));
    setMilitary(parseBool(searchParams.get("military")));
    Drones(parseBool(searchParams.get("drones")));
    setMedical(parseBool(searchParams.get("medical")));
    setEducation(parseBool(searchParams.get("education")));
    setAnimals(parseBool(searchParams.get("animals")));
    setСhildren(parseBool(searchParams.get("children")));
    setЕlderly(parseBool(searchParams.get("elderly")));
    setVolunteering(parseBool(searchParams.get("volunteering")));
    setLocation(searchParams.get("location"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    replaceSearchParams({
      emergency,
      militarCars,
      equipment,
      military,
      drones,
      medical,
      education,
      animals,
      children,
      elderly,
      volunteering,

      location,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, checkboxStateArray);

  return (
    <>
      <Flex
        justify={"space-between"}
        maw={300}
        w={"100%"}
        flex="0 0 auto"
        visibleFrom="md"
      >
        <Box w={"100%"}>
          <Flex gap={12} align={"center"} mb={40}>
            <FiltersSVG />
            <Text fz="20px">Filters</Text>
          </Flex>

          <Title order={4} mb={20}>
            Fundraise for
          </Title>
          <Flex gap={15} direction={"column"} mb={40}>
            {fundraiseArray.map((item, index) => (
              <Flex
                gap={12}
                align={"center"}
                key={index}
                onClick={() => item.setValue((prev) => !prev)}
                style={{
                  cursor: "pointer",
                  userSelect: "none",
                  fontWeight: "lighter",
                }}
              >
                <Checkbox radius={"xs"} checked={item.value} />
                <Text fz="16px">{item.text}</Text>
              </Flex>
            ))}
          </Flex>

          <Select
            label={
              <Title order={4} mb={5}>
                Location
              </Title>
            }
            radius={"md"}
            description={"Choose the city"}
            placeholder="Input location"
            maw={280}
            w={"100%"}
            value={location}
            onChange={(value, option) => setLocation(value)}
          />
        </Box>
        <LinearDivider
          h={"100%"}
          w={"2px"}
          deg={180}
          color={colors.lightGray}
        />
      </Flex>
      <Flex hiddenFrom="md" justify={"center"}>
        <Menu width={"300px"} shadow="xl">
          <Menu.Target>
            <Button>Filter Options</Button>
          </Menu.Target>
          <Menu.Dropdown>
            <ScrollArea h={500} scrollbarSize={5} type="always">
              <Flex
                justify={"space-between"}
                maw={300}
                w={"100%"}
                flex="0 0 auto"
                p={10}
              >
                <Box w={"100%"}>
                  <Flex gap={12} align={"center"} mb={40}>
                    <FiltersSVG />
                    <Text fz="20px">Filters</Text>
                  </Flex>

                  <Title order={4} mb={20}>
                    Fundraise for
                  </Title>
                  <Flex gap={15} direction={"column"} mb={40}>
                    {fundraiseArray.map((item, index) => (
                      <Flex
                        gap={12}
                        align={"center"}
                        key={index}
                        onClick={() => item.setValue((prev) => !prev)}
                        style={{ cursor: "pointer", userSelect: "none" }}
                      >
                        <Checkbox radius={"xs"} checked={item.value} />
                        <Text fz="16px">{item.text}</Text>
                      </Flex>
                    ))}
                  </Flex>

                  <Select
                    label={<Title order={4}>Location</Title>}
                    radius={"md"}
                    description={<Text size="sm">Choose the city</Text>}
                    placeholder="Input location"
                    maw={280}
                    w={"100%"}
                    value={location}
                    onChange={(value, option) => setLocation(value)}
                  />
                </Box>
                <LinearDivider
                  h={"100%"}
                  w={"2px"}
                  deg={180}
                  color={colors.lightGray}
                />
              </Flex>
            </ScrollArea>
          </Menu.Dropdown>
        </Menu>
      </Flex>
    </>
  );
};
