import { useState } from "react";
import { makeData } from "./components/makeData";

const FakerPage = () => {
  const [data, setData] = useState(() => makeData(100));

  return (
    <>
      <div>Faker Page</div>
    </>
  );
};

export default FakerPage;
