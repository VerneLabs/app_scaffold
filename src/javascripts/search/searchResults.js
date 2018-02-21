import React from 'react';
import ResultItem from './ResultItem';

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
        <table className="table table-condensed">
          <tbody>
            {
              props.data.map((item) => {
                return  <ResultItem {... item} key={item.id}/>
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}


export default SearchResults;
