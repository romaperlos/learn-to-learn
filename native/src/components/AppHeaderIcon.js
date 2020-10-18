/* eslint-disable import/prefer-default-export */
import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Feather } from '@expo/vector-icons';

export const AppHeaderIcon = (props) => (
  <HeaderButton
    {...props}
    iconSize={24}
    IconComponent={Feather}
    color="#fff"
  />
);
