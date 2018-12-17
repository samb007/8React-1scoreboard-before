const title = "My first react element!"

const name = "Sam \'Humble' Burke"

const desc = "I just learnt how to create a React node and render it into the DOM."

const myTitleID = "main-title"

const header = (
    <header>
    {/* this is a comment */}
        <h1 id={myTitleID} >{ name }'s first react element!</h1>
        <p className='main-desc'>{ desc }</p>
        
    </header>
);

ReactDOM.render(
    header,
    document.getElementById('root')
);



console.log(title);