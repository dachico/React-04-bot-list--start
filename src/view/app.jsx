import { useState, useEffect } from "react";
import { List } from "./list";

export function App() {
  const [robotList, setRobotList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        const dataUrl = "https://api.npoint.io/86690d80ff3d455133f0";
        const response = await fetch(dataUrl);
        const data = await response.json();
        // console.log(data.length);
        setRobotList(data);
      } catch (err) {
        setErrMsg(`Invalid data ${err.message}`);
      } finally {
        setLoading(false);
      }
    }
    getData().catch(console.log);
  }, []);

  return (
    <div className="app">
      <div className="header">
        <h1 className="headline white-text">Show me the list!</h1>
      </div>
      {errMsg ? (
        <h1>{errMsg}</h1>
      ) : loading ? (
        <h1>Loading</h1>
      ) : (
        <List listData={robotList} />
      )}
    </div>
  );
}
