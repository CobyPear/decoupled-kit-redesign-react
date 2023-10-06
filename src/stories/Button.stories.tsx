import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@components/Button";
import CloseIcon from "./assets/icons/close.svg";
import HamburgerMenu from "./assets/icons/hamburger-menu.svg";
import {
  default as SearchIcon,
  default as SearchIconSm,
} from "./assets/icons/search.svg";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    styles: {
      control: {
        type: "text"
      },
    }
  },
} satisfies Meta<typeof Button>;

const Icon = ({ src, alt }: { src: string; alt: string }) => {
  return <img src={src} alt={alt} />;
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    type: "primary",
    children: "Example text",
  },
};

export const Secondary: Story = {
  args: {
    type: "secondary",
    children: "Example text",
  },
};
export const Primary_Small: Story = {
  args: {
    type: "primary",
    size: "small",
    children: "Button",
  },
};

export const Secondary_Small: Story = {
  args: {
    type: "secondary",
    size: "small",
    children: "Button",
  },
};

export const Search_Icon_Small: Story = {
  args: {
    type: "icon",
    size: "small",
    children: <Icon src={SearchIconSm} alt="Search icon" />,
  },
};

export const Search_Icon: Story = {
  args: {
    type: "icon",
    children: <Icon src={SearchIcon} alt="Search icon" />,
  },
};

export const Close_Icon: Story = {
  args: {
    type: "icon",
    children: <Icon src={CloseIcon} alt="Close icon" />,
  },
};

export const Hamburger_Menu: Story = {
  args: {
    type: "icon",
    children: <Icon src={HamburgerMenu} alt="Hamburger menu icon" />,
  },
};
