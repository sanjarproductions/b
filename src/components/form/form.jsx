import { Button, Input, InputNumber, Form as AntForm, message } from "antd";
import axios from "axios";
import { API_URL, CHAT_ID } from "../../api";
import { useTranslation } from "react-i18next";

export const Form = ({ className = "" }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const { t } = useTranslation();

  const handleSendMessage = (values) => {
    const text = `<b>Заявка c сайта Bestune</b>\n<b>Отправитель: ${values.username}</b>\n<b>Телефон: ${values.telephone}</b>`;
    const data = {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text,
    };
    const key = "updatable";

    (async () => {
      try {
        messageApi.open({
          key,
          type: "loading",
          content: "Loading...",
        });
        await axios.post(API_URL, data);
        messageApi.open({
          key,
          type: "success",
          content: "Your request has been successfully delivered",
        });
      } catch (error) {
        console.log(error.response);
        messageApi.open({
          key,
          type: "error",
          content: error.response.data.description
            ? error.response.data.description
            : "Request Error",
        });
      }
    })();
  };
  return (
    <>
      {contextHolder}
      <AntForm
        name="form"
        className={`contact-us__from ${className}`}
        autoComplete="off"
        onFinish={handleSendMessage}
        id="contact"
      >
        <AntForm.Item
          name={"username"}
          rules={[
            {
              required: true,
              message: "Please input your Name!",
            },
          ]}
          data-aos="zoom-in-left"
        >
          <Input className="contact-us__input" placeholder={t("name")} />
        </AntForm.Item>

        <AntForm.Item
          name={"telephone"}
          rules={[
            {
              required: true,
              message: "Please input your Telephone! For example +998901234567",
            },
          ]}
          data-aos="zoom-in-left"
        >
          <InputNumber
            className="contact-us__input"
            placeholder={t("tel")}
            controls={false}
          />
        </AntForm.Item>
        <Button
          htmlType="submit"
          className="contact-us__button"
          data-aos="zoom-in-left"
        >
          {t("send")}
        </Button>
      </AntForm>
    </>
  );
};
