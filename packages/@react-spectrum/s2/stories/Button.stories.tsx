/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import {Button, Text} from '../src';
import {categorizeArgTypes, StaticColorDecorator} from './utils';
import type {Meta, StoryObj} from '@storybook/react';
import NewIcon from '../s2wf-icons/S2_Icon_New_20_N.svg';
import {style} from '../style/spectrum-theme' with { type: 'macro' };

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    layout: 'centered'
  },
  decorators: [StaticColorDecorator],
  tags: ['autodocs'],
  argTypes: {
    ...categorizeArgTypes('Events', ['onPress', 'onPressChange', 'onPressEnd', 'onPressStart', 'onPressUp'])
  }
};

export default meta;

type Story = StoryObj<typeof Button>;
export const Example: Story = {
  render: (args) => {
    return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', gap: 8}}>
        <Button {...args}>Press me</Button>
        <Button {...args}><NewIcon /><Text>Test</Text></Button>
        <Button {...args}><Text>Test</Text><NewIcon /></Button>
        <Button {...args}><NewIcon /></Button>
        <Button {...args} styles={style({maxWidth: 128})}>Very long button with wrapping text to see what happens</Button>
        <Button {...args} styles={style({maxWidth: 128})}>
          <NewIcon />
          <Text>Very long button with wrapping text to see what happens</Text>
        </Button>
      </div>
    );
  }
};
