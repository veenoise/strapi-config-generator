"use client"

import { useEffect, useState } from "react";

export default function Home() {

  const [base64Data, setBase64Data] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://generate-random.org/api/v1/generate/strings?type=base64&count=9&byte_count=16&url_safe=false&no_padding=false"
        );
        const data = await response.json();

        setBase64Data(data.data || []);
      } catch (error) {
        console.error("Error fetching Base64 data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ fontFamily: "monospace", whiteSpace: "pre-line", padding: "1rem" }}>
      {base64Data.length > 0 ? (
        <>
          {`APP_KEYS=${base64Data[0]},${base64Data[1]},${base64Data[2]},${base64Data[3]}`}
          <br />
          {`API_TOKEN_SALT=${base64Data[4]}`}
          <br />
          {`ADMIN_JWT_SECRET=${base64Data[5]}`}
          <br />
          {`TRANSFER_TOKEN_SALT=${base64Data[6]}`}
          <br />
          {`ENCRYPTION_KEY=${base64Data[7]}`}
          <br />
          {`JWT_SECRET=${base64Data[8]}`}
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
