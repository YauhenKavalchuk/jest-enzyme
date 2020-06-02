import React from "react";
import PropTypes from "prop-types";

const Post = ({ author, created_at, num_comments, title, points, url }) => (
  <li className="post">
    <div className="description">
      <a href={url} className="title">
        {title}
      </a>
      <span className="text">{`${points} points`}</span>
      <span className="comments">{`${num_comments} comments`}</span>
      <span className="date">
        {created_at ? new Date(created_at).toLocaleDateString() : "No date"}
      </span>
      <span className="author">{author}</span>
    </div>
  </li>
);

Post.propTypes = {
  author: PropTypes.string,
  created_at: PropTypes.string,
  num_comments: PropTypes.number,
  title: PropTypes.string,
  points: PropTypes.number,
  url: PropTypes.string,
};

Post.defaultProps = {
  author: "Yauhen",
  created_at: "",
  num_comments: 0,
  title: "Here should be a title",
  points: 0,
  url: "#",
};

export default Post;
