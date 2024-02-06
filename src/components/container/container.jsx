import "./container.scss";

export const Container = ({ children, className = "" }) => {
  return <div className={`container-custom ${className}`}>{children}</div>;
};
