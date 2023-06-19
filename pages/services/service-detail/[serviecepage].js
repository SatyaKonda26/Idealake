import ServiceDetailBanner from "../../../components/serviceDetail/detail-banner/DetailBanner";
import ServiceDetailDesc from "../../../components/serviceDetail/detail/ServiceInfo";
import { servicesData } from "../../../components/services/servicesData";

export const getStaticPaths = () => {
  const paths = servicesData.map((curElm) => {
    return {
      params: { serviecepage: curElm.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = (context) => {
  const id = context.params.serviecepage;
  console.log("dsfdfgdgdfg ==>", id);
  const servicesDataID = servicesData.filter((service) => service.id == id);
  console.log("servicesDataID", servicesDataID);

  return {
    props: { servicesDataID },
  };
};

const Page = (props) => {
  const { title, details, icon } = props.servicesDataID[0];
  console.log("title", props.servicesDataID[0]);
  // console.log("details", details);
  // console.log("icon", icon);

  return (
    <>
      <ServiceDetailBanner className={icon} title={title} details={details} />
      <ServiceDetailDesc />
    </>
  );
};
export default Page;
