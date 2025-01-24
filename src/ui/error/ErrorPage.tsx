import { Link } from "react-router-dom";
import scss from "./Error.module.scss"
const ErrorPage = () => {
  return (
    <div className={scss.errorPage}>
        <div className={scss.content}>

        <h1>Такой страницы не существует</h1>
        <h3>Вернитесь на страницу <Link to="/">"Вернуться"</Link></h3>
        </div>
    </div>
  );
};

export default ErrorPage;