import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Label } from "../label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "../select";

const meta: Meta<typeof Select> = {
  title: "Forms/Select",
  component: Select,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Select dropdown component for choosing from a list of options.
Built on Radix UI Select primitive with keyboard navigation.

**Props:**
- \`value\` - Controlled selected value
- \`defaultValue\` - Default selected value
- \`onValueChange\` - Callback when selection changes
- \`disabled\` - Disabled state

**Subcomponents:**
- \`SelectTrigger\` - Button that opens the dropdown
- \`SelectValue\` - Displays the selected value
- \`SelectContent\` - Dropdown content container (\`position\`: \`popper\`, \`item-aligned\`)
- \`SelectItem\` - Individual selectable option
- \`SelectGroup\` - Groups related options
- \`SelectLabel\` - Label for option groups
- \`SelectSeparator\` - Visual divider between groups
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: "select",
      options: ["apple", "banana", "orange", "grape"],
      description: "Default selected value",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
  },
  args: { onValueChange: () => {} },
  decorators: [
    (Story) => (
      <div className="p-6 bg-primaryBg rounded-lg w-64">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger aria-label="Selecciona una fruta">
        <SelectValue placeholder="Selecciona una fruta" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Frutas</SelectLabel>
          <SelectItem value="apple">Manzana</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Naranja</SelectItem>
          <SelectItem value="grape">Uva</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="grid gap-2">
      <Label>Selecciona una fruta</Label>
      <Select {...args}>
        <SelectTrigger aria-label="Selecciona una fruta">
          <SelectValue placeholder="Selecciona una fruta" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Manzana</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => (
    <Select {...args}>
      <SelectTrigger aria-label="Selecciona una fruta">
        <SelectValue placeholder="Selecciona una fruta" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Manzana</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const WithGroups: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger aria-label="Selecciona una fruta">
        <SelectValue placeholder="Selecciona una fruta" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Frutas</SelectLabel>
          <SelectItem value="apple">Manzana</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Naranja</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Verduras</SelectLabel>
          <SelectItem value="carrot">Zanahoria</SelectItem>
          <SelectItem value="potato">Papa</SelectItem>
          <SelectItem value="broccoli">Brocoli</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const WithDisabledItem: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger aria-label="Selecciona una fruta">
        <SelectValue placeholder="Selecciona una fruta" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Frutas</SelectLabel>
          <SelectItem value="apple">Manzana</SelectItem>
          <SelectItem value="banana" disabled>
            Banana (agotado)
          </SelectItem>
          <SelectItem value="orange">Naranja</SelectItem>
          <SelectItem value="grape" disabled>
            Uva (agotado)
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};
