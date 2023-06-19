import style from "./detailBanner.module.css";

export default function DetailBanner(props) {
  return (
    <section className={style.banner}>
      <div className="container">
        <div className="text_center">
          <span className={`${style.icon} ${props.className}`}></span>
          <h1>{props.title}</h1>
          <p className={`banner_para`}>{props.details}</p>
        </div>
      </div>
    </section>
  );
}

DetailBanner.defaultProps = {
  className: "icon-user-experience",
  title: "User Experience Design ",
  details:
    "Driven by research and strategy, we create user friendly and intuitive journeys for your platform.",
};
