import "./slider-index.scss";

export const SliderIndex = ({ index, className = "", pagination = 0 }) => {
  
  return (
    <div className={`slider-index ${className}`}>
      <p>{index + 1}</p>
      <span></span>
      <p>{pagination}</p>
      
    </div>
  );
};
