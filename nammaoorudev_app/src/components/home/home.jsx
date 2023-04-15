import Image from "next/image";
import styles from "./home.module.scss";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const SocialLink = ({ logoName, href }) => {
  return (
    <Link href={href} target="blank">
      <Image
        src={`/images/${logoName}_logo.png`}
        alt="logoName"
        width={100}
        height={100}
      />
    </Link>
  );
};

const Home = () => {
  const [color, setColor] = useState("black");

  const interval = useRef();

  useEffect(() => {
    interval.current = setInterval(() => {
      setColor(() => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 100);
        const newColor = `rgb(${r},${g},${b})`;
        return newColor;
      });
    }, 500);

    return () => clearInterval(interval.current);
  }, []);

  const socialLinks = [
    {
      logoName: "whatsapp",
      href: "https://wa.me/917812804856",
    },
    {
      logoName: "insta",
      href: "https://www.instagram.com/namma_ooru_developer",
    },
    {
      logoName: "gmail",
      href: "mailto:nammaoorudev@example.com",
    },
  ];

  return (
    <div className={styles.home}>
      <h1 className={styles.banner}>Thank You For Visiting..!!</h1>
      <h2 className={styles.message} style={{ color: color }}>
        Be Our First Client and get 50% off
      </h2>
      <br />

      <div className={styles.contact}>
      <p>Send Your Queries on</p>
       <div>
       {socialLinks.map((link) => (
          <SocialLink
            key={link.logoName}
            logoName={link.logoName}
            href={link.href}
          />
        ))}
       </div>
      </div>
    </div>
  );
};

export default Home;
