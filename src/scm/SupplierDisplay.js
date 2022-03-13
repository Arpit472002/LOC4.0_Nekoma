import { useState, useEffect } from "react";
export default function SupplierDisplay() {
  const [card, setCard] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    (async () => {
      let user;
      try {
        let response = await fetch(URL + "blogapp/blog/", {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: "Token " + token,
          },
        });
        user = await response.json();
        console.log(user);
      } catch (error) {
        console.log("Error" + error);
        user = [token];
      }

      setCard(user);
    })();
  }, []);
  return (
    <>
      <h1>hello</h1>
    </>
  );
}
