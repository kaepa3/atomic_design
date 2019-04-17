import React from 'react';
import {action} from '@storybook/addon-actions';
import Notification from './index.js';

const notification = {
    id: 0,
    thumbnail: '/mock/images/img01.jpg',
    title: 'コンポーネント志向で',
    channelName: 'ui channel',
    startAt: 1507032000000,
    endAt: 1507035555500,
};

export default stories => stories
    .add('デフォルト', () => (
        <Notification program={ notification } onClickDelete ={ action('click delete button')} />
        ));

