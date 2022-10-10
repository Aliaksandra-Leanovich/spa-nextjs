import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import quotesImage from "/public/icons/Quote.svg";
import Avatar1 from "/public/icons/avatar1.svg";
import Avatar2 from "/public/icons/avatar2.svg";
import Avatar3 from "/public/icons/avatar3.svg";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";

import {
  BlockReview,
  ContainerReviews,
  QuotesImage,
  Review,
  ReviewerBlock,
  ReviewerImage,
  ReviewerInformation,
  ReviewerName,
  ReviewerPosition,
  TextReview,
  Container,
  ContainerMobile,
} from "./style";

const config = [
  {
    comment:
      "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    icon: quotesImage.src,
    avatar: Avatar1.src,
    name: "Oberon Shaw, MCH",
    position: "Head of Talent Acquisition, North America",
  },
  {
    comment:
      "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    icon: quotesImage.src,
    avatar: Avatar2.src,
    name: "Oberon Shaw, MCH",
    position: "Head of Talent Acquisition, North America",
  },
  {
    comment:
      "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    icon: quotesImage.src,
    avatar: Avatar3.src,
    name: "Oberon Shaw, MCH",
    position: "Head of Talent Acquisition, North America",
  },
];

SwiperCore.use([EffectCoverflow, Pagination]);

export const Slider = () => {
  return (
    <>
      <Container>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          className="swiper"
          modules={[Pagination]}
        >
          <SwiperSlide>
            <ContainerReviews>
              {config.map((review, index) => (
                <Review key={index}>
                  <BlockReview>
                    <QuotesImage src={review.icon} />
                    <TextReview>{review.comment}</TextReview>
                  </BlockReview>
                  <ReviewerBlock>
                    <ReviewerImage src={review.avatar} />
                    <ReviewerInformation>
                      <ReviewerName>{review.name}</ReviewerName>
                      <ReviewerPosition>{review.position}</ReviewerPosition>
                    </ReviewerInformation>
                  </ReviewerBlock>
                </Review>
              ))}
            </ContainerReviews>
          </SwiperSlide>
          <SwiperSlide>
            <ContainerReviews>
              {config.map((review, index) => (
                <Review key={index}>
                  <BlockReview>
                    <QuotesImage src={review.icon} />
                    <TextReview>{review.comment}</TextReview>
                  </BlockReview>
                  <ReviewerBlock>
                    <ReviewerImage src={review.avatar} />
                    <ReviewerInformation>
                      <ReviewerName>{review.name}</ReviewerName>
                      <ReviewerPosition>{review.position}</ReviewerPosition>
                    </ReviewerInformation>
                  </ReviewerBlock>
                </Review>
              ))}
            </ContainerReviews>
          </SwiperSlide>
          <SwiperSlide>
            <ContainerReviews>
              {config.map((review, index) => (
                <Review key={index}>
                  <BlockReview>
                    <QuotesImage src={review.icon} />
                    <TextReview>{review.comment}</TextReview>
                  </BlockReview>
                  <ReviewerBlock>
                    <ReviewerImage src={review.avatar} />
                    <ReviewerInformation>
                      <ReviewerName>{review.name}</ReviewerName>
                      <ReviewerPosition>{review.position}</ReviewerPosition>
                    </ReviewerInformation>
                  </ReviewerBlock>
                </Review>
              ))}
            </ContainerReviews>
          </SwiperSlide>
        </Swiper>
      </Container>
      <ContainerMobile>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {config.map((review, index) => (
            <SwiperSlide key={index}>
              <Review>
                <BlockReview>
                  <QuotesImage src={review.icon} />
                  <TextReview>{review.comment}</TextReview>
                </BlockReview>
                <ReviewerBlock>
                  <ReviewerImage src={review.avatar} />
                  <ReviewerInformation>
                    <ReviewerName>{review.name}</ReviewerName>
                    <ReviewerPosition>{review.position}</ReviewerPosition>
                  </ReviewerInformation>
                </ReviewerBlock>
              </Review>
            </SwiperSlide>
          ))}
        </Swiper>
      </ContainerMobile>
    </>
  );
};
