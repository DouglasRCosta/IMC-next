import { itemsTypes } from "../../datas";
import style from "./style.module.css";

interface props {
  item: itemsTypes;
}

const ImcCard = ({ item }: props) => {
  return (
    <div
      className={`${style.card}`}
      style={{ backgroundColor: `${item.back}` }}
    >
      <img src={item.img} alt=" img" width={80} />
      <h2>{item.title}</h2>
      <p>{item.text}</p>
      {item.imc && <p>Seu imc : {item.imc}</p>}
    </div>
  );
};
export default ImcCard;
