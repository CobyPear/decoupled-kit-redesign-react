import clsx from "clsx";
import { ReactNode } from "react";

interface ButtonOptions<Props> {
  /**
   * Sometimes we want a button style but semantically need a link
   */
  Element?: "button" | "a";
  type?: "primary" | "secondary" | "icon";
  size?: "small" | "large";
  icon?: string;
  /**
   * extra styles
   */
  styles?: string | string[];
  children?: ReactNode;
  props?: Props;
}
export const Button = <Props,>({
  Element = "button",
  type = "primary",
  size,
  icon,
  styles,
  children,
  ...props
}: ButtonOptions<Props> & { [Key in keyof Props]: Props[Key] }) => {
  //className="btn btn-sm ml-auto mt-auto w-24 h-10 font-light text-white capitalize"
  const buttonType =
    type === "primary"
      ? "bg-neutral-900 text-white rounded-lg"
      : type === "icon"
      ? "btn-circle bg-white text-black border-none"
      : "bg-white text-neutral-900 rounded-lg btn-outline";
  const buttonSize =
    size === "small" ? "px-4 h-10" : size === "large" ? "h-12 px-8" : "";

  return (
    <Element
      className={clsx("btn font-light", buttonType, buttonSize, styles)}
      {...props}
    >
      {children}
    </Element>
  );
};
