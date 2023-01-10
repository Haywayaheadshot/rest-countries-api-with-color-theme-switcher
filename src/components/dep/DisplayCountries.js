import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCountries } from '../../redux/home/Home';
import magnifier from '../../assets/icons/magnifier.png';
import '../../styles/display-countries.css';

function DisplayCountries() {
  const [search, setSearch] = useState('');
  const [filterRegion, setFilterRegion] = useState('');
  const [closeRegions, openRegions] = useState(false);
  const [value, setValue] = useState('Find by Region v');
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
  const handleOptions = (e) => {
    setValue(e.target.value);
    setFilterRegion(e.target.value);
    openRegions((region) => !region);
  };

  if (filterRegion !== '') {
    mappedCountries = countries.filter((country) => country.region
      .toLowerCase().includes(filterRegion.toLowerCase()));
  }

  return (
    <div className="display-countries-container">
      <section className="inputs-container">
        <div className="country-input-container">
          <img className="magnifier-img" src={magnifier} alt="magnifier" />
          <input type="text" className="search-input font" placeholder="Search for a country ..." onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div>
          <input value={value} onClick={() => openRegions((region) => !region)} onChange={(e) => setFilterRegion(e.target.value)} className="select-pop" readOnly />
          {closeRegions && (
          <ul className="regions-pop-ul">
            <li className="regions-pop-ul-li">
              <option onClick={handleOptions} className="font" value="Africa">Africa</option>
            </li>
            <li className="regions-pop-ul-li">
              <option onClick={handleOptions} className="font" value="America">America</option>
            </li>
            <li className="regions-pop-ul-li">
              <option onClick={handleOptions} className="font" value="Asia">Asia</option>
            </li>
            <li className="regions-pop-ul-li">
              <option onClick={handleOptions} className="font" value="Europe">Europe</option>
            </li>
            <li className="regions-pop-ul-li">
              <option onClick={handleOptions} className="font" value="Oceania">Oceania</option>
            </li>
          </ul>
          )}
        </div>
      </section>
      <section className="displayed-countries">
        {mappedCountries.map((country) => (
          <NavLink to={`/${country.name.official}`} key={country.name.official}>
            <section className="countries-section" key={country.name.official}>
              <img className="country-flag-png" src={country.flags.png} alt={`Flag of ${country.name.official}`} />
              <div className="section-mobile-info">
                <h1>{country.name.official}</h1>
                <h4 className="font">
                  Population:
                  <span className="section-mobile-info-data font">{country.population}</span>
                </h4>
                <h4 className="font">
                  Region:
                  <span className="section-mobile-info-data font">{country.region}</span>
                </h4>
                <h4 className="font">
                  Capital:
                  <span className="section-mobile-info-data font">{country.capital}</span>
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
