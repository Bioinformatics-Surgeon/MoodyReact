import React from 'react';
import SearchForm from '../SearchPage/SearchForm.js'
import Results from '../SearchPage/Results.js'
import NoResults from '../SearchPage/NoResult.js'

class SearchPage extends React.Component {
  state = {
    restaurants: [
      {
        name: 'Waffle House',
        price: '$',
        rating: '4',
        categories: ['diner', 'breakfast']
      },
      {
        name: 'Huddle House',
        price: '$',
        rating: '1',
        categories: ['diner', 'breakfast']
      },
      {
        name: 'International House of Pancakes',
        price: '$$',
        rating: '2',
        categories: ['casual', 'breakfast']
      },
      {
        name: 'White Castle',
        price: '$',
        rating: '4',
        categories: ['fast food', 'burgers']
      },
      {
        name: 'Rookery',
        price: '$$',
        rating: '3',
        categories: ['burgers', 'casual', 'american']
      },
      {
        name: 'Dove Tail',
        price: '$$$',
        rating: '3',
        categories: ['upscale', 'american']
      },
      {
        name: 'Burger King',
        price: '$',
        rating: '2',
        categories: ['fast food', 'burgers']
      },
      {
        name: 'Krystal',
        price: '$',
        rating: '3',
        categories: ['fast food', 'burgers']
      }
    ],
    results: [],
    input: ''
  }

  handleChange = (event) => {
    this.setState({ input: event.target.value })
  }

  handleClick = (event) => {
    event.preventDefault();
    const restaurantsFiltered = this.state.restaurants.filter(place => place.categories.includes(this.state.input))
    this.setState({ results: restaurantsFiltered });
  }

  render () {
    return (
      <div>
        <SearchForm 
          changeHandler={this.handleChange} 
          clickHandler={this.handleClick} 
          value={this.state.input}
        />

        {
          this.state.results.length === 0
          ? (<NoResults />)
          : 
            this.state.results.map((place, i) => (
              <Results 
                name={place.name} 
                key={i} 
              />
          ))
        }
      </div>
    )
  }

}

export default SearchPage;
