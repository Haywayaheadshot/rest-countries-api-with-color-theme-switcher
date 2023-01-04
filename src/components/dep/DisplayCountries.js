import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCountries } from '../../redux/home/Home';
import magnifier from '../../assets/icons/magnifier.png';
import '../../styles/display-countries.css';

function DisplayCountries() {
  const [search, setSearch] = useState('');
  const [filterRegion, setFilterRegion] = useState('');
  const countries = useSelector((state) => state.countries);

  const filteredCountries = [countries];
  let mappedCountries = filteredCountries[0];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  //   Search the input for countries
  if (search !== '') {
    mappedCountries = countries.filter((country) => country.name.official
      .toLowerCase().includes(search.toLowerCase()));
  }

  // Filter by region
  if (filterRegion !== '') {
    mappedCountries = countries.filter((country) => country.region
      .toLowerCase().includes(filterRegion.toLowerCase()));
  }

  return (
    <div className="display-countries-container">
      <section className="inputs-container">
        <div className="country-input-container">
          <img className="magnifier-img" src={magnifier} alt="magnifier" />
          <input type="text" className="search-input" placeholder="Search for a country ..." onChange={(e) => setSearch(e.target.value)} />
        </div>
        <input placeholder="Find by Region.." onChange={(e) => setFilterRegion(e.target.value)} className="select-pop" />
      </section>
      <section className="displayed-countries">
        {mappedCountries.map((country) => (
          <NavLink to={`/${country.name.official}`} key={country.name.official}>
            <section className="countries-section" key={country.name.official}>
              <img className="country-flag-png" src={country.flags.png} alt={`Flag of ${country.name.official}`} />
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
          </NavLink>
        ))}
      </section>
    </div>
  );
}

export default DisplayCountries;
