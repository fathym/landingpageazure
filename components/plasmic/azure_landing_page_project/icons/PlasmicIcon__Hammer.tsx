// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HammerIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HammerIcon(props: HammerIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M2 19.63L13.43 8.2l-.71-.7 1.42-1.43L12 3.89c1.2-1.19 3.09-1.19 4.27 0l3.6 3.61-1.42 1.41h2.84l.71.71-3.55 3.59-.71-.71V9.62l-1.47 1.42-.71-.71L4.13 21.76 2 19.63z"
        }
      ></path>
    </svg>
  );
}

export default HammerIcon;
/* prettier-ignore-end */
