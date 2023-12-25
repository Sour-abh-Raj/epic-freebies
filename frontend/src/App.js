import React, { useState } from "react";
import "./App.css";
import constants from "./constants";
import Header from "./components/Header";
import CustomizedMenus from "./components/CustomizedMenus";
import Submit from "./components/Submit";
import ErrorComponent from "./components/Error";
import Table from "./components/Table";
import Footer from "./components/Footer";

function App() {
  const [selectedCountry, setSelectedCountry] = useState(
    constants.default_country
  );
  const [selectedLanguage, setSelectedLanguage] = useState(
    constants.default_language
  );
  const [showTextBox, setShowTextBox] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [error, setError] = useState(null);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const handleSubmit = () => {
    fetch(
      `${constants.api_url}?country=${selectedCountry}&locale=${selectedLanguage}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data.");
        }
        return res.json();
      })
      .then((data) => {
        setApiData(data);
        setShowTextBox(true);
        setError(null);
        console.log(data);
      })
      .catch((err) => {
        setError("Failed to fetch data. Please try again.");
        setShowTextBox(false);
        setApiData(null);
        console.log(err);
      });
  };

  const handleGoBack = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="animation-container">
        <div className="lightning-container">
          <div className="lightning white"></div>
          <div className="lightning red"></div>
        </div>
        <div className="boom-container">
          <div className="shape circle big white"></div>
          <div className="shape circle white"></div>
          <div className="shape triangle big yellow"></div>
          <div className="shape disc white"></div>
          <div className="shape triangle blue"></div>
        </div>
        <div className="boom-container second">
          <div className="shape circle big white"></div>
          <div className="shape circle white"></div>
          <div className="shape disc white"></div>
          <div className="shape triangle blue"></div>
        </div>
      </div>
      {/* <div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div> */}
      <div className="App-Header">
        <Header
          poster_title={constants.header_title_text}
          poster_subtitle={constants.header_subtitle_text}
        />
      </div>
      {!showTextBox && (
        <div className="Select-Boxes">
          <span> {constants.select_country_text} </span>
          <CustomizedMenus
            options={constants.country_options}
            defaultOption={selectedCountry}
            onChange={handleCountryChange}
          />
          <span style={{ marginLeft: "60px" }}>
            {" "}
            {constants.select_language_text}{" "}
          </span>
          <CustomizedMenus
            options={constants.language_options}
            defaultOption={selectedLanguage}
            onChange={handleLanguageChange}
          />
        </div>
      )}
      <div className="Submit-Button">
        {showTextBox ? (
          <Submit
            buttonLabel={constants.refresh_button_text}
            onSubmit={handleGoBack}
          />
        ) : (
          <Submit
            buttonLabel={constants.submit_button_text}
            onSubmit={handleSubmit}
          />
        )}
      </div>
      <div className="App-Data">
        {showTextBox &&
        apiData &&
        apiData.data &&
        apiData.data.Catalog &&
        apiData.data.Catalog.searchStore &&
        apiData.data.Catalog.searchStore.elements ? (
          <Table
            gamesData={apiData.data.Catalog.searchStore.elements}
            titleText={constants.table_columns[0].label}
            effectiveDateText={constants.table_columns[1].label}
            expiryDateText={constants.table_columns[2].label}
            iconText={constants.table_columns[3].label}
          />
        ) : null}
        {!showTextBox && error && <ErrorComponent errorMessage={error} />}
      </div>
      <div className="App-Footer">
        <Footer
          footerText={constants.footer_text}
          footerLinks={constants.footer_links}
        />
      </div>
    </div>
  );
}

export default App;
