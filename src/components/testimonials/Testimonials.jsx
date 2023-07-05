import React from "react";
import AVATAR1 from "../../assets/avatar1.jpg";
import AVATAR2 from "../../assets/avatar2.jpg";
import AVATAR3 from "../../assets/avatar3.jpg";
import AVATAR4 from "../../assets/avatar4.jpg";
import "./testimonials.css";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, Autoplay, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

const data = [
  {
    id: 1,
    avatar: AVATAR1,
    name: "Nancey",
    review: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, 
            provident sunt laboriosam maxime asperiores quia! Eveniet libero nisi
            dignissimos mollitia, id nihil velit fugit hic laborum nemo. Laudantium 
            ullam ipsa fugiat laborum omnis ex officiis incidunt quisquam perspiciatis 
            accusantium ipsam, nisi eligendi quasi doloremque assumenda natus, harum placeat 
            veritatis? Dolor deleniti necessitatibus tenetur consequatur? Quod fugit corrupti 
            nam ab ratione eius enim, eum itaque cumque ut odit quas voluptate repellendus 
            necessitatibus accusantium laborum similique totam nulla doloribus illum consectetur 
            minus molestias rem! Est ratione voluptatum omnis aut illum deserunt aliquam.`,
  },
  {
    id: 2,
    avatar: AVATAR2,
    name: "Peter",
    review: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, 
            provident sunt laboriosam maxime asperiores quia! Eveniet libero nisi
            dignissimos mollitia, id nihil velit fugit hic laborum nemo. Laudantium 
            ullam ipsa fugiat laborum omnis ex officiis incidunt quisquam perspiciatis 
            accusantium ipsam, nisi eligendi quasi doloremque assumenda natus, harum placeat 
            veritatis? Dolor deleniti necessitatibus tenetur consequatur? Quod fugit corrupti 
            nam ab ratione eius enim, eum itaque cumque ut odit quas voluptate repellendus 
            necessitatibus accusantium laborum similique totam nulla doloribus illum consectetur 
            minus molestias rem! Est ratione voluptatum omnis aut illum deserunt aliquam.`,
  },
  {
    id: 3,
    avatar: AVATAR3,
    name: "Wick",
    review: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, 
            provident sunt laboriosam maxime asperiores quia! Eveniet libero nisi
            dignissimos mollitia, id nihil velit fugit hic laborum nemo. Laudantium 
            ullam ipsa fugiat laborum omnis ex officiis incidunt quisquam perspiciatis 
            accusantium ipsam, nisi eligendi quasi doloremque assumenda natus, harum placeat 
            veritatis? Dolor deleniti necessitatibus tenetur consequatur? Quod fugit corrupti 
            nam ab ratione eius enim, eum itaque cumque ut odit quas voluptate repellendus 
            necessitatibus accusantium laborum similique totam nulla doloribus illum consectetur 
            minus molestias rem! Est ratione voluptatum omnis aut illum deserunt aliquam.`,
  },

  {
    id: 4,
    avatar: AVATAR4,
    name: "stewart",
    review: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, 
            provident sunt laboriosam maxime asperiores quia! Eveniet libero nisi
            dignissimos mollitia, id nihil velit fugit hic laborum nemo. Laudantium 
            ullam ipsa fugiat laborum omnis ex officiis incidunt quisquam perspiciatis 
            accusantium ipsam, nisi eligendi quasi doloremque assumenda natus, harum placeat 
            veritatis? Dolor deleniti necessitatibus tenetur consequatur? Quod fugit corrupti 
            nam ab ratione eius enim, eum itaque cumque ut odit quas voluptate repellendus 
            necessitatibus accusantium laborum similique totam nulla doloribus illum consectetur 
            minus molestias rem! Est ratione voluptatum omnis aut illum deserunt aliquam.`,
  },
];


const Testimonials = () => {

  
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        navigation
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop= {true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {data.map(({ id, avatar, name, review }) => {
          return (
            <SwiperSlide className="testimonial" key={id}>
              <div className="client__avatar">
                <img src={avatar} alt="ava" />
              </div>
              <h5 className="client__name">{name} </h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
