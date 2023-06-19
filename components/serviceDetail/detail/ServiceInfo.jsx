import Image from "next/image";
// import UxdesignImg from "/public/images/ux-design.png";
import style from "./serviceInfo.module.css";

const serviceDetailData = [
  {
    id: 1,
    icon: "icon-user-experience",
    title: "Charting the preliminaries your space",
    description:
      "We set the groundwork and lay out simplified plans to base the project on. It is crucial to understand the target audience, demographics, and user behavior",
  },
  {
    id: 2,
    icon: "icon-user-experience",
    title: "Decide how you want to host",
    description:
      "Based on the requirements collected, we define clear objectives from the end-users and the business, both. This helps us derive user-centric theories which we then study",
  },
  {
    id: 3,
    icon: "icon-user-experience",
    title: "Running a set of tests",
    description:
      "Once your listing is live, qualified guests can reach out and you can message them.",
  },
];

export default function ServiceInfo() {
  return (
    <section className={`inner ${style.service}`}>
      <div className="container">
        <h2 className={style.heading_mb}>What is UX Design?</h2>
        <div className={`${style.info} flex`}>
          <div className={style.poster}>
            {/* <Image src={UxdesignImg} alt="img" /> */}
          </div>
          <div className={style.detail}>
            <h2 className={style.head}>What is UX Design?</h2>
            <div className={`${style.description} banner_para`}>
              <p>
                A systematic study of target users and their requirements to add
                insights to design processes.
              </p>
              <p>
                UX Research is defined as carrying out extensive research about
                users&apos; requirements and implementing the insights gained
                into the UX design process. The research requires various tools
                and techniques to understand user behavior and discover issues
                that affect the overall UX.
              </p>

              <p>
                The UX Researchers at Algoworks bring in their skills and
                experience of putting the right tools and techniques together to
                provide thorough user insights.
              </p>
            </div>
          </div>
        </div>

        <div className={style.expertise}>
          <h2 className={style.head}>OUR EXPERTISE</h2>
          <h3 className={style.title}>Algoworks&apos; UX Research Services</h3>
          <div className={`banner_para`}>
            <p>
              UX Research is defined as carrying out extensive research about
              users&apos; requirements and implementing the insights gained into
              the UX design process. The research requires various tools and
              techniques to understand user behavior and discover issues that
              affect the overall UX.
            </p>
            <p>
              The UX Researchers at Algoworks bring in their skills and
              experience of putting the right tools and techniques together to
              provide thorough user insights.
            </p>
          </div>
        </div>
        <ul className={`flex ${style.card}`}>
          {serviceDetailData.map((val, i) => (
            <li key={i}>
              <span className={`icon-user-experience ${style.icons}`}></span>
              <div>
                <h3 className={style.card_title}>{val.title}</h3>
                <p className={`${style.card_para} banner_para`}>
                  {val.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
