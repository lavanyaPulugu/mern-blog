import React from "react";
import PostAuthor from "../components/PostAuthor";
import { Link } from "react-router-dom";
import Thumbnail from "../images/blog22.jpg";

const PostDetails = () => {
  return (
    <section className="post_details">
      <div className="container post_details-container">
        <div className="post_details-header">
          <PostAuthor />
          <div className="post_details-buttons">
            <Link to={"/posts/werwer/edit"} className="btn sm primary">
              Edit
            </Link>
            <Link to={"/posts/werwer/delete"} className="btn sm danger">
              Delete
            </Link>
          </div>
        </div>
        <h1>this is the post title!</h1>
        <div className="post_details-thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A reiciendis
          delectus vero optio maxime commodi facere distinctio! Quos, tempore ex
          porro consequatur iure ea, veritatis ab vero, facere aliquid nostrum?
        </p>
        <p>
          {" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur,
          laudantium reprehenderit. Nam dolore laudantium necessitatibus unde
          enim, ex delectus, soluta cupiditate corporis mollitia, illo sed
          deserunt tempora debitis. Eius illo quidem aspernatur, sequi a culpa
          odit laboriosam, nesciunt expedita voluptatibus perspiciatis ea
          deserunt? Sapiente porro provident qui libero nam, odit veniam
          consequatur. Sunt, impedit laboriosam.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          rem, neque vero voluptatum autem tenetur nemo, quis, sequi ullam
          aspernatur omnis ipsam optio esse quae cum alias error incidunt
          corrupti expedita eveniet. Animi natus maiores quam corporis
          voluptatem! Doloremque voluptas fugit ducimus, voluptates molestiae
          obcaecati explicabo illum laudantium. Doloribus tempora debitis
          impedit aliquam, quia assumenda atque consectetur sequi quibusdam
          deserunt illo non dolores est nihil praesentium, reiciendis
          aspernatur? Dicta tempora veritatis maiores quidem eum neque eius,
          officiis minima atque laboriosam temporibus. Temporibus, voluptate!
          Iure placeat consequatur repellat ad velit a nihil quas et similique
          totam dolorum obcaecati ea, quisquam aliquid.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nemo
          dolor voluptatibus quibusdam sequi qui provident. Ullam natus repellat
          consequatur, doloribus sapiente voluptatem possimus sed est fuga,
          facere numquam quis.
        </p>
      </div>
    </section>
  );
};

export default PostDetails;
