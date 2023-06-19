import style from "./OurTeam.module.css";
// import viraj from "assets/images/top-mgnt-viraj-sawant-.png";
import viraj from "../../public/assets/images/top-mgnt-viraj-sawant-.png";
import sudhir from "../../public/assets/images/top-mgnt-sudhir-shetty-.png";
import chaitali from "../../public/assets/images/chaitali_group.png";
import chetan from "../../public/assets/images/top-mgnt-chetan-mane-.png";
import ishaq from "../../public/assets/images/top-mgnt-Ishaq-Ticklye.png";
import monica from "../../public/assets/images/top-mgnt-monica_advani.png";
import Image from "next/image";

export default function OurTeam() {
  return (
    <>
      <section className={style.about}>
        <div className="container">
          <h2 className={`text-center ${style.title}`}>
            Idealake began over two decades ago along with the birth of the
            Internet.
          </h2>
          <p className={`text-center ${style.short_cont}`}>
            With over 200 professionals under one roof at Idealake House, our
            heritage bungalow in Parel, we have ridden the waves of technology
            and communication over time. Idealake is founded by{" "}
            <span className={style.founder_name}>Viraj Savant - CEO </span>and{" "}
            <span className={style.founder_name}>Sudhir Shetty CTO/COO</span>
          </p>
        </div>
      </section>
      <section class="top-management">
        <div class="container">
          <div class="row">
            <div class="management-detail-wrap nm">
              <div class="row">
                <div class="col-lg-4 imgwrap">
                  <Image src={viraj} alt="viraj" />
                </div>
                <div class="col-lg-8 contwrap">
                  <div class="desig-name-wrap">
                    <h2 class="name">Viraj Savant</h2>
                    <p class="post">Founder and CEO</p>
                  </div>
                  <div class="desc-wrap nml">
                    <p class="short-desc">
                      With 25+ years experience in Digital, online and the
                      software industry, he has helped the digital industry have
                      a strong presence in the online space. His vision &amp;
                      strategy have helped multiple clients ensure maximum
                      growth &amp; ROI on spends. Idealake has achieved
                      tremendous digital growth owing to Viraj’s Consultative
                      approach. Barring work,
                      <span class="color-desc">
                        Viraj is an avid marathoner.
                      </span>
                    </p>
                    <p class="specialities">
                      <span class="bold-text">Specialities: </span>Domain
                      Expertise, Digital Touch Point Specialist, Consumer
                      Behavior &amp; Digital Strategist, Technology Consulting,
                      User Research &amp; Customer Relationship Management.
                    </p>
                    <div class="social-profile">
                      {" "}
                      <a
                        href="https://www.linkedin.com/in/viraj-savant-7a8440/"
                        target="_blank"
                        class="link"
                      >
                        <span class="icon icon-linked-in"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" class="management-detail-wrap">
              <div class="row col-order">
                <div class="col-lg-4 imgwrap">
                  <Image src={sudhir} alt="sudhir" />
                </div>
                <div class="col-lg-8 contwrap">
                  <div class="desig-name-wrap">
                    <h2 class="name">Sudhir Shetty</h2>
                    <p class="post">
                      Chief Operations Officer and Chief Technology Officer
                    </p>
                  </div>
                  <div class="desc-wrap nmr">
                    <p class="short-desc">
                      Sudhir has been associated with Idealake since more than
                      20 yrs. He is very intuitive about his work and chooses to
                      master different skills, motivate colleagues and manage
                      his team efficiently.
                    </p>
                    <p class="color-desc">
                      Implementing newer technologies in machine languages is
                      his passion.
                    </p>
                    <p class="short-desc">
                      When not in Idealake, he is passionate about photography,
                      travelling and above all, Artificial Intelligence.
                    </p>
                    <div class="social-profile">
                      {" "}
                      <a
                        href="https://www.linkedin.com/in/sudhir-shetty-2b27bb7/"
                        target="_blank"
                        class="link"
                      >
                        <span class="icon icon-linked-in"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" class="management-detail-wrap">
              <div class="row">
                <div class="col-lg-4 imgwrap">
                  <Image src={chetan} alt="viraj" />
                </div>
                <div class="col-lg-8 contwrap">
                  <div class="desig-name-wrap">
                    <h2 class="name">Chetan Mane</h2>
                    <p class="post">President</p>
                  </div>
                  <div class="desc-wrap nml">
                    <p class="short-desc">
                      Chetan has worked across various facets of the
                      communication and brand building business over the last 16
                      years. His experience straddles business management,
                      strategic planning, digital marketing and brand consulting
                      on brands such as Audi, Cadbury, HSBC, Network 18, Marico,
                      Domino’s, VIP, Godrej, HotStar, Tata, Asian Paints, Ola
                      Electric among others.
                    </p>
                    <p class="short-desc">
                      Chetan is also passionate about music and automobiles. He
                      has worked as a DJ and sound engineer in India and UK.
                    </p>
                    <div class="social-profile">
                      <a
                        href="https://www.linkedin.com/in/chetan-mane-48810315/"
                        target="_blank"
                        class="link"
                      >
                        <span class="icon icon-linked-in"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" class="management-detail-wrap">
              <div class="row col-order">
                <div class="col-lg-4 imgwrap">
                  <Image src={chaitali} alt="viraj" />
                </div>
                <div class="col-lg-8 contwrap">
                  <div class="desig-name-wrap">
                    <h2 class="name">Chaitali Dutta</h2>
                    <p class="post">CFO</p>
                  </div>
                  <div class="desc-wrap nmr">
                    <p class="short-desc">
                      Chaitali holds her Masters in Global Finance from NYU,
                      Stern, NY &amp; HKUST, Hong Kong, as well as a MSc degree
                      in Mathematical Statistics from the University of Lucknow.
                    </p>
                    <p class="short-desc">
                      Chaitali has 34 years of experience in the financial
                      sector. She started her career with Reserve Bank of India,
                      Kanpur moving onto State Bank of India as Probationary
                      Officer. For a decade and a half year she handled retail,
                      forex, commercial banking finally moving to Barclays Bank
                      as a consultant in 2007. Since then, Chaitali has handled
                      various projects as a consultant in India and abroad where
                      her experience in the financial sector has helped her in
                      delivering the successful completion.
                    </p>
                    <p class="short-desc">
                      She joined the Idealake team as CFO in 2020 and leads the
                      Finance and Accounts team in streamlining the finances of
                      the company, keeping an eye on the top line as well as the
                      profitability of Idealake.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" class="management-detail-wrap">
              <div class="row">
                <div class="col-lg-4 imgwrap">
                  <Image src={monica} alt="viraj" />
                </div>
                <div class="col-lg-8 contwrap">
                  <div class="desig-name-wrap">
                    <h2 class="name">Monica Advani</h2>
                    <p class="post">Vice President</p>
                  </div>
                  <div class="desc-wrap nml">
                    <p class="short-desc">
                      Monica is often heard saying, “think differently”. She is
                      a staunch believer that digital is on the path to becoming
                      the oxygen that will become intrinsic to people across the
                      world. She believes that businesses need to embrace new
                      and evolving strategies, through technology, to stay
                      relevant. She has worked closely with marketing and
                      technology teams to create, execute and sustain strategic
                      digital initiatives for large BFSI brands across India.
                    </p>
                    <p class="short-desc">
                      As Vice President, Business Relations at Idealake, she is
                      backed by 18 years of powerful digital transformation
                      experience in the BFSI category. She thrives on
                      transforming businesses through digital, by shepherding
                      them through strategy, technology, project management,
                      delivery and operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" class="management-detail-wrap">
              <div class="row col-order">
                <div class="col-lg-4 imgwrap">
                  <Image src={ishaq} alt="viraj" />
                </div>
                <div class="col-lg-8 contwrap">
                  <div class="desig-name-wrap">
                    <h2 class="name">Ishaq Ticklye</h2>
                    <p class="post">VP-Operations &amp; PMO</p>
                  </div>
                  <div class="desc-wrap nmr">
                    <p class="short-desc">
                      Ishaq heads the Project Management Office in Idealake,
                      taking care of all operations in project delivery, project
                      profitability and resource utilization. Other
                      responsibilities include enhancing efficiency and
                      productivity with continuous improvement in processes &
                      operations across departments.
                    </p>
                    <p class="short-desc">
                      With an engineering degree in Information Technology,
                      Ishaq has more than a decade of experience in project
                      management & delivery across various tech stacks.
                    </p>
                    <p class="short-desc">
                      Having grown up the hierarchy in Idealake, Ishaq has
                      in-depth knowledge of how the business processes can help
                      achieve organizational objectives & goals.
                    </p>
                    <div class="social-profile">
                      <a
                        href="https://www.linkedin.com/in/ishaqticklye/"
                        target="_blank"
                        class="link"
                      >
                        <span class="icon icon-linked-in"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
