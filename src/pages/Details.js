import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import '../styles/details.css';
import backArrow from '../assets/icons/left-arrow.png';

function Details() {
  const params = useParams();
  const countries = useSelector((state) => state.countries);
  const filteredCountry = countries.filter((country) => (country.name.official === params.id));
  const bordersArr = [];
  const languagesArr = [];

  // Check for borders
  const handleBorders = () => {
    for (let i = 0; i < filteredCountry[0].borders.length; i += 1) {
      bordersArr.push(filteredCountry[0].borders[i]);
    }
  };

  if (filteredCountry[0].borders) {
    handleBorders();
  }

  // Handle Languages
  const handleLanguages = () => {
    const languagesVal = Object.values(filteredCountry[0].languages);
    for (let i = 0; i < languagesVal.length; i += 1) {
      languagesArr.push(languagesVal[i]);
    }
  };

  handleLanguages();

  // Handle Currencies
  const currenciesArr = [];
  const handleCurrencies = () => {
    const currenciesVal = Object.values(filteredCountry[0].currencies);
    for (let i = 0; i < currenciesVal.length; i += 1) {
      currenciesArr.push(currenciesVal[i]);
      // console.log(currenciesVal[i]);
    }
    // console.log(currenciesVal);
  };

  if (filteredCountry[0].currencies) {
    handleCurrencies();
  }

  // console.log(Object.values(filteredCountry[0].languages))
  // const { languages } = Object.values(filteredCountry[0].languages)
  // console.log(`${currenciesArr} from details`);
  // console.log(filteredCurrency)

  return (
    <div className="details-container">
      <NavLink to="/">
        <button className="back-btn" type="button">
          <img className="back-arrow" src={backArrow} alt="Back" />
          Back
        </button>
      </NavLink>
      {filteredCountry.map((country) => (
        <section key={country.name.official} className="country-detail-section">
          <picture>
            <img className="for-mobile" src={country.flags.png} alt={`Flag of ${country.name.official}`} />
            <img className="svg-flag for-desk" src={country.flags.svg} alt={`Flag of ${country.name.official}`} />
          </picture>
          <div className="country-detail-info-container">
            <h1>{country.name.official}</h1>
            <section className="detail-info-section-container">
              <div className="detail-info-section">
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
              </div>
              <div className="detail-info-section">
                <h4>
                  Top Level Domain:
                  <span className="details-mobile-info-data">{country.tld}</span>
                </h4>
                <h4>
                  Currencies:
                  {/* {filteredCurrency.map((currency) => (
                    <span key={currency.name} className="details-mobile-info-data">{currency.name}
                    </span>
                  ))} */}
                </h4>
                <h4>
                  Languages:
                  {languagesArr.map((language) => (
                    <span key={language} className="details-mobile-info-data">
                      {language}
                      ,
                    </span>
                  ))}
                </h4>
              </div>
            </section>
            <section className="border-container">
              { country.borders ? (
                <>
                  <h4>Border Countries:</h4>
                  <h4 className="border-on-i-container">
                    {bordersArr.map((border) => <div className="border-on-i" key={border}>{border}</div>)}
                  </h4>
                </>
              ) : null }
            </section>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Details;
