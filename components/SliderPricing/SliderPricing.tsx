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
import { TypographySC, VariantsTypography } from "../../ui/typography";
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
                  <TypographySC
                    variant={VariantsTypography.paragraphMedium}
                    color={Colors.WHITE}
                  >
                    {tab.set}
                  </TypographySC>
                </TextContainerSC>
                <TextContainerSC>
                  <TypographySC
                    variant={VariantsTypography.h3}
                    color={Colors.WHITE}
                  >
                    {tab.price}
                  </TypographySC>
                </TextContainerSC>

                <TextContainerSC>
                  <TypographySC
                    variant={VariantsTypography.paragraphMedium}
                    color={Colors.WHITE}
                  >
                    {tab.description}
                  </TypographySC>
                </TextContainerSC>

                <TabAdvantagesSC>
                  {tab.advantages.map((advantage, index) => (
                    <TextContainerSC key={index}>
                      <TypographySC
                        variant={VariantsTypography.paragraphXS}
                        color={Colors.WHITE}
                      >
                        <PointSC src={tab.icon} />
                        {advantage}
                      </TypographySC>
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
