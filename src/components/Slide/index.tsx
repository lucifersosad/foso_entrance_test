"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slide.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { memo } from "react";
import { IconButton } from "@mui/material";

function SlickArrowLeft({ currentSlide, slideCount, ...props }: any) {
  return (
    <IconButton
      {...props}
      className={`slick-prev slick-arrow !bg-brand-100 `}
    >
      <ArrowBackIosNewIcon className="text-brand-800" />
    </IconButton>
  );
}

function SlickArrowRight({ currentSlide, slideCount, ...props }: any) {
  return (
    <IconButton
      {...props}
      className={`slick-next slick-arrow !bg-brand-100 `}
    >
      <ArrowForwardIosIcon className="text-brand-800" />
    </IconButton>
  );
}

const DEFAULT_SETTINGS = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 2,
  prevArrow: <SlickArrowLeft />,
  nextArrow: <SlickArrowRight />,
};

function slide(props: any) {
  const { custom, options } = props;

  const settings = options && options.length > 0 ? options : DEFAULT_SETTINGS

  return (
    <Slider {...settings}>{custom}</Slider>
  );
}

const Slide = memo(slide);
export default Slide;
