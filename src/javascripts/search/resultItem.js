import React, {Component} from 'react';

function ResultItem(props){

  let ticketUrl = props.url
  ticketUrl = ticketUrl.replace('api/v2/','').replace('.json','')

  return(
    <tr className="_tooltip">
      <td><input type="checkbox"/></td>
      <td>
        <a href={ticketUrl} target="_blank">
          <b>#{props.id}</b> {props.subject}
        </a>
      </td>
    </tr>
  )
}

export default ResultItem;
