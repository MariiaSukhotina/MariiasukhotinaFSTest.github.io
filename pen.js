import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

function renderSection1(props) {
  return (
    <section style={{ '--src': `url(${require('assets/7b0a07698c5f6c18a0767dc31eabed4a.png').default})` }} className={css(section1Styles.section1, section1Styles.section1_layout)}>
      <div className={css(section1Styles.flex, section1Styles.flex_layout1)}>
        <div className={css(section1Styles.flex1, section1Styles.flex1_layout)}>
          <div className={`${css(section1Styles.flex_item)}`}>
            <div className={css(section1Styles.container13, section1Styles.container13_layout)}>
              <div className={css(section1Styles.txt, section1Styles.txt_layout)}>
                {'Главное о Чаузи F6 '}
              </div>
            </div>
          </div>
          <div className={`${css(section1Styles.flex_spacer)}`} />
          <div className={`${css(section1Styles.flex_item1)}`}>
            <div className={css(section1Styles.container15, section1Styles.container15_layout)}>
              <div className={css(section1Styles.container14, section1Styles.container14_layout)}>
                <div className={css(section1Styles.txt, section1Styles.txt_layout1)}>
                  {'Родители'}
                </div>
              </div>
            </div>
          </div>
          <div className={`${css(section1Styles.flex_spacer1)}`} />
          <div className={`${css(section1Styles.flex_item2)}`}>
            <div className={css(section1Styles.container17, section1Styles.container17_layout)}>