import ServiceDetailBanner from "../../../components/serviceDetail/detail-banner/DetailBanner";
import ServiceDetailDesc from "../../../components/serviceDetail/detail/ServiceInfo";
// import { servicesData } from "../../../components/services/servicesData";

export const getStaticPaths = async () => {
  const data = await fetch(
    `https://sitefinityheadlesscmsapi.idealake.com/api/idealake/idealakeservices?$expand=*`,
    {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      },
    }
  );
  const res = await data.json();

  const paths = res.value.map((val) => {
    return {
      params: {
        serviecepage: val.Id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};


export const getStaticProps = async (context) => {
  const id = context.params.serviecepage;
  const data = await fetch(
    `https://sitefinityheadlesscmsapi.idealake.com/api/idealake/idealakeservices?$expand=*`,
    {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      },
    }
  );

  const res = await data.json();
  const servicedataID = res.value.filter((val) => val.Id === id);

  return {
    props: { servicedataID },
  };
};

const Page = (props) => {
  const data = props.servicedataID[0];
  const { Title, ServicesParaDescription, ServicesIconClass } = data;

  return (
    <>
      <ServiceDetailBanner
        className={ServicesIconClass}
        title={Title}
        details={ServicesParaDescription}
      />
      <ServiceDetailDesc data={data} />
    </>
  );
};
export default Page;
