import React from 'react';

function Paginate(props){
    let previousPage = null
    let nextPage = null

    if(props.previous_page){
      previousPage = <button onClick={() => {props.changePage(props.previous_page)}}>Previous page</button>
    }
    if(props.next_page){
      nextPage = <button onClick={() => {props.changePage(props.next_page)}}>Next Page</button>
    }

  return(
    <div className="pagination">
      <ul>
        <li>{previousPage}</li>
        <li>{nextPage}</li>
      </ul>
    </div>
  )
}

export default Paginate;
