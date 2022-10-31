import React from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import {
  BlockReviewSC,
  ContainerMobileReviewSC,
  ContainerMobileSC,
  ContainerReviewsSC,
  ContainerSC,
  QuotesImageSC,
  ReviewerBlockSC,
  ReviewerImageSC,
  ReviewerInformationSC,
  ReviewSC,
  SwiperCustomSC,
  TextConteinerCommentSC,
} from "./style";
import { Typography } from "../../ui/Typography";
import { Colors } from "../../ui/colors";
import { ISliderData } from "./types";
import { VariantsTypography } from "../../enums/TypographyVariants";

SwiperCore.use([EffectCoverflow, Pagination]);

export const Slider = ({ data }: ISliderData) => {
  return (
    <>
      <ContainerSC>
        <SwiperCustomSC
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
                    <QuotesImageSC>{review.icon}</QuotesImageSC>
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
                    <ReviewerImageSC>{review.avatar}</ReviewerImageSC>
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
                    <QuotesImageSC>{review.icon}</QuotesImageSC>
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
                    <ReviewerImageSC>{review.avatar}</ReviewerImageSC>
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
                    <QuotesImageSC>{review.icon}</QuotesImageSC>
                    <Typography
                      variant={VariantsTypography.subtitle}
                      color={Colors.WHITE}
                    >
                      {review.comment}
                    </Typography>
                  </BlockReviewSC>
                  <ReviewerBlockSC>
                    <ReviewerImageSC>{review.avatar}</ReviewerImageSC>
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
        </SwiperCustomSC>
      </ContainerSC>
      <ContainerMobileSC>
        <SwiperCustomSC
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {data.map((review, index) => (
            <SwiperSlide key={index}>
              <ContainerMobileReviewSC>
                <ReviewSC>
                  <BlockReviewSC>
                    <QuotesImageSC>{review.icon}</QuotesImageSC>
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
                    <ReviewerImageSC>{review.avatar}</ReviewerImageSC>
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
              </ContainerMobileReviewSC>
            </SwiperSlide>
          ))}
        </SwiperCustomSC>
      </ContainerMobileSC>
    </>
  );
};
