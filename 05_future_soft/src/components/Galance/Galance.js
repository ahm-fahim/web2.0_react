import React from "react";

const Galance = () => {
    const docs = [
        { id: 1, name: "Projects", total: 100},
        { id: 2, name: "Products", total: 80 },
        { id: 3, name: "Experts", total: 100 },
        { id: 4, name: "Countries", total: 75 },
        { id: 5, name: "Happy Clients", total: "10k" },
        { id: 6, name: "Years Experienced", total: 10 },
    ];
    return (
        <div className="bg-green-50 bg-fixed">
            <div className="text-center pt-10">
                <h3 className="text-2xl font-mono">Futute Soft.</h3>
                <h1 className="text-5xl animate-pulse font-extrabold text-green-600">
                    At a Glance
                </h1>
            </div>
            <div className="md:grid grid-cols-6 gap-4 mt-5 pb-10 px-10">
                {docs.map((cart) => (
                    <div
                        className="bg-white drop-shadow-xl mt-5 pt-10 pb-10 rounded-lg text-center justify-center "
                        key={cart.id}
                    >
                        <h1 className="text-3xl font-bold">{cart.total}+</h1>
                        <h2 className="text-xl text-green-600">{cart.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Galance;
