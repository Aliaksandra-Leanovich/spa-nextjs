import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import {
  ContainerMobileSC,
  PointSC,
  TabAdvantagesSC,
  TabButtonSC,
  TabSC,
  TabTextContainerSC,
  TextContainerSC,
} from "./style";
import { Typography, VariantsTypography } from "../../ui/typography";
import { Colors } from "../../ui/colors";

export interface IPricePlans {
  set: string;
  price: string;
  description: string;
  advantages: string[];
  icon: string;
}
interface IData {
  data: IPricePlans[];
}

export const SliderPricing = ({ data }: IData) => {
  return (
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
                  <Typography
                    variant={VariantsTypography.h3}
                    color={Colors.WHITE}
                  >
                    {tab.price}
                  </Typography>
                </TextContainerSC>

                <TextContainerSC>
                  <Typography
                    variant={VariantsTypography.paragraphMedium}
                    color={Colors.WHITE}
                  >
                    {tab.description}
                  </Typography>
                </TextContainerSC>

                <TabAdvantagesSC>
                  {tab.advantages.map((advantage, index) => (
                    <TextContainerSC key={index}>
                      <Typography
                        variant={VariantsTypography.paragraphXS}
                        color={Colors.WHITE}
                      >
                        <PointSC src={tab.icon} />
                        {advantage}
                      </Typography>
                    </TextContainerSC>
                  ))}
                </TabAdvantagesSC>

                <TabButtonSC>Get Started</TabButtonSC>
              </TabTextContainerSC>
            </TabSC>
          </SwiperSlide>
        ))}
      </Swiper>
    </ContainerMobileSC>
  );
};
