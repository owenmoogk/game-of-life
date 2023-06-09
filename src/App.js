import Box from './Box.js'
import './styles.css'

export default function App() {

  // keep track of weather or not it is running
  var running;

  // timing for visualizations
  var interval = null;

  // getting grid coords from cell element
  // return type: [int, int]
  function getCoords(element) {
    var row = element.getAttribute('row')
    var col = element.getAttribute('col')
    row = parseInt(row)
    col = parseInt(col)
    return ([row, col])
  }

  // getting cell element from grid coords
  // input: [int, int] || [row, col]
  function getElement(coords) {
    var [row, col] = coords
    return (document.getElementById('row' + row + 'col' + col))
  }

  // clears the used squares before running, checks start and end, passed the function to call.
  // return: null
  function startAlgorithm() {

    if (running) {
      stopInterval()
      return
    }
    var goButton = document.getElementById('goButton')
    goButton.innerHTML = "Stop"
    goButton.style.color = 'Red'
    var speedInput = document.getElementById("simSpeed")
    speedInput.disabled = true


    running = true

    // need a settimeout here
    interval = setInterval(tickFunction, timeDelay);
    console.log(interval)
  }

  function tickFunction(){
    // 0 means kill, 1 means spawn
    let transformArray = Array.from(Array(gridHeight), _ => Array(gridWidth).fill(0))

    for (let row = 0; row < gridHeight; row++){
      for (let col = 0; col < gridWidth; col++){
        let element = getElement([row, col])
        let neighbors =  getNeighbors(element)
        let aliveCount = 0
        for (let neighbor of neighbors){
          if (neighbor.classList.contains("alive")){
            aliveCount += 1;
          }
        }

        if (element.classList.contains("alive")){
          if (!(aliveCount <= 1 || aliveCount >= 4)){
            transformArray[row][col] = 1
          }
        }
        else{
          if (aliveCount == 3){
            transformArray[row][col] = 1
          }
        }

      }
    }

    for (let row = 0; row < gridHeight; row++){
      for (let col = 0; col < gridWidth; col++){
        let element = getElement([row, col])
        if (transformArray[row][col] == 1){
          element.classList.add("alive")
        }
        else{
          element.classList.remove('alive')
        }
      }
    }

  }

  function step(){
    if (running) return;
    tickFunction()
  }

  // get the given neighbors of a cell.. this includes barriers and closed nodes so have to filter in the function
  // returns array of elements
  function getNeighbors(element) {
    var [row, col] = getCoords(element)
    var elements = []

    elements.push(getElement([row + 1, col]))
    elements.push(getElement([row - 1, col]))
    elements.push(getElement([row, col + 1]))
    elements.push(getElement([row, col - 1]))

    elements.push(getElement([row + 1, col + 1]))
    elements.push(getElement([row + 1, col - 1]))
    elements.push(getElement([row - 1, col + 1]))
    elements.push(getElement([row - 1, col - 1]))

    // filter out the null elements
    elements = elements.filter((a) => a)

    return (elements)
  }

  // stop the interval from running when the algorithm is done
  function stopInterval() {
    clearInterval(interval)
    running = false
    var goButton = document.getElementById('goButton')
    goButton.innerHTML = "Go"
    goButton.style.color = ''
    var speedInput = document.getElementById("simSpeed")
    speedInput.disabled = false;
  }

  function clear(){
    if (running) return;
    for (let row = 0; row < gridHeight; row++){
      for (let col = 0; col < gridWidth; col++){
        let element = getElement([row, col])
        element.classList.remove("alive")
      }
    }
  }

  // no context menu, reload button pops up on resize
  window.addEventListener('contextmenu', e => e.preventDefault())
  window.addEventListener('resize', e => document.getElementById('resizeAlert').style.display = 'block')

  // RENDERING

  // default cell size
  var boxSize = 20

  var gridHeight = Math.floor((window.innerHeight - 90) / boxSize)
  var gridWidth = Math.floor((window.innerWidth) / boxSize)

  var timeDelay = 100;

  function makeGrid() {
    var grid = []
    for (let row = 0; row < gridHeight; row++) {
      grid.push([])
      for (let col = 0; col < gridWidth; col++) {
        grid[row].push(<Box row={row} col={col} boxSize={boxSize} />)
      }
    }
    return (grid)
  }

  return (
    <div className="App" style={{ userSelect: 'none' }}>
      <div id='header'>
        <p className="button" onClick={() => startAlgorithm()} id='goButton'>Go</p>
        <p className="button" onClick={() => step()} id='stepButton'>Step</p>
        <p className="button" onClick={() => clear()} id='clearButton'>Clear</p>
        <p>Sim Speed (ms):</p>
        <input id='simSpeed' type='number' placeholder='100' onChange={(e) => timeDelay = e.target.value}/>
      </div>
      <div id='grid'>
        {makeGrid().map((row, key) => {
          return (
            <div className='row' id={key}>
              {row.map((element) => {
                return (element)
              })}
            </div>
          )
        })}
      </div>
      <span id='resizeAlert' onClick={() => window.location.reload()}>Looks like you resized your window. <br /> Click here to reset the grid</span>
      <p id='myName'><a href='https://owenmoogk.github.io' target='_blank' rel='noreferrer'>Owen Moogk</a></p>
      <p id='infoButton'><a href='https://owenmoogk.github.io/projects/game-of-life' target='_blank' rel='noreferrer'>About This Project</a></p>
    </div>
  );
}