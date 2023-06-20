import Image from "next/image";
// import computer from "/public/images/computer.png";
import style from "./servicePowerBy.module.css";

export default function ServicePowerBy({
  powerbyData,
  centerImg,
  powerbySkills,
}) {
  
  return (
    <section className={style.powered_by}>
      <div className="container">
        <h1 className={`${style.powerHeading} sec_heading heading`}>
          Powered By
        </h1>
        <div className={style.tab_wrap}>
          <div className={`flex ${style.tab_cont} `}>
            {powerbyData &&
              powerbyData.map((data, index) => (
                <div className={`${style.tab_inner_cont} flex`} key={index}>
                  <span className={`${data.Content} ${style.icon}`}></span>
                  <p>{data.Title}</p>
                </div>
              ))}
          </div>
        </div>

        <div className={style.circle_wrap}>
          <div className={style.mobImagecontainer}>
            <Image
              src={centerImg}
              className={style.centerImg}
              alt="image"
              height={100}
              width={100}
              priority
            />
          </div>
          <ul className="flex">
            <li className={style.firstList}>
              {powerbySkills &&
                powerbySkills.slice(0, 3).map((data, i) => (
                  <div className={`${style.circle_tab_cont} flex`} key={i}>
                    <span
                      className={`${style.circleicon} ${data.Content}`}
                    ></span>
                    <p className={style.circlePara}>{data.Title}</p>
                  </div>
                ))}
            </li>
            <li className={style.secondList}>
              {powerbySkills && powerbySkills.map((data,i)=> {
                if(data.Id === "0c9aaa1b-4b44-41ba-80ca-04ba771f90a6"){
                  return(
                    <div className={`${style.circle_tab_cont} flex`} key={i} >
                <span className={`${style.circleicon} ${data.Content}`}></span>
                <p className={style.circlePara}>{data.Title} </p>
              </div>
                  )
                }
              })}
              <div className={style.imagecontainer}>
                <Image
                  src={centerImg}
                  className={style.centerImg}
                  alt="image"
                  height={100}
                  width={100}
                  priority
                />
              </div>
            </li>
            <li className={style.thirdList}>
              {powerbySkills &&
                powerbySkills.slice(4,7).map((data, i) => (
                  <div className={`${style.circle_tab_cont} flex`} key={i}>
                    <span
                      className={`${style.circleicon} ${data.Content}`}
                    ></span>
                    <p className={style.circlePara}>{data.Title} </p>
                  </div>
                ))}
            </li>
          </ul>
          {/* <li className={style.mobileSecondList}>
            <div className={`${style.circle_tab_cont} flex`}>
              <span className={`${style.circleicon} icon-vuejs`}></span>
              <p className={style.circlePara}>Vuejs </p>
            </div>
            <div className={style.imagecontainer}>
              <Image
                src={centerImg}
                className={style.centerImg}
                alt="image"
                height={100}
                width={100}
                priority
              />
            </div>
          </li> */}
        </div>
      </div>
    </section>
  );
}
