import React from 'react';
import Time from './index.js';

export default stories => stories
    .add('デフォルト', () => <Time>157032000000</Time>)
    .add('hh:mm', () => <Time format="HH:mm">157032000000</Time>)
    .add('mukou', () => <Time format="HH:mm">error</Time>);
    
