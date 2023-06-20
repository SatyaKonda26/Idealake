import Link from "next/link";
import { useState } from "react";

import style from "./vacancy.module.css";
import { vacancies } from "../../../vacancies";

export default function Vacancy() {
  const departments = [
    "technology",
    "design",
    "sales",
    "management",
    "support",
  ];

  const [activeTab, setActiveTab] = useState("technology");

  const handleClick = (e) => {
    setActiveTab(e.target.title);
  };

  return (
    <section className={`inner ${style.vacancy}`}>
      <div className="container">
        <div>
          <ul className={`flex ${style.tabList}`}>
            {departments &&
              departments.map((val, i) => (
                <li
                  key={i}
                  title={val}
                  onClick={handleClick}
                  className={activeTab === val ? style.active : ""}
                >
                  {val}
                </li>
              ))}
          </ul>

          <div className={`flex column ${style.jobPost}`}>
            <div className="sec_heading">
              <h2 className="heading">Let&apos;s find you an open position.</h2>
              <p className="para">
                Find the right job for you no matter what it is that you do.
              </p>
            </div>

            <ul className={`flex wrap ${style.jobList}`}>
              {vacancies &&
              vacancies.filter((val) => val.department === activeTab).length >=
                1 ? (
                vacancies
                  .filter((val) => val.department === activeTab)
                  .map((vacancy, i) => (
                    <li key={i} className={` ${style.jobs}`}>
                      <Link
                        href={`/careers/career-details/${vacancy.id}`}
                        className={`flex flex_sb }`}
                        title="Job Vacancy"
                      >
                        <div>
                          <h3>{vacancy.position}</h3>
                          <p>{vacancy.experience}</p>
                        </div>
                        <span
                          className={`icon-right-arrow3 ${style.arrow}`}
                        ></span>
                      </Link>
                    </li>
                  ))
              ) : (
                <p className={style.noJobs}>
                  No opening as of now. Keep hunting.
                </p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
