import React from 'react';
import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';
import Sidebar from 'components/organisms/Sidebar/Sidebar';

storiesOf('Organisms/Sidebar', module)
  .addDecorator(StoryRouter())
  .add('Notes', () => <Sidebar color="notes" />)
  .add('Twitter', () => <Sidebar color="twitters" />)
  .add('Articles', () => <Sidebar color="articles" />);
