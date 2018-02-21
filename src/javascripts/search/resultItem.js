import React, {Component} from 'react';

function ResultItem(props){

  let ticketUrl = props.url
  ticketUrl = ticketUrl.replace('api/v2/','').replace('.json','')

  function handleCheckBoxChange(event){
    let checked = event.target.checked
    if(checked){ props.addSelectedTicket(props.id) } else { props.removeSelectedTicket(props.id)}
  }

  return(
    <tr className="_tooltip">
      <td>
        {
          props.checked ? <input type="checkbox" checked onChange={handleCheckBoxChange}/> : <input type="checkbox" onChange={handleCheckBoxChange}/>
        }
      </td>
      <td>
        <a href={ticketUrl} target="_blank">
          <b>#{props.id}</b> {props.subject}
        </a>
      </td>
    </tr>
  )
}

export default ResultItem;
