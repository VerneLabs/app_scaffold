import React, {Component} from 'react';
import SearchBar from './searchBar';
import SearchResults from './SearchResults';
import Paginate from './paginate'

class Search extends Component{

  state = {
    searchSubmitted: false,
    searchLoading: false,
    next_page: null,
    previous_page: null,
    count: null,
    results: [],
    textToSearch: ''
  }

   handleSearchClick = (event) => {
    if(this.state.textToSearch){
      this.searchTicketsOnZendesk(`/api/v2/search.json?query=type:ticket ${this.state.textToSearch}`)
    } else {
      this.setState({results: [], searchLoading: false, searchSubmitted: true}) //clean results
    }
  }

   searchTicketsOnZendesk = async (url) => {
    this.setState({searchSubmitted: true, searchLoading: true})
    let client = this.props.client
    let response = await client.request(url)

    console.log("response =>", response)

    //updating founded results
    if(response.results && response.results.length > 0){
      this.setState({
        results: response.results,
        searchLoading: false,
        previous_page: response.previous_page,
        next_page: response.next_page,
        count: response.count
      })
    } else {
      this.setState({results: [], searchLoading: false})
    }
  }

  handleTextToSearch = (event) => {
    this.setState({textToSearch: event.target.value})
  }

  render(){
    let showResults = null
    //managing render states
    if(this.state.searchLoading){
      showResults = <div><p>Loading...</p></div> //if loading
    } else {
      if(this.state.searchSubmitted){ //if submitted
        if(this.state.results.length > 0){ //if results and submitted
          showResults = (
            <div>
              <SearchResults data={this.state.results} count={this.state.count}/>
              <Paginate
                previous_page={this.state.previous_page}
                next_page={this.state.next_page}
                changePage={this.searchTicketsOnZendesk}/>
            </div>
          )
        } else if (this.state.results == 0 ) { //if no results and submitted
          showResults = <p>No se encontraron resultados.</p>
        }
      } else { //everything else
        showResults = <p></p>
      }
    }


    return (
      <div className="search-container">
        <SearchBar
          handleTextToSearch={this.handleTextToSearch}
          handleSearchClick={this.handleSearchClick}
        />

        {showResults}

      </div>
    )
  }

}

export default Search;
