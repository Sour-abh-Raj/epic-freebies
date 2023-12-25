const header_title_text = "Epic Freebies";
const header_subtitle_text =
  "Get the latest freebie info offered by epic games...";
const submit_button_text = "Get Freebies";
const refresh_button_text = "Go Back";
const error_text = "Something went wrong. Please try again later.";
const footer_text = "Made with ❤️ by Sourabh Raj";
const api_url = "http://localhost:4000/fetchGames";
const footer_links = [
  {
    linkText: "Instagram",
    linkURL: "https://www.instagram.com/acidcat9",
  },
  {
    linkText: "LinkedIn",
    linkURL: "https://www.linkedin.com/in/sourabh-raj-863271168",
  },
  {
    linkText: "GitHub",
    linkURL: "https://github.com/Sour-abh-Raj",
  },
  {
    linkText: "X",
    linkURL: "https://x.com/_SoUrAbH_rAj_",
  },
];
const country_options = [
  "TR",
  "US",
  "GB",
  "DE",
  "AR",
  "ES",
  "MX",
  "FR",
  "IT",
  "JP",
  "KR",
  "PL",
  "BR",
  "RU",
  "TH",
  "CN",
  "IN",
  "GR",
];

const default_country = "US";

const language_options = [
  "tr",
  "ja",
  "ar",
  "de",
  "en-US",
  "es-ES",
  "es-MX",
  "fr",
  "it",
  "ko",
  "pl",
  "pt-BR",
  "ru",
  "th",
  "zh-CN",
  "zh-Hant",
];

const default_language = "en-US";

const select_country_text = "Select Country 🌎 :";
const select_language_text = "Select Language 🌐 :";

const table_columns = [
  {
    id: "title",
    label: "Title",
    minWidth: 170,
  },
  {
    id: "effectiveDate",
    label: "Effective Date",
    minWidth: 170,
  },
  {
    id: "expiry",
    label: "Expiry Date",
    minWidth: 170,
  },
  {
    id: "icon",
    label: "",
    minWidth: 170,
  },
];

const constants = {
  header_title_text,
  header_subtitle_text,
  submit_button_text,
  refresh_button_text,
  footer_text,
  footer_links,
  country_options,
  language_options,
  default_country,
  default_language,
  select_country_text,
  select_language_text,
  error_text,
  table_columns,
  api_url,
};

export default constants;
