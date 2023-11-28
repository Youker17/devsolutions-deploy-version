import clsx from "clsx";

const Container = ({ as: Component = "div", className, children,subDivclassName }) => {
  return (
    <Component className={clsx("max-w-7xl mx-auto px-6 lg:px-8", className)}>
      <div className={clsx("max-w-2xl mx-auto lg:max-w-none",subDivclassName)}>{children}</div>
    </Component>
  );
};

export default Container;