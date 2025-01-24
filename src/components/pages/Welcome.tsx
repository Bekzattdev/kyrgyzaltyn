import scss from "./styles.module.scss";
const Welcome = () => {
  return (
    <section id={scss.welcomePage}>
      <div className={scss.content}>
        <video
          autoPlay={true}
          muted
          controls 
          playsinline
          type="video/mp4"
          src="https://aurora.kz/storage/app/media/main.mp4"
          scss="pointer-events: none; width: 100%; height: auto; display: block;"
        >
          Ваш браузер не поддерживает видео.
        </video>
        <div className={scss.wellText}>
          <h1>Кыргызалтын</h1>
          <p>
            Крупнейшее отечественное предприятие Кыргызской Республики,
            специализирующееся на освоении месторождений золота, играет ключевую
            роль в развитии экономики страны. Компания обеспечивает значительный
            вклад в национальный ВВП, создаёт рабочие места и привлекает
            инвестиции.
          </p>
          <button>Свяжитесь и нами</button>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
