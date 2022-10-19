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
  TabTextContainerSC,
  TextContainerSC,
  TextPriceSC,
} from "./style";
import { Typography, VariantsTypography } from "../../ui/typography";
import { Colors } from "../../ui/colors";

export interface IPricePlans {
  set: string;
  price: string;
  description: string;
  advantages: string[];
}
interface IData {
  data: IPricePlans[];
}

export const SliderPricing = ({ data }: IData) => {
  return (
    <ContainerMobileSC>
      <SwiperCustomSC
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((tab, index) => (
          <SwiperSlide key={index}>
            <TabSC>
              <TabTextContainerSC>
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
                    variant={VariantsTypography.h3}
                    color={Colors.BLACK}
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
              </TabTextContainerSC>
            </TabSC>
          </SwiperSlide>
        ))}
      </SwiperCustomSC>
    </ContainerMobileSC>
  );
};
