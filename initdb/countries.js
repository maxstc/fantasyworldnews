//list of countries, country names/adjectives, country codes, and continents

const countries = [
  {
    "flag": "🇦🇩",
    "name": [
      "Andorra",
      "Andorran"
    ],
    "countrycode": "AD",
    "continent": "Europe",
    "displayName": "Andorra"
  },
  {
    "flag": "🇦🇪",
    "name": [
      "United Arab Emirates",
      "Emirati"
    ],
    "countrycode": "AE",
    "continent": "Asia",
    "displayName": "United Arab Emirates"
  },
  {
    "flag": "🇦🇫",
    "name": [
      "Afghanistan",
      "Afghan"
    ],
    "countrycode": "AF",
    "continent": "Asia",
    "displayName": "Afghanistan"
  },
  {
    "flag": "🇦🇬",
    "name": [
      "Antigua and Barbuda",
      "Antiguan, Barbudan"
    ],
    "countrycode": "AG",
    "continent": "North America",
    "displayName": "Antigua and Barbuda"
  },
  {
    "flag": "🇦🇮",
    "name": [
      "Anguilla",
      "Anguillian"
    ],
    "countrycode": "AI",
    "continent": "North America",
    "displayName": "Anguilla"
  },
  {
    "flag": "🇦🇱",
    "name": [
      "Albania",
      "Albanian"
    ],
    "countrycode": "AL",
    "continent": "Europe",
    "displayName": "Albania"
  },
  {
    "flag": "🇦🇲",
    "name": [
      "Armenia",
      "Armenian"
    ],
    "countrycode": "AM",
    "continent": "Asia",
    "displayName": "Armenia"
  },
  {
    "flag": "🇦🇴",
    "name": [
      "Angola",
      "Angolan"
    ],
    "countrycode": "AO",
    "continent": "Africa",
    "displayName": "Angola"
  },
  {
    "flag": "🇦🇷",
    "name": [
      "Argentina",
      "Argentine"
    ],
    "countrycode": "AR",
    "continent": "South America",
    "displayName": "Argentina"
  },
  {
    "flag": "🇦🇹",
    "name": [
      "Austria",
      "Austrian"
    ],
    "countrycode": "AT",
    "continent": "Europe",
    "displayName": "Austria"
  },
  {
    "flag": "🇦🇺",
    "name": [
      "Australia",
      "Australian"
    ],
    "countrycode": "AU",
    "continent": "Oceania",
    "displayName": "Australia"
  },
  {
    "flag": "🇦🇿",
    "name": [
      "Azerbaijan",
      "Azerbaijani"
    ],
    "countrycode": "AZ",
    "continent": "Asia",
    "displayName": "Azerbaijan"
  },
  {
    "flag": "🇧🇦",
    "name": [
      "Bosnia and Herzegovina",
      "Bosnian, Herzegovinian"
    ],
    "countrycode": "BA",
    "continent": "Europe",
    "displayName": "Bosnia and Herzegovina"
  },
  {
    "flag": "🇧🇧",
    "name": [
      "Barbados",
      "Barbadian"
    ],
    "countrycode": "BB",
    "continent": "North America",
    "displayName": "Barbados"
  },
  {
    "flag": "🇧🇩",
    "name": [
      "Bangladesh",
      "Bangladeshi"
    ],
    "countrycode": "BD",
    "continent": "Asia",
    "displayName": "Bangladesh"
  },
  {
    "flag": "🇧🇪",
    "name": [
      "Belgium",
      "Belgian"
    ],
    "countrycode": "BE",
    "continent": "Europe",
    "displayName": "Belgium"
  },
  {
    "flag": "🇧🇫",
    "name": [
      "Burkina Faso",
      "Burkinabe"
    ],
    "countrycode": "BF",
    "continent": "Africa",
    "displayName": "Burkina Faso"
  },
  {
    "flag": "🇧🇬",
    "name": [
      "Bulgaria",
      "Bulgarian"
    ],
    "countrycode": "BG",
    "continent": "Europe",
    "displayName": "Bulgaria"
  },
  {
    "flag": "🇧🇭",
    "name": [
      "Bahrain",
      "Bahraini"
    ],
    "countrycode": "BH",
    "continent": "Asia",
    "displayName": "Bahrain"
  },
  {
    "flag": "🇧🇮",
    "name": [
      "Burundi",
      "Burundian"
    ],
    "countrycode": "BI",
    "continent": "Africa",
    "displayName": "Burundi"
  },
  {
    "flag": "🇧🇯",
    "name": [
      "Benin",
      "Beninese"
    ],
    "countrycode": "BJ",
    "continent": "Africa",
    "displayName": "Benin"
  },
  {
    "flag": "🇧🇳",
    "name": [
      "Brunei",
      "Bruneian"
    ],
    "countrycode": "BN",
    "continent": "Asia",
    "displayName": "Brunei"
  },
  {
    "flag": "🇧🇴",
    "name": [
      "Bolivia",
      "Bolivian"
    ],
    "countrycode": "BO",
    "continent": "South America",
    "displayName": "Bolivia"
  },
  {
    "flag": "🇧🇷",
    "name": [
      "Brazil",
      "Brazilian"
    ],
    "countrycode": "BR",
    "continent": "South America",
    "displayName": "Brazil"
  },
  {
    "flag": "🇧🇸",
    "name": [
      "Bahamas",
      "Bahamian"
    ],
    "countrycode": "BS",
    "continent": "North America",
    "displayName": "Bahamas"
  },
  {
    "flag": "🇧🇹",
    "name": [
      "Bhutan",
      "Bhutanese"
    ],
    "countrycode": "BT",
    "continent": "Asia",
    "displayName": "Bhutan"
  },
  {
    "flag": "🇧🇼",
    "name": [
      "Botswana",
      "Motswana"
    ],
    "countrycode": "BW",
    "continent": "Africa",
    "displayName": "Botswana"
  },
  {
    "flag": "🇧🇾",
    "name": [
      "Belarus",
      "Belarusian"
    ],
    "countrycode": "BY",
    "continent": "Europe",
    "displayName": "Belarus"
  },
  {
    "flag": "🇧🇿",
    "name": [
      "Belize",
      "Belizean"
    ],
    "countrycode": "BZ",
    "continent": "North America",
    "displayName": "Belize"
  },
  {
    "flag": "🇨🇦",
    "name": [
      "Canada",
      "Canadian"
    ],
    "countrycode": "CA",
    "continent": "North America",
    "displayName": "Canada"
  },
  {
    "flag": "🇨🇩",
    "name": [
      "DR Congo",
      "Congolese"
    ],
    "countrycode": "CD",
    "continent": "Africa",
    "displayName": "DR Congo"
  },
  {
    "flag": "🇨🇫",
    "name": [
      "Central African Republic",
      "Central African"
    ],
    "countrycode": "CF",
    "continent": "Africa",
    "displayName": "Central African Republic"
  },
  {
    "flag": "🇨🇬",
    "name": [
      "Republic of the Congo",
      "Congolese"
    ],
    "countrycode": "CG",
    "continent": "Africa",
    "displayName": "Republic of the Congo"
  },
  {
    "flag": "🇨🇭",
    "name": [
      "Switzerland",
      "Swiss"
    ],
    "countrycode": "CH",
    "continent": "Europe",
    "displayName": "Switzerland"
  },
  {
    "flag": "🇨🇮",
    "name": [
      "Ivory Coast",
      "Ivorian"
    ],
    "countrycode": "CI",
    "continent": "Africa",
    "displayName": "Ivory Coast"
  },
  {
    "flag": "🇨🇱",
    "name": [
      "Chile",
      "Chilean"
    ],
    "countrycode": "CL",
    "continent": "South America",
    "displayName": "Chile"
  },
  {
    "flag": "🇨🇲",
    "name": [
      "Cameroon",
      "Cameroonian"
    ],
    "countrycode": "CM",
    "continent": "Africa",
    "displayName": "Cameroon"
  },
  {
    "flag": "🇨🇳",
    "name": [
      "China",
      "Chinese"
    ],
    "countrycode": "CN",
    "continent": "Asia",
    "displayName": "China"
  },
  {
    "flag": "🇨🇴",
    "name": [
      "Colombia",
      "Colombian"
    ],
    "countrycode": "CO",
    "continent": "South America",
    "displayName": "Colombia"
  },
  {
    "flag": "🇨🇷",
    "name": [
      "Costa Rica",
      "Costa Rican"
    ],
    "countrycode": "CR",
    "continent": "North America",
    "displayName": "Costa Rica"
  },
  {
    "flag": "🇨🇺",
    "name": [
      "Cuba",
      "Cuban"
    ],
    "countrycode": "CU",
    "continent": "North America",
    "displayName": "Cuba"
  },
  {
    "flag": "🇨🇻",
    "name": [
      "Cape Verde",
      "Cape Verdian"
    ],
    "countrycode": "CV",
    "continent": "Africa",
    "displayName": "Cape Verde"
  },
  {
    "flag": "🇨🇾",
    "name": [
      "Cyprus",
      "Cypriot"
    ],
    "countrycode": "CY",
    "continent": "Asia",
    "displayName": "Cyprus"
  },
  {
    "flag": "🇨🇿",
    "name": [
      "Czechia",
      "Czech"
    ],
    "countrycode": "CZ",
    "continent": "Europe",
    "displayName": "Czechia"
  },
  {
    "flag": "🇩🇪",
    "name": [
      "Germany",
      "German"
    ],
    "countrycode": "DE",
    "continent": "Europe",
    "displayName": "Germany"
  },
  {
    "flag": "🇩🇯",
    "name": [
      "Djibouti",
      "Djibouti"
    ],
    "countrycode": "DJ",
    "continent": "Africa",
    "displayName": "Djibouti"
  },
  {
    "flag": "🇩🇰",
    "name": [
      "Denmark",
      "Danish"
    ],
    "countrycode": "DK",
    "continent": "Europe",
    "displayName": "Denmark"
  },
  {
    "flag": "🇩🇲",
    "name": [
      "Dominica",
      "Dominican"
    ],
    "countrycode": "DM",
    "continent": "North America",
    "displayName": "Dominica"
  },
  {
    "flag": "🇩🇴",
    "name": [
      "Dominican Republic",
      "Dominican"
    ],
    "countrycode": "DO",
    "continent": "North America",
    "displayName": "Dominican Republic"
  },
  {
    "flag": "🇩🇿",
    "name": [
      "Algeria",
      "Algerian"
    ],
    "countrycode": "DZ",
    "continent": "Africa",
    "displayName": "Algeria"
  },
  {
    "flag": "🇪🇨",
    "name": [
      "Ecuador",
      "Ecuadorean"
    ],
    "countrycode": "EC",
    "continent": "South America",
    "displayName": "Ecuador"
  },
  {
    "flag": "🇪🇪",
    "name": [
      "Estonia",
      "Estonian"
    ],
    "countrycode": "EE",
    "continent": "Europe",
    "displayName": "Estonia"
  },
  {
    "flag": "🇪🇬",
    "name": [
      "Egypt",
      "Egyptian"
    ],
    "countrycode": "EG",
    "continent": "Africa",
    "displayName": "Egypt"
  },
  {
    "flag": "🇪🇷",
    "name": [
      "Eritrea",
      "Eritrean"
    ],
    "countrycode": "ER",
    "continent": "Africa",
    "displayName": "Eritrea"
  },
  {
    "flag": "🇪🇸",
    "name": [
      "Spain",
      "Spanish"
    ],
    "countrycode": "ES",
    "continent": "Europe",
    "displayName": "Spain"
  },
  {
    "flag": "🇪🇹",
    "name": [
      "Ethiopia",
      "Ethiopian"
    ],
    "countrycode": "ET",
    "continent": "Africa",
    "displayName": "Ethiopia"
  },
  {
    "flag": "🇫🇮",
    "name": [
      "Finland",
      "Finnish"
    ],
    "countrycode": "FI",
    "continent": "Europe",
    "displayName": "Finland"
  },
  {
    "flag": "🇫🇯",
    "name": [
      "Fiji",
      "Fijian"
    ],
    "countrycode": "FJ",
    "continent": "Oceania",
    "displayName": "Fiji"
  },
  {
    "flag": "🇫🇲",
    "name": [
      "Micronesia",
      "Micronesian"
    ],
    "countrycode": "FM",
    "continent": "Oceania",
    "displayName": "Micronesia"
  },
  {
    "flag": "🇫🇷",
    "name": [
      "France",
      "French"
    ],
    "countrycode": "FR",
    "continent": "Europe",
    "displayName": "France"
  },
  {
    "flag": "🇬🇦",
    "name": [
      "Gabon",
      "Gabonese"
    ],
    "countrycode": "GA",
    "continent": "Africa",
    "displayName": "Gabon"
  },
  {
    "flag": "🇬🇧",
    "name": [
      "United Kingdom",
      "British"
    ],
    "countrycode": "GB",
    "continent": "Europe",
    "displayName": "United Kingdom"
  },
  {
    "flag": "🇺🇸",
    "name": [
      "America",
      "American",
      "USA",
      "U.S.A.",
      "U.S.",
      "US",
      "United States"
    ],
    "countrycode": "US",
    "continent": "North America",
    "displayName": "United States"
  },
  {
    "flag": "🇬🇩",
    "name": [
      "Grenada",
      "Grenadian"
    ],
    "countrycode": "GD",
    "continent": "North America",
    "displayName": "Grenada"
  },
  {
    "flag": "🇬🇪",
    "name": [
      "Georgia",
      "Georgian"
    ],
    "countrycode": "GE",
    "continent": "Asia",
    "displayName": "Georgia"
  },
  {
    "flag": "🇬🇭",
    "name": [
      "Ghana",
      "Ghanaian"
    ],
    "countrycode": "GH",
    "continent": "Africa",
    "displayName": "Ghana"
  },
  {
    "flag": "🇬🇲",
    "name": [
      "Gambia",
      "Gambian"
    ],
    "countrycode": "GM",
    "continent": "Africa",
    "displayName": "Gambia"
  },
  {
    "flag": "🇬🇳",
    "name": [
      "Guinea",
      "Guinean"
    ],
    "countrycode": "GN",
    "continent": "Africa",
    "displayName": "Guinea"
  },
  {
    "flag": "🇬🇶",
    "name": [
      "Equatorial Guinea",
      "Equatorial Guinean"
    ],
    "countrycode": "GQ",
    "continent": "Africa",
    "displayName": "Equatorial Guinea"
  },
  {
    "flag": "🇬🇷",
    "name": [
      "Greece",
      "Greek"
    ],
    "countrycode": "GR",
    "continent": "Europe",
    "displayName": "Greece"
  },
  {
    "flag": "🇬🇹",
    "name": [
      "Guatemala",
      "Guatemalan"
    ],
    "countrycode": "GT",
    "continent": "North America",
    "displayName": "Guatemala"
  },
  {
    "flag": "🇬🇼",
    "name": [
      "Guinea-Bissau",
      "Guinea-Bissauan"
    ],
    "countrycode": "GW",
    "continent": "Africa",
    "displayName": "Guinea-Bissau"
  },
  {
    "flag": "🇬🇾",
    "name": [
      "Guyana",
      "Guyanese"
    ],
    "countrycode": "GY",
    "continent": "South America",
    "displayName": "Guyana"
  },
  {
    "flag": "🇭🇳",
    "name": [
      "Honduras",
      "Honduran"
    ],
    "countrycode": "HN",
    "continent": "North America",
    "displayName": "Honduras"
  },
  {
    "flag": "🇭🇷",
    "name": [
      "Croatia",
      "Croatian"
    ],
    "countrycode": "HR",
    "continent": "Europe",
    "displayName": "Croatia"
  },
  {
    "flag": "🇭🇹",
    "name": [
      "Haiti",
      "Haitian"
    ],
    "countrycode": "HT",
    "continent": "North America",
    "displayName": "Haiti"
  },
  {
    "flag": "🇭🇺",
    "name": [
      "Hungary",
      "Hungarian"
    ],
    "countrycode": "HU",
    "continent": "Europe",
    "displayName": "Hungary"
  },
  {
    "flag": "🇮🇩",
    "name": [
      "Indonesia",
      "Indonesian"
    ],
    "countrycode": "ID",
    "continent": "Asia",
    "displayName": "Indonesia"
  },
  {
    "flag": "🇮🇪",
    "name": [
      "Ireland",
      "Irish"
    ],
    "countrycode": "IE",
    "continent": "Europe",
    "displayName": "Ireland"
  },
  {
    "flag": "🇮🇱",
    "name": [
      "Israel",
      "Israeli"
    ],
    "countrycode": "IL",
    "continent": "Asia",
    "displayName": "Israel"
  },
  {
    "flag": "🇮🇳",
    "name": [
      "India",
      "Indian"
    ],
    "countrycode": "IN",
    "continent": "Asia",
    "displayName": "India"
  },
  {
    "flag": "🇮🇶",
    "name": [
      "Iraq",
      "Iraqi"
    ],
    "countrycode": "IQ",
    "continent": "Asia",
    "displayName": "Iraq"
  },
  {
    "flag": "🇮🇷",
    "name": [
      "Iran",
      "Iranian"
    ],
    "countrycode": "IR",
    "continent": "Asia",
    "displayName": "Iran"
  },
  {
    "flag": "🇮🇸",
    "name": [
      "Iceland",
      "Icelander"
    ],
    "countrycode": "IS",
    "continent": "Europe",
    "displayName": "Iceland"
  },
  {
    "flag": "🇮🇹",
    "name": [
      "Italy",
      "Italian"
    ],
    "countrycode": "IT",
    "continent": "Europe",
    "displayName": "Italy"
  },
  {
    "flag": "🇯🇲",
    "name": [
      "Jamaica",
      "Jamaican"
    ],
    "countrycode": "JM",
    "continent": "North America",
    "displayName": "Jamaica"
  },
  {
    "flag": "🇯🇴",
    "name": [
      "Jordan",
      "Jordanian"
    ],
    "countrycode": "JO",
    "continent": "Asia",
    "displayName": "Jordan"
  },
  {
    "flag": "🇯🇵",
    "name": [
      "Japan",
      "Japanese"
    ],
    "countrycode": "JP",
    "continent": "Asia",
    "displayName": "Japan"
  },
  {
    "flag": "🇰🇪",
    "name": [
      "Kenya",
      "Kenyan"
    ],
    "countrycode": "KE",
    "continent": "Africa",
    "displayName": "Kenya"
  },
  {
    "flag": "🇰🇬",
    "name": [
      "Kyrgyzstan",
      "Kirghiz"
    ],
    "countrycode": "KG",
    "continent": "Asia",
    "displayName": "Kyrgyzstan"
  },
  {
    "flag": "🇰🇭",
    "name": [
      "Cambodia",
      "Cambodian"
    ],
    "countrycode": "KH",
    "continent": "Asia",
    "displayName": "Cambodia"
  },
  {
    "flag": "🇰🇮",
    "name": [
      "Kiribati",
      "I-Kiribati"
    ],
    "countrycode": "KI",
    "continent": "Oceania",
    "displayName": "Kiribati"
  },
  {
    "flag": "🇰🇲",
    "name": [
      "Comoros",
      "Comoran"
    ],
    "countrycode": "KM",
    "continent": "Africa",
    "displayName": "Comoros"
  },
  {
    "flag": "🇰🇳",
    "name": [
      "Saint Kitts and Nevis",
      "Kittitian, Nevisian"
    ],
    "countrycode": "KN",
    "continent": "North America",
    "displayName": "Saint Kitts and Nevis"
  },
  {
    "flag": "🇰🇵",
    "name": [
      "North Korea",
      "North Korean"
    ],
    "countrycode": "KP",
    "continent": "Asia",
    "displayName": "North Korea"
  },
  {
    "flag": "🇰🇷",
    "name": [
      "South Korea",
      "South Korean"
    ],
    "countrycode": "KR",
    "continent": "Asia",
    "displayName": "South Korea"
  },
  {
    "flag": "🇰🇼",
    "name": [
      "Kuwait",
      "Kuwaiti"
    ],
    "countrycode": "KW",
    "continent": "Asia",
    "displayName": "Kuwait"
  },
  {
    "flag": "🇰🇾",
    "name": [
      "Cayman Islands",
      "Caymanian"
    ],
    "countrycode": "KY",
    "continent": "North America",
    "displayName": "Cayman Islands"
  },
  {
    "flag": "🇰🇿",
    "name": [
      "Kazakhstan",
      "Kazakhstani"
    ],
    "countrycode": "KZ",
    "continent": "Asia",
    "displayName": "Kazakhstan"
  },
  {
    "flag": "🇱🇦",
    "name": [
      "Laos",
      "Laotian"
    ],
    "countrycode": "LA",
    "continent": "Asia",
    "displayName": "Laos"
  },
  {
    "flag": "🇱🇧",
    "name": [
      "Lebanon",
      "Lebanese"
    ],
    "countrycode": "LB",
    "continent": "Asia",
    "displayName": "Lebanon"
  },
  {
    "flag": "🇱🇨",
    "name": [
      "Saint Lucia",
      "Saint Lucian"
    ],
    "countrycode": "LC",
    "continent": "North America",
    "displayName": "Saint Lucia"
  },
  {
    "flag": "🇱🇮",
    "name": [
      "Liechtenstein",
      "Liechtensteiner"
    ],
    "countrycode": "LI",
    "continent": "Europe",
    "displayName": "Liechtenstein"
  },
  {
    "flag": "🇱🇰",
    "name": [
      "Sri Lanka",
      "Sri Lankan"
    ],
    "countrycode": "LK",
    "continent": "Asia",
    "displayName": "Sri Lanka"
  },
  {
    "flag": "🇱🇷",
    "name": [
      "Liberia",
      "Liberian"
    ],
    "countrycode": "LR",
    "continent": "Africa",
    "displayName": "Liberia"
  },
  {
    "flag": "🇱🇸",
    "name": [
      "Lesotho",
      "Mosotho"
    ],
    "countrycode": "LS",
    "continent": "Africa",
    "displayName": "Lesotho"
  },
  {
    "flag": "🇱🇹",
    "name": [
      "Lithuania",
      "Lithuanian"
    ],
    "countrycode": "LT",
    "continent": "Europe",
    "displayName": "Lithuania"
  },
  {
    "flag": "🇱🇺",
    "name": [
      "Luxembourg",
      "Luxembourger"
    ],
    "countrycode": "LU",
    "continent": "Europe",
    "displayName": "Luxembourg"
  },
  {
    "flag": "🇱🇻",
    "name": [
      "Latvia",
      "Latvian"
    ],
    "countrycode": "LV",
    "continent": "Europe",
    "displayName": "Latvia"
  },
  {
    "flag": "🇱🇾",
    "name": [
      "Libya",
      "Libyan"
    ],
    "countrycode": "LY",
    "continent": "Africa",
    "displayName": "Libya"
  },
  {
    "flag": "🇲🇦",
    "name": [
      "Morocco",
      "Moroccan"
    ],
    "countrycode": "MA",
    "continent": "Africa",
    "displayName": "Morocco"
  },
  {
    "flag": "🇲🇨",
    "name": [
      "Monaco",
      "Monegasque"
    ],
    "countrycode": "MC",
    "continent": "Europe",
    "displayName": "Monaco"
  },
  {
    "flag": "🇲🇩",
    "name": [
      "Moldova",
      "Moldovan"
    ],
    "countrycode": "MD",
    "continent": "Europe",
    "displayName": "Moldova"
  },
  {
    "flag": "🇲🇪",
    "name": [
      "Montenegro",
      "Montenegrin"
    ],
    "countrycode": "ME",
    "continent": "Europe",
    "displayName": "Montenegro"
  },
  {
    "flag": "🇲🇬",
    "name": [
      "Madagascar",
      "Malagasy"
    ],
    "countrycode": "MG",
    "continent": "Africa",
    "displayName": "Madagascar"
  },
  {
    "flag": "🇲🇭",
    "name": [
      "Marshall Islands",
      "Marshallese"
    ],
    "countrycode": "MH",
    "continent": "Oceania",
    "displayName": "Marshall Islands"
  },
  {
    "flag": "🇲🇰",
    "name": [
      "North Macedonia",
      "Macedonian"
    ],
    "countrycode": "MK",
    "continent": "Europe",
    "displayName": "North Macedonia"
  },
  {
    "flag": "🇲🇱",
    "name": [
      "Mali",
      "Malian"
    ],
    "countrycode": "ML",
    "continent": "Africa",
    "displayName": "Mali"
  },
  {
    "flag": "🇲🇲",
    "name": [
      "Myanmar",
      "Burmese"
    ],
    "countrycode": "MM",
    "continent": "Asia",
    "displayName": "Myanmar"
  },
  {
    "flag": "🇲🇳",
    "name": [
      "Mongolia",
      "Mongolian"
    ],
    "countrycode": "MN",
    "continent": "Asia",
    "displayName": "Mongolia"
  },
  {
    "flag": "🇲🇷",
    "name": [
      "Mauritania",
      "Mauritanian"
    ],
    "countrycode": "MR",
    "continent": "Africa",
    "displayName": "Mauritania"
  },
  {
    "flag": "🇲🇹",
    "name": [
      "Malta",
      "Maltese"
    ],
    "countrycode": "MT",
    "continent": "Europe",
    "displayName": "Malta"
  },
  {
    "flag": "🇲🇺",
    "name": [
      "Mauritius",
      "Mauritian"
    ],
    "countrycode": "MU",
    "continent": "Africa",
    "displayName": "Mauritius"
  },
  {
    "flag": "🇲🇻",
    "name": [
      "Maldives",
      "Maldivan"
    ],
    "countrycode": "MV",
    "continent": "Asia",
    "displayName": "Maldives"
  },
  {
    "flag": "🇲🇼",
    "name": [
      "Malawi",
      "Malawian"
    ],
    "countrycode": "MW",
    "continent": "Africa",
    "displayName": "Malawi"
  },
  {
    "flag": "🇲🇽",
    "name": [
      "Mexico",
      "Mexican"
    ],
    "countrycode": "MX",
    "continent": "North America",
    "displayName": "Mexico"
  },
  {
    "flag": "🇲🇾",
    "name": [
      "Malaysia",
      "Malaysian"
    ],
    "countrycode": "MY",
    "continent": "Asia",
    "displayName": "Malaysia"
  },
  {
    "flag": "🇲🇿",
    "name": [
      "Mozambique",
      "Mozambican"
    ],
    "countrycode": "MZ",
    "continent": "Africa",
    "displayName": "Mozambique"
  },
  {
    "flag": "🇳🇦",
    "name": [
      "Namibia",
      "Namibian"
    ],
    "countrycode": "NA",
    "continent": "Africa",
    "displayName": "Namibia"
  },
  {
    "flag": "🇳🇪",
    "name": [
      "Niger",
      "Nigerien"
    ],
    "countrycode": "NE",
    "continent": "Africa",
    "displayName": "Niger"
  },
  {
    "flag": "🇳🇬",
    "name": [
      "Nigeria",
      "Nigerian"
    ],
    "countrycode": "NG",
    "continent": "Africa",
    "displayName": "Nigeria"
  },
  {
    "flag": "🇳🇮",
    "name": [
      "Nicaragua",
      "Nicaraguan"
    ],
    "countrycode": "NI",
    "continent": "North America",
    "displayName": "Nicaragua"
  },
  {
    "flag": "🇳🇱",
    "name": [
      "Netherlands",
      "Dutch"
    ],
    "countrycode": "NL",
    "continent": "Europe",
    "displayName": "Netherlands"
  },
  {
    "flag": "🇳🇴",
    "name": [
      "Norway",
      "Norwegian"
    ],
    "countrycode": "NO",
    "continent": "Europe",
    "displayName": "Norway"
  },
  {
    "flag": "🇳🇵",
    "name": [
      "Nepal",
      "Nepalese"
    ],
    "countrycode": "NP",
    "continent": "Asia",
    "displayName": "Nepal"
  },
  {
    "flag": "🇳🇷",
    "name": [
      "Nauru",
      "Nauruan"
    ],
    "countrycode": "NR",
    "continent": "Oceania",
    "displayName": "Nauru"
  },
  {
    "flag": "🇳🇿",
    "name": [
      "New Zealand",
      "New Zealander"
    ],
    "countrycode": "NZ",
    "continent": "Oceania",
    "displayName": "New Zealand"
  },
  {
    "flag": "🇴🇲",
    "name": [
      "Oman",
      "Omani"
    ],
    "countrycode": "OM",
    "continent": "Asia",
    "displayName": "Oman"
  },
  {
    "flag": "🇵🇦",
    "name": [
      "Panama",
      "Panamanian"
    ],
    "countrycode": "PA",
    "continent": "North America",
    "displayName": "Panama"
  },
  {
    "flag": "🇵🇪",
    "name": [
      "Peru",
      "Peruvian"
    ],
    "countrycode": "PE",
    "continent": "South America",
    "displayName": "Peru"
  },
  {
    "flag": "🇵🇬",
    "name": [
      "Papua New Guinea",
      "Papua New Guinean"
    ],
    "countrycode": "PG",
    "continent": "Oceania",
    "displayName": "Papua New Guinea"
  },
  {
    "flag": "🇵🇭",
    "name": [
      "Philippines",
      "Filipino"
    ],
    "countrycode": "PH",
    "continent": "Asia",
    "displayName": "Philippines"
  },
  {
    "flag": "🇵🇰",
    "name": [
      "Pakistan",
      "Pakistani"
    ],
    "countrycode": "PK",
    "continent": "Asia",
    "displayName": "Pakistan"
  },
  {
    "flag": "🇵🇱",
    "name": [
      "Poland",
      "Polish"
    ],
    "countrycode": "PL",
    "continent": "Europe",
    "displayName": "Poland"
  },
  {
    "flag": "🇵🇷",
    "name": [
      "Puerto Rico",
      "Puerto Rican"
    ],
    "countrycode": "PR",
    "continent": "North America",
    "displayName": "Puerto Rico"
  },
  {
    "flag": "🇵🇸",
    "name": [
      "Palestine",
      "Palestinian"
    ],
    "countrycode": "PS",
    "continent": "Asia",
    "displayName": "Palestine"
  },
  {
    "flag": "🇵🇹",
    "name": [
      "Portugal",
      "Portuguese"
    ],
    "countrycode": "PT",
    "continent": "Europe",
    "displayName": "Portugal"
  },
  {
    "flag": "🇵🇼",
    "name": [
      "Palau",
      "Palauan"
    ],
    "countrycode": "PW",
    "continent": "Oceania",
    "displayName": "Palau"
  },
  {
    "flag": "🇵🇾",
    "name": [
      "Paraguay",
      "Paraguayan"
    ],
    "countrycode": "PY",
    "continent": "South America",
    "displayName": "Paraguay"
  },
  {
    "flag": "🇶🇦",
    "name": [
      "Qatar",
      "Qatari"
    ],
    "countrycode": "QA",
    "continent": "Asia",
    "displayName": "Qatar"
  },
  {
    "flag": "🇷🇴",
    "name": [
      "Romania",
      "Romanian"
    ],
    "countrycode": "RO",
    "continent": "Europe",
    "displayName": "Romania"
  },
  {
    "flag": "🇷🇸",
    "name": [
      "Serbia",
      "Serbian"
    ],
    "countrycode": "RS",
    "continent": "Europe",
    "displayName": "Serbia"
  },
  {
    "flag": "🇷🇺",
    "name": [
      "Russia",
      "Russian"
    ],
    "countrycode": "RU",
    "continent": "Europe",
    "displayName": "Russia"
  },
  {
    "flag": "🇷🇼",
    "name": [
      "Rwanda",
      "Rwandan"
    ],
    "countrycode": "RW",
    "continent": "Africa",
    "displayName": "Rwanda"
  },
  {
    "flag": "🇸🇦",
    "name": [
      "Saudi Arabia",
      "Saudi Arabian"
    ],
    "countrycode": "SA",
    "continent": "Asia",
    "displayName": "Saudi Arabia"
  },
  {
    "flag": "🇸🇧",
    "name": [
      "Solomon Islands",
      "Solomon Islander"
    ],
    "countrycode": "SB",
    "continent": "Oceania",
    "displayName": "Solomon Islands"
  },
  {
    "flag": "🇸🇨",
    "name": [
      "Seychelles",
      "Seychellois"
    ],
    "countrycode": "SC",
    "continent": "Africa",
    "displayName": "Seychelles"
  },
  {
    "flag": "🇸🇩",
    "name": [
      "Sudan",
      "Sudanese"
    ],
    "countrycode": "SD",
    "continent": "Africa",
    "displayName": "Sudan"
  },
  {
    "flag": "🇸🇪",
    "name": [
      "Sweden",
      "Swedish"
    ],
    "countrycode": "SE",
    "continent": "Europe",
    "displayName": "Sweden"
  },
  {
    "flag": "🇸🇬",
    "name": [
      "Singapore",
      "Singaporean"
    ],
    "countrycode": "SG",
    "continent": "Asia",
    "displayName": "Singapore"
  },
  {
    "flag": "🇸🇮",
    "name": [
      "Slovenia",
      "Slovene"
    ],
    "countrycode": "SI",
    "continent": "Europe",
    "displayName": "Slovenia"
  },
  {
    "flag": "🇸🇰",
    "name": [
      "Slovakia",
      "Slovak"
    ],
    "countrycode": "SK",
    "continent": "Europe",
    "displayName": "Slovakia"
  },
  {
    "flag": "🇸🇱",
    "name": [
      "Sierra Leone",
      "Sierra Leonean"
    ],
    "countrycode": "SL",
    "continent": "Africa",
    "displayName": "Sierra Leone"
  },
  {
    "flag": "🇸🇲",
    "name": [
      "San Marino",
      "Sammarinese"
    ],
    "countrycode": "SM",
    "continent": "Europe",
    "displayName": "San Marino"
  },
  {
    "flag": "🇸🇳",
    "name": [
      "Senegal",
      "Senegalese"
    ],
    "countrycode": "SN",
    "continent": "Africa",
    "displayName": "Senegal"
  },
  {
    "flag": "🇸🇴",
    "name": [
      "Somalia",
      "Somali"
    ],
    "countrycode": "SO",
    "continent": "Africa",
    "displayName": "Somalia"
  },
  {
    "flag": "🇸🇷",
    "name": [
      "Suriname",
      "Surinamer"
    ],
    "countrycode": "SR",
    "continent": "South America",
    "displayName": "Suriname"
  },
  {
    "flag": "🇸🇸",
    "name": [
      "South Sudan",
      "South Sudanese"
    ],
    "countrycode": "SS",
    "continent": "Africa",
    "displayName": "South Sudan"
  },
  {
    "flag": "🇸🇹",
    "name": [
      "São Tomé and Príncipe",
      "Sao Tomean"
    ],
    "countrycode": "ST",
    "continent": "Africa",
    "displayName": "São Tomé and Príncipe"
  },
  {
    "flag": "🇸🇻",
    "name": [
      "El Salvador",
      "Salvadoran"
    ],
    "countrycode": "SV",
    "continent": "North America",
    "displayName": "El Salvador"
  },
  {
    "flag": "🇸🇾",
    "name": [
      "Syria",
      "Syrian"
    ],
    "countrycode": "SY",
    "continent": "Asia",
    "displayName": "Syria"
  },
  {
    "flag": "🇸🇿",
    "name": [
      "Eswatini",
      "Swazi"
    ],
    "countrycode": "SZ",
    "continent": "Africa",
    "displayName": "Eswatini"
  },
  {
    "flag": "🇹🇩",
    "name": [
      "Chad",
      "Chadian"
    ],
    "countrycode": "TD",
    "continent": "Africa",
    "displayName": "Chad"
  },
  {
    "flag": "🇹🇬",
    "name": [
      "Togo",
      "Togolese"
    ],
    "countrycode": "TG",
    "continent": "Africa",
    "displayName": "Togo"
  },
  {
    "flag": "🇹🇭",
    "name": [
      "Thailand",
      "Thai"
    ],
    "countrycode": "TH",
    "continent": "Asia",
    "displayName": "Thailand"
  },
  {
    "flag": "🇹🇯",
    "name": [
      "Tajikistan",
      "Tadzhik"
    ],
    "countrycode": "TJ",
    "continent": "Asia",
    "displayName": "Tajikistan"
  },
  {
    "flag": "🇹🇰",
    "name": [
      "Tokelau",
      "Tokelauan"
    ],
    "countrycode": "TK",
    "continent": "Oceania",
    "displayName": "Tokelau"
  },
  {
    "flag": "🇹🇱",
    "name": [
      "Timor-Leste",
      "East Timorese"
    ],
    "countrycode": "TL",
    "continent": "Asia",
    "displayName": "Timor-Leste"
  },
  {
    "flag": "🇹🇲",
    "name": [
      "Turkmenistan",
      "Turkmen"
    ],
    "countrycode": "TM",
    "continent": "Asia",
    "displayName": "Turkmenistan"
  },
  {
    "flag": "🇹🇳",
    "name": [
      "Tunisia",
      "Tunisian"
    ],
    "countrycode": "TN",
    "continent": "Africa",
    "displayName": "Tunisia"
  },
  {
    "flag": "🇹🇴",
    "name": [
      "Tonga",
      "Tongan"
    ],
    "countrycode": "TO",
    "continent": "Oceania",
    "displayName": "Tonga"
  },
  {
    "flag": "🇹🇷",
    "name": [
      "Turkey",
      "Turkish"
    ],
    "countrycode": "TR",
    "continent": "Asia",
    "displayName": "Turkey"
  },
  {
    "flag": "🇹🇹",
    "name": [
      "Trinidad and Tobago",
      "Trinidadian"
    ],
    "countrycode": "TT",
    "continent": "North America",
    "displayName": "Trinidad and Tobago"
  },
  {
    "flag": "🇹🇻",
    "name": [
      "Tuvalu",
      "Tuvaluan"
    ],
    "countrycode": "TV",
    "continent": "Oceania",
    "displayName": "Tuvalu"
  },
  {
    "flag": "🇹🇼",
    "name": [
      "Taiwan",
      "Taiwanese"
    ],
    "countrycode": "TW",
    "continent": "Asia",
    "displayName": "Taiwan"
  },
  {
    "flag": "🇹🇿",
    "name": [
      "Tanzania",
      "Tanzanian"
    ],
    "countrycode": "TZ",
    "continent": "Africa",
    "displayName": "Tanzania"
  },
  {
    "flag": "🇺🇦",
    "name": [
      "Ukraine",
      "Ukrainian"
    ],
    "countrycode": "UA",
    "continent": "Europe",
    "displayName": "Ukraine"
  },
  {
    "flag": "🇺🇬",
    "name": [
      "Uganda",
      "Ugandan"
    ],
    "countrycode": "UG",
    "continent": "Africa",
    "displayName": "Uganda"
  },
  {
    "flag": "🇺🇾",
    "name": [
      "Uruguay",
      "Uruguayan"
    ],
    "countrycode": "UY",
    "continent": "South America",
    "displayName": "Uruguay"
  },
  {
    "flag": "🇺🇿",
    "name": [
      "Uzbekistan",
      "Uzbekistani"
    ],
    "countrycode": "UZ",
    "continent": "Asia",
    "displayName": "Uzbekistan"
  },
  {
    "flag": "🇻🇦",
    "name": [
      "Vatican City",
      "Vatican"
    ],
    "countrycode": "VA",
    "continent": "Europe",
    "displayName": "Vatican City"
  },
  {
    "flag": "🇻🇨",
    "name": [
      "Saint Vincent and the Grenadines",
      "Saint Vincentian"
    ],
    "countrycode": "VC",
    "continent": "North America",
    "displayName": "Saint Vincent and the Grenadines"
  },
  {
    "flag": "🇻🇪",
    "name": [
      "Venezuela",
      "Venezuelan"
    ],
    "countrycode": "VE",
    "continent": "South America",
    "displayName": "Venezuela"
  },
  {
    "flag": "🇻🇳",
    "name": [
      "Vietnam",
      "Vietnamese"
    ],
    "countrycode": "VN",
    "continent": "Asia",
    "displayName": "Vietnam"
  },
  {
    "flag": "🇻🇺",
    "name": [
      "Vanuatu",
      "Ni-Vanuatu"
    ],
    "countrycode": "VU",
    "continent": "Oceania",
    "displayName": "Vanuatu"
  },
  {
    "flag": "🇼🇸",
    "name": [
      "Samoa",
      "Samoan"
    ],
    "countrycode": "WS",
    "continent": "Oceania",
    "displayName": "Samoa"
  },
  {
    "flag": "🇽🇰",
    "name": [
      "Kosovo",
      "Kosovar"
    ],
    "countrycode": "XK",
    "continent": "Europe",
    "displayName": "Kosovo"
  },
  {
    "flag": "🇾🇪",
    "name": [
      "Yemen",
      "Yemeni"
    ],
    "countrycode": "YE",
    "continent": "Asia",
    "displayName": "Yemen"
  },
  {
    "flag": "🇿🇦",
    "name": [
      "South Africa",
      "South African"
    ],
    "countrycode": "ZA",
    "continent": "Africa",
    "displayName": "South Africa"
  },
  {
    "flag": "🇿🇲",
    "name": [
      "Zambia",
      "Zambian"
    ],
    "countrycode": "ZM",
    "continent": "Africa",
    "displayName": "Zambia"
  },
  {
    "flag": "🇿🇼",
    "name": [
      "Zimbabwe",
      "Zimbabwean"
    ],
    "countrycode": "ZW",
    "continent": "Africa",
    "displayName": "Zimbabwe"
  }
];

export { countries };