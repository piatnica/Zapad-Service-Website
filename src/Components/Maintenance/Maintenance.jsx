import "./Maintenance.css";

const Maintenance = () => {
  return (
    <div className="warning-page">
      <div className="top-line-img"></div>
      <div className="warning-sign-img">
        <img src="src\assets\icons\warning.png" alt="" />
      </div>
      <div className="warning-title">
        <p className="warning-title-text">
          Сайт находится
          <br /> на обслуживании
        </p>
      </div>
      <div className="devide-line-container">
        <div className="left-line"></div>
        <img src="src\assets\icons\tools-icon-black.png" alt="tools-icon" />
        <div className="right-line"></div>
      </div>
      <div className="warning-description">
        <p>
          НА ДАННЫЙ МОМЕНТ ВЕДЁТСЯ АДАПТАЦИЯ САЙТА ДЛЯ ЭКРАНОВ ТЕЛЕФОНА И
          ПЛАНШЕТОВ
        </p>
        <p>ДОСТУПНО НА ЭКРАНАХ НОУТБУКА И ПК</p>
      </div>
      <div className="coming-soon">
        <p>&#91;Уже скоро&#93;</p>
      </div>
      <div className="bottom-line-img"></div>
    </div>
  );
};

export default Maintenance;
