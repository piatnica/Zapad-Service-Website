import "./OrderInstructions.css";
import CircleSvg from "./CircleSvg";
import LineSvg from "./LineSvg";
import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
// import { animate, delay, transform } from "motion";

const OrderInstructions = () => {
  const variants = {
    initial: {
      opacity: 0,
      x: -20,
    },
    animate: (custom) => {
      return {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
          delay: custom.delay,
        },
      };
    },
  };

  const [isVisible, setIsVisible] = useState(false);
  const workStage = useRef(null);

  useEffect(() => {
    const handleLoad = () => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.5 }
      );

      if (workStage.current) {
        observer.observe(workStage.current);
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
      <section id="orderInstructions" className="orderInstructions">
        <div className="content-area test">
          {/* test -> "test" class */}
          <h2>Этапы работы</h2>
          <div className="instructions-blocks" ref={workStage}>
            {/* Intersectoin Observer */}
            <div className="block-1 block-test flex-column">
              {/* START */}
              {/* NUMBER 1 */}
              <div className="instruction-item">
                <div className="instruction_number">
                  <CircleSvg delay={0.5} isVisible={isVisible}>
                    1
                  </CircleSvg>
                </div>

                <motion.div
                  variants={variants}
                  initial="initial"
                  animate={isVisible ? "animate" : "initial"}
                  custom={{ delay: 0.5 }}
                  className="instruction-description"
                >
                  <div className="instructions-icon">
                    <img
                      src="src\assets\icons\Order-Instruction\phone-call-icon.png"
                      alt="phone-call-icon"
                      // width={50}
                    />
                  </div>
                  <h3>Звонок или WhatsApp</h3>
                  {/* Надпись: WhatsApp сделать зелёного цвета */}
                  <p>
                    Вы обращаетесь к нам по телефону или через мессенджер
                    WhatsApp. Подробно описываете мастеру возникшую проблему с
                    техникой, а также согласовываете удобное время для ремонта.
                  </p>
                </motion.div>
              </div>
              <LineSvg delay={1.1} isVisible={isVisible} />

              {/* NUMBER 2 */}
              <div className="instruction-item">
                <div className="instruction_number">
                  <CircleSvg delay={1.1} isVisible={isVisible}>
                    2
                  </CircleSvg>
                </div>

                <motion.div
                  variants={variants}
                  initial="initial"
                  animate={isVisible ? "animate" : "initial"}
                  custom={{ delay: 1.1 }}
                  className="instruction-description"
                >
                  <div className="instructions-icon">
                    <img
                      src="src\assets\icons\Order-Instruction\delivery-truck-icon.png"
                      alt="driving-truck"
                      // width={50}
                    />
                  </div>
                  <h3>Мастер выезжает на вызов</h3>
                  <p>
                    После уточнения адреса к вам выезжает специалист с
                    необходимыми запчастями и инструментами.
                  </p>
                </motion.div>
              </div>
              <LineSvg delay={1.7} isVisible={isVisible} />

              {/* NUMBER 3 */}
              <div className="instruction-item">
                <div className="instruction_number">
                  <CircleSvg delay={1.7} isVisible={isVisible}>
                    3
                  </CircleSvg>
                </div>

                <motion.div
                  variants={variants}
                  initial="initial"
                  animate={isVisible ? "animate" : "initial"}
                  custom={{ delay: 1.7 }}
                  className="instruction-description"
                >
                  <div className="instructions-icon">
                    <img
                      src="src\assets\icons\Order-Instruction\diagnostics-icon.png"
                      alt="work"
                      // width={50}
                    />
                  </div>
                  <h3>Диагностика и ремонт</h3>
                  <p>
                    Сначала мастер проводит диагностику и оценивает дальнейший
                    ремонт. Стоимость озвучивается заранее. Работы выполняются
                    на дому, но при необходимости техника может быть доставлена
                    в сервисный центр.
                  </p>
                </motion.div>
              </div>
            </div>
            <div className="block-2 block-test flex-column">
              {/* NUMBER 4 */}
              <div className="instruction-item instruction_4">
                <div className="instruction_number">
                  <CircleSvg delay={2.3} isVisible={isVisible}>
                    4
                  </CircleSvg>
                </div>

                <motion.div
                  variants={variants}
                  initial="initial"
                  animate={isVisible ? "animate" : "initial"}
                  custom={{ delay: 2.3 }}
                  className="instruction-description"
                >
                  <div className="instructions-icon">
                    <img
                      src="src\assets\icons\Order-Instruction\receipt-icon.png"
                      alt="receipt"
                      // width={50}
                    />
                  </div>
                  <h3>Оплата работы мастера</h3>
                  <p>
                    После завершения работ производится оплата. Оплатить можно
                    наличными или переводом через Kaspi.
                  </p>
                </motion.div>
              </div>
              <LineSvg delay={2.9} isVisible={isVisible} />

              {/* NUMBER 5 */}
              <div className="instruction-item instruction_5">
                <div className="instruction_number">
                  <CircleSvg delay={2.9} isVisible={isVisible}>
                    5
                  </CircleSvg>
                </div>

                <motion.div
                  variants={variants}
                  initial="initial"
                  animate={isVisible ? "animate" : "initial"}
                  custom={{ delay: 2.9 }}
                  className="instruction-description"
                >
                  <div className="instructions-icon">
                    <img
                      src="src\assets\icons\Order-Instruction\guarantee-icon.png"
                      alt="give-guarantee"
                      // width={50}
                    />
                  </div>
                  <h3>Гарантийное обслуживание</h3>
                  <p>
                    Выдается гарантия на услуги, а также рекомендации мастера и
                    полезные советы по правильной эксплуатации техники.
                  </p>
                </motion.div>
              </div>
              {/* END */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderInstructions;

// #CBCBFF icon's color
// Нужно будет использовать .map() для повторяющийхся: instruction-item с scg.line элементом
