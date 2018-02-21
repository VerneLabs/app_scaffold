import React, {Component} from 'react';
import SearchBar from './searchBar';
import SearchResults from './SearchResults';
import Paginate from './paginate'

class Search extends Component{

  state = {
    searchSubmitted: false,
    searchLoading: false,
    results: [],
    textToSearch: ''
  }

   handleSearchClick = async (event) => {
    if(this.state.textToSearch){
      console.log(`Haciendo busqueda para texto: ${this.state.textToSearch}`)
      this.setState({searchSubmitted: true, searchLoading: true})
      let response = await this.searchTicketsOnZendesk(this.state.textToSearch)
      //updating founded results
      if(response.results && response.results.length > 0){
        this.setState({results: response.results, searchLoading: false})
      } else {
        this.setState({results: [], searchLoading: false})
      }
    } else {
      this.setState({results: [], searchLoading: false, searchSubmitted: true}) //clean results
      console.log("set state to empty =>", this.state)
    }
  }

  searchTicketsOnZendesk = (queryText) => {
    console.log("queryText =>", queryText)
    let client = this.props.client
    return client.request(`/api/v2/search.json?query=type:ticket ${queryText}`)
  }

  handleTextToSearch = (event) => {
    this.setState({textToSearch: event.target.value})
    console.log("handleTextToSearch =>", event.target.value)
  }

  updateResults = (newResults) => {
    console.log("updateResults =>", newResults)
    this.setState({results: newResults})
  }

  render(){
    let showResults = null

    if(this.state.searchLoading){
      showResults = <div><p>Loading...</p></div> //if loading
    } else {
      if(this.state.searchSubmitted){ //if submitted
        if(this.state.results.length > 0){ //if results and submitted
          showResults = <div> <SearchResults data={this.state.results}/><Paginate/></div>
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
          updateResults={this.updateResults}
        />

        {showResults}

      </div>
    )
  }

}

export default Search;
