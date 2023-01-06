import React from "react";
import MainLayout from "../../layout/MainLayout";
import PostDetails from "../../pages/PostDetails";
import Posts from "../../pages/Posts";
import "./PostContainer.css";

const PostContainer = () => {
    return (
        <MainLayout>
            <div className="container-fluid">
                <div className="row position-relative">
                    <div className="col-md-8 position-absolute top-5 start-0 bg-success-subtle p-2">
                        <Posts></Posts>
                    </div>
                    <div className="col-md-4 position-fixed end-0 top-5 r-2 p-5 bg-info-subtle">
                        <PostDetails></PostDetails>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default PostContainer;
