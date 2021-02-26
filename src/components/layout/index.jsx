import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import axios from "axios";
import Post from "../instagramPost";

const Layout = () => {
  const hashtag = "blue";
  const [posts, setPosts] = useState([]);
  const api = `https://www.instagram.com/explore/tags/${hashtag}/?__a=1`;
  axios.get(api).then((response) => {
    console.log(response);
    if (response.data.graphql == undefined) {
      //???
    } else {
      console.log(response.data.graphql.hashtag.edge_hashtag_to_media.edges);
      setPosts(response.data.graphql.hashtag.edge_hashtag_to_media.edges);
    }
  }).catch(error => {
    console.log("Error:")
    console.log(error)
});
  const renderPosts = (listPosts) => {
    return listPosts.map((x) => (
      <div>
        <Post props={x} />
      </div>
    ));
  };
  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 250: 1, 350: 2, 750: 3, 900: 4 }}
    >
      <Masonry>{posts.length > 0 ? renderPosts(posts) : ""}</Masonry>
    </ResponsiveMasonry>
  );
};

export default Layout;
