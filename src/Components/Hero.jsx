import React from 'react';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
  {
    title: 'Garden-Fresh Greens',
    subtitle: 'Crisp, farm-fresh greens for every healthy meal.',

    image: 'https://plus.unsplash.com/premium_photo-1664302148512-ddea30cd2a92?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Juicy Daily Picks',
    subtitle: 'Sweet, juicy picks delivered fresh to your door.',

    image: 'https://images.unsplash.com/photo-1628689469838-524a4a973b8e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Wake-Up Favorites',


    subtitle: 'Quick breakfast and instant meals to fuel your day in a flash',


    image: 'https://plus.unsplash.com/premium_photo-1733259677103-fbb5d70ef830?q=80&w=970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const cards = [
  {
    title: 'Fast Delivery',
    text: 'Quick and reliable delivery on every order.',
  },
  {
    title: 'Best Quality',
    text: 'Carefully selected products with trusted quality.',
  },
  {
    title: 'Easy Support',
    text: 'Friendly help whenever you need assistance.',
  },
];

export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    pauseOnHover: true,
  };
  const Slider=SlickSlider?.default||SlickSlider;

  return (
    <section className="w-full bg-gray-50">
      <div className="hero-slider overflow-hidden">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.title}>
              <div
                className="flex min-h-[430px] items-center bg-cover bg-center px-6 py-16 md:min-h-[520px] md:px-16"
                style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${slide.image})` }}
              >
                <div className="max-w-2xl text-white">
                  <h1 className="text-4xl font-bold leading-tight md:text-6xl">{slide.title}</h1>
                  <p className="mt-4 text-base leading-7 text-gray-100 md:text-xl">{slide.subtitle}</p>
                  <button className="mt-7 rounded-md bg-white px-6 py-3 font-semibold text-gray-900 transition hover:bg-gray-200">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-12 md:grid-cols-3">
        {cards.map((card) => (
          <div key={card.title} className="rounded-md bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900">{card.title}</h2>
            <p className="mt-3 text-gray-600">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}