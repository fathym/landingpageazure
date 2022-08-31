// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sjVjhDwAwAnzPPjTJm6wuM
// Component: ze2FcYh4zCZ3rm
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_azure_landing_page_project.module.css"; // plasmic-import: sjVjhDwAwAnzPPjTJm6wuM/projectcss
import sty from "./PlasmicListItem.module.css"; // plasmic-import: ze2FcYh4zCZ3rm/css

import CheckCircleIcon from "./icons/PlasmicIcon__CheckCircle"; // plasmic-import: N_Iyi0tqfvirEV/icon

export type PlasmicListItem__VariantMembers = {
  bottomBorder: "light" | "dark";
  leftCheck: "leftCheck";
};

export type PlasmicListItem__VariantsArgs = {
  bottomBorder?: SingleChoiceArg<"light" | "dark">;
  leftCheck?: SingleBooleanChoiceArg<"leftCheck">;
};

type VariantPropType = keyof PlasmicListItem__VariantsArgs;
export const PlasmicListItem__VariantProps = new Array<VariantPropType>(
  "bottomBorder",
  "leftCheck"
);

export type PlasmicListItem__ArgsType = {
  children?: React.ReactNode;
  icon?: React.ReactNode;
};

type ArgPropType = keyof PlasmicListItem__ArgsType;
export const PlasmicListItem__ArgProps = new Array<ArgPropType>(
  "children",
  "icon"
);

export type PlasmicListItem__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultListItemProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  bottomBorder?: SingleChoiceArg<"light" | "dark">;
  leftCheck?: SingleBooleanChoiceArg<"leftCheck">;
  className?: string;
}

function PlasmicListItem__RenderFunc(props: {
  variants: PlasmicListItem__VariantsArgs;
  args: PlasmicListItem__ArgsType;
  overrides: PlasmicListItem__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = args;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootbottomBorder_dark]: hasVariant(
            variants,
            "bottomBorder",
            "dark"
          ),
          [sty.rootbottomBorder_light]: hasVariant(
            variants,
            "bottomBorder",
            "light"
          ),
          [sty.rootleftCheck]: hasVariant(variants, "leftCheck", "leftCheck")
        }
      )}
    >
      {p.renderPlasmicSlot({
        defaultContents: "Something amazing",
        value: args.children,
        className: classNames(sty.slotTargetChildren)
      })}

      {p.renderPlasmicSlot({
        defaultContents: (
          <CheckCircleIcon
            className={classNames(projectcss.all, sty.svg__pahjh)}
            role={"img"}
          />
        ),

        value: args.icon
      })}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicListItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicListItem__VariantsArgs;
    args?: PlasmicListItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicListItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicListItem__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicListItem__ArgProps,
          internalVariantPropNames: PlasmicListItem__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicListItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicListItem";
  } else {
    func.displayName = `PlasmicListItem.${nodeName}`;
  }
  return func;
}

export const PlasmicListItem = Object.assign(
  // Top-level PlasmicListItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicListItem
    internalVariantProps: PlasmicListItem__VariantProps,
    internalArgProps: PlasmicListItem__ArgProps
  }
);

export default PlasmicListItem;
/* prettier-ignore-end */
