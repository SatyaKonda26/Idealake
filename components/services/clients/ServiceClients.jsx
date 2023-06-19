import Image from "next/image";
import style from "./serviceClients.module.css";

// const clientData = [
//   {
//     items: [{ image: paisa, title: "5-paisa" }],
//   },
//   {
//     items: [
//       { image: kotak, title: "kotak" },
//       { image: fg, title: "future-generali" },
//     ],
//   },
//   {
//     items: [
//       { image: axis, title: "axis-bank" },
//       { image: taj, title: "taj-Group" },
//       { image: hdfc, title: "HDFC" },
//     ],
//   },
//   {
//     items: [
//       { image: icici, title: "ICICI-bank" },
//       { image: indiaFirst, title: "image" },
//     ],
//   },
//   {
//     items: [
//       { image: tata, title: "tata-global" },
//       { image: mcd, title: "MCD" },
//       { image: union, title: "union-mf" },
//     ],
//   },
//   {
//     items: [
//       { image: reliance, title: "reliance" },
//       { image: saraswat, title: "saraswat-bank" },
//     ],
//   },
//   { items: [{ image: hfs, title: "HFS" }] },
// ];

export default function ServiceClients({ clientImg }) {
  // console.log("clientImg=====", clientImg);
  const clientData = [
    { items: [clientImg[0]] },
    { items: [clientImg[1], clientImg[2]] },
    { items: [clientImg[3], clientImg[4], clientImg[5]] },
    { items: [clientImg[6], clientImg[7], clientImg[8], clientImg[9]] },
    { items: [clientImg[10], clientImg[11], clientImg[12]] },
    { items: [clientImg[13], clientImg[14], clientImg[15], clientImg[16]] },
    { items: [clientImg[17], clientImg[18], clientImg[19]] },
    { items: [clientImg[20], clientImg[21], clientImg[22], clientImg[23]] },
    { items: [clientImg[24], clientImg[25], clientImg[26]] },
    { items: [clientImg[27], clientImg[28]] },
    { items: [clientImg[29]]},
  ];
  // console.log("da=====", clientData);

  return (
    <section className={style.serviceClients}>
      <div className="container">
        <div className="sec_heading">
          <h3 className={`${style.clientheading} heading heading1`}>
            Our Clients
          </h3>
          <p className={`${style.clientpara} para para1`}>
            Proud to work with clients from Fortune 500 brands and more!
          </p>
        </div>

        <ul className="flex">
          {clientImg &&
            clientData.map((data, i) => (
              <li key={i}>
                {data.items.map((item, i) => (
                <div key={i} className={style.clientImgWrap}>
                  <div className="client_wrap">
                  <Image
                    src={item.Url}
                    title={item.Title}
                    alt="image"
                    height={100}
                    width={100}
                  />
                  </div>
                </div>
                 ))} 
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
