import React from 'react';
// import StoryRouter from 'storybook-react-router'
import { storiesOf } from '@storybook/react';
import NewItemBar from 'components/organisms/NewItemBar/NewItemBar';

storiesOf('Organisms/NewItemBar', module).add('Notes', () => <NewItemBar />);
