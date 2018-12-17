const title = <h1>My first react element!</h1>


const desc = <p>I just learnt how to create a React node and render it into the DOM.</p>

const header = (
    <header>
        <h1>My first react element!</h1>
        <p>I just learnt how to create a React node and render it into the DOM.</p>
    </header>
);

ReactDOM.render(
    header,
    document.getElementById('root')
);



console.log(title);