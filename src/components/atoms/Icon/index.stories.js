import React from 'react';
import { action } from '@storybook/addon-actions';
import { TrashCanIcon, ChevronRightIcon, SearchIcon, SettingsIcon } from './index.js';


export default stories => stories
 .add( 'TrashCanIcon', () => <TrashCanIcon />)
 .add( 'クリッカブル', () => <TrashCanIcon onClick={ action('アイコンがクリックされました')}/>)
 .add( 'chevron', () => <ChevronRightIcon onClick={ action('アイコンがクリックされました')}/>)
 .add( 'search', () => <SearchIcon onClick={ action('アイコンがクリックされました')}/>)
 .add( 'settings', () => <SettingsIcon onClick={ action('アイコンがクリックされました')}/>);
