import clsx from 'clsx';
import React, { forwardRef, HTMLProps, ReactNode } from 'react';

interface ContainerProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
}

interface ContainerComponent extends React.ForwardRefExoticComponent<ContainerProps> {
  Outer: typeof OuterContainer;
  Inner: typeof InnerContainer;
}

const OuterContainer = forwardRef<HTMLDivElement, ContainerProps>(function OuterContainer({ className, children, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={clsx('sm:px-8', className)}
      {...props}
    >
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
    </div>
  );
});

const InnerContainer = forwardRef<HTMLDivElement, ContainerProps>(function InnerContainer({ className, children, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
      {...props}
    >
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  );
});

const Container = forwardRef<HTMLDivElement, ContainerProps>(function Container({ children, className }, ref) {
  return (
    <OuterContainer
      ref={ref}
      className={className}
    >
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  );
}) as ContainerComponent;

Container.Outer = OuterContainer;

Container.Inner = InnerContainer;

export default Container;
