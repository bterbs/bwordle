import React from 'react';

import { GridRow } from "./GridRow";

export default {
    title: 'Components/GridRow',
    component: GridRow,
};

const Template = (args) => <GridRow {...args} />;

export const Row = Template.bind({});
Row.args = {
    error: false
};