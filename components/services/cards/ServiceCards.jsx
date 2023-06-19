import Link from "next/link";
import style from "./servicecards.module.css";
// import { servicesData } from "../servicesData";

export const offerCarddata = [
  {
    id: 1,
    logo: "icon-user-experience",
    title: "User Experience Design ",
    details:
      "Driven by research and strategy, we create user friendly and intuitive journeys for your platform.",
  },
  {
    id: 2,
    logo: "icon-enterprise-application",
    title: "Enterprise Applications & Devops",
    details:
      "With scalable applications, your business can experience multi-fold growth across metrics.",
  },
  {
    id: 3,
    logo: "icon-visual-design",
    title: "Visual Design",
    details:
      "Using beautiful designs, we enable higher engagement and superior customer service for your target audience.",
  },
  {
    id: 4,
    logo: "icon-mob-app-solutions",
    title: "Mobile App & Web Solutions ",
    details:
      "Responsive and optimised for any device, our platforms use powerful technology and code to help your brand reach customers.",
  },
  {
    id: 5,
    logo: "icon-ecommerce-solutions",
    title: " Custom E-Commerce Solutions ",
    details:
      "With engaging e-commerce platforms that are catered exclusively to your business, elevate sales for your products and services.",
  },
  {
    id: 6,
    logo: "icon-artificial-intelligence",
    title: "AI And ML",
    details:
      "Cutting-edge and intuitive, our Artificial Intelligence and Machine Learning solutions bring a human and empathetic touch to your platforms.",
  },
  {
    id: 7,
    logo: "icon-machine-learning",
    title: "Engineering Analytics",
    details:
      "Using numbers, metrics and big data, we aim to optimise every platform and digital solution to its finest.",
  },
  {
    id: 8,
    logo: "icon-data-led",
    title: "Data Led CRM for CLCM Programmes  ",
    details:
      "Boost your customer reach with customised and persuasive emails that prolong Customer Life Cycles.",
  },
  {
    id: 9,
    logo: "icon-onsite-professionals",
    title: "On Site Professionals ",
    details:
      "Tech geniuses that work closely with your teams to ensure seamless deployment.",
  },
  {
    id: 10,
    logo: "icon-content",
    title: "Content",
    details:
      "Bring your brand&apos;s voice to life with clear copy implemented with a robust strategy.",
  },
];

const ServiceCards = ({ data }) => {
  return (
    <section className="inner">
      <div className="container">
        <div className="sec_heading">
          <h3 className="title">What we offer</h3>
          <h2 className={`heading ${style.card_heading}`}>
            We Provide The Solution, Not Just The Service.
          </h2>
        </div>

        <ul className={`flex wrap ${style.offercards}`}>
          {data &&
            data.map((data, i) => (
              <li key={i} className={`flex ${style.card}`}>
                <Link
                  href={`services/service-detail/${data.Id}`}
                  title={data.title}
                >
                  <span className={`${data.ServicesIconClass} ${style.logo}`} />
                  <h2 className={`card_title ${style.service}`}>
                    {data.Title}
                  </h2>
                  <p className={`card_para`}>{data.SubTitle}</p>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default ServiceCards;
