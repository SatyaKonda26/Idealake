import Image from "next/image";
import avatarLogo from "/public/assets/images/avatar_male.png";
import blackRock from "/public/assets/images/DSP_BlackRock.png";
import adityaBirla from "/public/assets/images/aditya_birla.jpg";
import quantum from "/public/assets/images/Quantum.png";
import reliance from "/public/assets/images/Reliance.png";
import axismf from "/public/assets/images/axismf.jpg";
import hdfcMF from "/public/assets/images/hdfc_mf.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from "./testimonial.module.css";

export default function Testimonial({ data }) {
  // console.log("data from testimonials ==>", data);
  const testimonials = [
    {
      name: "Arvind Kumar",
      role: "Manager, Marketing",
      avatar: avatarLogo,
      company: "DSP BlackRock",
      logo: blackRock,
      feedback:
        "We&apos;ve had the pleasure of working with the team at Idealake Information Technologies Pvt. Ltd for the last four years. Idealake partnered with DSP BlackRock for Design, Development, and Maintenance of our feature rich website. This has been possible because of a proactive approach and sharing of ideas between our teams.",
    },
    {
      name: "Janet Arole",
      role: "Group Manager - CorporJte Communication",
      avatar: avatarLogo,
      company: "Aditya Birla",
      logo: adityaBirla,
      feedback:
        "We&apos;ve had the pleasure of working with the team at Idealake Information Technologies Pvt. Ltd for the last four years. Idealake partnered with DSP BlackRock for Design, Development, and Maintenance of our feature rich website. This has been possible because of a proactive approach and sharing of ideas between our teams.",
    },
    {
      name: "Zubin Daboo",
      role: "Assistant Vice President - Marketing",
      avatar: avatarLogo,
      company: "Quantum",
      logo: quantum,
      feedback:
        "We&apos;ve had the pleasure of working with the team at Idealake Information Technologies Pvt. Ltd for the last four years. Idealake partnered with DSP BlackRock for Design, Development, and Maintenance of our feature rich website. This has been possible because of a proactive approach and sharing of ideas between our teams.",
    },
    {
      name: "Chandra Gupta",
      role: "CTO, Reliance Mutual Fund",
      avatar: avatarLogo,
      company: "reliance",
      logo: reliance,
      feedback:
        "We&apos;ve had the pleasure of working with the team at Idealake Information Technologies Pvt. Ltd for the last four years. Idealake partnered with DSP BlackRock for Design, Development, and Maintenance of our feature rich website. This has been possible because of a proactive approach and sharing of ideas between our teams.",
    },
    {
      name: "Sahil Anand",
      role: "Assistant Vice President - Strategy & Initiatives",
      avatar: avatarLogo,
      company: "Axis Mutual Fund",
      logo: axismf,
      feedback:
        "We&apos;ve had the pleasure of working with the team at Idealake Information Technologies Pvt. Ltd for the last four years. Idealake partnered with DSP BlackRock for Design, Development, and Maintenance of our feature rich website. This has been possible because of a proactive approach and sharing of ideas between our teams.",
    },
    {
      name: "Sanjay S Kumble",
      role: "Assistant Vice President - clients Services",
      avatar: avatarLogo,
      company: "HDFC",
      logo: hdfcMF,
      feedback:
        "We&apos;ve had the pleasure of working with the team at Idealake Information Technologies Pvt. Ltd for the last four years. Idealake partnered with DSP BlackRock for Design, Development, and Maintenance of our feature rich website. This has been possible because of a proactive approach and sharing of ideas between our teams.",
    },
  ];

  const customThumbs = () => {
    // const thumbList = testimonials.map((client, i) => (
    //   <div key={i}>
    //     <Image src={client.logo} alt={client.name} />
    //   </div>
    // ));

    const thumbList = data.map((client, i) => (
      <div key={i}>
        <Image
          src={client.ClientCompanyLogo[0].Url}
          alt={client.ClientName}
          height={100}
          width={100}
        />
      </div>
    ));

    return thumbList;
  };

  return (
    <section id="testimonial" className={`inner ${style.testimonial}`}>
      <div className="container">
        <div className="sec_heading">
          <h3 className="heading">
            Transformation that has won our client&apos;s trust
          </h3>
        </div>
        <Carousel
          axis="vertical"
          autoPlay={false}
          showArrows={true}
          showIndicators={false}
          showThumbs={true}
          showStatus={false}
          infiniteLoop={false}
          centerMode={true}
          renderThumbs={customThumbs}
        >
          {/*testimonials.map((item, i) => (
            <div key={i} className={style.card}>
              <p className={`description icon-quote ${style.feedback}`}>
                {item.feedback}
              </p>
              <div className="flex flex_sb">
                <div className={`flex ${style.person_info}`}>
                  <div>
                    <Image src={item.avatar} alt={item.name} />
                  </div>
                  <div className={`flex column text_left ${style.person}`}>
                    <h3>{item.name}</h3>
                    <span className={`para text_left`}>{item.role}</span>
                  </div>
                </div>
                <div>
                  <Image src={item.logo} alt={item.company} />
                </div>
              </div>
            </div>
          ))*/}
          {data.map((item, i) => (
            <div key={i} className={style.card}>
              <p className={`description icon-quote ${style.feedback}`}>
                {item.Description}
              </p>
              <div className="flex flex_sb">
                <div className={`flex ${style.person_info}`}>
                  <div>
                    <Image
                      src={item.ClientProfileImage[0].Url}
                      alt={item.ClientName}
                      height={100}
                      width={100}
                    />
                  </div>
                  <div className={`flex column text_left ${style.person}`}>
                    <h3>{item.ClientName}</h3>
                    <span className={`para text_left`}>
                      {item.ClientDesignation}
                    </span>
                  </div>
                </div>
                <div>
                  <Image
                    src={item.ClientCompanyLogo[0].Url}
                    alt={item.ClientName}
                    height={100}
                    width={100}
                  />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
