import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";

import { Task } from "./Task";

export const ActionsData = {
  onArchiveTask: fn(),
  onPinTask: fn(),
};

const meta: Meta<typeof Task> = {
  component: Task,
  title: "Task",
  tags: ["autodocs"],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
};

export default meta;

type Story = StoryObj<typeof Task>;

export const Default: Story = {
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX",
    },
  },
};

export const Pinned: Story = {
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_PINNED",
    },
  },
};

export const Archived: Story = {
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_ARCHIVED",
    },
  },
};
