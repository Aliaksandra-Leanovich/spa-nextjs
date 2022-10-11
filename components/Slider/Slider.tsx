import React from "react";
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
  Container,
  ContainerMobile,
} from "./style";
import { Subtitle } from "../../ui/typography";
import { Colors } from "../../ui/colors";

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
                    <QuotesImage src={review.icon} id="commas" />
                    <Subtitle color={Colors.WHITE} margin="0 0 40px 0">
                      {review.comment}
                    </Subtitle>
                  </BlockReview>
                  <ReviewerBlock>
                    <ReviewerImage src={review.avatar} />
                    <ReviewerInformation>
                      <ReviewerName>{review.name}</ReviewerName>
                      <Subtitle color={Colors.WHITE}>
                        {review.position}
                      </Subtitle>
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
                    <Subtitle color={Colors.WHITE} margin="0 0 40px 0">
                      {review.comment}
                    </Subtitle>
                  </BlockReview>
                  <ReviewerBlock>
                    <ReviewerImage src={review.avatar} />
                    <ReviewerInformation>
                      <ReviewerName>{review.name}</ReviewerName>
                      <Subtitle color={Colors.WHITE}>
                        {review.position}
                      </Subtitle>
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
                    <Subtitle color={Colors.WHITE} margin="0 0 40px 0">
                      {review.comment}
                    </Subtitle>
                  </BlockReview>
                  <ReviewerBlock>
                    <ReviewerImage src={review.avatar} />
                    <ReviewerInformation>
                      <ReviewerName>{review.name}</ReviewerName>
                      <Subtitle color={Colors.WHITE}>
                        {review.position}
                      </Subtitle>
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
                  <Subtitle color={Colors.WHITE} margin="0 0 40px 0">
                    {review.comment}
                  </Subtitle>
                </BlockReview>
                <ReviewerBlock>
                  <ReviewerImage src={review.avatar} />
                  <ReviewerInformation>
                    <ReviewerName>{review.name}</ReviewerName>
                    <Subtitle color={Colors.WHITE}>{review.position}</Subtitle>
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
