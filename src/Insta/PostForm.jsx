import { useState } from "react";
import Button from "../components/Button-pro";

export default function PostForm({ onSubmit }) {
  const [fieldErrors, setFieldErrors] = useState({});

  function handleSubmit(e) {
    e.preventDefault();

    if (Object.keys(fieldErrors).length > 0) return false;

    const formData = new FormData(e.target);
    const post = Object.fromEntries(formData.entries());

    post.user = post.user.slice(1);
    post.tags = post.tags.split(" ").map((tag) => tag.slice(1));

    onSubmit(post);
  }

  function validateField(event) {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    const errors = { ...fieldErrors };

    if (fieldName === "src") {
      if (
        !/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}(\.[a-zA-Z0-9()]{1,6})?\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/.test(
          fieldValue
        )
      ) {
        errors.src = "Invalid URL";
      } else {
        delete errors.src;
      }
    }
    if (fieldName === "user") {
      if (!fieldValue.startsWith("@")) {
        errors.user = "Username must starts with an '@'";
      } else {
        delete errors.user;
      }
    }
    if (fieldName === "tags") {
      const tags = fieldValue.split(" ");
      if (!tags.every((tag) => tag.startsWith("#") && tag.length >= 2)) {
        errors.tags = "All tags must starts with an '#'";
      } else {
        delete errors.tags;
      }
    }

    setFieldErrors(errors);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className={fieldErrors.src ? "error" : ""}>
        Source de l'image
        <input name="src" placeholder="https://..." onInput={validateField} />
        {fieldErrors.src && <p>{fieldErrors.src}</p>}
      </label>
      <label>
        Description
        <textarea name="description" placeholder="Description de l'image" />
      </label>
      <label className={fieldErrors.user ? "error" : ""}>
        User
        <input name="user" placeholder="@username" onInput={validateField} />
        {fieldErrors.user && <p>{fieldErrors.user}</p>}
      </label>
      <label className={fieldErrors.tags ? "error" : ""}>
        Tags
        <input
          name="tags"
          placeholder="#food #science ..."
          onInput={validateField}
        />
        {fieldErrors.tags && <p>{fieldErrors.tags}</p>}
      </label>
      <Button
        component="input"
        type="submit"
        value="Ajouter"
        disabled={Object.keys(fieldErrors).length > 0}
      />
    </form>
  );
}
