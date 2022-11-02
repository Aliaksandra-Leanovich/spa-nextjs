import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { SwiperSlide } from "swiper/react";
import { VariantsTypography } from "../../enums";
import { Colors, Typography } from "../../ui";
import {
  BlockReviewSC,
  ContainerMobileReviewSC,
  ContainerMobileSC,
  QuotesImageSC,
  ReviewerBlockSC,
  ReviewerImageSC,
  ReviewerInformationSC,
  ReviewSC,
  SwiperCustomSC,
  TextConteinerCommentSC,
} from "./style";
import { ISliderData } from "./types";

SwiperCore.use([EffectCoverflow, Pagination]);

export const Slider = ({ data }: ISliderData) => {
  return (
    <>
      <ContainerMobileSC>
        <SwiperCustomSC
          pagination={{
            clickable: true,
          }}
          slidesPerView={1}
          spaceBetween={30}
          modules={[Pagination]}
          breakpoints={{
            1152: {
              slidesPerView: 3,
            },
          }}
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
