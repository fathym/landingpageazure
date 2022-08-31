// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sjVjhDwAwAnzPPjTJm6wuM
// Component: b4P9BsA4mbFB64
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
import Logo from "../../Logo"; // plasmic-import: 5QsQ8ngFZw-K_g/component
import Button from "../../Button"; // plasmic-import: P-H-3Rnl6IFnul/component

import { useScreenVariants as useScreenVariantspCqVwGHbhXBxmj } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: pCQVwGHbhXBxmj/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_azure_landing_page_project.module.css"; // plasmic-import: sjVjhDwAwAnzPPjTJm6wuM/projectcss
import sty from "./PlasmicFooterSection.module.css"; // plasmic-import: b4P9BsA4mbFB64/css

import TwitterIcon from "./icons/PlasmicIcon__Twitter"; // plasmic-import: kcWa-tiMAFkxpO/icon
import GithubIcon from "./icons/PlasmicIcon__Github"; // plasmic-import: mSfDczBcG5IH9j/icon
import LinkedinIcon from "./icons/PlasmicIcon__Linkedin"; // plasmic-import: IyV8vZPN-_rOQp/icon
import AppleIcon from "./icons/PlasmicIcon__Apple"; // plasmic-import: EI-h-RaqbBFLXd/icon

export type PlasmicFooterSection__VariantMembers = {};

export type PlasmicFooterSection__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooterSection__VariantsArgs;
export const PlasmicFooterSection__VariantProps = new Array<VariantPropType>();

export type PlasmicFooterSection__ArgsType = {};
type ArgPropType = keyof PlasmicFooterSection__ArgsType;
export const PlasmicFooterSection__ArgProps = new Array<ArgPropType>();

export type PlasmicFooterSection__OverridesType = {
  root?: p.Flex<"div">;
  logo?: p.Flex<typeof Logo>;
};

export interface DefaultFooterSectionProps {
  className?: string;
}

function PlasmicFooterSection__RenderFunc(props: {
  variants: PlasmicFooterSection__VariantsArgs;
  args: PlasmicFooterSection__ArgsType;
  overrides: PlasmicFooterSection__OverridesType;

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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantspCqVwGHbhXBxmj()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__mnm2O)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__lpaks)}
        >
          <Logo
            data-plasmic-name={"logo"}
            data-plasmic-override={overrides.logo}
            _50Opaque={true}
          />

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__k4Xi4)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__bF6M
              )}
            >
              {"Connect with us"}
            </div>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__uzDi)}
            >
              <TwitterIcon
                className={classNames(projectcss.all, sty.svg___3V8DV)}
                role={"img"}
              />

              <GithubIcon
                className={classNames(projectcss.all, sty.svg___4NyhY)}
                role={"img"}
              />

              <LinkedinIcon
                className={classNames(projectcss.all, sty.svg__xiLxo)}
                role={"img"}
              />
            </p.Stack>
          </p.Stack>
        </p.Stack>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__z06Fu)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___3Lmq9
            )}
          >
            {"Product"}
          </div>

          {true ? (
            <Button
              className={classNames("__wab_instance", sty.button__rvwnW)}
              color={"navLink" as const}
              flat={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___4AXbu
                )}
              >
                {"Pricing"}
              </div>
            </Button>
          ) : null}

          <Button
            className={classNames("__wab_instance", sty.button__qu7E5)}
            color={"navLink" as const}
            flat={true}
            link={"/dashboard" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__rdaNx
              )}
            >
              {"Log in"}
            </div>
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button__nFyTz)}
            color={"navLink" as const}
            flat={true}
            link={"/docs" as const}
          >
            {"Documentation"}
          </Button>

          {true ? (
            <Button
              className={classNames("__wab_instance", sty.button__sd8WB)}
              color={"navLink" as const}
              flat={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__dGd7B
                )}
              >
                {"Integrations"}
              </div>
            </Button>
          ) : null}
          {true ? (
            <Button
              className={classNames("__wab_instance", sty.button__b8MEm)}
              color={"navLink" as const}
              flat={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__mDcx
                )}
              >
                {"Insights"}
              </div>
            </Button>
          ) : null}
        </p.Stack>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__sTp0V)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__lznjl
            )}
          >
            {"Company"}
          </div>

          {true ? (
            <Button
              className={classNames("__wab_instance", sty.button__beiP)}
              color={"navLink" as const}
              flat={true}
            >
              {"About"}
            </Button>
          ) : null}
          {true ? (
            <Button
              className={classNames("__wab_instance", sty.button__bgiI)}
              color={"navLink" as const}
              flat={true}
            >
              {"Contact us"}
            </Button>
          ) : null}
          {true ? (
            <Button
              className={classNames("__wab_instance", sty.button__mGxtV)}
              color={"navLink" as const}
              flat={true}
            >
              {"Careers"}
            </Button>
          ) : null}

          <Button
            className={classNames("__wab_instance", sty.button__e1Wsw)}
            color={"navLink" as const}
            flat={true}
            link={"/blog" as const}
          >
            {"Blog"}
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button__oSheL)}
            color={"navLink" as const}
            flat={true}
            link={"https://fathym.com/privacy-policy/" as const}
          >
            {"Privacy"}
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button__tgpoh)}
            color={"navLink" as const}
            flat={true}
            link={"https://fathym.com/terms-of-services/" as const}
          >
            {"Terms"}
          </Button>
        </p.Stack>
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "logo"],
  logo: ["logo"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  logo: typeof Logo;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooterSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooterSection__VariantsArgs;
    args?: PlasmicFooterSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooterSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFooterSection__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicFooterSection__ArgProps,
          internalVariantPropNames: PlasmicFooterSection__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicFooterSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooterSection";
  } else {
    func.displayName = `PlasmicFooterSection.${nodeName}`;
  }
  return func;
}

export const PlasmicFooterSection = Object.assign(
  // Top-level PlasmicFooterSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    logo: makeNodeComponent("logo"),

    // Metadata about props expected for PlasmicFooterSection
    internalVariantProps: PlasmicFooterSection__VariantProps,
    internalArgProps: PlasmicFooterSection__ArgProps
  }
);

export default PlasmicFooterSection;
/* prettier-ignore-end */
