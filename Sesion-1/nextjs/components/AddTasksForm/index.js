import styles from "./AddTasksForm.module.css";

export function AddTasksForm({ users = [] }) {
  return (
    <div className={styles.container}>
      <form className={styles.form} method="Post">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" required />
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description"></textarea>
        <label htmlFor="owner">Owner</label>
        <select name="owner" id="owner" required>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
