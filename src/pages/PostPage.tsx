import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PostPage() {
  const { postName } = useParams();
  const [postContent, setPostContent] = useState("");

  useEffect(() => {
    fetch(`/posts/${postName}`)
      .then((res) => res.text())
      .then((text) => setPostContent(text));
  }, [postName]);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: postContent }} />
    </div>
  );
}

export default PostPage;
