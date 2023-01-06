import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
    let { id } = useParams();
    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => res.json())
            .then((data) => setPost(data));
    }, [id]);

    return (
        <div className="bg-white p-3">
            <h1>Details</h1>
            <hr />
            <div>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        </div>
    );
};

export default PostDetails;
