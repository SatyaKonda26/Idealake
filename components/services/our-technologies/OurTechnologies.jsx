import { useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import style from "./technologies.module.css";


export default function OurTechnologies({technologyData}) {
  const [activeTab, setActiveTab] = useState(technologyData[0].Title);
  const handleClick = (e) => {
    setActiveTab(e.target.title);
  };

  const screenSize = useWindowSize();
  return (
    <section className={`inner ${style.techie}`}>
      <div className="container">
        <div className="sec_heading">
          <h2 className={`heading }`}>Our Technologies</h2>
        </div>

        <div className={`flex ${style.tab_sec}`}>
          <ul className={`${style.tabList}`}>
            {technologyData &&
              technologyData.map((val, i) => (
                <li
                  key={i}
                  title={val.Title}
                  onClick={handleClick}
                  className={`flex ${val.Technologyiconcss} ${style.tab} ${
                    activeTab === val.Title ? style.active : ""
                  }`}
                >
                  {screenSize.width <= 1024
                    ? activeTab === val.Title && val.Title
                    : val.Title}
                </li>
              ))}
          </ul>

          <ul className={`align_left ${style.content}`}>
            {technologyData &&
              technologyData
                .filter((val) => val.Title === activeTab)
                .map((data, i) => (
                  <div key={i}>
                    <h3 className={style.tabName}>{data.Title}</h3>
                    <div className={`${style.info}`}>
                      <p className={`para`}>{data.Description}</p>
                    </div>
                  </div>
                ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
