import { ToDoListDarkTheme } from "../../JSS_StyledComponent/Themes/ToDoListDarkTheme";
import { ToDoListLightTheme } from "../../JSS_StyledComponent/Themes/ToDoListLightTheme";
import { ToDoListPrimaryTheme } from "../../JSS_StyledComponent/Themes/ToDoListPrimaryTheme";
import { arrTheme } from "../../JSS_StyledComponent/Themes/ThemeManager";
import {
  add_task,
  change_theme,
  done_task,
  delete_task,
  edit_task,
  update_task,
} from "../Types/ToDoListTypes";

const initialState = {
  themeToDoList: ToDoListDarkTheme,
  taskList: [
    { id: "task-1", taskName: "task 1", done: true },
    { id: "task-2", taskName: "task 2", done: false },
    { id: "task-3", taskName: "task 3", done: true },
    { id: "task-4", taskName: "task 4", done: false },
    { id: "task-5", taskName: "task 5", done: true },
    { id: "task-6", taskName: "task 6", done: false },
  ],
  taskEdit: { id: "task-1", taskName: "task 1", done: false },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case add_task: {
      if (action.newTask.taskName.trim() === "") {
        alert("Task name is required!");
        return { ...state };
      }
      let taskListUpdate = [...state.taskList];
      let index = taskListUpdate.findIndex(
        (task) => task.taskName === action.newTask.taskName
      );

      if (index !== -1) {
        alert("Task name already exists");
        return { ...state };
      }
      taskListUpdate.push(action.newTask);

      state.taskList = taskListUpdate;
      return { ...state };
    }
    case change_theme: {
      //Tìm theme dựa vào action.themeId được chọn
      let theme = arrTheme.find((theme) => theme.id == action.themeId);
      if (theme) {
        console.log(theme);
        //set Lại theme cho state.themeToDoList
        state.themeToDoList = { ...theme.theme };
      }

      return { ...state };
    }
    case done_task: {
      let taskListUpdate = [...state.taskList];
      let index = taskListUpdate.findIndex((task) => task.id === action.taskId);

      if (index !== -1) {
        taskListUpdate[index].done = true;
      }

      return { ...state, taskList: taskListUpdate };
    }
    case delete_task: {
      // let taskListUpdate = [...state.taskList];
      // //Gán lại giá trị cho mang taskListUpdate = chính nó nhưng filter không có taskId đó
      // taskListUpdate = taskListUpdate.filter(task => task.id !== action.taskId);

      // return {...state,taskList:taskListUpdate}

      return {
        ...state,
        taskList: state.taskList.filter((task) => task.id !== action.taskId),
      };
    }

    case edit_task: {
      return { ...state, taskEdit: action.task };
    }
    case update_task: {
      // chinh sua lai taskName cua taskEdit
      state.taskEdit = { ...state.taskEdit, taskName: action.taskName };

      // tim trong taskList cap nhat lai taskEdit nguoi dung update
      let taskListUpdate = [...state.taskList];
      let index = taskListUpdate.findIndex(
        (task) => task.id === state.taskEdit.id
      );
      if (index !== -1) {
        taskListUpdate[index] = state.taskEdit;
      }

      state.taskList = taskListUpdate;

      return { ...state };
    }
    default:
      return { ...state };
  }
};
