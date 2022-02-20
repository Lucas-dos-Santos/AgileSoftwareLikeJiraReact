import { useDrop } from "react-dnd";
import { useRef } from "react";

const KanbanColumn = ({ status, changeTaskStatus, children }) => {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: "card",
    drop(item) {
      changeTaskStatus(item.id, status);
    },
  });
  drop(ref);
  return <div ref={ref}> {children}</div>;
};

export default KanbanColumn;
