import React from "react";
import Servicebanner from "../../components/services/banner/ServiceBanner";
import ServiceCards from "../../components/services/cards/ServiceCards";
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

  return {
    props: {
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
}) => {
  const title = titleres.value[0].Content;
  const Subtitle = subtitleres.value[0].Content;
  const description = descriptionres.value[0].Content;
  const carddesc = cardtitleres.value;
  console.log("dsdsdsdsdsds==>>>", carddesc);

  const data = testimonialres.value;

  return (
    <>
      <Servicebanner
        title={title}
        subtitle={Subtitle}
        description={description}
      />
      <ServiceCards data={carddesc} />
      <Testimonial data={data} />
    </>
  );
};

export default index;
