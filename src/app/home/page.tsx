import SectionOne from "@/src/components/home/SectionOne";
import SectionThree from "@/src/components/home/SectionThree";
import SectionTwo from "@/src/components/home/SectionTwo";
import Header from "@/src/components/home/header";
import Footer from "@/src/components/reusable/footer";
import React from "react";

const page = () => {
  return (
    <div>
      {/* <Header /> */}
      <SectionOne />
      <SectionTwo />
      <SectionThree />

      <Footer />
    </div>
  );
};

export default page;
