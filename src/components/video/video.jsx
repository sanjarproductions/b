import { useState } from "react";
import { Modal, Spin } from "antd";
import ReactPlayer from "react-player";
import "./video.scss";

export const Video = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleReady = () => {
    setLoading(false);
  };

  return (
    <>
      <section className="video">
        <button onClick={() => setIsModalOpen(true)} className="video__button">
          <span></span>
        </button>
        <span className="video-mask"></span>
      </section>
      <Modal
        width={"85%"}
        open={isModalOpen}
        className="video-content"
        centered
        onCancel={handleCancel}
        footer={[]}
      >
        {loading && (
          <div className="video__loading">
            <Spin size="large" />
          </div>
        )}
        <div className="video__modal">
          <ReactPlayer
            controls
            id="player"
            url="https://www.youtube.com/watch?v=oUdqobXJNB4"
            width="100%"
            height="100%"
            onReady={handleReady}
          />
        </div>
      </Modal>
    </>
  );
};
