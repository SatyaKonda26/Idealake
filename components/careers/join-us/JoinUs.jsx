import Image from "next/image";
import style from "./joinUs.module.css";
import joinus from "/public/images/join-us.png";
import tick from "/public/images/tick.svg";
import Counter from "./Counter";

const worHereData = [
  {
    id: 1,
    number: 3500,
    title: "Visitors",
  },
  {
    id: 2,
    number: 36,
    title: "Startups",
  },
  {
    id: 3,
    number: 30,
    title: "Mentors",
  },

  {
    id: 4,
    number: 8,
    title: "Countries",
  },
  {
    id: 5,
    number: 6,
    title: "Stages",
  },
];

export default function JoinUs() {
  return (
    <section className="container">
      <div className={` inner ${style.content_wrappper}`}>
        <div className={style.joinus_img_wrap}>
          <Image src={joinus} alt="join-us" className={style.joinus_img} />
        </div>
        <div className={style.work_here_wrap}>
          <button className={style.join_us_btn}>COME JOIN US</button>
          <h1 className="heading">Why Work Here</h1>
          <p className="para">
            From year to year we strive to invent the most innovative
            technology.
          </p>
          <div className={style.achivement_wrap}>
            {worHereData.map((data, index) => (
              <div className={style.counter_wrap} key={index}>
                <div className="check_icon">
                  <Image src={tick} alt="tick" className={style.tick} />
                </div>
                <div className={style.achiv_num}>
                  <Counter
                    className={style.number_count}
                    number={data.number}
                  />
                  <p className="card_para">{data.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
