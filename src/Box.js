export default function Box(props){
    
    function mouseEnter(event){
        
        const currentElement = document.getElementById('row' + props.row + 'col' + props.col)
        console.log(event.buttons)

        if (event.buttons === 2){
            currentElement.classList.remove('alive')
            return;
        }

        if (event.buttons === 1){
            currentElement.classList.add("alive")
            return;
        }
    }

    return(
        <div id={'row'+props.row+"col"+props.col} className='box' onMouseEnter={(e) => mouseEnter(e)} onMouseDown={(e) => mouseEnter(e)} row={props.row} col={props.col} style={{
            // backgroundColor: 'grey',
            border: '1px solid black',
            height: (props.boxSize-2).toString() + 'px',
            width: (props.boxSize-2).toString() + 'px'
        }}></div>
    )
}