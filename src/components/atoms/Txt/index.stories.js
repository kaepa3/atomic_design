import React from 'react';
import Txt, {InfoTxt, WarningTxt} from './index.js';

export default stories => stories
    .add('txt-s',() => <Txt size="s">テキスト表示</Txt>)
    .add('txt-m',() => <Txt size="m">テキスト表示</Txt>)
    .add('txt-l',() => <Txt size="l">テキスト表示</Txt>)
    .add('infotxt-s',() => <InfoTxt size="s">テキスト表示</InfoTxt>)
    .add('infotxt-m',() => <InfoTxt size="m">テキスト表示</InfoTxt>)
    .add('infotxt-l',() => <InfoTxt size="l">テキスト表示</InfoTxt>)
    .add('warntxt-s',() => <WarningTxt bize="s">テキスト表示</WarningTxt>)
    .add('warntxt-m',() => <WarningTxt bize="m">テキスト表示</WarningTxt>)
    .add('warntxt-l',() => <WarningTxt bize="l">テキスト表示</WarningTxt>);
    
