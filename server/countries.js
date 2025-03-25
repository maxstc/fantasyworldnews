const countries = [
  {
    "flag": "🇦🇩",
    "name": [
      "Andorra",
      "Andorran"
    ],
    "countrycode": "AD",
    "continent": "Europe"
  },
  {
    "flag": "🇦🇪",
    "name": [
      "United Arab Emirates",
      "Emirati"
    ],
    "countrycode": "AE",
    "continent": "Asia"
  },
  {
    "flag": "🇦🇫",
    "name": [
      "Afghanistan",
      "Afghan"
    ],
    "countrycode": "AF",
    "continent": "Asia"
  },
  {
    "flag": "🇦🇬",
    "name": [
      "Antigua and Barbuda",
      "Antiguan, Barbudan"
    ],
    "countrycode": "AG",
    "continent": "North America"
  },
  {
    "flag": "🇦🇮",
    "name": [
      "Anguilla",
      "Anguillian"
    ],
    "countrycode": "AI",
    "continent": "North America"
  },
  {
    "flag": "🇦🇱",
    "name": [
      "Albania",
      "Albanian"
    ],
    "countrycode": "AL",
    "continent": "Europe"
  },
  {
    "flag": "🇦🇲",
    "name": [
      "Armenia",
      "Armenian"
    ],
    "countrycode": "AM",
    "continent": "Asia"
  },
  {
    "flag": "🇦🇴",
    "name": [
      "Angola",
      "Angolan"
    ],
    "countrycode": "AO",
    "continent": "Africa"
  },
  {
    "flag": "🇦🇷",
    "name": [
      "Argentina",
      "Argentine"
    ],
    "countrycode": "AR",
    "continent": "South America"
  },
  {
    "flag": "🇦🇹",
    "name": [
      "Austria",
      "Austrian"
    ],
    "countrycode": "AT",
    "continent": "Europe"
  },
  {
    "flag": "🇦🇺",
    "name": [
      "Australia",
      "Australian"
    ],
    "countrycode": "AU",
    "continent": "Oceania"
  },
  {
    "flag": "🇦🇿",
    "name": [
      "Azerbaijan",
      "Azerbaijani"
    ],
    "countrycode": "AZ",
    "continent": "Asia"
  },
  {
    "flag": "🇧🇦",
    "name": [
      "Bosnia and Herzegovina",
      "Bosnian, Herzegovinian"
    ],
    "countrycode": "BA",
    "continent": "Europe"
  },
  {
    "flag": "🇧🇧",
    "name": [
      "Barbados",
      "Barbadian"
    ],
    "countrycode": "BB",
    "continent": "North America"
  },
  {
    "flag": "🇧🇩",
    "name": [
      "Bangladesh",
      "Bangladeshi"
    ],
    "countrycode": "BD",
    "continent": "Asia"
  },
  {
    "flag": "🇧🇪",
    "name": [
      "Belgium",
      "Belgian"
    ],
    "countrycode": "BE",
    "continent": "Europe"
  },
  {
    "flag": "🇧🇫",
    "name": [
      "Burkina Faso",
      "Burkinabe"
    ],
    "countrycode": "BF",
    "continent": "Africa"
  },
  {
    "flag": "🇧🇬",
    "name": [
      "Bulgaria",
      "Bulgarian"
    ],
    "countrycode": "BG",
    "continent": "Europe"
  },
  {
    "flag": "🇧🇭",
    "name": [
      "Bahrain",
      "Bahraini"
    ],
    "countrycode": "BH",
    "continent": "Asia"
  },
  {
    "flag": "🇧🇮",
    "name": [
      "Burundi",
      "Burundian"
    ],
    "countrycode": "BI",
    "continent": "Africa"
  },
  {
    "flag": "🇧🇯",
    "name": [
      "Benin",
      "Beninese"
    ],
    "countrycode": "BJ",
    "continent": "Africa"
  },
  {
    "flag": "🇧🇳",
    "name": [
      "Brunei",
      "Bruneian"
    ],
    "countrycode": "BN",
    "continent": "Asia"
  },
  {
    "flag": "🇧🇴",
    "name": [
      "Bolivia",
      "Bolivian"
    ],
    "countrycode": "BO",
    "continent": "South America"
  },
  {
    "flag": "🇧🇷",
    "name": [
      "Brazil",
      "Brazilian"
    ],
    "countrycode": "BR",
    "continent": "South America"
  },
  {
    "flag": "🇧🇸",
    "name": [
      "Bahamas",
      "Bahamian"
    ],
    "countrycode": "BS",
    "continent": "North America"
  },
  {
    "flag": "🇧🇹",
    "name": [
      "Bhutan",
      "Bhutanese"
    ],
    "countrycode": "BT",
    "continent": "Asia"
  },
  {
    "flag": "🇧🇼",
    "name": [
      "Botswana",
      "Motswana"
    ],
    "countrycode": "BW",
    "continent": "Africa"
  },
  {
    "flag": "🇧🇾",
    "name": [
      "Belarus",
      "Belarusian"
    ],
    "countrycode": "BY",
    "continent": "Europe"
  },
  {
    "flag": "🇧🇿",
    "name": [
      "Belize",
      "Belizean"
    ],
    "countrycode": "BZ",
    "continent": "North America"
  },
  {
    "flag": "🇨🇦",
    "name": [
      "Canada",
      "Canadian"
    ],
    "countrycode": "CA",
    "continent": "North America"
  },
  {
    "flag": "🇨🇩",
    "name": [
      "DR Congo",
      "Congolese"
    ],
    "countrycode": "CD",
    "continent": "Africa"
  },
  {
    "flag": "🇨🇫",
    "name": [
      "Central African Republic",
      "Central African"
    ],
    "countrycode": "CF",
    "continent": "Africa"
  },
  {
    "flag": "🇨🇬",
    "name": [
      "Republic of the Congo",
      "Congolese"
    ],
    "countrycode": "CG",
    "continent": "Africa"
  },
  {
    "flag": "🇨🇭",
    "name": [
      "Switzerland",
      "Swiss"
    ],
    "countrycode": "CH",
    "continent": "Europe"
  },
  {
    "flag": "🇨🇮",
    "name": [
      "Ivory Coast",
      "Ivorian"
    ],
    "countrycode": "CI",
    "continent": "Africa"
  },
  {
    "flag": "🇨🇱",
    "name": [
      "Chile",
      "Chilean"
    ],
    "countrycode": "CL",
    "continent": "South America"
  },
  {
    "flag": "🇨🇲",
    "name": [
      "Cameroon",
      "Cameroonian"
    ],
    "countrycode": "CM",
    "continent": "Africa"
  },
  {
    "flag": "🇨🇳",
    "name": [
      "China",
      "Chinese"
    ],
    "countrycode": "CN",
    "continent": "Asia"
  },
  {
    "flag": "🇨🇴",
    "name": [
      "Colombia",
      "Colombian"
    ],
    "countrycode": "CO",
    "continent": "South America"
  },
  {
    "flag": "🇨🇷",
    "name": [
      "Costa Rica",
      "Costa Rican"
    ],
    "countrycode": "CR",
    "continent": "North America"
  },
  {
    "flag": "🇨🇺",
    "name": [
      "Cuba",
      "Cuban"
    ],
    "countrycode": "CU",
    "continent": "North America"
  },
  {
    "flag": "🇨🇻",
    "name": [
      "Cape Verde",
      "Cape Verdian"
    ],
    "countrycode": "CV",
    "continent": "Africa"
  },
  {
    "flag": "🇨🇾",
    "name": [
      "Cyprus",
      "Cypriot"
    ],
    "countrycode": "CY",
    "continent": "Asia"
  },
  {
    "flag": "🇨🇿",
    "name": [
      "Czechia",
      "Czech"
    ],
    "countrycode": "CZ",
    "continent": "Europe"
  },
  {
    "flag": "🇩🇪",
    "name": [
      "Germany",
      "German"
    ],
    "countrycode": "DE",
    "continent": "Europe"
  },
  {
    "flag": "🇩🇯",
    "name": [
      "Djibouti",
      "Djibouti"
    ],
    "countrycode": "DJ",
    "continent": "Africa"
  },
  {
    "flag": "🇩🇰",
    "name": [
      "Denmark",
      "Danish"
    ],
    "countrycode": "DK",
    "continent": "Europe"
  },
  {
    "flag": "🇩🇲",
    "name": [
      "Dominica",
      "Dominican"
    ],
    "countrycode": "DM",
    "continent": "North America"
  },
  {
    "flag": "🇩🇴",
    "name": [
      "Dominican Republic",
      "Dominican"
    ],
    "countrycode": "DO",
    "continent": "North America"
  },
  {
    "flag": "🇩🇿",
    "name": [
      "Algeria",
      "Algerian"
    ],
    "countrycode": "DZ",
    "continent": "Africa"
  },
  {
    "flag": "🇪🇨",
    "name": [
      "Ecuador",
      "Ecuadorean"
    ],
    "countrycode": "EC",
    "continent": "South America"
  },
  {
    "flag": "🇪🇪",
    "name": [
      "Estonia",
      "Estonian"
    ],
    "countrycode": "EE",
    "continent": "Europe"
  },
  {
    "flag": "🇪🇬",
    "name": [
      "Egypt",
      "Egyptian"
    ],
    "countrycode": "EG",
    "continent": "Africa"
  },
  {
    "flag": "🇪🇷",
    "name": [
      "Eritrea",
      "Eritrean"
    ],
    "countrycode": "ER",
    "continent": "Africa"
  },
  {
    "flag": "🇪🇸",
    "name": [
      "Spain",
      "Spanish"
    ],
    "countrycode": "ES",
    "continent": "Europe"
  },
  {
    "flag": "🇪🇹",
    "name": [
      "Ethiopia",
      "Ethiopian"
    ],
    "countrycode": "ET",
    "continent": "Africa"
  },
  {
    "flag": "🇫🇮",
    "name": [
      "Finland",
      "Finnish"
    ],
    "countrycode": "FI",
    "continent": "Europe"
  },
  {
    "flag": "🇫🇯",
    "name": [
      "Fiji",
      "Fijian"
    ],
    "countrycode": "FJ",
    "continent": "Oceania"
  },
  {
    "flag": "🇫🇲",
    "name": [
      "Micronesia",
      "Micronesian"
    ],
    "countrycode": "FM",
    "continent": "Oceania"
  },
  {
    "flag": "🇫🇷",
    "name": [
      "France",
      "French"
    ],
    "countrycode": "FR",
    "continent": "Europe"
  },
  {
    "flag": "🇬🇦",
    "name": [
      "Gabon",
      "Gabonese"
    ],
    "countrycode": "GA",
    "continent": "Africa"
  },
  {
    "flag": "🇬🇧",
    "name": [
      "United Kingdom",
      "British"
    ],
    "countrycode": "GB",
    "continent": "Europe"
  },
  {
    "flag": "🇬🇩",
    "name": [
      "Grenada",
      "Grenadian"
    ],
    "countrycode": "GD",
    "continent": "North America"
  },
  {
    "flag": "🇬🇪",
    "name": [
      "Georgia",
      "Georgian"
    ],
    "countrycode": "GE",
    "continent": "Asia"
  },
  {
    "flag": "🇬🇭",
    "name": [
      "Ghana",
      "Ghanaian"
    ],
    "countrycode": "GH",
    "continent": "Africa"
  },
  {
    "flag": "🇬🇲",
    "name": [
      "Gambia",
      "Gambian"
    ],
    "countrycode": "GM",
    "continent": "Africa"
  },
  {
    "flag": "🇬🇳",
    "name": [
      "Guinea",
      "Guinean"
    ],
    "countrycode": "GN",
    "continent": "Africa"
  },
  {
    "flag": "🇬🇶",
    "name": [
      "Equatorial Guinea",
      "Equatorial Guinean"
    ],
    "countrycode": "GQ",
    "continent": "Africa"
  },
  {
    "flag": "🇬🇷",
    "name": [
      "Greece",
      "Greek"
    ],
    "countrycode": "GR",
    "continent": "Europe"
  },
  {
    "flag": "🇬🇹",
    "name": [
      "Guatemala",
      "Guatemalan"
    ],
    "countrycode": "GT",
    "continent": "North America"
  },
  {
    "flag": "🇬🇼",
    "name": [
      "Guinea-Bissau",
      "Guinea-Bissauan"
    ],
    "countrycode": "GW",
    "continent": "Africa"
  },
  {
    "flag": "🇬🇾",
    "name": [
      "Guyana",
      "Guyanese"
    ],
    "countrycode": "GY",
    "continent": "South America"
  },
  {
    "flag": "🇭🇳",
    "name": [
      "Honduras",
      "Honduran"
    ],
    "countrycode": "HN",
    "continent": "North America"
  },
  {
    "flag": "🇭🇷",
    "name": [
      "Croatia",
      "Croatian"
    ],
    "countrycode": "HR",
    "continent": "Europe"
  },
  {
    "flag": "🇭🇹",
    "name": [
      "Haiti",
      "Haitian"
    ],
    "countrycode": "HT",
    "continent": "North America"
  },
  {
    "flag": "🇭🇺",
    "name": [
      "Hungary",
      "Hungarian"
    ],
    "countrycode": "HU",
    "continent": "Europe"
  },
  {
    "flag": "🇮🇩",
    "name": [
      "Indonesia",
      "Indonesian"
    ],
    "countrycode": "ID",
    "continent": "Asia"
  },
  {
    "flag": "🇮🇪",
    "name": [
      "Ireland",
      "Irish"
    ],
    "countrycode": "IE",
    "continent": "Europe"
  },
  {
    "flag": "🇮🇱",
    "name": [
      "Israel",
      "Israeli"
    ],
    "countrycode": "IL",
    "continent": "Asia"
  },
  {
    "flag": "🇮🇳",
    "name": [
      "India",
      "Indian"
    ],
    "countrycode": "IN",
    "continent": "Asia"
  },
  {
    "flag": "🇮🇶",
    "name": [
      "Iraq",
      "Iraqi"
    ],
    "countrycode": "IQ",
    "continent": "Asia"
  },
  {
    "flag": "🇮🇷",
    "name": [
      "Iran",
      "Iranian"
    ],
    "countrycode": "IR",
    "continent": "Asia"
  },
  {
    "flag": "🇮🇸",
    "name": [
      "Iceland",
      "Icelander"
    ],
    "countrycode": "IS",
    "continent": "Europe"
  },
  {
    "flag": "🇮🇹",
    "name": [
      "Italy",
      "Italian"
    ],
    "countrycode": "IT",
    "continent": "Europe"
  },
  {
    "flag": "🇯🇲",
    "name": [
      "Jamaica",
      "Jamaican"
    ],
    "countrycode": "JM",
    "continent": "North America"
  },
  {
    "flag": "🇯🇴",
    "name": [
      "Jordan",
      "Jordanian"
    ],
    "countrycode": "JO",
    "continent": "Asia"
  },
  {
    "flag": "🇯🇵",
    "name": [
      "Japan",
      "Japanese"
    ],
    "countrycode": "JP",
    "continent": "Asia"
  },
  {
    "flag": "🇰🇪",
    "name": [
      "Kenya",
      "Kenyan"
    ],
    "countrycode": "KE",
    "continent": "Africa"
  },
  {
    "flag": "🇰🇬",
    "name": [
      "Kyrgyzstan",
      "Kirghiz"
    ],
    "countrycode": "KG",
    "continent": "Asia"
  },
  {
    "flag": "🇰🇭",
    "name": [
      "Cambodia",
      "Cambodian"
    ],
    "countrycode": "KH",
    "continent": "Asia"
  },
  {
    "flag": "🇰🇮",
    "name": [
      "Kiribati",
      "I-Kiribati"
    ],
    "countrycode": "KI",
    "continent": "Oceania"
  },
  {
    "flag": "🇰🇲",
    "name": [
      "Comoros",
      "Comoran"
    ],
    "countrycode": "KM",
    "continent": "Africa"
  },
  {
    "flag": "🇰🇳",
    "name": [
      "Saint Kitts and Nevis",
      "Kittitian, Nevisian"
    ],
    "countrycode": "KN",
    "continent": "North America"
  },
  {
    "flag": "🇰🇵",
    "name": [
      "North Korea",
      "North Korean"
    ],
    "countrycode": "KP",
    "continent": "Asia"
  },
  {
    "flag": "🇰🇷",
    "name": [
      "South Korea",
      "South Korean"
    ],
    "countrycode": "KR",
    "continent": "Asia"
  },
  {
    "flag": "🇰🇼",
    "name": [
      "Kuwait",
      "Kuwaiti"
    ],
    "countrycode": "KW",
    "continent": "Asia"
  },
  {
    "flag": "🇰🇾",
    "name": [
      "Cayman Islands",
      "Caymanian"
    ],
    "countrycode": "KY",
    "continent": "North America"
  },
  {
    "flag": "🇰🇿",
    "name": [
      "Kazakhstan",
      "Kazakhstani"
    ],
    "countrycode": "KZ",
    "continent": "Asia"
  },
  {
    "flag": "🇱🇦",
    "name": [
      "Laos",
      "Laotian"
    ],
    "countrycode": "LA",
    "continent": "Asia"
  },
  {
    "flag": "🇱🇧",
    "name": [
      "Lebanon",
      "Lebanese"
    ],
    "countrycode": "LB",
    "continent": "Asia"
  },
  {
    "flag": "🇱🇨",
    "name": [
      "Saint Lucia",
      "Saint Lucian"
    ],
    "countrycode": "LC",
    "continent": "North America"
  },
  {
    "flag": "🇱🇮",
    "name": [
      "Liechtenstein",
      "Liechtensteiner"
    ],
    "countrycode": "LI",
    "continent": "Europe"
  },
  {
    "flag": "🇱🇰",
    "name": [
      "Sri Lanka",
      "Sri Lankan"
    ],
    "countrycode": "LK",
    "continent": "Asia"
  },
  {
    "flag": "🇱🇷",
    "name": [
      "Liberia",
      "Liberian"
    ],
    "countrycode": "LR",
    "continent": "Africa"
  },
  {
    "flag": "🇱🇸",
    "name": [
      "Lesotho",
      "Mosotho"
    ],
    "countrycode": "LS",
    "continent": "Africa"
  },
  {
    "flag": "🇱🇹",
    "name": [
      "Lithuania",
      "Lithuanian"
    ],
    "countrycode": "LT",
    "continent": "Europe"
  },
  {
    "flag": "🇱🇺",
    "name": [
      "Luxembourg",
      "Luxembourger"
    ],
    "countrycode": "LU",
    "continent": "Europe"
  },
  {
    "flag": "🇱🇻",
    "name": [
      "Latvia",
      "Latvian"
    ],
    "countrycode": "LV",
    "continent": "Europe"
  },
  {
    "flag": "🇱🇾",
    "name": [
      "Libya",
      "Libyan"
    ],
    "countrycode": "LY",
    "continent": "Africa"
  },
  {
    "flag": "🇲🇦",
    "name": [
      "Morocco",
      "Moroccan"
    ],
    "countrycode": "MA",
    "continent": "Africa"
  },
  {
    "flag": "🇲🇨",
    "name": [
      "Monaco",
      "Monegasque"
    ],
    "countrycode": "MC",
    "continent": "Europe"
  },
  {
    "flag": "🇲🇩",
    "name": [
      "Moldova",
      "Moldovan"
    ],
    "countrycode": "MD",
    "continent": "Europe"
  },
  {
    "flag": "🇲🇪",
    "name": [
      "Montenegro",
      "Montenegrin"
    ],
    "countrycode": "ME",
    "continent": "Europe"
  },
  {
    "flag": "🇲🇬",
    "name": [
      "Madagascar",
      "Malagasy"
    ],
    "countrycode": "MG",
    "continent": "Africa"
  },
  {
    "flag": "🇲🇭",
    "name": [
      "Marshall Islands",
      "Marshallese"
    ],
    "countrycode": "MH",
    "continent": "Oceania"
  },
  {
    "flag": "🇲🇰",
    "name": [
      "North Macedonia",
      "Macedonian"
    ],
    "countrycode": "MK",
    "continent": "Europe"
  },
  {
    "flag": "🇲🇱",
    "name": [
      "Mali",
      "Malian"
    ],
    "countrycode": "ML",
    "continent": "Africa"
  },
  {
    "flag": "🇲🇲",
    "name": [
      "Myanmar",
      "Burmese"
    ],
    "countrycode": "MM",
    "continent": "Asia"
  },
  {
    "flag": "🇲🇳",
    "name": [
      "Mongolia",
      "Mongolian"
    ],
    "countrycode": "MN",
    "continent": "Asia"
  },
  {
    "flag": "🇲🇷",
    "name": [
      "Mauritania",
      "Mauritanian"
    ],
    "countrycode": "MR",
    "continent": "Africa"
  },
  {
    "flag": "🇲🇹",
    "name": [
      "Malta",
      "Maltese"
    ],
    "countrycode": "MT",
    "continent": "Europe"
  },
  {
    "flag": "🇲🇺",
    "name": [
      "Mauritius",
      "Mauritian"
    ],
    "countrycode": "MU",
    "continent": "Africa"
  },
  {
    "flag": "🇲🇻",
    "name": [
      "Maldives",
      "Maldivan"
    ],
    "countrycode": "MV",
    "continent": "Asia"
  },
  {
    "flag": "🇲🇼",
    "name": [
      "Malawi",
      "Malawian"
    ],
    "countrycode": "MW",
    "continent": "Africa"
  },
  {
    "flag": "🇲🇽",
    "name": [
      "Mexico",
      "Mexican"
    ],
    "countrycode": "MX",
    "continent": "North America"
  },
  {
    "flag": "🇲🇾",
    "name": [
      "Malaysia",
      "Malaysian"
    ],
    "countrycode": "MY",
    "continent": "Asia"
  },
  {
    "flag": "🇲🇿",
    "name": [
      "Mozambique",
      "Mozambican"
    ],
    "countrycode": "MZ",
    "continent": "Africa"
  },
  {
    "flag": "🇳🇦",
    "name": [
      "Namibia",
      "Namibian"
    ],
    "countrycode": "NA",
    "continent": "Africa"
  },
  {
    "flag": "🇳🇪",
    "name": [
      "Niger",
      "Nigerien"
    ],
    "countrycode": "NE",
    "continent": "Africa"
  },
  {
    "flag": "🇳🇬",
    "name": [
      "Nigeria",
      "Nigerian"
    ],
    "countrycode": "NG",
    "continent": "Africa"
  },
  {
    "flag": "🇳🇮",
    "name": [
      "Nicaragua",
      "Nicaraguan"
    ],
    "countrycode": "NI",
    "continent": "North America"
  },
  {
    "flag": "🇳🇱",
    "name": [
      "Netherlands",
      "Dutch"
    ],
    "countrycode": "NL",
    "continent": "Europe"
  },
  {
    "flag": "🇳🇴",
    "name": [
      "Norway",
      "Norwegian"
    ],
    "countrycode": "NO",
    "continent": "Europe"
  },
  {
    "flag": "🇳🇵",
    "name": [
      "Nepal",
      "Nepalese"
    ],
    "countrycode": "NP",
    "continent": "Asia"
  },
  {
    "flag": "🇳🇷",
    "name": [
      "Nauru",
      "Nauruan"
    ],
    "countrycode": "NR",
    "continent": "Oceania"
  },
  {
    "flag": "🇳🇿",
    "name": [
      "New Zealand",
      "New Zealander"
    ],
    "countrycode": "NZ",
    "continent": "Oceania"
  },
  {
    "flag": "🇴🇲",
    "name": [
      "Oman",
      "Omani"
    ],
    "countrycode": "OM",
    "continent": "Asia"
  },
  {
    "flag": "🇵🇦",
    "name": [
      "Panama",
      "Panamanian"
    ],
    "countrycode": "PA",
    "continent": "North America"
  },
  {
    "flag": "🇵🇪",
    "name": [
      "Peru",
      "Peruvian"
    ],
    "countrycode": "PE",
    "continent": "South America"
  },
  {
    "flag": "🇵🇬",
    "name": [
      "Papua New Guinea",
      "Papua New Guinean"
    ],
    "countrycode": "PG",
    "continent": "Oceania"
  },
  {
    "flag": "🇵🇭",
    "name": [
      "Philippines",
      "Filipino"
    ],
    "countrycode": "PH",
    "continent": "Asia"
  },
  {
    "flag": "🇵🇰",
    "name": [
      "Pakistan",
      "Pakistani"
    ],
    "countrycode": "PK",
    "continent": "Asia"
  },
  {
    "flag": "🇵🇱",
    "name": [
      "Poland",
      "Polish"
    ],
    "countrycode": "PL",
    "continent": "Europe"
  },
  {
    "flag": "🇵🇷",
    "name": [
      "Puerto Rico",
      "Puerto Rican"
    ],
    "countrycode": "PR",
    "continent": "North America"
  },
  {
    "flag": "🇵🇸",
    "name": [
      "Palestine",
      "Palestinian"
    ],
    "countrycode": "PS",
    "continent": "Asia"
  },
  {
    "flag": "🇵🇹",
    "name": [
      "Portugal",
      "Portuguese"
    ],
    "countrycode": "PT",
    "continent": "Europe"
  },
  {
    "flag": "🇵🇼",
    "name": [
      "Palau",
      "Palauan"
    ],
    "countrycode": "PW",
    "continent": "Oceania"
  },
  {
    "flag": "🇵🇾",
    "name": [
      "Paraguay",
      "Paraguayan"
    ],
    "countrycode": "PY",
    "continent": "South America"
  },
  {
    "flag": "🇶🇦",
    "name": [
      "Qatar",
      "Qatari"
    ],
    "countrycode": "QA",
    "continent": "Asia"
  },
  {
    "flag": "🇷🇴",
    "name": [
      "Romania",
      "Romanian"
    ],
    "countrycode": "RO",
    "continent": "Europe"
  },
  {
    "flag": "🇷🇸",
    "name": [
      "Serbia",
      "Serbian"
    ],
    "countrycode": "RS",
    "continent": "Europe"
  },
  {
    "flag": "🇷🇺",
    "name": [
      "Russia",
      "Russian"
    ],
    "countrycode": "RU",
    "continent": "Europe"
  },
  {
    "flag": "🇷🇼",
    "name": [
      "Rwanda",
      "Rwandan"
    ],
    "countrycode": "RW",
    "continent": "Africa"
  },
  {
    "flag": "🇸🇦",
    "name": [
      "Saudi Arabia",
      "Saudi Arabian"
    ],
    "countrycode": "SA",
    "continent": "Asia"
  },
  {
    "flag": "🇸🇧",
    "name": [
      "Solomon Islands",
      "Solomon Islander"
    ],
    "countrycode": "SB",
    "continent": "Oceania"
  },
  {
    "flag": "🇸🇨",
    "name": [
      "Seychelles",
      "Seychellois"
    ],
    "countrycode": "SC",
    "continent": "Africa"
  },
  {
    "flag": "🇸🇩",
    "name": [
      "Sudan",
      "Sudanese"
    ],
    "countrycode": "SD",
    "continent": "Africa"
  },
  {
    "flag": "🇸🇪",
    "name": [
      "Sweden",
      "Swedish"
    ],
    "countrycode": "SE",
    "continent": "Europe"
  },
  {
    "flag": "🇸🇬",
    "name": [
      "Singapore",
      "Singaporean"
    ],
    "countrycode": "SG",
    "continent": "Asia"
  },
  {
    "flag": "🇸🇮",
    "name": [
      "Slovenia",
      "Slovene"
    ],
    "countrycode": "SI",
    "continent": "Europe"
  },
  {
    "flag": "🇸🇰",
    "name": [
      "Slovakia",
      "Slovak"
    ],
    "countrycode": "SK",
    "continent": "Europe"
  },
  {
    "flag": "🇸🇱",
    "name": [
      "Sierra Leone",
      "Sierra Leonean"
    ],
    "countrycode": "SL",
    "continent": "Africa"
  },
  {
    "flag": "🇸🇲",
    "name": [
      "San Marino",
      "Sammarinese"
    ],
    "countrycode": "SM",
    "continent": "Europe"
  },
  {
    "flag": "🇸🇳",
    "name": [
      "Senegal",
      "Senegalese"
    ],
    "countrycode": "SN",
    "continent": "Africa"
  },
  {
    "flag": "🇸🇴",
    "name": [
      "Somalia",
      "Somali"
    ],
    "countrycode": "SO",
    "continent": "Africa"
  },
  {
    "flag": "🇸🇷",
    "name": [
      "Suriname",
      "Surinamer"
    ],
    "countrycode": "SR",
    "continent": "South America"
  },
  {
    "flag": "🇸🇸",
    "name": [
      "South Sudan",
      "South Sudanese"
    ],
    "countrycode": "SS",
    "continent": "Africa"
  },
  {
    "flag": "🇸🇹",
    "name": [
      "São Tomé and Príncipe",
      "Sao Tomean"
    ],
    "countrycode": "ST",
    "continent": "Africa"
  },
  {
    "flag": "🇸🇻",
    "name": [
      "El Salvador",
      "Salvadoran"
    ],
    "countrycode": "SV",
    "continent": "North America"
  },
  {
    "flag": "🇸🇾",
    "name": [
      "Syria",
      "Syrian"
    ],
    "countrycode": "SY",
    "continent": "Asia"
  },
  {
    "flag": "🇸🇿",
    "name": [
      "Eswatini",
      "Swazi"
    ],
    "countrycode": "SZ",
    "continent": "Africa"
  },
  {
    "flag": "🇹🇩",
    "name": [
      "Chad",
      "Chadian"
    ],
    "countrycode": "TD",
    "continent": "Africa"
  },
  {
    "flag": "🇹🇬",
    "name": [
      "Togo",
      "Togolese"
    ],
    "countrycode": "TG",
    "continent": "Africa"
  },
  {
    "flag": "🇹🇭",
    "name": [
      "Thailand",
      "Thai"
    ],
    "countrycode": "TH",
    "continent": "Asia"
  },
  {
    "flag": "🇹🇯",
    "name": [
      "Tajikistan",
      "Tadzhik"
    ],
    "countrycode": "TJ",
    "continent": "Asia"
  },
  {
    "flag": "🇹🇰",
    "name": [
      "Tokelau",
      "Tokelauan"
    ],
    "countrycode": "TK",
    "continent": "Oceania"
  },
  {
    "flag": "🇹🇱",
    "name": [
      "Timor-Leste",
      "East Timorese"
    ],
    "countrycode": "TL",
    "continent": "Asia"
  },
  {
    "flag": "🇹🇲",
    "name": [
      "Turkmenistan",
      "Turkmen"
    ],
    "countrycode": "TM",
    "continent": "Asia"
  },
  {
    "flag": "🇹🇳",
    "name": [
      "Tunisia",
      "Tunisian"
    ],
    "countrycode": "TN",
    "continent": "Africa"
  },
  {
    "flag": "🇹🇴",
    "name": [
      "Tonga",
      "Tongan"
    ],
    "countrycode": "TO",
    "continent": "Oceania"
  },
  {
    "flag": "🇹🇷",
    "name": [
      "Turkey",
      "Turkish"
    ],
    "countrycode": "TR",
    "continent": "Asia"
  },
  {
    "flag": "🇹🇹",
    "name": [
      "Trinidad and Tobago",
      "Trinidadian"
    ],
    "countrycode": "TT",
    "continent": "North America"
  },
  {
    "flag": "🇹🇻",
    "name": [
      "Tuvalu",
      "Tuvaluan"
    ],
    "countrycode": "TV",
    "continent": "Oceania"
  },
  {
    "flag": "🇹🇼",
    "name": [
      "Taiwan",
      "Taiwanese"
    ],
    "countrycode": "TW",
    "continent": "Asia"
  },
  {
    "flag": "🇹🇿",
    "name": [
      "Tanzania",
      "Tanzanian"
    ],
    "countrycode": "TZ",
    "continent": "Africa"
  },
  {
    "flag": "🇺🇦",
    "name": [
      "Ukraine",
      "Ukrainian"
    ],
    "countrycode": "UA",
    "continent": "Europe"
  },
  {
    "flag": "🇺🇬",
    "name": [
      "Uganda",
      "Ugandan"
    ],
    "countrycode": "UG",
    "continent": "Africa"
  },
  {
    "flag": "🇺🇾",
    "name": [
      "Uruguay",
      "Uruguayan"
    ],
    "countrycode": "UY",
    "continent": "South America"
  },
  {
    "flag": "🇺🇿",
    "name": [
      "Uzbekistan",
      "Uzbekistani"
    ],
    "countrycode": "UZ",
    "continent": "Asia"
  },
  {
    "flag": "🇻🇦",
    "name": [
      "Vatican City",
      "Vatican"
    ],
    "countrycode": "VA",
    "continent": "Europe"
  },
  {
    "flag": "🇻🇨",
    "name": [
      "Saint Vincent and the Grenadines",
      "Saint Vincentian"
    ],
    "countrycode": "VC",
    "continent": "North America"
  },
  {
    "flag": "🇻🇪",
    "name": [
      "Venezuela",
      "Venezuelan"
    ],
    "countrycode": "VE",
    "continent": "South America"
  },
  {
    "flag": "🇻🇳",
    "name": [
      "Vietnam",
      "Vietnamese"
    ],
    "countrycode": "VN",
    "continent": "Asia"
  },
  {
    "flag": "🇻🇺",
    "name": [
      "Vanuatu",
      "Ni-Vanuatu"
    ],
    "countrycode": "VU",
    "continent": "Oceania"
  },
  {
    "flag": "🇼🇸",
    "name": [
      "Samoa",
      "Samoan"
    ],
    "countrycode": "WS",
    "continent": "Oceania"
  },
  {
    "flag": "🇽🇰",
    "name": [
      "Kosovo",
      "Kosovar"
    ],
    "countrycode": "XK",
    "continent": "Europe"
  },
  {
    "flag": "🇾🇪",
    "name": [
      "Yemen",
      "Yemeni"
    ],
    "countrycode": "YE",
    "continent": "Asia"
  },
  {
    "flag": "🇿🇦",
    "name": [
      "South Africa",
      "South African"
    ],
    "countrycode": "ZA",
    "continent": "Africa"
  },
  {
    "flag": "🇿🇲",
    "name": [
      "Zambia",
      "Zambian"
    ],
    "countrycode": "ZM",
    "continent": "Africa"
  },
  {
    "flag": "🇿🇼",
    "name": [
      "Zimbabwe",
      "Zimbabwean"
    ],
    "countrycode": "ZW",
    "continent": "Africa"
  }
];

export { countries };