import { useState } from "react";
import { cn } from "./libs/utils";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="h-full bg-slate-400">
        <button
          onClick={() => setToggle((prev) => !prev)}
          className={cn(
            "bg-sky-300 p-2 rounded-md m-2",
            toggle && "text-red-500"
          )}
        >
          Clsx Test
        </button>
      </div>
    </>
  );
}

export default App;
