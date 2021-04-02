import { Story, Meta } from '@storybook/react';

import MainPage from "./MainPage";

export default {
    title: 'Project/Implementation',
    component: MainPage
} as Meta;

const Template: Story = (args) => <MainPage {...args} />;

export const Main = Template.bind({});
