class App extends React.Component {
  state = {
    omens: ['zapomnisz, jak to było mieć na sobie dżins', 'przytyjesz 10kg', 'nabawisz się kontuzji kciuka od scrollowania', 'nadrobisz książki i filmy, na które nie miałeś czasu', 'odkryjesz, że ryż z groszkiem to też obiad', 'ogarniesz React.js', 'dokończysz rozgrzebane projekty', 'wyśpisz się', 'będziesz ćwiczyć z Chodakowską', 'poczujesz magię pracy zdalnej', 'będziesz jadł pizzę 3 razy w tygodniu'],
    omen: null,
    newOmen: ''
  }

  randomOmenHandler = () => {
    const omens = this.state.omens;
    let omen = omens[Math.floor(Math.random() * omens.length)]
    this.setState({
      omen: omen
    })
  }

  handleChange = (e) => {
    this.setState({
      newOmen: e.target.value
    })
  }

  addOmenHandler = () => {
    const omens = this.state.omens;
    let newOmen = this.state.newOmen;
    if(newOmen!=''){
    this.setState({
      omens: omens.concat(newOmen),
      newOmen: ''
    })
    alert(`Dodałeś wróżbę "${newOmen}". Ciekawe, czy jest Ci pisana! Dowiedz się za pomocą przycisku "losuj wróżbę".`)
    }else{
      alert('Nie wpisałeś wróżby, spróbuj jeszcze raz!')
    }
  }

  render() {
    return (
      <div class = "container">
        <h1 class='intro'>Chcesz wiedzieć, co czeka Cię podczas kwarantanny? <br/> Wylosuj wróżbę!</h1>
        <button class="showOmen" onClick={this.randomOmenHandler}>Losuj wróżbę</button>
        <h2>Możesz także dodać swoje opcje!</h2>
        <input type="text" placeholder="wpisz swoją wróżbę" value={this.state.newOmen} onChange={this.handleChange}/>
        <button class="addOmen" onClick={this.addOmenHandler}>Dodaj wróżbę</button>
        <div className="omenContainer">
          {this.state.omen ? <h3>{this.state.omen}</h3> : null}
        </div>
        <h4 class='zostanwdomu'>#zostan<span>w</span>domu</h4>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'))