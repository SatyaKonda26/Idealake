import Image from "next/image";
import viraj from "/public/assets/images/top-mgnt-viraj-sawant-.png";
import sudhir from "/public/assets/images/top-mgnt-sudhir-shetty-.png";
import chetan from "/public/assets/images/top-mgnt-chetan-mane-.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from "./ourTeam.module.css";
import Link from "next/link";
import useWindowSize from "../../hooks/useWindowSize";

export default function OurTeam() {
  const screenSize = useWindowSize();

  const foundingMembers = [
    {
      name: "Viraj Savant",
      img: viraj,
      role: "CEO",
      linkedIn: "https://www.linkedin.com/in/viraj-savant-7a8440/",
    },
    {
      name: "Sudhir Shetty",
      img: sudhir,
      role: "COO & CTO",
      linkedIn: "https://www.linkedin.com/in/sudhir-shetty-2b27bb7/",
    },
    {
      name: "Chetan Mane",
      img: chetan,
      role: "Executive Vice President",
      linkedIn: "https://www.linkedin.com/in/chetan-mane-48810315/",
    },
  ];

  let swiper;

  if (screenSize.width < 768) {
    swiper = (
      <Carousel
        autoPlay={true}
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={false}
        centerMode={true}
      >
        {foundingMembers.map((member, i) => (
          <div key={i} className={style.member}>
            <div className={style.overlay}></div>
            <div className={style.img}>
              <Image src={member.img} alt={member.name} />
            </div>
            <div className={style.info}>
              <span className={style.name}>{member.name}</span>
              <span className={style.designation}>{member.role}</span>
              <Link
                href={member.linkedIn}
                title="Find on LinkedIn"
                className={style.links}
              >
                <span className="icon_linked_in2"></span>
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    );
  } else {
    swiper = foundingMembers.map((member, i) => (
      <div key={i} className={style.member}>
        <div className={style.overlay}></div>
        <div className={style.memberImages}>
          <Image src={member.img} alt={member.name} />
        </div>
        <div className={style.info}>
          <span className={style.name}>{member.name}</span>
          <span className={style.designation}>{member.role}</span>
          <Link
            href={member.linkedIn}
            alt="Find on LinkedIn"
            className={style.links}
            target="_blank"
          >
            <span className="icon-linked-in2"></span>
          </Link>
        </div>
      </div>
    ));
  }

  return (
    <section id="ourTeam" className={style.team}>
      <div className="container">
        <div className={`sec_heading ${style.sec_head}`}>
          <h3 className="title">Meet Our Team</h3>
          <h2 className="heading">The team behind transformation</h2>
          <p className="para">Founding Members</p>
        </div>

        <div className={`flex ${style.memberList}`}>{swiper}</div>

        <Link className="btn" href="/team">
          View our leaders
        </Link>
      </div>
    </section>
  );
}
