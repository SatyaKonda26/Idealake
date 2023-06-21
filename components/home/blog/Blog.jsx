import Image from "next/image";
import img_one from "/public/assets/images/ux_one.png";
import img_two from "/public/assets/images/ux_two.png";
import article from "/public/assets/images/article.png";
import style from "./blog.module.css";

export default function Blog({ data }) {
  const content = [
    {
      imgPath: img_one,
      heading: "Toggle Up!",
      description:
        "Think of a world where you don&apos;t need a separate testing environment, where",
    },
    {
      imgPath: img_two,
      heading: "Let's wrap the Traditional Hunt?",
      description:
        "Recruitment and selection, like every other aspect of business today depends on",
    },
  ];
  return (
    <section id="blog" className={`inner ${style.blog_section}`}>
      <div className="container">
        <div className="sec_heading">
          <h2 className={`heading ${style.type1}`}>Blogs & Articles</h2>
        </div>
        <div className={`flex ${style.wrapper}`}>
          <div className={`flex column ${style.blog}`}>
            {content &&
              content.map((val, i) => (
                <div className={`flex ${style.box} ${style.box_type1}`} key={i}>
                  <Image src={val.imgPath} alt={val.heading} />

                  <div className={style.detail}>
                    <h3 className={style.title}>{val.heading}</h3>
                    <p className={style.description}>{val.description}</p>
                    <a
                      href="#fixme"
                      title="Read more"
                      className={`btn ${style.type2}`}
                    >
                      Read More
                    </a>
                  </div>
                </div>
              ))}
          </div>
          <div className={style.article}>
            <div>
              <Image src={article} alt="Idealake Process" />
            </div>
            <div className={`${style.info}`}>
              <h3 className={style.title}>Why Agile is Not Agile Anymore?</h3>
              <p className={style.description}>
                Two decades ago, agile took over the world and become so popular
                that customers demanded agile projects
              </p>
              <a
                href="#fixme"
                title="Read more"
                className={`btn ${style.type2}`}
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
