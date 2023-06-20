import Image from "next/image";
import style from "./serviceInfo.module.css";


export default function ServiceInfo({data}) {
  console.log("data checkx====>",data)
  return (
    <section className={`inner ${style.service}`}>
      <div className="container">
        <h2 className={style.heading_mb}>{data.ServicesParaTitle}</h2>
        <div className={`${style.info} flex`}>
          <div className={style.poster}>
            <Image src={data.ServicesParaImage[0].Url} alt="img" height={200} width={200} />
          </div>
          <div className={style.detail}>
            <h2 className={style.head}>{data.ServicesParaTitle}</h2>
            <div className={`${style.description} banner_para`} dangerouslySetInnerHTML={{__html:data.SubServicesDescription}}>
            </div>
          </div>
        </div>

        <div className={style.expertise}>
          <h2 className={style.head}>{data.SubServicesHeader}</h2>
          <div className={`banner_para`}dangerouslySetInnerHTML={{__html:data.SubServicesDescription}}>
            
          </div>
        </div>
        <ul className={`flex ${style.card}`}>
            <li >
              <span className={`${data.ServicesIconClass} ${style.icons}`}></span>
              <div>
                <h3 className={style.card_title}>{data.Title}</h3>
                <p className={`${style.card_para} banner_para`}>
                  {data.SubTitle}
                </p>
              </div>
            </li>
        </ul>
      </div>
    </section>
  );
}
