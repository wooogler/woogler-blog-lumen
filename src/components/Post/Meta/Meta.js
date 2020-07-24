// @flow strict
import React from 'react';
import moment from 'moment';
import 'moment/locale/ko';
import styles from './Meta.module.scss';

moment.locale('ko');

type Props = {
  date: string
};

const Meta = ({ date }: Props) => (
  <div className={styles['meta']}>
    <p className={styles['meta__date']}>{moment(date).format('ll')} 작성</p>
  </div>
);

export default Meta;
