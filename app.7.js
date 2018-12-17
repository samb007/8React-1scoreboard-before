const players = [
    {
        name: "Sam 'Humble' Burke",
        score:44
    },
    {
        name: "Steven",
        score: 50
    },
    {
        name: "Elliot",
        score: 5
    },
    {
        name: "Andrew",
        score: 55
    }


]
// expect "Warning: Each child in an array or iterator should have a unique "key" prop."

const Header = (props)=>{
    console.log(props)
    return(
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
            
        </header>
    );
}
const Counter = (props) =>{
    return(
        <div className="counter">
            <button className="counter-action decrement">-</button>
            <span className="counter-score">{props.score}</span>
            <button className="counter-action increment">+</button>
        </div>
    )
}
const Player = (props) =>{
    return(
        <div className="player">
            <span className="player-name" >{props.name}</span>
            <Counter score={props.score}/>
        </div>
    )
}
const App = (props) =>{
    return(
        <div className="scoreboard">
           <Header title="Scoreboard" totalPlayers={props.initialPlayers.length}/> 
            {/* Players list */}
           {props.initialPlayers.map(player =>
           <Player name={player.name}
                   score={player.score}/>
               )}         
        </div>
    );
}

ReactDOM.render(   
    <App initialPlayers={players}/>,
    document.getElementById('root')
);



