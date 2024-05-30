"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Carousel, Embla } from "@mantine/carousel";
import { colors } from "@/shared/enums";
import { Box, Center, Flex, Text, TextInput } from "@mantine/core";
import Image from "next/image";
import { NoImgSVG } from "@/shared/svg";
import { MdDelete } from "react-icons/md";
import { useCreateFundraiserStore } from "../store";
import { toBase64 } from "@/shared/lib/utils";
import { HiddenInput } from "@/shared/ui";

const SlideItem = ({ image }: { image: string }) => (
  <Box
    style={{ borderRadius: 16, overflow: "hidden" }}
    bg={colors.lightGray}
    w={152}
    h={120}
  >
    <Image
      src={image}
      width={152}
      height={120}
      style={{ width: "100%", height: "100%", backgroundSize: "cover" }}
      alt={""}
    />
  </Box>
);

export const Slider = () => {
  const {
    setImagesUrls: setFiles,
    imagesUrls: files,
    localFiles,
    setLocalFiles,
  } = useCreateFundraiserStore();

  async function onDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();

    addFiles(e.dataTransfer.files);

    let newFiles: string[] = [];
    if (e.dataTransfer?.files) {
      for (let i = 0; i < e.dataTransfer.files.length; i++) {
        if (!e.dataTransfer.files[i].type.includes("image")) continue;
        const reader = await toBase64(e.dataTransfer.files[i], (val) => {
          newFiles.push(String(val));
        });
      }
      setTimeout(() => {
        setFiles([...newFiles]);
      }, 300);
    }
  }

  function onDeleteImgClick(index: number) {
    setFiles(files.filter((item, ind) => ind !== index));
  }

  function addFiles(files: FileList) {
    if (files) {
      const fileArray: File[] = [];
      for (let i = 0; i < files.length; i++) {
        fileArray.push(files[i]);
      }
      setLocalFiles(fileArray);
    }
  }

  async function onAddFilesClick(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();

    let newFiles: string[] = [];
    if (e.target.files) {
      addFiles(e.target.files);

      for (let i = 0; i < e.target.files.length; i++) {
        if (!e.target.files[i].type.includes("image")) continue;
        const reader = await toBase64(e.target.files[i], (val) => {
          newFiles.push(String(val));
        });
      }
      setTimeout(() => {
        setFiles([...newFiles]);
      }, 300);
    }
  }
  return (
    <Box w={"100%"} maw={480}>
      <Box pos="relative">
        <Carousel
          mb={12}
          w={"100%"}
          h={300}
          loop
          withIndicators
          style={{ borderRadius: 16, overflow: "hidden" }}
          withKeyboardEvents
          styles={{
            indicator: {
              background: colors.orange,
              zIndex: 30,
            },
            control: {
              background: colors.white,
              zIndex: 30,
            },
          }}
        >
          <input
            type="file"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              opacity: 0,
              width: "100%",
              height: "100%",
              zIndex: 5,
            }}
            accept="image/*"
            multiple
            name="images"
            onChange={onAddFilesClick}
          />
          {files.map((item, index) => (
            <Carousel.Slide
              // bg={colors.lightGray}
              p={0}
              mx={7}
              bg={colors.lightGray}
              style={{ overflow: "hidden", borderRadius: 16 }}
              key={index}
              h={"100%"}
              draggable={true}
              onDrop={onDrop}
              onDragOver={(e) => e.preventDefault()}
            >
              <Image
                src={item}
                width={480}
                height={300}
                style={{ backgroundSize: "cover", width: "100%" }}
                alt={""}
              />
            </Carousel.Slide>
          ))}
          {!files.length && (
            <Carousel.Slide
              // bg={colors.lightGray}
              p={0}
              draggable={true}
              onDrop={onDrop}
              onDragOver={(e) => e.preventDefault()}
              mx={7}
              bg={colors.lightGray}
              style={{ overflow: "hidden", borderRadius: 16 }}
              h={"100%"}
              pos={"relative"}
            >
              <Center w={"100%"} h={300}>
                <Text
                  maw={300}
                  style={{ textAlign: "center" }}
                  size="sm"
                  color={colors.gray}
                >
                  Drag and drop or click here to upload an image that best
                  represents your fundraising theme
                </Text>
              </Center>
            </Carousel.Slide>
          )}
        </Carousel>
      </Box>
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/* bottom section */}
      <Carousel
        height={120}
        slideSize={152}
        slidesToScroll={1}
        align={"start"}
        style={{ borderRadius: 16, overflow: "hidden" }}
        w={"100%"}
        withIndicators
        withKeyboardEvents
        styles={{
          indicator: {
            background: colors.orange,
          },
          control: {
            background: colors.white,
          },
        }}
      >
        {files.map((item, index) => (
          <Carousel.Slide
            mx={7}
            onClick={() => onDeleteImgClick(index)}
            bg={colors.lightGray}
            style={{ overflow: "hidden", borderRadius: 16, cursor: "pointer" }}
            key={index}
            h={"100%"}
            pos={"relative"}
          >
            <Image
              src={item}
              width={152}
              height={120}
              style={{ backgroundSize: "cover" }}
              alt={""}
            />
            <Center
              pos={"absolute"}
              top={0}
              left={0}
              w={"100%"}
              h={"100%"}
              style={{ zIndex: 5 }}
            >
              <MdDelete
                style={{ width: "30%", height: "30%", opacity: 1 }}
                color={colors.red}
              />
            </Center>
            <Box
              h={"100%"}
              w={"100%"}
              style={{ backgroundColor: colors.gray, opacity: 0.35 }}
              pos={"absolute"}
              top="0"
              left={"0"}
            />
          </Carousel.Slide>
        ))}
        {!!(files.length < 3) &&
          [...Array(3 - files.length)].map((item, index) => (
            <Carousel.Slide
              key={index}
              bg={colors.lightGray}
              mx={7}
              style={{ overflow: "hidden", borderRadius: 16 }}
              h={"100%"}
            >
              <Center w={"100%"} h={"100%"}>
                <NoImgSVG />
              </Center>
            </Carousel.Slide>
          ))}
      </Carousel>
    </Box>
  );
};
