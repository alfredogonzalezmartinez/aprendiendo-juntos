import { useActionData, Form } from "@remix-run/react";

export const action = async ({ request }) => {
  const formData = await request.formData();
  return formData.get("name");
};

// reference:https://remix.run/docs/en/v1/guides/data-writes
export default function FormReact() {
  const name = useActionData();

  return (
    <div className="container">
      <Form method="post">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" />
        <button type="submit">Greet</button>
      </Form>

      {name && <p className="greeting">Hello {name}!</p>}
    </div>
  );
}
