import Image from "next/image";
import style from "./coreLeaders.module.css";
import salesh from "/public/assets/images/Salesh-Soman.png";
import poonam from "/public/assets/images/Punam-Mahajan.png";
import amaresh from "/public/assets/images/Amaresh-Tripathi.png";
import prachi from "/public/assets/images/Rameez-Shaikh.png";
import rameez from "/public/assets/images/Rameez-Shaikh.png";
import rachit from "/public/assets/images/rachit.png";
import rohit from "/public/assets/images/Rohit-Topkhane.png";
import pooja from "/public/assets/images/Pooja-Chavhan.png";
import Link from "next/link";

export const cardData = [
  {
    image: salesh,
    name: "Salesh Soman",
    designation: "Associate Vice President",
    linkedId: "https://www.linkedin.com/in/saleshsoman/",
  },
  {
    image: rachit,
    name: "Rachit Koradia",
    designation: "Associate Vice President",
    linkedId: "https://www.linkedin.com/in/rameez-shaikh-9325353b/",
  },
  {
    image: rameez,
    name: "Rameez Shaikh",
    designation: "Head-Frontend",
    linkedId: "https://www.linkedin.com/in/rameez-shaikh-9325353b/",
  },
  {
    image: prachi,
    name: "Prachi Jain",
    designation: "Head - Mobile & Products",
    linkedId: "https://www.linkedin.com/in/prachi-jain-2a2352a2/",
  },
  {
    image: rohit,
    name: "Rohit Topkhane",
    designation: "Head - Sitefinity",
    linkedId: "https://www.linkedin.com/in/prachi-jain-2a2352a2/",
  },
  {
    image: pooja,
    name: "Pooja Chavhan",
    designation: "Senior Manager - Human Resources",
    linkedId: "https://www.linkedin.com/in/pooja-chavhan-100ba34b/",
  },
  {
    image: poonam,
    name: "Punam Mahajan",
    designation: "Delivery Manager",
    linkedId: "https://www.linkedin.com/in/punam-mahajan-pmp%C2%AE-a8032219/",
  },
  {
    image: amaresh,
    name: "Amaresh Tripathi",
    designation: "Delivery Manager",
    linkedId: "https://www.linkedin.com/in/amareshtripathi/",
  },
];

export const LeaderCard = (props) => {
  return (
    <div className={style.card}>
      <div className={` flex column ${style.card_cont}`}>
        <div className={`flex column ${style.imagHolder}`}>
          <Image
            src={props.image}
            alt="img"
            className={style.cardImg}
            height={200}
            width={300}
            loading="lazy"
          />
          <Link href={props.links} className={style.links} target="_blank">
            <span className={`icon-linked-in ${style.icon}`}></span>
          </Link>
        </div>
        <div className="flex column">
          <h3 className={`card_title card_title1`}>{props.name}</h3>
          <p className={` ${style.designation}`}>{props.designation}</p>
        </div>
      </div>
    </div>
  );
};

export default function CoreLeaders({ rec }) {
  // console.log("rec ==>", rec);
  return (
    <section className={`inner ${style.coreLeaders}`}>
      <div className="container">
        <div className="sec_heading">
          <h1 className={`heading `}>Our Core Leaders</h1>
        </div>
        <div className={`flex wrap ${style.cardMain}`}>
          {rec &&
            rec
              // .slice(0, 6)
              .map((val, i) => (
                <LeaderCard
                  key={i}
                  image={val.LeaderImage[0].Url}
                  name={val.LeaderName}
                  designation={val.LeaderDesignation}
                  links={val.LeaderLinkedinurl}
                />
              ))}
        </div>
      </div>
    </section>
  );
}
