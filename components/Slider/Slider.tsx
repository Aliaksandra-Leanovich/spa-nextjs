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
  SwiperCustom,
  TextConteinerCommentSC,
} from "./style";
import { Typography, VariantsTypography } from "../../ui/typography";
import { Colors } from "../../ui/colors";
import { IReviewers } from "../Sections/ClientsSection";

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
                      <Typography
                        variant={VariantsTypography.subtitle}
                        color={Colors.WHITE}
                      >
                        {review.comment}
                      </Typography>
                    </TextConteinerCommentSC>
                  </BlockReviewSC>
                  <ReviewerBlockSC>
                    <ReviewerImageSC src={review.avatar} />
                    <ReviewerInformationSC>
                      <Typography
                        variant={VariantsTypography.paragraphMediumBold}
                        color={Colors.BLUE}
                      >
                        {review.name}
                      </Typography>
                      <Typography
                        variant={VariantsTypography.subtitle}
                        color={Colors.WHITE}
                      >
                        {review.position}
                      </Typography>
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
                      <Typography
                        variant={VariantsTypography.subtitle}
                        color={Colors.WHITE}
                      >
                        {review.comment}
                      </Typography>
                    </TextConteinerCommentSC>
                  </BlockReviewSC>
                  <ReviewerBlockSC>
                    <ReviewerImageSC src={review.avatar} />
                    <ReviewerInformationSC>
                      <Typography
                        variant={VariantsTypography.paragraphMediumBold}
                        color={Colors.BLUE}
                      >
                        {review.name}
                      </Typography>
                      <Typography
                        variant={VariantsTypography.subtitle}
                        color={Colors.WHITE}
                      >
                        {review.position}
                      </Typography>
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
                    <Typography
                      variant={VariantsTypography.subtitle}
                      color={Colors.WHITE}
                    >
                      {review.comment}
                    </Typography>
                  </BlockReviewSC>
                  <ReviewerBlockSC>
                    <ReviewerImageSC src={review.avatar} />
                    <ReviewerInformationSC>
                      <Typography
                        variant={VariantsTypography.paragraphMediumBold}
                        color={Colors.BLUE}
                      >
                        {review.name}
                      </Typography>
                      <Typography
                        variant={VariantsTypography.subtitle}
                        color={Colors.WHITE}
                      >
                        {review.position}
                      </Typography>
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
                  <Typography
                    variant={VariantsTypography.subtitle}
                    color={Colors.WHITE}
                  >
                    {review.comment}
                  </Typography>
                </BlockReviewSC>
                <ReviewerBlockSC>
                  <ReviewerImageSC src={review.avatar} />
                  <ReviewerInformationSC>
                    <Typography
                      variant={VariantsTypography.paragraphMediumBold}
                      color={Colors.BLUE}
                    >
                      {review.name}
                    </Typography>
                    <Typography
                      variant={VariantsTypography.subtitle}
                      color={Colors.WHITE}
                    >
                      {review.position}
                    </Typography>
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
