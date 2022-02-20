import { useState, useCallback } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import KanbanColumn from "../../components/Kanban/KanbanColumn";
import KanbanItem from "../../components/Kanban/KanbanItem";
import update from "immutability-helper";
import * as S from "./style";

const tasksList = [
  { _id: 1, title: "First Task", status: "backlog" },
  { _id: 2, title: "Second Task", status: "backlog" },
  { _id: 3, title: "Third Task", status: "backlog" },
  { _id: 4, title: "Fourth Task", status: "new" },
  { _id: 5, title: "Fifth Task", status: "new" },
  { _id: 6, title: "Sixth Task", status: "wip" },
  { _id: 7, title: "Seventh Task", status: "review" },
  { _id: 8, title: "Eighth Task", status: "review" },
  { _id: 9, title: "Ninth Task", status: "done" },
  { _id: 10, title: "Tenth Task", status: "done" },
];

const channels = ["backlog", "new", "wip", "review", "done", "teste"];
const labelsMap = {
  backlog: "Backlog",
  new: "To Do",
  wip: "In Progress",
  review: "Review",
  done: "Done",
  teste: "teste",
};

const KanbanPage = () => {
  const [tasks, setTaskStatus] = useState(tasksList);

  const changeTaskStatus = useCallback(
    (id, status) => {
      let task = tasks.find((task) => task._id === id);
      const taskIndex = tasks.indexOf(task);
      task = { ...task, status };
      let newTasks = update(tasks, {
        [taskIndex]: { $set: task },
      });
      setTaskStatus(newTasks);
    },
    [tasks]
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <S.Board>
        {channels.map((channel) => (
          <KanbanColumn
            key={channel}
            status={channel}
            changeTaskStatus={changeTaskStatus}
          >
            <S.Column>
              <S.ColumnHead>{labelsMap[channel]}</S.ColumnHead>
              <div>
                {tasks
                  .filter((item) => item.status === channel)
                  .map((item) => (
                    <KanbanItem key={item._id} id={item._id}>
                      <S.Item>{item.title}</S.Item>
                    </KanbanItem>
                  ))}
              </div>
            </S.Column>
          </KanbanColumn>
        ))}
      </S.Board>
    </DndProvider>
  );
};

export default KanbanPage;
