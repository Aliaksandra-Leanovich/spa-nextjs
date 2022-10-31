import React from "react";
import { SwiperSlide } from "swiper/react";
import PointIcon from "/public/icons/Point.svg";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import {
  ContainerMobileSC,
  PointSC,
  SwiperCustomSC,
  TabButtonSC,
  TabSC,
  TextContainerSC,
  TextPriceSC,
} from "./style";
import { Typography } from "../../ui/typography";
import { VariantsTypography } from "../../enums/TypographyVariants";
import { Colors } from "../../ui/colors";
import { IPropsSlider } from "./types";

export const SliderPricing = ({ data }: IPropsSlider) => {
  return (
    <ContainerMobileSC>
      <SwiperCustomSC
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {data.map((tab, index) => (
          <SwiperSlide key={index}>
            <TabSC>
              <TextContainerSC>
                <Typography
                  variant={VariantsTypography.paragraphMedium}
                  color={Colors.WHITE}
                >
                  {tab.set}
                </Typography>
              </TextContainerSC>
              <TextContainerSC>
                <TextPriceSC
                  color={Colors.YELLOW}
                  variant={VariantsTypography.h3}
                >
                  {tab.price}
                </TextPriceSC>
              </TextContainerSC>

              <TextContainerSC>
                <Typography
                  variant={VariantsTypography.paragraphXS}
                  color={Colors.WHITE}
                >
                  {tab.description}
                </Typography>
              </TextContainerSC>

              {tab.advantages.map((advantage, index) => (
                <TextContainerSC key={index}>
                  <PointSC>
                    <PointIcon />
                  </PointSC>
                  <Typography
                    variant={VariantsTypography.paragraphXS}
                    color={Colors.WHITE}
                  >
                    {advantage}
                  </Typography>
                </TextContainerSC>
              ))}

              <TabButtonSC>Get Started</TabButtonSC>
            </TabSC>
          </SwiperSlide>
        ))}
      </SwiperCustomSC>
    </ContainerMobileSC>
  );
};
