import Image from "next/image";
import style from "./BlogArticle.module.css";

export default function BlogArticle({ data }) {
  return (
    <>
      <section id="blog-article-banner" className={style.blog_article_banner}>
        <div className="container">
          <div className="sec-wrap">
            <h1 className={style.banner_title}>{data.Title}</h1>
            <div className={style.profile_wrap}>
              <Image
                src={data.BlogAuthorImage[0].Url}
                alt=""
                height={500}
                width={500}
              />
              <div className={style.publish_date}>
                <p className={style.profile_name}>{data.BlogAuthorName}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="article-card" className={style.article_card}>
        <div className="container">
          <div className={style.article_wrapper}>
            <Image
              src={data.BlogThumbnailImage[0].Url}
              alt=""
              className={style.article_img}
              height={3000}
              width={5000}
            />
            <div
              className={style.article_cont}
              dangerouslySetInnerHTML={{ __html: data.Content }}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
}
