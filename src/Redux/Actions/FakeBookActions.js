import { ADD_COMMENT } from "../Types/FakeBookType";

export const addCommentAction = (userComment) => ({
  type: ADD_COMMENT,
  userComment,
});
