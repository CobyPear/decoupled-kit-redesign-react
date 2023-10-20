import { MenuOverlay } from "@components/MenuOverlay";
import type { Meta, StoryObj } from "@storybook/react";
import { clsx } from "clsx";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "MenuOverlay",
  component: MenuOverlay,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    open: {
      control: {
        type: "boolean"
      },
    },
  },
} satisfies Meta<typeof MenuOverlay>;

export default meta;

type Story = StoryObj<typeof meta>;

const navItems = [
  ["Home", "/"],
  ["Articles", "/articles"],
  ["Pages", "/pages"],
].map(([label, href], index) => (
  <li className="mx-2 text-lg text-black" key={index}>
    <a className={clsx("link-hover")} href={href}>
      {label}
    </a>
  </li>
));

const isOpen = true;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: navItems,
		open: isOpen
  },
};
