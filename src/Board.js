import React from 'react'
import PropTypes from 'prop-types'

class Board extends React.Component {
    state = {
      boardData: this.initBoardData(this.props.height, this.props.width, this.props.mines),
      gameStatus: false,
      mineCount: this.props.mines
    };

    createEmptyArray(height, width) {
        let data = [];
        for (let i = 0; i < height; i++) {
          data.push([]);
          for (let j = 0; j < width; j++) {
            data[i][j] = {
              x: i,
              y: j,
              isMine: false,
              neighbour: 0,
              isRevealed: false,
              isEmpty: false,
              isFlagged: false,
              };
            }
          }
          return data;
        }

  render() {
    return (
      <div className="board">
        <div className="game-info">
          <span className="info">
            mines: {this.state.mineCount}
          </span>
          <br />
          <span className="info">
            {this.state.gameStatus}
          </span>
        </div>
        { this.renderBoard(this.state.boardData)}
      </div>
      );
    }
  }
  // Type checking With PropTypes
  Board.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    mines: PropTypes.number,
  }