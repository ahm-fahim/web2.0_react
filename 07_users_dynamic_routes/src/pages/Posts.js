import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);
    return (
        <div className="container">
            <h1>Total Posts {posts.length}</h1>
            {posts.map((post) => (
                <div key={post.id} className="bg-white mt-3 p-3">
                    <h2>{post.title}</h2>
                    <Link
                        className="btn btn-info text-white"
                        to={"/postContainer/posts/" + post.id}
                    >
                        Post Details
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Posts;
