export function getData() {
  const users = [
    {
      id: 1,
      label: "Steve Smith",
      avatar: "../assets/user.jpg",
    },
    {
      id: 2,
      label: "Aaron Long",
      avatar: "../assets/user-2.jpg",
    },
    {
      id: 3,
      label: "Angela Allen",
      avatar: "../assets/user-3.jpg",
    },
    {
      id: 4,
      label: "Angela Long",
      avatar: "../assets/user-4.jpg",
    },
  ];

  const cardShape = {
    label: true,
    description: true,
    progress: true,
    start_date: true,
    end_date: true,
    users: {
      show: true,
      values: users,
    },
    priority: {
      show: true,
      values: [
        { id: 1, color: "#FF5252", label: "high" },
        { id: 2, color: "#FFC975", label: "medium" },
        { id: 3, color: "#65D3B3", label: "low" },
      ],
    },
    color: true,
    menu: true,
    cover: true,
    attached: false,
  };

  const editorShape = [
    {
      type: "multiselect",
      key: "users",
      label: "Users",
      options: users,
    },
  ];

  const columns = [
    {
      label: "Backlog",
      id: "backlog",
    },
    {
      label: "In progress",
      id: "inprogress",
    },
    {
      label: "Testing",
      id: "testing",
    },
    {
      label: "Done",
      id: "done",
    },
  ];

  const rows = [
    {
      label: "Feature",
      id: "feature",
    },
    {
      label: "Task",
      id: "task",
    },
  ];

  const cards = [
    {
      id: 1,
      label: "Integration with Angular/React",
      priority: 1,
      color: "#65D3B3",
      start_date: new Date("01/07/2021"),
      users: [3, 2],
      column: "backlog",
      type: "feature",
    },
    {
      label: "Archive the cards/boards ",
      priority: 3,
      color: "#58C3FE",
      users: [4],
      progress: 1,
      column: "backlog",
      type: "feature",
    },
    {
      label: "Searching and filtering",
      priority: 1,
      color: "#58C3FE",
      start_date: new Date("01/09/2021"),
      users: [3, 1],
      progress: 1,
      column: "backlog",
      type: "task",
    },
    {
      label: "Set the tasks priorities",
      color: "#FFC975",
      start_date: new Date("12/21/2020"),
      users: [4],
      progress: 75,
      column: "inprogress",
      type: "feature",
      attached: [
        {
          isCover: true,
          coverURL: "../assets/img-1.jpg",
          previewURL: "../assets/img-1.jpg",
          url: "../assets/img-1.jpg",
          name: "img-1.jpg",
        },
      ],
    },
    {
      label: "Custom icons",
      color: "#65D3B3",
      start_date: new Date("01/07/2021"),
      users: [3, 2],
      column: "inprogress",
      type: "task",
    },
    {
      label: "Integration with Gantt",
      color: "#FFC975",
      start_date: new Date("12/21/2020"),
      users: [4],
      progress: 75,
      column: "inprogress",
      type: "task",
    },
    {
      label: "Drag and drop",
      priority: 1,
      color: "#58C3FE",
      users: [3, 1],
      progress: 100,
      column: "testing",
      type: "feature",
    },
    {
      label: "Adding images",
      color: "#58C3FE",
      users: [4],
      column: "testing",
      type: "task",
      attached: [
        {
          isCover: true,
          coverURL: "../assets/img-2.jpg",
          previewURL: "../assets/img-2.jpg",
          url: "../assets/img-2.jpg",
          name: "img-2.jpg",
        },
      ],
    },
    {
      label: "Create cards and lists from the UI and from code",
      priority: 3,
      color: "#65D3B3",
      start_date: new Date("01/07/2021"),
      users: [3, 2],
      column: "done",
      type: "feature",
    },
    {
      id: 5,
      label: "Draw swimlanes",
      color: "#FFC975",
      users: [2],
      column: "done",
      type: "feature",
    },
    {
      label: "Progress bar",
      priority: 1,
      color: "#FFC975",
      start_date: new Date("12/9/2020"),
      users: [1, 4, 3],
      progress: 100,
      column: "done",
      type: "task",
    },
  ];

  return {
    rows,
    columns,
    cards,
    users,
    cardShape,
    editorShape,
  };
}
