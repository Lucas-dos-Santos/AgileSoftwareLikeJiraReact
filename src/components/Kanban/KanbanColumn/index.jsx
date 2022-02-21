import { useDrop } from "react-dnd";
import { useRef } from "react";
import KanbanItem from "../KanbanItem";
import * as S from "./style";

const labelsMap = {
  backlog: "Backlog",
  new: "To Do",
  wip: "In Progress",
  review: "Review",
  done: "Done",
  teste: "teste",
};

const KanbanColumn = ({ status, channel, changeTaskStatus, tasks }) => {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: "card",
    drop(item) {
      changeTaskStatus(item.id, status);
    },
  });
  drop(ref);

  return (
    <div ref={ref}>
      <S.Column>
        <S.ColumnHead>{labelsMap[channel]}</S.ColumnHead>
        <S.ListTasks>
          {tasks
            .filter((item) => item.status === channel)
            .map((item) => (
              <KanbanItem key={item._id} id={item._id} title={item.title} />
            ))}
        </S.ListTasks>
      </S.Column>
    </div>
  );
};

export default KanbanColumn;
