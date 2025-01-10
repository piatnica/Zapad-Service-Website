import { useState, useRef, useEffect } from "react";
import styles from "./About.module.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const headingRef = useRef(null);

  useEffect(() => {
    const handleLoad = () => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.3 }
      );

      if (headingRef.current) {
        observer.observe(headingRef.current);
      } else {
        console.log("Failure!: The element does not detected!");
      }

      return () => observer.disconnect();
    };

    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);  
  }, [isVisible]);

  return (
    <>
      <section id="about-us" className={styles.about}>
        <div className={styles.content_area}>
          <div className={styles.about_us}>
            <h2
              ref={headingRef}
              className={`${isVisible ? styles.visible : ""}`}
            >
              О нас
            </h2>
            <p>
              Aktau Service — сервисная служба по ремонту бытовой техники.
              Приоритетные направления нашей работы — ремонт стиральных и
              посудомоечных машин. Мы накопили большой опыт и специализируемся
              на устранении неисправностей этих видов техники. Работаем с
              техникой практически всех брендов, успешно устраняя поломки любой
              сложности. Наши клиенты — частные лица, коммерческие организации и
              бюджетные учреждения города Актау.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

// ТЕКСТ ДЛЯ БЛОКА О НАС:
// Aktau Service — сервисная служба по ремонту бытовой техники.
// Приоритетные направления нашей работы — ремонт стиральных и
// посудомоечных машин. Мы накопили большой опыт и специализируемся
// на устранении неисправностей этих видов техники. Работаем с
// техникой практически всех брендов, успешно устраняя поломки любой
// сложности. Наши клиенты — частные лица, коммерческие организации и
// бюджетные учреждения города Актау.
