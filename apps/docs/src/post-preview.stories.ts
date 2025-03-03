import type { Meta, StoryObj } from '@storybook/react';
// import PostPreview from 'client/app/components/post-preview';
import { Button } from './stories/Button';

const meta = {
  title: 'Components/PostPreview',
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    id: 4,
    heading:
      'Microsoft Begins Accepting Bitcoin For Windows, Windows Phone And Xbox Purchases',
    text: 'If you want further proof that Microsoft is going through a transformative phase, you may be interested to hear that the company has jumped on the bitcoin wagon.',
    onDelete: (id: number) => {
      console.log('Delete post', id);
    },
    userId: '62987df7efab1b36ec6606af',
    date: 'May 12, 2017',
    htmlDatetime: '2017-05-11',
  },
};
