import Image from "next/image";
import style from "./culture.module.css";
// import Healthcare from "/public/images/health.png";
// import work from "/public/images/work.png";
// import performance from "/public/images/performance.png";
// import mentorship from "/public/images/mentorship.png";
// import training from "/public/images/training.png";
// import event from "/public/images/event.png";

const cultureData = [
  {
    id: 1,
    // icon: Healthcare,
    name: "Healthcare",
    description:
      "Through True Rich Attended does no end it chis mother since real had halfdoes no end it",
  },
  {
    id: 2,
    // icon: work,
    name: "Hybrid work",
    description:
      "Through True Rich Attended does no end it his mother since real had halfdoes no end it",
  },
  {
    id: 3,
    // icon: performance,
    name: "Performance evaluations",
    description:
      "Through True Rich Attended does no end it his mother since real had halfdoes no end it",
  },
  {
    id: 4,
    // icon: mentorship,
    name: "Mentorship",
    description:
      "Through True Rich Attended does no end it his mother since real had halfdoes no end it",
  },
  {
    id: 5,
    // icon: training,
    name: "Training & certification",
    description:
      "Through True Rich Attended does no end it his mother since real had halfdoes no end it",
  },
  {
    id: 6,
    // icon: event,
    name: "Festivals & Events",
    description:
      "Through True Rich Attended does no end it his mother since real had halfdoes no end it",
  },
];

export const Culture = () => {
  return (
    <section>
      <div className="container">
        <p className={style.culture_mobile_title}>OUR WORK & CULTURE</p>
        <h2 className={`heading sec_heading ${style.culture_title}`}>
          The Idealake culture
        </h2>
        <h2 className={`heading ${style.culture_head}`}>
          Come and join a team of highly skilled professionals.
        </h2>
        <p className={`sec_heading para ${style.culture_para}`}>
          Work. Fun. And a whole lot of benefits
        </p>
        <p className={` para ${style.culture_mobile_txt}`}>
          Through True Rich Attended does no end it his mother since real had
          half every him case in packages enquire we up ecstatic unsatiable saw
          his giving Remain expense you position concluded.
        </p>
        <ul className={` ${style.culture_cards}`}>
          {cultureData.map((data, i) => (
            <li key={i} className={` ${style.card}`}>
              {/* <Image src={data.icon} alt="img" className={style.icon} /> */}
              <h3 className={style.title}>{data.name}</h3>
              <p className={`banner_para ${style.para}`}>{data.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
