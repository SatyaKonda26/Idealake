import { leadersData } from "./leadersData";
import style from "./Founder.module.css";
import LeaderComp from "./LeaderComp";

const Founder = ({ val, title, sub }) => {
  return (
    <section className={style.founders}>
      <div className="container">
        <div className={style.founder_head}>
          {/*<h2 className={style.founder_header}>
            Idealake Began Over Two Decades Ago Along With The Birth Of The
            Internet.
  </h2>*/}
          <h2 className={style.founder_header}>{title}</h2>
          {/*<p className={style.founder_desc}>
            With over 200 professionals under one roof at Idealake House, our
            heritage bungalow in Parel, we have ridden the waves of technology
            and communication over time. Idealake is founded by
            <span className={style.founder_name}>Viraj Savant - CEO</span> and
            <span className={style.founder_name}>Sudhir Shetty CTO/COO</span>
</p>*/}
          <p
            className={style.founder_desc}
            dangerouslySetInnerHTML={{ __html: sub }}
          />
        </div>
        <div className={style.leader_info}>
          {/*leadersData.map((leaderData, i) => (
            <LeaderComp rec={leaderData} key={i} />
          ))*/}
          {val.map((leaderData, i) => (
            <LeaderComp rec={leaderData} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founder;
