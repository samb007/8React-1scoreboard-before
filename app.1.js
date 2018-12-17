const title = React.createElement(
    'h1',
    {id: 'main-title', title:'This is a title.'},
    'My first react element!'

);
const desc = React.createElement(
    'p',
    null,
    'I just learnt how to create a React node and render it into the DOM.'
);
const header = React.createElement(
    'header',
    null,
    title,
    desc
);

ReactDOM.render(
    header,
    document.getElementById('root')
);



console.log(title);