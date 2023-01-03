import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import '../styles/details.css';

function Details() {
  const params = useParams();
  const countries = useSelector((state) => state.countries);
  const filteredCountry = countries.filter((country) => (country.name.official === params.id));

  return (
    <div>
      <NavLink to="/">
        <button type="button">Back</button>
      </NavLink>
      {filteredCountry.map((country) => (
        <section key={country.name.official}>
          <img src={country.flags.png} alt={`Flag of ${country.name.official}`} />
          <div>
            <h1>{country.name.official}</h1>
            <section>
              <h4>
                Native Name:
                <span className="details-mobile-info-data">{country.name.common}</span>
              </h4>
              <h4>
                Population:
                <span className="details-mobile-info-data">{country.population}</span>
              </h4>
              <h4>
                Region:
                <span className="details-mobile-info-data">{country.region}</span>
              </h4>
              <h4>
                Sub Region:
                <span className="details-mobile-info-data">{country.subregion}</span>
              </h4>
              <h4>
                Capital:
                <span className="details-mobile-info-data">{country.capital}</span>
              </h4>
            </section>
            <section>
              <h4>
                Top Level Domain:
                <span className="details-mobile-info-data">{country.tld}</span>
              </h4>
              <h4>
                Currencies:
                <span className="details-mobile-info-data">{country.currencies.name}</span>
              </h4>
              <h4>
                Languages:
                <span className="details-mobile-info-data">{country.languages.eng}</span>
              </h4>
            </section>
            <section>
              <h3>Border Countries</h3>
              { country.borders ? (
                'Has Borders'
              ) : 'Has No borders' }
            </section>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Details;
