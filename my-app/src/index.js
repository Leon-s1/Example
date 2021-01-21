import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

//компонент квадрат
//по мере написания кода, заменяем класс Square функцией Square
// class Square extends React.Component {
//конструктор удален, т.к. компонент больше не отслеживает состояние
// constructor(props) {
//   super(props)
//   this.state = {
//     value: null,
//   }
// }

//теперь Square функциональный компонент
function Square(props) {
  return (
    // <button className="square" onClick={() => this.props.onClick()}> строчка относится к классу Square

    {
      /* {this.props.value}   было, показывает событие Click в браузере*/
    },
    {
      /*this.state.value} { Было 2, устанавливает крестик в квадрат*/
    },
    {
      /* 3 вариант передача состояния из компонента Board */
    },
    (
      // {this.props.value}  строчка относится к классу Square

      // напишем код для функции Square
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    )
  )
}

class Board extends React.Component {
  //передача состояния из Square в компонент Board и будем хранить его здесь
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    }
  }

  //метод который срабатывает при нажатии на квадрат
  handleClick(i) {
    const squares = this.state.squares.slice() //создаем копию массива для хранения нового состояния в компоненте Board
    if (calculateWinner(squares) || squares[i]) {
      //если кто то выиграл игру или квадрат заполнен фун-ия handleClick возвращается раньше
      return
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O' //если состояние true при клике по компоненту Square рисуем X, иначе O
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext, //после очередного хода true меняем на false
    }) //запиcываем новое состояние в копию массива squares
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
    const winner = calculateWinner(this.state.squares)
    let status
    if (winner) {
      status = 'Winner ' + winner
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
    }

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

//вспомогательная функция определения победителя
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'))
