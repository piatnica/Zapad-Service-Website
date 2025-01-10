import { useEffect, useRef, useState } from "react";
import "./Contacts.css";
import { motion } from "motion/react";

const Contacts = () => {
  const variants = {
    initial: {
      border: "5px solid rgb(97, 64, 244)",
    },
    animate: (custom) => {
      return {
        border: "5px solid rgb(216, 207, 255)",
        boxShadow: "0 0 50px 15px white",
        transition: {
          duration: 1,
          delay: custom.delay,
        },
      };
    },
  };

  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleLoad = () => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.8 }
      );

      if (contentRef.current) {
        observer.observe(contentRef.current);
      } else {
        console.log("Failure!: The element does not detected!");
      }

      return () => observer.disconnect();
    };

    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, [isVisible]);

  return (
    <section id="contacts" className="contacts">
      <div className="content-area contacts-area">
        <h2>Контакты</h2>
        <motion.div
          variants={variants}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          custom={{ delay: 0.2 }}
          ref={contentRef}
          className="contacts-content"
        >
          <div className="contact-item">
            <h4>Имя сервиса</h4>
            <span>Запад Сервис</span>
          </div>
          <div className="contact-item">
            <h4>Время работы</h4>
            <p>
              Работаем ежедневно c 8:00 до 22:00 <br />
              без выходных и праздничных дней
            </p>
          </div>
          <div className="contact-item">
            <h4>Город</h4> <span>Актау</span>
          </div>
          <div className="contact-item">
            <h4>Почта</h4>
            <span>Пусто</span>
          </div>
          <div className="contact-item">
            <h4>Номер телефона</h4>
            <span>+7 701 122 4415</span>
            <span>Звонки до 23:00</span>
          </div>
          <div className="contact-item messengers">
            <a href="https://wa.me/7082158620">
              <img
                src="src\assets\icons\whatsapp-icon.png"
                width="50px"
                height="50px"
                alt="WhatsApp-icon"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contacts;
