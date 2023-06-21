import Image from "next/image";
import Link from "next/link";
// import { useMediaQuery } from "react-responsive";
import style from "./leaderComp.module.css";

// const LeaderComp = ({ rec }) => {
//   // const matches = useMediaQuery({ query: "(max-width: 768px)" });
//   let name = rec.name.split(" ");
//   let classname = name[0].toLowerCase();
//   // console.log(matches ? "mobile" : "pc");
//   return (
//     <div className={style.leader_section}>
//       <div className={style.leader_image_container}>
//         <Image
//           // src={matches ? rec.mobimage : rec.image}
//           src={rec.image}
//           alt="leader_img"
//           className={style.leader_img}
//         />
//       </div>

//       <div className={style.leader_info_sec}>
//         <div className={style.name_desg}>
//           <h3 className={style.leader_name}>{rec.name}</h3>
//           <p className={style.leader_desg}>{rec.designation}</p>
//         </div>
//         <div className={style.leader_desc}>
//           <div className={style.first_desc}>
//             {rec.description}
//             {rec.name === "Viraj Savant" && (
//               <span className={style.extra_desc}>{rec.extradesc}</span>
//             )}
//           </div>
//           {rec.name === "Sudhir Shetty" && (
//             <div className={style.extra_desc}>{rec.extradesc}</div>
//           )}
//           <p className={style.second_desc}>
//             {rec.name === "Viraj Savant" && (
//               <span className={style.specialty}>Specialties:</span>
//             )}
//             {rec.seconddesc}
//           </p>
//           {rec.thirddesc && <p className={style.third_desc}>{rec.thirddesc}</p>}
//           <Link href={rec.linkedIn} target="_blank">
//             <div className={style.linked_container}>
//               <span className={`${rec.icon} ${style.linked}`} />
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

const LeaderComp = ({ rec }) => {
  // const matches = useMediaQuery({ query: "(max-width: 768px)" });
  let name = rec.Name.split(" ");
  let classname = name[0].toLowerCase();

  return (
    <div className={style.leader_section}>
      <div className={style.leader_image_container}>
        <Image
          src={rec.ProfileImage[0].Url}
          alt="leader_img"
          className={style.leader_img}
          width={500}
          height={100}
          loading="lazy"
        />
      </div>

      <div className={style.leader_info_sec}>
        <div className={style.name_desg}>
          <h3 className={style.leader_name}>{rec.Name}</h3>
          <p className={style.leader_desg}>{rec.Designation}</p>
        </div>
        <div className={style.leader_desc}>
          {/*<div className={style.first_desc}>{rec.Description}</div>*/}
          <div className={style.first_desc}>
            <div dangerouslySetInnerHTML={{ __html: rec.Description }} />
          </div>
          <Link href={rec.Linkedinurl} target="_blank">
            <div className={style.linked_container}>
              <span className={`icon-linked-in ${rec.icon} ${style.linked}`} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeaderComp;
