


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
    state = {
        score:0       // change out the constructor for this but not supported on some browsers
    }
    incrementScore = () =>{
        this.setState(prevState =>({
            score:prevState.score+1
        }))
        console.log(this)
    }
    decrementScore = () =>{
        this.setState(prevState =>({
           score:prevState.score-1
        }))
    }
    render(){
    return(
        <div className="counter">
            <button className="counter-action decrement" onClick= {()=> 
            this.decrementScore()} >-</button>
            <span className="counter-score">{this.state.score}</span> 
            <button className="counter-action increment" onClick= {()=> 
            this.incrementScore()} >+</button> 
        </div>
    )}
}
// bind allows you to call this outside of render
const Player = (props) =>{
    return(
        <div className="player">
            <span className="player-name" >{props.name}</span>
            <Counter />
        </div>
    )
}
class App extends React.Component {
    state = {
        players : [
            {
                name: "Sam 'Humble' Burke",
                
                id:1
            },
            {
                name: "Steven",
                
                id:2
        
            },
            {
                name: "Elliot",
                
                id:3
            },
            {
                name: "Andrew",
                
                id:4
            }
        
        
        ]
    }
    render(){
    return(
        <div className="scoreboard">
           <Header title="Scoreboard" totalPlayers={this.state.players.length}/> 
            {/* Players list */}
           {this.state.players.map(player =>
           <Player name={player.name}                  
                   key = {player.id.toString()} />
               )}         
        </div>
    );
}
}

ReactDOM.render(   
    <App />,
    document.getElementById('root')
);



