import type { Meta, StoryObj } from "@storybook/react";
import { Row } from "@components/Row";

const meta = {
  title: "Row",
  component: Row,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: {
      control: "select",
      options: ["grid", "flex"],
    },
    styles: {
      control: "text",
    },
    flexOptions: {
      control: "object",
      defaultValue: {
        flexOptions: {
          direction: "row",
          wrap: false,
        },
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Row>;

export default meta;

type Story = StoryObj<typeof meta>;

const TestChildren = ({ items = 16 }: { items?: number }) => {
  const itemArray = Array.from(Array(items).keys());
  return (
    <>
      {itemArray
        ? itemArray.map((item, i) => (
            <div
              key={item}
              className="bg-gray-200 w-12 h-12 p-3 mx-auto border-2 border-emerald-400 justify-center flex"
            >
              {i + 1}
            </div>
          ))
        : null}
    </>
  );
};

export const Grid: Story = {
  args: {
    type: "grid",
    children: <TestChildren />,
  },
};

export const Flex: Story = {
  args: {
    type: "flex",

    children: <TestChildren />,
  },
};
