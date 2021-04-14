import { useState } from "react";
import { useParams } from "react-router";
import Header from "../Header";

export default function EditForm({ postToEdit }) {
  const { id } = useParams();
  const [post, setPost] = useState(
    postToEdit || {
      id: "",
      title: "",
      body: "",
      createdAt: "",
      votes: { up: 0, down: 0 },
    }
  );

  function handleChange(event) {
    const { name, value } = event.target;
    setPost({ ...post, [name]: value });
  }

  return (
    <>
      <Header title={"Editing Post #" + id} />
      <form className="flex flex-col items-center">
        <label htmlFor="title" className="max-w-sm">
          Title
        </label>
        <input
          className="border-solid border-4 border-light-blue-500 rounded-lg max-w-md"
          type="text"
          id="title"
          name="title"
          value={post.title}
          onChange={handleChange}
        />
        <label htmlFor="body" className="max-w-sm">
          Body
        </label>
        <input
          className="border-solid border-4 border-light-blue-500 rounded-lg max-w-md"
          type="text"
          id="body"
          name="body"
          value={post.body}
          onChange={handleChange}
        />
      </form>
    </>
  );
}
