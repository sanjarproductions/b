import "./slider-button.scss";
import { RightOutlined } from "@ant-design/icons";

export const SliderButton = ({ className, hendleClick }) => {
  return (
    <button onClick={hendleClick} className={`slider-button ${className}`}>
      <RightOutlined />
    </button>
  );
};
