import {withStyles, Box, BoxProps} from '@material-ui/core';
import React, {createContext, useContext} from 'react';

const Wrapper = withStyles((theme) => ({
  root: {
    padding: '48px 48px 48px 112px',
    // overflow: 'scroll',
    height: '100%',
    boxSizing: 'border-box',
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  },
}))(Box);

export const RootContext = createContext<string | undefined>(undefined);

export const RootWrapper: React.FC<BoxProps> = ({title, children, ...props}) => {

  return (
    <RootContext.Provider value={title}>
      <Wrapper {...props}>{children}</Wrapper>
    </RootContext.Provider>
  );
};

export const withRootWrapper = (Component: React.ReactNode, title: string) => () => (
  <RootWrapper title={title}>{Component}</RootWrapper>
);

export const usePageTitle = () => useContext(RootContext);
