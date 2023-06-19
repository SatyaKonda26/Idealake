import Image from "next/image";
import ss from "/public/assets/images/ss.png";
import img from "/public/assets/images/article-4-old.png";
import style from "./bloglist.module.css";
import Link from "next/link";

export default function BlogList({ title, subtitle, data }) {
  return (
    <>
      <section className={style.blog}>
        <div className="container">
          <div className={style.sec_wrap}>
            <div className={style.cont_wrap}>
              <h1
                className={style.banner_head}
                dangerouslySetInnerHTML={{ __html: title }}
              ></h1>
              <p className={style.banner_desc}> {subtitle}</p>
            </div>
          </div>
        </div>
      </section>
      <section className={style.cards_wrappper}>
        <div className="container">
          {/*<div className={style.content_wrap}>
            <div className="">
              <div className={style.img_wrap}>
                <Image src={img} alt="" className={style.ilcard_img} />
              </div>
              <div className={style.cont_wrap}>
                <a href="#" target="_blank">
                  <h2 className={style.card_title}>
                    Why Agile is Not Agile Anymore?
                  </h2>
                </a>
                <p className={style.card_desc}>
                  Two decades ago, agile took over the world and become so
                  popular that...
                </p>
                <div className={style.profile_desg_wrap}>
                  <div className={style.profile}>
                    <Image
                      src={ss}
                      alt=""
                      className={style.profile_img}
                      height={500}
                      width={500}
                    />
                    <div className="">
                      <h4 className={style.profile_name}>Sudhir Shetty</h4>
                    </div>
                  </div>
                  <div className="profile-date"></div>
                </div>
              </div>
            </div>
  </div>*/}
          <div className={style.content_wrap}>
            {data.map((val, i) => (
              <div key={i}>
                <div className="">
                  <div className={style.img_wrap}>
                    <Image
                      src={val.BlogThumbnailImage[0].Url}
                      alt=""
                      className={style.ilcard_img}
                      height={200}
                      width={200}
                    />
                  </div>
                  <div className={style.cont_wrap}>
                    <Link href={`/blogs/${val.Id}`}>
                      <h2 className={style.card_title}>{val.Title}</h2>
                    </Link>
                    <p className={style.card_desc}>
                      Two decades ago, agile took over the world and become so
                      popular that...
                    </p>
                    <div className={style.profile_desg_wrap}>
                      <div className={style.profile}>
                        <Image
                          src={val.BlogAuthorImage[0].Url}
                          alt=""
                          className={style.profile_img}
                          height={500}
                          width={500}
                        />
                        <div className="ilCard">
                          <h4 className={style.profile_name}>
                            {val.BlogAuthorName}
                          </h4>
                        </div>
                      </div>
                      <div className="profile-date"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
