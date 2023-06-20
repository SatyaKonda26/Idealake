import { useEffect, useState } from "react";
import useWindowSize from "../../../hooks/useWindowSize";

export default function Counter(props) {
  const [count, setCount] = useState("0");
  const [startCount, setStartCount] = useState(false);

  const { number } = props;
  const { width } = useWindowSize();
  // console.log("width ==>", width);

  useEffect(() => {
    let num;
    let start = 0;
    num = number.toString();
    const end = parseInt(num.substring(0, 3), 10);
    if (start === end) return;
    let totalMilSecDur = parseInt(5, 10);
    let incrementTime = (totalMilSecDur / end) * 1000;

    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + num.substring(3));

      if (start === end) clearInterval(timer);
    }, incrementTime);
  }, [number]);

  return (
    <>
      <span
        className="count"
        id="count"
        style={{
          fontFamily: "CenturyGothic-Bold",
          fontSize: width <= 768 ? "20px" : "36px",
        }}
      >
        {startCount === true ? `${count}+` : `${count}+`}
      </span>
    </>
  );
}
