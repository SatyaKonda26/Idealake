import useWindowSize from "@/src/hooks/useWindowSize";
import Link from "next/link";
import style from "./jobPost.module.css";

export default function JobPost({ data }) {
  const {
    position,
    experience,
    responsibilities,
    requirements,
    type,
    location,
  } = data;

  const screenSize = useWindowSize();

  return (
    <section className={`inner ${style.jobPost}`}>
      <div className="container">
        <Link href={"/careers"} className={`${style.goBack}`}>
          View All open positions
        </Link>
        <div className={`flex ${style.detail}`}>
          <div>
            <div
              className={
                screenSize.width > 768 ? `${style.job_head}` : `${style.hide}`
              }
            >
              <h2>{position}</h2>
              <p className={`description ${style.exp}`}>
                {experience} {type}
              </p>
            </div>
            <div className={style.jd}>
              <p className="description">{responsibilities}</p>
              <h3>Who We Are</h3>
              <p className="description">
                We&apos;re a team of lifelong learners. We&apos;re equal parts left and
                right brained. And we&apos;re generally likeable. We won&apos;t bore you
                with more adjectives. See for yourself.
              </p>
              <h3>Working with us</h3>
              <p className="description">
                We&apos;re a global team with a philosophy of encouraging passionate
                people to be fun and creative. With offices in Melbourne,
                Oakland, and Berlin we benefit from bringing together the
                experiences and viewpoints of a wide range of talented people
                from around the world. We believe a diverse workplace is a
                healthy workplace.
              </p>
              <h3>About the role</h3>
              <ul className={`flex column ${style.required_list}`}>
                {requirements &&
                  requirements.split(". ").map((list, i) => (
                    <li key={i} className={style.require}>
                      {list}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className={`flex column ${style.apply}`}>
            <div
              className={
                screenSize.width < 768 ? `${style.job_head}` : `${style.hide}`
              }
            >
              <h2>{position}</h2>
              <p className={`description ${style.exp}`}>
                {experience} {type}
              </p>
            </div>
            <div className={`flex column ${style.buttons}`}>
              <button className={`btn type2 ${style.btns} ${style.applyBtn}`}>
                Apply Now
              </button>
              <button className={`btn type2 ${style.btns} ${style.shareBtn}`}>
                Share now
              </button>
            </div>
            <div className={style.others}>
              <span className={style.postDate}>9 Aug 2019</span>
              <h3>Location</h3>
              <span>{location}</span>
              <h3>Work Type</h3>
              <span>{type}</span>
              <ul>
                <h3>Classification</h3>

                <li>Android Design & Architecture</li>
                <li>Web & Interaction Design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
