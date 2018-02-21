import React from 'react';
import ResultItem from './ResultItem';

function SearchResults(props){
  console.log("SearchResults props =>", props)
  return (
    <div className="results-wrapper">
      <div className="results">
        <p className="count"><strong>{props.data.length} tickets found.</strong></p>
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
