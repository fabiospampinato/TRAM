
/* TYPES */

type todo = {
  id: number,
  done: boolean,
  text: string
};

type todos = todo[];

type todoState = {
  todos: todos,
  visibility: string //TODO: use enum instead
};

/* EXPORT */

export {todo, todos, todoState};
