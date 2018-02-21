import React, {Component} from 'react';

function ResultItem(props){
  return(
    <tr className="_tooltip">
      <td><input type="checkbox"/></td>
      <td>
        <a href="#">
          <b>#{props.id}</b> {props.subject}
        </a>
      </td>
    </tr>
  )
}

export default ResultItem;
