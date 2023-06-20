import { useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import style from "./technologies.module.css";

// export const TechnologyNames = [
//   {
//     logo: "icon-front-end",
//     name: "Front end Technology",
//   },
//   {
//     logo: "icon-cms",
//     name: "Content management system",
//   },
//   {
//     logo: "icon-infra",
//     name: "Infra Management team",
//   },
//   {
//     logo: "icon-enterprise-application",
//     name: "Enterprise Application Development",
//   },
//   {
//     logo: "icon-product-dev",
//     name: "Product Development",
//   },
// ];

export const contentdata = [
  {
    title: "Front End Technology",
    details:
      "Our robust front-end development teams bring life to your platforms by creating the code for their design, structure, animation, colours, interactive elements and more. With front-end technology, we can help enhance user interaction experience, platform efficiency and the aesthetics of your platform for any device. ",
  },

  {
    title: "Content Management System",
    details:
      "A content management system (CMS) is used to manage web content, allowing multiple contributors to create,edit and publish. It allows users to manage theirwebsites without requiring them to write thousands of  lines of code. CMS provides a WYSISYG (what you see iswhat you get) editor that allows users to createwebsite content seamlessly. The content can be   consumed by any device or user. To know more about our CMS offerings, mail:",
  },

  {
    title: "Cloud Technology",
    details: "heyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
  },
  {
    title: "Enterprise Application Development & DevOps",
    details:
      "Our Enterprise Application Development and DevOps platforms can facilitate an entire business process with an integrated approach to developing software applications and hardware systems. During deployment we can also seamlessly facilitate integration of web services, service-oriented architecture, content and business processes.",
  },

  {
    title: "Product Development",
    details:
      "At Idealake, innovation and research are in our DNA. Over the course of our journey as a leading technology solutions provider, we have had the opportunity to research, develop and deploy products that leverage the power of AI, ML and data science to create a more human experience for your brand.",
  },
];

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
            {contentdata &&
              contentdata
                .filter((val) => val.title === activeTab)
                .map((data, i) => (
                  <div key={i}>
                    <h3 className={style.tabName}>{data.title}</h3>
                    <div className={`${style.info}`}>
                      <p className={`para`}>{data.details}</p>
                      <div>
                        <h3 className={`${style.highlight}`}>Sitefinity</h3>
                        <p>
                          For developers or site administrators, the latest
                          version of Sitefinity CMS unlocks a myriad of
                          enhancements to boost productivity, flexibility and
                          extensibility. Sitefinity CMS is a stable, powerful,
                          and easy to use CMS.
                        </p>
                        <h3 className={`${style.highlight}`}>Sitefinity</h3>
                        <p>
                          For developers or site administrators, the latest
                          version of Sitefinity CMS unlocks a myriad of
                          enhancements to boost productivity, flexibility and
                          extensibility. Sitefinity CMS is a stable, powerful,
                          and easy to use CMS.
                        </p>
                        <h3 className={`${style.highlight}`}>Sitefinity</h3>
                        <p>
                          For developers or site administrators, the latest
                          version of Sitefinity CMS unlocks a myriad of
                          enhancements to boost productivity, flexibility and
                          extensibility. Sitefinity CMS is a stable, powerful,
                          and easy to use CMS.
                        </p>
                        <h3 className={`${style.highlight}`}>Sitefinity</h3>
                        <p>
                          For developers or site administrators, the latest
                          version of Sitefinity CMS unlocks a myriad of
                          enhancements to boost productivity, flexibility and
                          extensibility. Sitefinity CMS is a stable, powerful,
                          and easy to use CMS.
                        </p>
                        <h3 className={`${style.highlight}`}>Sitefinity</h3>
                        <p>
                          For developers or site administrators, the latest
                          version of Sitefinity CMS unlocks a myriad of
                          enhancements to boost productivity, flexibility and
                          extensibility. Sitefinity CMS is a stable, powerful,
                          and easy to use CMS.
                        </p>
                        <h3 className={`${style.highlight}`}>Sitefinity</h3>
                        <p>
                          For developers or site administrators, the latest
                          version of Sitefinity CMS unlocks a myriad of
                          enhancements to boost productivity, flexibility and
                          extensibility. Sitefinity CMS is a stable, powerful,
                          and easy to use CMS.
                        </p>
                        <h3 className={`${style.highlight}`}>Sitefinity</h3>
                        <p>
                          For developers or site administrators, the latest
                          version of Sitefinity CMS unlocks a myriad of
                          enhancements to boost productivity, flexibility and
                          extensibility. Sitefinity CMS is a stable, powerful,
                          and easy to use CMS.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
