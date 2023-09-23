export const mockFetchingTasks = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "Learn React",
          completed: true,
        },
        {
          id: 2,
          title: "Learn Redux",
          completed: false,
        },
        {
          id: 3,
          title: "Learn Redux Saga",
          completed: false,
        },
      ]);
    }, 500);
  });
};

export const mockAddingTask = (task) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 4,
        title: task.title,
        completed: false,
      });
    }, 500);
  });
};

export const mockDeletingTask = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id,
      });
    }, 500);
  });
};

export const mockUpdatingTask = (task) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: task.id,
        title: task.title,
        completed: task.completed,
      });
    }, 500);
  });
};
