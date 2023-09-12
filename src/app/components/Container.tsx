import clsx from 'clsx';
import React, { forwardRef, HTMLProps, ReactNode, Ref } from 'react';

interface OuterContainerProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
}

const OuterContainer = forwardRef<HTMLDivElement, OuterContainerProps>(function OuterContainer({ className, children, ...props }) {
  return (
    <div
      className={clsx('sm:px-8', className)}
      {...props}
    >
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
    </div>
  );
});

interface InnerContainerProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
}

const InnerContainer = forwardRef<HTMLDivElement, InnerContainerProps>(function InnerContainer({ className, children, ...props }) {
  return (
    <div
      className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
      {...props}
    >
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  );
});

interface ContainerProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(function Container({ children, ...props }) {
  return (
    <OuterContainer>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  );
});

Container.Outer = OuterContainer;
Container.Inner = InnerContainer;

export default Container;
