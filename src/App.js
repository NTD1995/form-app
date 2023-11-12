import React, { useState } from "react";
export default function App() {
  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isEmptyName, setIsEmptyName] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (customerName !== "") {
      alert(`${customerName}さん、メッセージが送信されました！`);
    } else {
      setIsEmptyName(true);
      return;
    }
    setCustomerName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <h1> お問合せフォーム </h1>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "16px",
          }}
        >
          <label style={{ display: "block" }} htmlFor="name">
            お名前
          </label>
          <input
            style={{ width: "10em", border: "1px solid #333" }}
            type="text"
            id="name"
            name="customer_name"
            value={customerName}
            onChange={(e) => {
              setIsEmptyName(false);
              setCustomerName(e.target.value);
            }}
          />
          {isEmptyName && (
            <span style={{ color: "#FF0000" }}>お名前を入力してください</span>
          )}
          <label style={{ display: "block" }} htmlFor="email">
            メールアドレス
          </label>
          <input
            style={{ width: "15em", border: "1px solid #333" }}
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label style={{ display: "block" }} htmlFor="message">
            メッセージ
          </label>
          <textarea
            style={{ width: "20em", border: "1px solid #333" }}
            type="text"
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button style={{ width: "100px" }} type="submit">
          送信
        </button>
      </form>
    </>
  );
}
