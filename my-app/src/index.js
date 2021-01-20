import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

//компонент квадрат
class Square extends React.Component {
  //конструктор удален, т.к. компонент больше не отслеживает состояние
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     value: null,
  //   }
  // }

  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {/* {this.props.value}   было, показывает событие Click в браузере*/}
        {/*this.state.value} { Было 2, устанавливает крестик в квадрат*/}
        {/* 3 вариант передача состояния из компонента Board */}
        {this.props.value}
      </button>
    )
  }
}

class Board extends React.Component {
  //передача состояния из Square в компонент Board и будем хранить его здесь
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
    }
  }

  //метод который срабатывает при нажатии на квадрат
  handleClick(i) {
    const squares = this.state.squares.slice()
    squares[i] = 'X'
    this.setState({ squares: squares })
  }

  //рисуем компонент доска
  renderSquare(i) {
    //раньше была передача значения value в массив в виде числа, теперь зададим состояние ячейки в виде передачи состояния
    // return <Square value={i} />
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    )
  }

  render() {
    const status = 'Next player: X'

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    )
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'))
