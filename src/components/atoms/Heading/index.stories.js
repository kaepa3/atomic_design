import React from'react';
import Heading, {HeadingUnderlined} from './index.js';

export default stories => stories
  .add('デフォルト', () => <Heading> 見出し</Heading>)
  .add('レベル１', () => <Heading level={1} > 見出しレベル１</Heading>)
  .add('レベル１、見た目2', () => <Heading level={1} visualLevel={2}> 見出し1、見た目２</Heading>)
  .add('下線付き', () => <HeadingUnderlined> 下線付き</HeadingUnderlined>)
  .add('下線付き、レベル１', () => <HeadingUnderlined level={1} > 下線付き、レベル１</HeadingUnderlined>)

  .add('下線付き、レベル１、見た目２', () => <HeadingUnderlined level={1} visualLevel={2}> 下線付き、レベル１、見た目２</HeadingUnderlined>);
