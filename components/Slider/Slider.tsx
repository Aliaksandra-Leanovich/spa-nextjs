import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import {
  BlockReviewSC,
  ContainerMobileSC,
  ContainerReviewsSC,
  ContainerSC,
  QuotesImageSC,
  ReviewerBlockSC,
  ReviewerImageSC,
  ReviewerInformationSC,
  ReviewSC,
  TextConteinerCommentSC,
} from "./style";
import { TypographySC, VariantsTypography } from "../../ui/typography";
import { Colors } from "../../ui/colors";
import { IReviewers } from "../Sections/ClientsSection";
import styled from "@emotion/styled";

SwiperCore.use([EffectCoverflow, Pagination]);

interface IData {
  data: IReviewers[];
}

export const Slider = ({ data }: IData) => {
  return (
    <>
      <ContainerSC>
        <SwiperCustom
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <ContainerReviewsSC>
              {data.map((review, index) => (
                <ReviewSC key={index}>
                  <BlockReviewSC>
                    <QuotesImageSC src={review.icon} />
                    <TextConteinerCommentSC>
                      <TypographySC
                        variant={VariantsTypography.subtitle}
                        color={Colors.WHITE}
                      >
                        {review.comment}
                      </TypographySC>
                    </TextConteinerCommentSC>
                  </BlockReviewSC>
                  <ReviewerBlockSC>
                    <ReviewerImageSC src={review.avatar} />
                    <ReviewerInformationSC>
                      <TypographySC
                        variant={VariantsTypography.paragraphMediumBold}
                        color={Colors.BLUE}
                      >
                        {review.name}
                      </TypographySC>
                      <TypographySC
                        variant={VariantsTypography.subtitle}
                        color={Colors.WHITE}
                      >
                        {review.position}
                      </TypographySC>
                    </ReviewerInformationSC>
                  </ReviewerBlockSC>
                </ReviewSC>
              ))}
            </ContainerReviewsSC>
          </SwiperSlide>
          <SwiperSlide>
            <ContainerReviewsSC>
              {data.map((review, index) => (
                <ReviewSC key={index}>
                  <BlockReviewSC>
                    <QuotesImageSC src={review.icon} />
                    <TextConteinerCommentSC>
                      <TypographySC
                        variant={VariantsTypography.subtitle}
                        color={Colors.WHITE}
                      >
                        {review.comment}
                      </TypographySC>
                    </TextConteinerCommentSC>
                  </BlockReviewSC>
                  <ReviewerBlockSC>
                    <ReviewerImageSC src={review.avatar} />
                    <ReviewerInformationSC>
                      <TypographySC
                        variant={VariantsTypography.paragraphMediumBold}
                        color={Colors.BLUE}
                      >
                        {review.name}
                      </TypographySC>
                      <TypographySC
                        variant={VariantsTypography.subtitle}
                        color={Colors.WHITE}
                      >
                        {review.position}
                      </TypographySC>
                    </ReviewerInformationSC>
                  </ReviewerBlockSC>
                </ReviewSC>
              ))}
            </ContainerReviewsSC>
          </SwiperSlide>
          <SwiperSlide>
            <ContainerReviewsSC>
              {data.map((review, index) => (
                <ReviewSC key={index}>
                  <BlockReviewSC>
                    <QuotesImageSC src={review.icon} />
                    <TypographySC
                      variant={VariantsTypography.subtitle}
                      color={Colors.WHITE}
                    >
                      {review.comment}
                    </TypographySC>
                  </BlockReviewSC>
                  <ReviewerBlockSC>
                    <ReviewerImageSC src={review.avatar} />
                    <ReviewerInformationSC>
                      <TypographySC
                        variant={VariantsTypography.paragraphMediumBold}
                        color={Colors.BLUE}
                      >
                        {review.name}
                      </TypographySC>
                      <TypographySC
                        variant={VariantsTypography.subtitle}
                        color={Colors.WHITE}
                      >
                        {review.position}
                      </TypographySC>
                    </ReviewerInformationSC>
                  </ReviewerBlockSC>
                </ReviewSC>
              ))}
            </ContainerReviewsSC>
          </SwiperSlide>
        </SwiperCustom>
      </ContainerSC>
      <ContainerMobileSC>
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
              <ReviewSC>
                <BlockReviewSC>
                  <QuotesImageSC src={review.icon} />
                  <TypographySC
                    variant={VariantsTypography.subtitle}
                    color={Colors.WHITE}
                  >
                    {review.comment}
                  </TypographySC>
                </BlockReviewSC>
                <ReviewerBlockSC>
                  <ReviewerImageSC src={review.avatar} />
                  <ReviewerInformationSC>
                    <TypographySC
                      variant={VariantsTypography.paragraphMediumBold}
                      color={Colors.BLUE}
                    >
                      {review.name}
                    </TypographySC>
                    <TypographySC
                      variant={VariantsTypography.subtitle}
                      color={Colors.WHITE}
                    >
                      {review.position}
                    </TypographySC>
                  </ReviewerInformationSC>
                </ReviewerBlockSC>
              </ReviewSC>
            </SwiperSlide>
          ))}
        </Swiper>
      </ContainerMobileSC>
    </>
  );
};

const SwiperCustom = styled(Swiper)`
  .swiper-pagination-bullet {
    background-color: ${Colors.LIGHTBLUE};
    opacity: 1;
    display: inline-block;
    width: 12px;
    height: 12px;

    margin-right: 12px;
  }
  .swiper-pagination-bullet-active {
    background-color: ${Colors.BLUE};
  }
`;
