import React from 'react';
import { storiesOf } from '@storybook/react';
import TextArea from './TextArea';

storiesOf('Atoms/Input', module)
  .add('Normal', () => <TextArea placeholder="login" />)
  .add('Search', () => <TextArea search placeholder="search" />);
