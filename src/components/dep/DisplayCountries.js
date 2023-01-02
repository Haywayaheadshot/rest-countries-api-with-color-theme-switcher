import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCountries } from '../../redux/home/Home';
import magnifier from '../../assets/icons/magnifier.png';
import '../../styles/display-countries.css';

function DisplayCountries() {
  const [search, setSearch] = useState('');
  const countries = useSelector((state) => state.countries);

  const filteredCountries = [countries];
  let mappedCountries = filteredCountries[0];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  //   Search the input for countries
  if (search !== '') {
    mappedCountries = filteredCountries.filter((country) => country
      .toLowerCase().includes(search.toLowerCase()));
  }

  return (
    <div className="display-countries-container">
      <section className="input-container">
        <img className="magnifier-img" src={magnifier} alt="magnifier" />
        <input type="text" className="search-input" placeholder="Search for a country ..." onChange={(e) => setSearch(e.target.value)} />
      </section>
      <select className="select-pop">
        <option value="Find by Region">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      {mappedCountries.map((country) => (
        <section className="countries-section" key={country.name.official}>
          <img className="country-flag-png" src={country.flags.png} alt={country.name.official} />
          <div className="section-mobile-info">
            <h1>{country.name.official}</h1>
            <h4>
              Population:
              <span className="section-mobile-info-data">{country.population}</span>
            </h4>
            <h4>
              Region:
              <span className="section-mobile-info-data">{country.region}</span>
            </h4>
            <h4>
              Capital:
              <span className="section-mobile-info-data">{country.capital}</span>
            </h4>
          </div>
        </section>
      ))}
    </div>
  );
}

export default DisplayCountries;
