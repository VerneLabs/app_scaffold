import React from 'react';
import ResultItem from './ResultItem';
import _ from 'lodash';

function SearchResults(props){
  return (
    <div className="results-wrapper">
      <div className="results">
        <p className="count">
          <strong>
            {props.count} tickets found.
          </strong>
        </p>
        {
          props.data.length != props.count &&  <p><i> Showing {props.data.length} tickets.</i></p>
        }

        {
          props.selectedTickets.length > 0 && <p>{props.selectedTickets.length} tickets selected.  <button onClick={props.sendSelectedIds}>Send</button></p> 
        }


        <table className="table table-condensed">
          <tbody>
            {
              props.data.map((item) => {
                let checked = false
                let found = _.find(props.selectedTickets, function(selectedTicket){
                  return selectedTicket==item.id}
                )
                if(found){
                  checked = true
                }
                return  <ResultItem
                  {... item}
                  addSelectedTicket={props.addSelectedTicket}
                  removeSelectedTicket={props.removeSelectedTicket}
                  checked={checked}
                  key={item.id}/>
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}


export default SearchResults;
