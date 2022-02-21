import { useRef } from "react";
import { useDrag } from "react-dnd";
import * as S from "./style";

const KanbanItem = ({ id, title }) => {
  const ref = useRef(null);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  const opacity = isDragging ? 0 : 1;
  drag(ref);
  return (
    <div ref={ref} style={{ opacity }}>
      <S.Item>{title}</S.Item>
    </div>
  );
};

export default KanbanItem;
