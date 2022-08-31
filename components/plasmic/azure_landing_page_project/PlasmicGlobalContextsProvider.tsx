// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sjVjhDwAwAnzPPjTJm6wuM
import * as React from "react";
import { ParallaxProviderWrapper } from "@plasmicpkgs/react-scroll-parallax"; // plasmic-import: L6MfauX2Cw/codeComponent

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  parallaxProviderWrapperProps?: Partial<
    Omit<React.ComponentProps<typeof ParallaxProviderWrapper>, "children">
  >;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const { children, parallaxProviderWrapperProps } = props;

  return (
    <ParallaxProviderWrapper
      {...parallaxProviderWrapperProps}
      scrollAxis={
        parallaxProviderWrapperProps &&
        "scrollAxis" in parallaxProviderWrapperProps
          ? parallaxProviderWrapperProps.scrollAxis!
          : undefined
      }
    >
      {children}
    </ParallaxProviderWrapper>
  );
}
