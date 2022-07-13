import styles from "./TasksTable.module.css";

export function TasksTable({ tasks = [] }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Done</th>
          <th>AddedAt</th>
          <th>Owner</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td className={styles.right}>{task.id}</td>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td className={styles.center}>{task.done ? "Yes" : "No"}</td>
            <td className={styles.center}>{task.addedAt}</td>
            <td>{task.owner.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
