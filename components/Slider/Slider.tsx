import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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
import { IReviewers } from "../Sections/ClientsSection";

interface IData {
  data: IReviewers[];
}
SwiperCore.use([EffectCoverflow, Pagination]);

export const Slider = ({ data }: IData) => {
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
              {data.map((review, index) => (
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
              {data.map((review, index) => (
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
              {data.map((review, index) => (
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
          {data.map((review, index) => (
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
