type BoxProps = {
  className?: string;
  children: React.ReactNode;
};

export const Box = ({ className, children }: BoxProps) => {
  return <div className={className}>{children}</div>;
};
