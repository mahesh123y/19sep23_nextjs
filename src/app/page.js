//import Image from "next/image";
// import styles from "./page.module.css";
import Aside from "@/components/Aside";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Section from "@/components/Section";

export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <Aside/>
        <Section/>
      </main>
      <Footer/>
    </>
  );
}
