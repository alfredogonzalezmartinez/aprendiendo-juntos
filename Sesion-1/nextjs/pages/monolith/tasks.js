import { useEffect } from "react";
import { AddTasksForm } from "../../components/AddTasksForm";
import { TasksTable } from "../../components/TasksTable";
import styles from "../../styles/Monolith.module.css";
import { handleQuery, prisma } from "../../utils/prismaClient";

export default function Tasks({ users = [], tasks = [], errors = [] }) {
  useEffect(() => {
    errors.forEach((error) => alert(error));
  }, []);

  return (
    <div className={styles.container}>
      <header>
        <h1>Tasks</h1>
      </header>
      <section>
        <h2>Add task</h2>
        <AddTasksForm users={users} />
      </section>
      <section>
        <h2>Tasks list</h2>
        <TasksTable tasks={tasks} />
      </section>
    </div>
  );
}

// Handling POST requests in Next.js getServerSideProps
// https://dev.to/smeijer/handling-post-requests-in-next-js-getserversideprops-50ia
export async function getServerSideProps({ req, res }) {
  const errors = [];

  // Add task
  if (req.method === "POST") {
    const { getBody } = await import("../../utils/getBody");
    await getBody(req, res);
    const title = req.body?.title;
    const description = req.body?.description;
    const owner = req.body?.owner;
    if (title && owner) {
      const { error } = await handleQuery(
        prisma.task.create({
          data: {
            title,
            description,
            owner: { connect: { id: owner } },
          },
        })
      );
      if (error) errors.push(error);
    } else {
      errors.push("Title and owner are required");
    }
  }

  // Get users
  const { data: users, error: usersError } = await handleQuery(
    prisma.user.findMany({})
  );
  if (usersError) errors.push(usersError);

  // Get tasks
  const { data: dataTasks, error: tasksError } = await handleQuery(
    prisma.task.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        done: true,
        addedAt: true,
        owner: { select: { id: true, name: true } },
      },
      orderBy: { addedAt: "desc" },
    })
  );
  const tasks = dataTasks?.map((task) => ({
    ...task,
    addedAt: task.addedAt.toLocaleString("en-UK"),
  }));
  if (tasksError) errors.push(tasksError);

  return {
    props: {
      users: users ?? [],
      tasks: tasks ?? [],
      errors: errors.map((error) => error.toString()),
    },
  };
}
