import React from "react";
import Servicebanner from "../../components/services/banner/ServiceBanner";
import ServiceCards from "../../components/services/cards/ServiceCards";
import OurTechnologies from "../../components/services/our-technologies/OurTechnologies";
import ServicePowerBy from "../../components/services/powerby/ServicePowerBy";
import ServiceClients from "../../components/services/clients/ServiceClients";
import Testimonial from "../../components/services/testimonial/Testimonial";

export const getStaticProps = async () => {
  const title = await fetch(
    `https://sitefinityheadlesscmsapi.idealake.com/api/idealake/contentitems?$filter=contains(Title,'Services Header Title')`,
    {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      },
    }
  );
  const titleres = await title.json();

  const subtitle = await fetch(
    `https://sitefinityheadlesscmsapi.idealake.com/api/idealake/contentitems?$filter=contains(Title,'Services Header Subtitle')`,
    {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      },
    }
  );
  const subtitleres = await subtitle.json();

  const description = await fetch(
    `https://sitefinityheadlesscmsapi.idealake.com/api/idealake/contentitems?$filter=contains(Title,'Services Header Description')`,
    {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      },
    }
  );
  const descriptionres = await description.json();
  //////////////////////////

  const cardtitle = await fetch(
    `https://sitefinityheadlesscmsapi.idealake.com/api/idealake/idealakeservices?$expand=*`,
    {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      },
    }
  );
  const cardtitleres = await cardtitle.json();
  //////////////////////////

  const data = await fetch(
    `https://sitefinityheadlesscmsapi.idealake.com/api/idealake/clienttestimonials?$expand=*&$orderby=DateCreated asc`,
    {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      },
    }
  );
  const testimonialres = await data.json();

  const management = await fetch(
    `https://sitefinityheadlesscmsapi.idealake.com/api/idealake/idealakeservices?$expand=*`,

    {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      },
    }
  );

  const managementres = await management.json();

  const technologies = await fetch(
    `https://sitefinityheadlesscmsapi.idealake.com/api/idealake/technologies`,

    {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      },
    }
  );

  const technologiesRes = await technologies.json();

  const servicePowerby = await fetch(
    `https://sitefinityheadlesscmsapi.idealake.com/api/idealake/listitems?$filter=ParentId eq 7dfe82d7-2876-4efb-b9ab-ff63f3af23ee`,

    {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      },
    }
  );

  const servicePowerbyRes = await servicePowerby.json();

  const centerImg = await fetch(
    `https://sitefinityheadlesscmsapi.idealake.com/api/idealake/images?$filter=contains(Title,'powered by center Image')`,

    {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      },
    }
  );

  const centerImgRes = await centerImg.json();

  const powerbySkills = await fetch(
    `https://sitefinityheadlesscmsapi.idealake.com/api/idealake/listitems?$filter=ParentId eq 7b1c96cb-9b12-4668-9f5d-acfc9c42b826&$orderby=PublicationDate asc`,

    {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      },
    }
  );

  const powerbySkillsRes = await powerbySkills.json();

  const clientImgData = await fetch(
    `https://sitefinityheadlesscmsapi.idealake.com/api/idealake/images?$filter=ParentId eq 60bbc6c5-4757-4697-ab6b-003a78c54c0f&$orderby=PublicationDate desc`,

    {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      },
    }
  );

  const clientImgDataRes = await clientImgData.json();

  return {
    props: {
      managementres,
      technologiesRes,
      servicePowerbyRes,
      centerImgRes,
      powerbySkillsRes,
      clientImgDataRes,
      titleres,
      subtitleres,
      descriptionres,
      cardtitleres,
      testimonialres,
    },
  };
};

const index = ({
  titleres,
  subtitleres,
  descriptionres,
  cardtitleres,
  testimonialres,
  technologiesRes,
  servicePowerbyRes,
  centerImgRes,
  powerbySkillsRes,
  clientImgDataRes,
}) => {
  const title = titleres.value[0].Content;
  const Subtitle = subtitleres.value[0].Content;
  const description = descriptionres.value[0].Content;
  const carddesc = cardtitleres.value;
  console.log("cardadarta", carddesc);
  const technologyData = technologiesRes.value;

  const powerbyData = servicePowerbyRes.value;

  const centerImg = centerImgRes.value[0].Url;

  const powerbySkills = powerbySkillsRes.value;

  const clientImg = clientImgDataRes.value;
  // console.log("dsdsdsdsdsds==>>>", carddesc.value);

  return (
    <>
      <Servicebanner
        title={title}
        subtitle={Subtitle}
        description={description}
      />
      <ServiceCards data={carddesc} />
      <OurTechnologies technologyData={technologyData} />
      <ServicePowerBy
        powerbyData={powerbyData}
        centerImg={centerImg}
        powerbySkills={powerbySkills}
      />
      <ServiceClients clientImg={clientImg} />
      <Testimonial data={testimonialres.value} />
    </>
  );
};

export default index;
