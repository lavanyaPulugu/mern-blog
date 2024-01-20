import React, { useState } from "react";
import { DUMMY_POSTS } from "../data";
import PostItem from "../components/PostItem";

const Categoryposts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (
    <section>
      {posts.length > 0 ? (
        <div className="container posts_container">
          {posts.map(({ id, thumbnail, category, title, desc, authotID }) => (
            <PostItem
              key={id}
              postID={id}
              thumbnail={thumbnail}
              category={category}
              title={title}
              desc={desc}
              authotID={authotID}
            />
          ))}
        </div>
      ) : (
        <h2 className="center">No posts founds</h2>
      )}
    </section>
  );
};
export default Categoryposts;
