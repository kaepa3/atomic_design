import React from 'react';
import Balloon from './index.js';

export default stories => stories
  .add('2文字ラベル',() => <Balloon>次</Balloon>)
  .add('絶対座標配置',() => <Balloon style={{ position: 'absolute',
    top: '200px', left:'200px'}}>今度</Balloon>)
  .add('4文字ラベル',() => <Balloon>削除</Balloon>);

