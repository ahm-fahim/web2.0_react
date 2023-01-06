import "./App.css";
import MainLayout from "./layout/MainLayout";

function App() {
    return (
        <MainLayout>
            <div className="mt-5 position-absolute top-50 start-50 translate-middle">
          <div>
            <h2 className="text-warning">Dynamic Route </h2>
                    <h1 className="display-1">100 Posts</h1>
                    <p className="text-secondary">
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        At officia molestiae eligendi, ullam ducimus labore eius
                        architecto totam. Neque aliquid ad placeat alias. Porro
                        facilis omnis odit sequi, facere beatae?
                    </p>
                </div>
            </div>
        </MainLayout>
    );
}

export default App;
