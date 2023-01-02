import React from "react";
import "./Cover.css";
import wife from "../../images/wife.png";
import family from "../../images/family.png";
import friends from "../../images/friends.png";
import delivery from "../../images/delivery.png";

const Cover = () => {
    return (
        <div className="container cover mt-3">
            <div
                id="carouselExampleDark"
                className="carousel carousel-dark slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="3"
                        aria-label="Slide 1"
                    ></button>
                </div>
                <div className="carousel-inner">
                    <div
                        className="carousel-item active"
                        data-bs-interval="2000"
                    >
                        <div className="row text-bg-danger p-4 d-flex align-items-center justify-content-center">
                            <div className="col-lg-6 col-sm-12">
                                <h1>Life Is Beautiful With Family!</h1>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <img
                                    src={family}
                                    className="d-block w-100"
                                    alt="family"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <div className="row text-bg-warning p-4 d-flex align-items-center justify-content-center">
                            <div className="col-lg-6 col-sm-12">
                                <h1>Without Friends Life is Incomplete!</h1>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <img
                                    src={friends}
                                    className="d-block w-100"
                                    alt="family"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row text-bg-success p-4 d-flex align-items-center justify-content-center">
                            <div className="col-lg-6 col-sm-12 ">
                                <h1>Wife is the half part of a men</h1>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <img
                                    src={wife}
                                    className="d-block w-100"
                                    alt="family"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row text-bg-info p-4 d-flex align-items-center justify-content-center">
                            <div className="col-lg-6 col-sm-12 ">
                                <h1>We are provide fast delivery!</h1>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <img
                                    src={delivery}
                                    className="d-block w-100"
                                    alt="family"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;
