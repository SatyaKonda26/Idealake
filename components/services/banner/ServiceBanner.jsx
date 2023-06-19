import Link from "next/link";
import Image from "next/image";
import banner from "../../../public/assets/images/servicebanner.png";
import banner2 from "../../../public/assets/images/bannerimg2.png";
import style from "./servicebanner.module.css";

const Servicebanner = ({ title, subtitle, description }) => {
  return (
    <section className={`flex ${style.banner}`}>
      <div className={`${style.col}`}>
        <h2 className={`banner_title ${style.banner_title}`}>{title}-</h2>
        <h1
          className={`banner_heading ${style.heading}`}
          dangerouslySetInnerHTML={{ __html: subtitle }}
        ></h1>
        <Image src={banner2} alt="banner_img" className={style.banner_img2} />
        <p className={`banner_para  ${style.ban_para}`}>{description}</p>
        <Link href={"/contact"} className={`btn ${style.contact}`}>
          Contact Us
        </Link>
      </div>
      <div className={`${style.col} ${style.banner_image}`}>
        <div>
          <Image
            priority={true}
            src={banner}
            alt="banner_img"
            className={style.banner_img}
          />
        </div>
      </div>
    </section>
  );
};

export default Servicebanner;
