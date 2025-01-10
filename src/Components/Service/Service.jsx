import { useState, useRef, useEffect } from "react";
import "./Service.css";

const Service = () => {
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
        { threshold: 1 }
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
    <section id="services" className="services">
      <div className="content-area">
        <h2 ref={headingRef} className={`h2 ${isVisible ? "visible" : ""}`}>
          Услуги
        </h2>

        <div className="service-info">
          <div className="base-for-items item-1">
            <div className="item-text">
              <h3>Специализация</h3>
              <p>
                В случае, если ваша стиральная или посудомоечная машина
                сломалась или вышла из строя, мы предлагаем услуги ремонта для
                жителей города Актау по выгодной цене.
                <ul>
                  <li>
                    <span>Срочный ремонт.</span> Сервис предоставляет
                    возможность быстрого выполнения ремонта в кратчайшие сроки.
                  </li>
                  <li>
                    <span>Работа на месте.</span> Ремонт проводится прямо там,
                    где установлена ваша техника. При необходимости мы
                    организуем её транспортировку в сервисный центр.
                  </li>
                  <li>
                    <span>Диагностика перед ремонтом.</span> Перед началом работ
                    мастер тщательно проверяет технику, чтобы точно определить
                    проблему. Стоимость ремонта озвучивается заранее.
                  </li>
                </ul>
                По окончании ремонта вы получаете:
                <ul>
                  <li>
                    <span>Гарантию.</span> Мы предоставляем гарантию на
                    выполненные работы.
                  </li>
                  <li>
                    <span>Рекомендации.</span> Мастер даёт полезные советы по
                    правильной эксплуатации техники, чтобы продлить срок её
                    службы.
                  </li>
                </ul>
                Ваш комфорт и исправная техника — наш приоритет!
              </p>
            </div>
          </div>

          <div className="base-for-items item-2">
            <div className="item-text">
              <h3>Стиральная машина</h3>
              <p>
                Мы устраняем любые неисправности стиральных машин:
                <ul>
                  <li>Не запускается или не включается.</li>
                  <li>Протечки воды или засоры.</li>
                  <li>Сбои в работе электронного модуля.</li>
                  <li>Шум или вибрация во время работы.</li>
                  <li>Проблемы с набором или сливом воды.</li>
                </ul>
              </p>
            </div>
            <div className="item-img"></div>
          </div>

          <div className="base-for-items item-3">
            <div className="item-img"></div>
            <div className="item-text">
              <h3>Посуда моющая машина</h3>
              <p>
                Мы поможем справиться с поломками посудомоечных машин:
                <ul>
                  <li>Не нагревается вода.</li>
                  <li>Затруднён слив воды.</li>
                  <li>Следы воды или протечки.</li>
                  <li>Некачественное мытьё посуды.</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;

{
  /* <p>
  В случае если ваша стиральная или посудомоечная машина поламалась или вышла из
  строя, мы предлогаем услугу ремонта для разных лиц граждан города Актау по
  выгодной цене.
  <br />
  Сервис предоставляет возможность срочного ремонта в кратчайшие сроки. Работа
  проводится на месте установленной техники. Перед началом ремонта мы тщательно
  проверяем вашу технику, чтобы точно определить проблему. Стоимость ремонта
  будет озвучена заранее.
  <br />
  По окончанию ремонта мастер предоставляет гарантию на ременот, а также даёт
  рекомендации и консультации по правильной эксплуатации техники.
  <br />
  Ваш комфорт и исправная техника — наш приоритет!
</p>; */
}
