import styles from "./App.module.css";
import { Scroll } from "./molecule/Scroll";
import { useState, useEffect } from "react";

function App() {
  const [arr, setArr] = useState([]);

  let api = "https://reqres.in/api/users/";

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData.data);
        setArr(actualData.data);
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className={styles.App}>
      {arr.map((Element) => {
        return <Scroll key={Element.id} elements={Element} />;
      })}
    </div>
  );
}

export default App;
