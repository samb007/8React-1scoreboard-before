const players = [
    {
        name: "Sam 'Humble' Burke",
        score:44,
        id:1
    },
    {
        name: "Steven",
        score: 50,
        id:2

    },
    {
        name: "Elliot",
        score: 5,
        id:3
    },
    {
        name: "Andrew",
        score: 55,
        id:4
    }


]


const Header = (props)=>{
    console.log(props)
    return(
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
            
        </header>
    );
}
class Counter extends React.Component{
    render(){
    return(
        <div className="counter">
            <button className="counter-action decrement">-</button>
            <span className="counter-score">{this.props.score}</span> 
            <button className="counter-action increment">+</button>
        </div>
    )}
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
                   score={player.score}
                   key = {player.id.toString()} />
               )}         
        </div>
    );
}

ReactDOM.render(   
    <App initialPlayers={players}/>,
    document.getElementById('root')
);



