import React, {Component} from 'react';
import SearchBar from './searchBar';
import SearchResults from './SearchResults';
import Paginate from './paginate'

let jsonData = {
    "results": [
        {
            "url": "https://grupoadosupport1518033881.zendesk.com/api/v2/tickets/32.json",
            "id": 32,
            "external_id": null,
            "via": {
                "channel": "api",
                "source": {
                    "from": {},
                    "to": {},
                    "rel": null
                }
            },
            "created_at": "2018-02-12T23:41:23Z",
            "updated_at": "2018-02-12T23:41:23Z",
            "type": null,
            "subject": "test de asignación a grupo en form publico(Assigned to Group3)",
            "raw_subject": "test de asignación a grupo en form publico(Assigned to Group3)",
            "description": "test",
            "priority": null,
            "status": "new",
            "recipient": null,
            "requester_id": 360742694472,
            "submitter_id": 360742694472,
            "assignee_id": null,
            "organization_id": null,
            "group_id": null,
            "collaborator_ids": [],
            "follower_ids": [],
            "forum_topic_id": null,
            "problem_id": null,
            "has_incidents": false,
            "is_public": true,
            "due_at": null,
            "tags": [],
            "custom_fields": [
                {
                    "id": 360001049451,
                    "value": "9089"
                }
            ],
            "satisfaction_rating": {
                "score": "unoffered"
            },
            "sharing_agreement_ids": [],
            "fields": [
                {
                    "id": 360001049451,
                    "value": "9089"
                }
            ],
            "followup_ids": [],
            "ticket_form_id": 360000012652,
            "brand_id": 360000127132,
            "satisfaction_probability": null,
            "allow_channelback": false,
            "result_type": "ticket"
        },
        {
            "url": "https://grupoadosupport1518033881.zendesk.com/api/v2/tickets/6.json",
            "id": 6,
            "external_id": null,
            "via": {
                "channel": "api",
                "source": {
                    "from": {},
                    "to": {},
                    "rel": null
                }
            },
            "created_at": "2018-02-08T20:50:18Z",
            "updated_at": "2018-02-08T20:50:54Z",
            "type": null,
            "subject": "test de ticket desde formulario publico",
            "raw_subject": "test de ticket desde formulario publico",
            "description": "test de ticket desde formulario publico descripción.",
            "priority": null,
            "status": "open",
            "recipient": null,
            "requester_id": 360742694472,
            "submitter_id": 360742694472,
            "assignee_id": 360742694472,
            "organization_id": null,
            "group_id": 360000209292,
            "collaborator_ids": [],
            "follower_ids": [],
            "forum_topic_id": null,
            "problem_id": null,
            "has_incidents": false,
            "is_public": true,
            "due_at": null,
            "tags": [],
            "custom_fields": [
                {
                    "id": 360001049451,
                    "value": null
                }
            ],
            "satisfaction_rating": {
                "score": "unoffered"
            },
            "sharing_agreement_ids": [],
            "fields": [
                {
                    "id": 360001049451,
                    "value": null
                }
            ],
            "followup_ids": [],
            "ticket_form_id": 360000012652,
            "brand_id": 360000127132,
            "satisfaction_probability": null,
            "allow_channelback": false,
            "result_type": "ticket"
        },
        {
            "url": "https://grupoadosupport1518033881.zendesk.com/api/v2/tickets/28.json",
            "id": 28,
            "external_id": null,
            "via": {
                "channel": "api",
                "source": {
                    "from": {},
                    "to": {},
                    "rel": null
                }
            },
            "created_at": "2018-02-12T17:15:08Z",
            "updated_at": "2018-02-12T17:15:08Z",
            "type": null,
            "subject": "test de asignación a grupo en form publico",
            "raw_subject": "test de asignación a grupo en form publico",
            "description": "test de asignación a grupo en form publico",
            "priority": null,
            "status": "new",
            "recipient": null,
            "requester_id": 360742694472,
            "submitter_id": 360742694472,
            "assignee_id": null,
            "organization_id": null,
            "group_id": null,
            "collaborator_ids": [],
            "follower_ids": [],
            "forum_topic_id": null,
            "problem_id": null,
            "has_incidents": false,
            "is_public": true,
            "due_at": null,
            "tags": [],
            "custom_fields": [
                {
                    "id": 360001049451,
                    "value": "67"
                }
            ],
            "satisfaction_rating": {
                "score": "unoffered"
            },
            "sharing_agreement_ids": [],
            "fields": [
                {
                    "id": 360001049451,
                    "value": "67"
                }
            ],
            "followup_ids": [],
            "ticket_form_id": 360000012652,
            "brand_id": 360000127132,
            "satisfaction_probability": null,
            "allow_channelback": false,
            "result_type": "ticket"
        },
        {
            "url": "https://grupoadosupport1518033881.zendesk.com/api/v2/tickets/31.json",
            "id": 31,
            "external_id": null,
            "via": {
                "channel": "api",
                "source": {
                    "from": {},
                    "to": {},
                    "rel": null
                }
            },
            "created_at": "2018-02-12T23:31:32Z",
            "updated_at": "2018-02-12T23:31:32Z",
            "type": null,
            "subject": "test de asignación a grupo en form publico .(Assigned to Group3)",
            "raw_subject": "test de asignación a grupo en form publico .(Assigned to Group3)",
            "description": "test de asignación a grupo en form publico",
            "priority": null,
            "status": "new",
            "recipient": null,
            "requester_id": 360742694472,
            "submitter_id": 360742694472,
            "assignee_id": null,
            "organization_id": null,
            "group_id": null,
            "collaborator_ids": [],
            "follower_ids": [],
            "forum_topic_id": null,
            "problem_id": null,
            "has_incidents": false,
            "is_public": true,
            "due_at": null,
            "tags": [],
            "custom_fields": [
                {
                    "id": 360001049451,
                    "value": "89098"
                }
            ],
            "satisfaction_rating": {
                "score": "unoffered"
            },
            "sharing_agreement_ids": [],
            "fields": [
                {
                    "id": 360001049451,
                    "value": "89098"
                }
            ],
            "followup_ids": [],
            "ticket_form_id": 360000012652,
            "brand_id": 360000127132,
            "satisfaction_probability": null,
            "allow_channelback": false,
            "result_type": "ticket"
        },
        {
            "url": "https://grupoadosupport1518033881.zendesk.com/api/v2/tickets/29.json",
            "id": 29,
            "external_id": null,
            "via": {
                "channel": "api",
                "source": {
                    "from": {},
                    "to": {},
                    "rel": null
                }
            },
            "created_at": "2018-02-12T17:31:06Z",
            "updated_at": "2018-02-12T17:31:06Z",
            "type": null,
            "subject": "test de asignación a grupo en form publico(Assigned to Group3)",
            "raw_subject": "test de asignación a grupo en form publico(Assigned to Group3)",
            "description": "test de asignación a grupo en form publico",
            "priority": null,
            "status": "new",
            "recipient": null,
            "requester_id": 360742694472,
            "submitter_id": 360742694472,
            "assignee_id": null,
            "organization_id": null,
            "group_id": null,
            "collaborator_ids": [],
            "follower_ids": [],
            "forum_topic_id": null,
            "problem_id": null,
            "has_incidents": false,
            "is_public": true,
            "due_at": null,
            "tags": [],
            "custom_fields": [
                {
                    "id": 360001049451,
                    "value": "78"
                }
            ],
            "satisfaction_rating": {
                "score": "unoffered"
            },
            "sharing_agreement_ids": [],
            "fields": [
                {
                    "id": 360001049451,
                    "value": "78"
                }
            ],
            "followup_ids": [],
            "ticket_form_id": 360000012652,
            "brand_id": 360000127132,
            "satisfaction_probability": null,
            "allow_channelback": false,
            "result_type": "ticket"
        },
        {
            "url": "https://grupoadosupport1518033881.zendesk.com/api/v2/tickets/30.json",
            "id": 30,
            "external_id": null,
            "via": {
                "channel": "api",
                "source": {
                    "from": {},
                    "to": {},
                    "rel": null
                }
            },
            "created_at": "2018-02-12T17:32:51Z",
            "updated_at": "2018-02-12T17:32:51Z",
            "type": null,
            "subject": "test de asignación a grupo en form publico(Assigned to Group3)",
            "raw_subject": "test de asignación a grupo en form publico(Assigned to Group3)",
            "description": "test de asignación a grupo en form publico",
            "priority": null,
            "status": "new",
            "recipient": null,
            "requester_id": 360742694472,
            "submitter_id": 360742694472,
            "assignee_id": null,
            "organization_id": null,
            "group_id": null,
            "collaborator_ids": [],
            "follower_ids": [],
            "forum_topic_id": null,
            "problem_id": null,
            "has_incidents": false,
            "is_public": true,
            "due_at": null,
            "tags": [],
            "custom_fields": [
                {
                    "id": 360001049451,
                    "value": "45"
                }
            ],
            "satisfaction_rating": {
                "score": "unoffered"
            },
            "sharing_agreement_ids": [],
            "fields": [
                {
                    "id": 360001049451,
                    "value": "45"
                }
            ],
            "followup_ids": [],
            "ticket_form_id": 360000012652,
            "brand_id": 360000127132,
            "satisfaction_probability": null,
            "allow_channelback": false,
            "result_type": "ticket"
        },
        {
            "url": "https://grupoadosupport1518033881.zendesk.com/api/v2/tickets/7.json",
            "id": 7,
            "external_id": null,
            "via": {
                "channel": "api",
                "source": {
                    "from": {},
                    "to": {},
                    "rel": null
                }
            },
            "created_at": "2018-02-08T20:54:26Z",
            "updated_at": "2018-02-08T20:54:58Z",
            "type": null,
            "subject": "test 2 formulario publico",
            "raw_subject": "test 2 formulario publico",
            "description": "test 2 formulario publico",
            "priority": null,
            "status": "open",
            "recipient": null,
            "requester_id": 360742694472,
            "submitter_id": 360742694472,
            "assignee_id": 360742694472,
            "organization_id": null,
            "group_id": 360000209292,
            "collaborator_ids": [],
            "follower_ids": [],
            "forum_topic_id": null,
            "problem_id": null,
            "has_incidents": false,
            "is_public": true,
            "due_at": null,
            "tags": [],
            "custom_fields": [
                {
                    "id": 360001049451,
                    "value": null
                }
            ],
            "satisfaction_rating": {
                "score": "unoffered"
            },
            "sharing_agreement_ids": [],
            "fields": [
                {
                    "id": 360001049451,
                    "value": null
                }
            ],
            "followup_ids": [],
            "ticket_form_id": 360000012652,
            "brand_id": 360000127132,
            "satisfaction_probability": null,
            "allow_channelback": false,
            "result_type": "ticket"
        },
        {
            "url": "https://grupoadosupport1518033881.zendesk.com/api/v2/tickets/2.json",
            "id": 2,
            "external_id": null,
            "via": {
                "channel": "web",
                "source": {
                    "from": {},
                    "to": {},
                    "rel": null
                }
            },
            "created_at": "2018-02-08T18:43:00Z",
            "updated_at": "2018-02-08T19:14:29Z",
            "type": null,
            "subject": "new ticket background test",
            "raw_subject": "new ticket background test",
            "description": "new ticket background test description",
            "priority": null,
            "status": "open",
            "recipient": null,
            "requester_id": 360753401872,
            "submitter_id": 360742694252,
            "assignee_id": 360742694432,
            "organization_id": null,
            "group_id": 360000209292,
            "collaborator_ids": [],
            "follower_ids": [],
            "forum_topic_id": null,
            "problem_id": null,
            "has_incidents": false,
            "is_public": true,
            "due_at": null,
            "tags": [],
            "custom_fields": [
                {
                    "id": 360001049451,
                    "value": null
                }
            ],
            "satisfaction_rating": {
                "score": "unoffered"
            },
            "sharing_agreement_ids": [],
            "fields": [
                {
                    "id": 360001049451,
                    "value": null
                }
            ],
            "followup_ids": [],
            "ticket_form_id": 360000012652,
            "brand_id": 360000127132,
            "satisfaction_probability": null,
            "allow_channelback": false,
            "result_type": "ticket"
        }
    ],
    "facets": null,
    "next_page": null,
    "previous_page": null,
    "count": 9
}


class Search extends Component{

  state = {
    results: jsonData.results,
    textToSearch: ''
  }

  handleSearchClick = (event) => {
    let client = this.props.client
    if(this.state.textToSearch){
      console.log(`Hacer busqueda aqui para texto: ${this.state.textToSearch}`)
    }
  }

  handleTextToSearch = (event) => {
    this.setState({textToSearch: event.target.value})
    console.log("handleTextToSearch =>", event.target.value)
  }

  render(){
    let showResults = null
    if(this.state.results.length > 0){
      showResults = <SearchResults data={this.state.results}/>
    } else {
      showResults = <p></p>

    }
    return (
      <div className="search-container">
        <SearchBar
          handleTextToSearch={this.handleTextToSearch}
          handleSearchClick={this.handleSearchClick}
        />

        {showResults}

        <Paginate/>
      </div>
    )
  }

}

export default Search;
