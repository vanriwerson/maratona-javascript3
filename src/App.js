import React from "react";

const App = () => {
    return (<div className="container">
        <div className="valid-keys">
            <span className="matched">bruno ri</span>
            <span className="remainder">werson</span>
        </div>
        <div className="typed-keys">asdfbrunoriasdf</div>
        <div className="completed-words">
            <ol>
                <li>cidade</li>
                <li>carro</li>
                <li>profissional</li>
            </ol>
        </div>
    </div>);
};

export default App;
