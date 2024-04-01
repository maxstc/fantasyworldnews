const countries = [
  {
    "flag": "🇦🇩",
    "name": [
      "Andorra",
      "Andorran"
    ],
    "countrycode": "AD"
  },
  {
    "flag": "🇦🇪",
    "name": [
      "United Arab Emirates",
      "Emirati"
    ],
    "countrycode": "AE"
  },
  {
    "flag": "🇦🇫",
    "name": [
      "Afghanistan",
      "Afghan"
    ],
    "countrycode": "AF"
  },
  {
    "flag": "🇦🇬",
    "name": [
      "Antigua and Barbuda",
      "Antiguan, Barbudan"
    ],
    "countrycode": "AG"
  },
  {
    "flag": "🇦🇮",
    "name": [
      "Anguilla",
      "Anguillian"
    ],
    "countrycode": "AI"
  },
  {
    "flag": "🇦🇱",
    "name": [
      "Albania",
      "Albanian"
    ],
    "countrycode": "AL"
  },
  {
    "flag": "🇦🇲",
    "name": [
      "Armenia",
      "Armenian"
    ],
    "countrycode": "AM"
  },
  {
    "flag": "🇦🇴",
    "name": [
      "Angola",
      "Angolan"
    ],
    "countrycode": "AO"
  },
  {
    "flag": "🇦🇷",
    "name": [
      "Argentina",
      "Argentine"
    ],
    "countrycode": "AR"
  },
  {
    "flag": "🇦🇹",
    "name": [
      "Austria",
      "Austrian"
    ],
    "countrycode": "AT"
  },
  {
    "flag": "🇦🇺",
    "name": [
      "Australia",
      "Australian"
    ],
    "countrycode": "AU"
  },
  {
    "flag": "🇦🇿",
    "name": [
      "Azerbaijan",
      "Azerbaijani"
    ],
    "countrycode": "AZ"
  },
  {
    "flag": "🇧🇦",
    "name": [
      "Bosnia and Herzegovina",
      "Bosnian, Herzegovinian"
    ],
    "countrycode": "BA"
  },
  {
    "flag": "🇧🇧",
    "name": [
      "Barbados",
      "Barbadian"
    ],
    "countrycode": "BB"
  },
  {
    "flag": "🇧🇩",
    "name": [
      "Bangladesh",
      "Bangladeshi"
    ],
    "countrycode": "BD"
  },
  {
    "flag": "🇧🇪",
    "name": [
      "Belgium",
      "Belgian"
    ],
    "countrycode": "BE"
  },
  {
    "flag": "🇧🇫",
    "name": [
      "Burkina Faso",
      "Burkinabe"
    ],
    "countrycode": "BF"
  },
  {
    "flag": "🇧🇬",
    "name": [
      "Bulgaria",
      "Bulgarian"
    ],
    "countrycode": "BG"
  },
  {
    "flag": "🇧🇭",
    "name": [
      "Bahrain",
      "Bahraini"
    ],
    "countrycode": "BH"
  },
  {
    "flag": "🇧🇮",
    "name": [
      "Burundi",
      "Burundian"
    ],
    "countrycode": "BI"
  },
  {
    "flag": "🇧🇯",
    "name": [
      "Benin",
      "Beninese"
    ],
    "countrycode": "BJ"
  },
  {
    "flag": "🇧🇳",
    "name": [
      "Brunei",
      "Bruneian"
    ],
    "countrycode": "BN"
  },
  {
    "flag": "🇧🇴",
    "name": [
      "Bolivia",
      "Bolivian"
    ],
    "countrycode": "BO"
  },
  {
    "flag": "🇧🇷",
    "name": [
      "Brazil",
      "Brazilian"
    ],
    "countrycode": "BR"
  },
  {
    "flag": "🇧🇸",
    "name": [
      "Bahamas",
      "Bahamian"
    ],
    "countrycode": "BS"
  },
  {
    "flag": "🇧🇹",
    "name": [
      "Bhutan",
      "Bhutanese"
    ],
    "countrycode": "BT"
  },
  {
    "flag": "🇧🇼",
    "name": [
      "Botswana",
      "Motswana"
    ],
    "countrycode": "BW"
  },
  {
    "flag": "🇧🇾",
    "name": [
      "Belarus",
      "Belarusian"
    ],
    "countrycode": "BY"
  },
  {
    "flag": "🇧🇿",
    "name": [
      "Belize",
      "Belizean"
    ],
    "countrycode": "BZ"
  },
  {
    "flag": "🇨🇦",
    "name": [
      "Canada",
      "Canadian"
    ],
    "countrycode": "CA"
  },
  {
    "flag": "🇨🇩",
    "name": [
      "DR Congo",
      "Congolese"
    ],
    "countrycode": "CD"
  },
  {
    "flag": "🇨🇫",
    "name": [
      "Central African Republic",
      "Central African"
    ],
    "countrycode": "CF"
  },
  {
    "flag": "🇨🇬",
    "name": [
      "Republic of the Congo",
      "Congolese"
    ],
    "countrycode": "CG"
  },
  {
    "flag": "🇨🇭",
    "name": [
      "Switzerland",
      "Swiss"
    ],
    "countrycode": "CH"
  },
  {
    "flag": "🇨🇮",
    "name": [
      "Ivory Coast",
      "Ivorian"
    ],
    "countrycode": "CI"
  },
  {
    "flag": "🇨🇱",
    "name": [
      "Chile",
      "Chilean"
    ],
    "countrycode": "CL"
  },
  {
    "flag": "🇨🇲",
    "name": [
      "Cameroon",
      "Cameroonian"
    ],
    "countrycode": "CM"
  },
  {
    "flag": "🇨🇳",
    "name": [
      "China",
      "Chinese"
    ],
    "countrycode": "CN"
  },
  {
    "flag": "🇨🇴",
    "name": [
      "Colombia",
      "Colombian"
    ],
    "countrycode": "CO"
  },
  {
    "flag": "🇨🇷",
    "name": [
      "Costa Rica",
      "Costa Rican"
    ],
    "countrycode": "CR"
  },
  {
    "flag": "🇨🇺",
    "name": [
      "Cuba",
      "Cuban"
    ],
    "countrycode": "CU"
  },
  {
    "flag": "🇨🇻",
    "name": [
      "Cape Verde",
      "Cape Verdian"
    ],
    "countrycode": "CV"
  },
  {
    "flag": "🇨🇾",
    "name": [
      "Cyprus",
      "Cypriot"
    ],
    "countrycode": "CY"
  },
  {
    "flag": "🇨🇿",
    "name": [
      "Czechia",
      "Czech"
    ],
    "countrycode": "CZ"
  },
  {
    "flag": "🇩🇪",
    "name": [
      "Germany",
      "German"
    ],
    "countrycode": "DE"
  },
  {
    "flag": "🇩🇯",
    "name": [
      "Djibouti",
      "Djibouti"
    ],
    "countrycode": "DJ"
  },
  {
    "flag": "🇩🇰",
    "name": [
      "Denmark",
      "Danish"
    ],
    "countrycode": "DK"
  },
  {
    "flag": "🇩🇲",
    "name": [
      "Dominica",
      "Dominican"
    ],
    "countrycode": "DM"
  },
  {
    "flag": "🇩🇴",
    "name": [
      "Dominican Republic",
      "Dominican"
    ],
    "countrycode": "DO"
  },
  {
    "flag": "🇩🇿",
    "name": [
      "Algeria",
      "Algerian"
    ],
    "countrycode": "DZ"
  },
  {
    "flag": "🇪🇨",
    "name": [
      "Ecuador",
      "Ecuadorean"
    ],
    "countrycode": "EC"
  },
  {
    "flag": "🇪🇪",
    "name": [
      "Estonia",
      "Estonian"
    ],
    "countrycode": "EE"
  },
  {
    "flag": "🇪🇬",
    "name": [
      "Egypt",
      "Egyptian"
    ],
    "countrycode": "EG"
  },
  {
    "flag": "🇪🇷",
    "name": [
      "Eritrea",
      "Eritrean"
    ],
    "countrycode": "ER"
  },
  {
    "flag": "🇪🇸",
    "name": [
      "Spain",
      "Spanish"
    ],
    "countrycode": "ES"
  },
  {
    "flag": "🇪🇹",
    "name": [
      "Ethiopia",
      "Ethiopian"
    ],
    "countrycode": "ET"
  },
  {
    "flag": "🇫🇮",
    "name": [
      "Finland",
      "Finnish"
    ],
    "countrycode": "FI"
  },
  {
    "flag": "🇫🇯",
    "name": [
      "Fiji",
      "Fijian"
    ],
    "countrycode": "FJ"
  },
  {
    "flag": "🇫🇲",
    "name": [
      "Micronesia",
      "Micronesian"
    ],
    "countrycode": "FM"
  },
  {
    "flag": "🇫🇷",
    "name": [
      "France",
      "French"
    ],
    "countrycode": "FR"
  },
  {
    "flag": "🇬🇦",
    "name": [
      "Gabon",
      "Gabonese"
    ],
    "countrycode": "GA"
  },
  {
    "flag": "🇬🇧",
    "name": [
      "United Kingdom",
      "British"
    ],
    "countrycode": "GB"
  },
  {
    "flag": "🇬🇩",
    "name": [
      "Grenada",
      "Grenadian"
    ],
    "countrycode": "GD"
  },
  {
    "flag": "🇬🇪",
    "name": [
      "Georgia",
      "Georgian"
    ],
    "countrycode": "GE"
  },
  {
    "flag": "🇬🇭",
    "name": [
      "Ghana",
      "Ghanaian"
    ],
    "countrycode": "GH"
  },
  {
    "flag": "🇬🇲",
    "name": [
      "Gambia",
      "Gambian"
    ],
    "countrycode": "GM"
  },
  {
    "flag": "🇬🇳",
    "name": [
      "Guinea",
      "Guinean"
    ],
    "countrycode": "GN"
  },
  {
    "flag": "🇬🇶",
    "name": [
      "Equatorial Guinea",
      "Equatorial Guinean"
    ],
    "countrycode": "GQ"
  },
  {
    "flag": "🇬🇷",
    "name": [
      "Greece",
      "Greek"
    ],
    "countrycode": "GR"
  },
  {
    "flag": "🇬🇹",
    "name": [
      "Guatemala",
      "Guatemalan"
    ],
    "countrycode": "GT"
  },
  {
    "flag": "🇬🇼",
    "name": [
      "Guinea-Bissau",
      "Guinea-Bissauan"
    ],
    "countrycode": "GW"
  },
  {
    "flag": "🇬🇾",
    "name": [
      "Guyana",
      "Guyanese"
    ],
    "countrycode": "GY"
  },
  {
    "flag": "🇭🇳",
    "name": [
      "Honduras",
      "Honduran"
    ],
    "countrycode": "HN"
  },
  {
    "flag": "🇭🇷",
    "name": [
      "Croatia",
      "Croatian"
    ],
    "countrycode": "HR"
  },
  {
    "flag": "🇭🇹",
    "name": [
      "Haiti",
      "Haitian"
    ],
    "countrycode": "HT"
  },
  {
    "flag": "🇭🇺",
    "name": [
      "Hungary",
      "Hungarian"
    ],
    "countrycode": "HU"
  },
  {
    "flag": "🇮🇩",
    "name": [
      "Indonesia",
      "Indonesian"
    ],
    "countrycode": "ID"
  },
  {
    "flag": "🇮🇪",
    "name": [
      "Ireland",
      "Irish"
    ],
    "countrycode": "IE"
  },
  {
    "flag": "🇮🇱",
    "name": [
      "Israel",
      "Israeli"
    ],
    "countrycode": "IL"
  },
  {
    "flag": "🇮🇳",
    "name": [
      "India",
      "Indian"
    ],
    "countrycode": "IN"
  },
  {
    "flag": "🇮🇶",
    "name": [
      "Iraq",
      "Iraqi"
    ],
    "countrycode": "IQ"
  },
  {
    "flag": "🇮🇷",
    "name": [
      "Iran",
      "Iranian"
    ],
    "countrycode": "IR"
  },
  {
    "flag": "🇮🇸",
    "name": [
      "Iceland",
      "Icelander"
    ],
    "countrycode": "IS"
  },
  {
    "flag": "🇮🇹",
    "name": [
      "Italy",
      "Italian"
    ],
    "countrycode": "IT"
  },
  {
    "flag": "🇯🇲",
    "name": [
      "Jamaica",
      "Jamaican"
    ],
    "countrycode": "JM"
  },
  {
    "flag": "🇯🇴",
    "name": [
      "Jordan",
      "Jordanian"
    ],
    "countrycode": "JO"
  },
  {
    "flag": "🇯🇵",
    "name": [
      "Japan",
      "Japanese"
    ],
    "countrycode": "JP"
  },
  {
    "flag": "🇰🇪",
    "name": [
      "Kenya",
      "Kenyan"
    ],
    "countrycode": "KE"
  },
  {
    "flag": "🇰🇬",
    "name": [
      "Kyrgyzstan",
      "Kirghiz"
    ],
    "countrycode": "KG"
  },
  {
    "flag": "🇰🇭",
    "name": [
      "Cambodia",
      "Cambodian"
    ],
    "countrycode": "KH"
  },
  {
    "flag": "🇰🇮",
    "name": [
      "Kiribati",
      "I-Kiribati"
    ],
    "countrycode": "KI"
  },
  {
    "flag": "🇰🇲",
    "name": [
      "Comoros",
      "Comoran"
    ],
    "countrycode": "KM"
  },
  {
    "flag": "🇰🇳",
    "name": [
      "Saint Kitts and Nevis",
      "Kittitian, Nevisian"
    ],
    "countrycode": "KN"
  },
  {
    "flag": "🇰🇵",
    "name": [
      "North Korea",
      "North Korean"
    ],
    "countrycode": "KP"
  },
  {
    "flag": "🇰🇷",
    "name": [
      "South Korea",
      "South Korean"
    ],
    "countrycode": "KR"
  },
  {
    "flag": "🇰🇼",
    "name": [
      "Kuwait",
      "Kuwaiti"
    ],
    "countrycode": "KW"
  },
  {
    "flag": "🇰🇾",
    "name": [
      "Cayman Islands",
      "Caymanian"
    ],
    "countrycode": "KY"
  },
  {
    "flag": "🇰🇿",
    "name": [
      "Kazakhstan",
      "Kazakhstani"
    ],
    "countrycode": "KZ"
  },
  {
    "flag": "🇱🇦",
    "name": [
      "Laos",
      "Laotian"
    ],
    "countrycode": "LA"
  },
  {
    "flag": "🇱🇧",
    "name": [
      "Lebanon",
      "Lebanese"
    ],
    "countrycode": "LB"
  },
  {
    "flag": "🇱🇨",
    "name": [
      "Saint Lucia",
      "Saint Lucian"
    ],
    "countrycode": "LC"
  },
  {
    "flag": "🇱🇮",
    "name": [
      "Liechtenstein",
      "Liechtensteiner"
    ],
    "countrycode": "LI"
  },
  {
    "flag": "🇱🇰",
    "name": [
      "Sri Lanka",
      "Sri Lankan"
    ],
    "countrycode": "LK"
  },
  {
    "flag": "🇱🇷",
    "name": [
      "Liberia",
      "Liberian"
    ],
    "countrycode": "LR"
  },
  {
    "flag": "🇱🇸",
    "name": [
      "Lesotho",
      "Mosotho"
    ],
    "countrycode": "LS"
  },
  {
    "flag": "🇱🇹",
    "name": [
      "Lithuania",
      "Lithuanian"
    ],
    "countrycode": "LT"
  },
  {
    "flag": "🇱🇺",
    "name": [
      "Luxembourg",
      "Luxembourger"
    ],
    "countrycode": "LU"
  },
  {
    "flag": "🇱🇻",
    "name": [
      "Latvia",
      "Latvian"
    ],
    "countrycode": "LV"
  },
  {
    "flag": "🇱🇾",
    "name": [
      "Libya",
      "Libyan"
    ],
    "countrycode": "LY"
  },
  {
    "flag": "🇲🇦",
    "name": [
      "Morocco",
      "Moroccan"
    ],
    "countrycode": "MA"
  },
  {
    "flag": "🇲🇨",
    "name": [
      "Monaco",
      "Monegasque"
    ],
    "countrycode": "MC"
  },
  {
    "flag": "🇲🇩",
    "name": [
      "Moldova",
      "Moldovan"
    ],
    "countrycode": "MD"
  },
  {
    "flag": "🇲🇪",
    "name": [
      "Montenegro",
      "Montenegrin"
    ],
    "countrycode": "ME"
  },
  {
    "flag": "🇲🇬",
    "name": [
      "Madagascar",
      "Malagasy"
    ],
    "countrycode": "MG"
  },
  {
    "flag": "🇲🇭",
    "name": [
      "Marshall Islands",
      "Marshallese"
    ],
    "countrycode": "MH"
  },
  {
    "flag": "🇲🇰",
    "name": [
      "North Macedonia",
      "Macedonian"
    ],
    "countrycode": "MK"
  },
  {
    "flag": "🇲🇱",
    "name": [
      "Mali",
      "Malian"
    ],
    "countrycode": "ML"
  },
  {
    "flag": "🇲🇲",
    "name": [
      "Myanmar",
      "Burmese"
    ],
    "countrycode": "MM"
  },
  {
    "flag": "🇲🇳",
    "name": [
      "Mongolia",
      "Mongolian"
    ],
    "countrycode": "MN"
  },
  {
    "flag": "🇲🇷",
    "name": [
      "Mauritania",
      "Mauritanian"
    ],
    "countrycode": "MR"
  },
  {
    "flag": "🇲🇹",
    "name": [
      "Malta",
      "Maltese"
    ],
    "countrycode": "MT"
  },
  {
    "flag": "🇲🇺",
    "name": [
      "Mauritius",
      "Mauritian"
    ],
    "countrycode": "MU"
  },
  {
    "flag": "🇲🇻",
    "name": [
      "Maldives",
      "Maldivan"
    ],
    "countrycode": "MV"
  },
  {
    "flag": "🇲🇼",
    "name": [
      "Malawi",
      "Malawian"
    ],
    "countrycode": "MW"
  },
  {
    "flag": "🇲🇽",
    "name": [
      "Mexico",
      "Mexican"
    ],
    "countrycode": "MX"
  },
  {
    "flag": "🇲🇾",
    "name": [
      "Malaysia",
      "Malaysian"
    ],
    "countrycode": "MY"
  },
  {
    "flag": "🇲🇿",
    "name": [
      "Mozambique",
      "Mozambican"
    ],
    "countrycode": "MZ"
  },
  {
    "flag": "🇳🇦",
    "name": [
      "Namibia",
      "Namibian"
    ],
    "countrycode": "NA"
  },
  {
    "flag": "🇳🇪",
    "name": [
      "Niger",
      "Nigerien"
    ],
    "countrycode": "NE"
  },
  {
    "flag": "🇳🇬",
    "name": [
      "Nigeria",
      "Nigerian"
    ],
    "countrycode": "NG"
  },
  {
    "flag": "🇳🇮",
    "name": [
      "Nicaragua",
      "Nicaraguan"
    ],
    "countrycode": "NI"
  },
  {
    "flag": "🇳🇱",
    "name": [
      "Netherlands",
      "Dutch"
    ],
    "countrycode": "NL"
  },
  {
    "flag": "🇳🇴",
    "name": [
      "Norway",
      "Norwegian"
    ],
    "countrycode": "NO"
  },
  {
    "flag": "🇳🇵",
    "name": [
      "Nepal",
      "Nepalese"
    ],
    "countrycode": "NP"
  },
  {
    "flag": "🇳🇷",
    "name": [
      "Nauru",
      "Nauruan"
    ],
    "countrycode": "NR"
  },
  {
    "flag": "🇳🇿",
    "name": [
      "New Zealand",
      "New Zealander"
    ],
    "countrycode": "NZ"
  },
  {
    "flag": "🇴🇲",
    "name": [
      "Oman",
      "Omani"
    ],
    "countrycode": "OM"
  },
  {
    "flag": "🇵🇦",
    "name": [
      "Panama",
      "Panamanian"
    ],
    "countrycode": "PA"
  },
  {
    "flag": "🇵🇪",
    "name": [
      "Peru",
      "Peruvian"
    ],
    "countrycode": "PE"
  },
  {
    "flag": "🇵🇬",
    "name": [
      "Papua New Guinea",
      "Papua New Guinean"
    ],
    "countrycode": "PG"
  },
  {
    "flag": "🇵🇭",
    "name": [
      "Philippines",
      "Filipino"
    ],
    "countrycode": "PH"
  },
  {
    "flag": "🇵🇰",
    "name": [
      "Pakistan",
      "Pakistani"
    ],
    "countrycode": "PK"
  },
  {
    "flag": "🇵🇱",
    "name": [
      "Poland",
      "Polish"
    ],
    "countrycode": "PL"
  },
  {
    "flag": "🇵🇷",
    "name": [
      "Puerto Rico",
      "Puerto Rican"
    ],
    "countrycode": "PR"
  },
  {
    "flag": "🇵🇸",
    "name": [
      "Palestine",
      "Palestinian"
    ],
    "countrycode": "PS"
  },
  {
    "flag": "🇵🇹",
    "name": [
      "Portugal",
      "Portuguese"
    ],
    "countrycode": "PT"
  },
  {
    "flag": "🇵🇼",
    "name": [
      "Palau",
      "Palauan"
    ],
    "countrycode": "PW"
  },
  {
    "flag": "🇵🇾",
    "name": [
      "Paraguay",
      "Paraguayan"
    ],
    "countrycode": "PY"
  },
  {
    "flag": "🇶🇦",
    "name": [
      "Qatar",
      "Qatari"
    ],
    "countrycode": "QA"
  },
  {
    "flag": "🇷🇴",
    "name": [
      "Romania",
      "Romanian"
    ],
    "countrycode": "RO"
  },
  {
    "flag": "🇷🇸",
    "name": [
      "Serbia",
      "Serbian"
    ],
    "countrycode": "RS"
  },
  {
    "flag": "🇷🇺",
    "name": [
      "Russia",
      "Russian"
    ],
    "countrycode": "RU"
  },
  {
    "flag": "🇷🇼",
    "name": [
      "Rwanda",
      "Rwandan"
    ],
    "countrycode": "RW"
  },
  {
    "flag": "🇸🇦",
    "name": [
      "Saudi Arabia",
      "Saudi Arabian"
    ],
    "countrycode": "SA"
  },
  {
    "flag": "🇸🇧",
    "name": [
      "Solomon Islands",
      "Solomon Islander"
    ],
    "countrycode": "SB"
  },
  {
    "flag": "🇸🇨",
    "name": [
      "Seychelles",
      "Seychellois"
    ],
    "countrycode": "SC"
  },
  {
    "flag": "🇸🇩",
    "name": [
      "Sudan",
      "Sudanese"
    ],
    "countrycode": "SD"
  },
  {
    "flag": "🇸🇪",
    "name": [
      "Sweden",
      "Swedish"
    ],
    "countrycode": "SE"
  },
  {
    "flag": "🇸🇬",
    "name": [
      "Singapore",
      "Singaporean"
    ],
    "countrycode": "SG"
  },
  {
    "flag": "🇸🇮",
    "name": [
      "Slovenia",
      "Slovene"
    ],
    "countrycode": "SI"
  },
  {
    "flag": "🇸🇰",
    "name": [
      "Slovakia",
      "Slovak"
    ],
    "countrycode": "SK"
  },
  {
    "flag": "🇸🇱",
    "name": [
      "Sierra Leone",
      "Sierra Leonean"
    ],
    "countrycode": "SL"
  },
  {
    "flag": "🇸🇲",
    "name": [
      "San Marino",
      "Sammarinese"
    ],
    "countrycode": "SM"
  },
  {
    "flag": "🇸🇳",
    "name": [
      "Senegal",
      "Senegalese"
    ],
    "countrycode": "SN"
  },
  {
    "flag": "🇸🇴",
    "name": [
      "Somalia",
      "Somali"
    ],
    "countrycode": "SO"
  },
  {
    "flag": "🇸🇷",
    "name": [
      "Suriname",
      "Surinamer"
    ],
    "countrycode": "SR"
  },
  {
    "flag": "🇸🇸",
    "name": [
      "South Sudan",
      "South Sudanese"
    ],
    "countrycode": "SS"
  },
  {
    "flag": "🇸🇹",
    "name": [
      "São Tomé and Príncipe",
      "Sao Tomean"
    ],
    "countrycode": "ST"
  },
  {
    "flag": "🇸🇻",
    "name": [
      "El Salvador",
      "Salvadoran"
    ],
    "countrycode": "SV"
  },
  {
    "flag": "🇸🇾",
    "name": [
      "Syria",
      "Syrian"
    ],
    "countrycode": "SY"
  },
  {
    "flag": "🇸🇿",
    "name": [
      "Eswatini",
      "Swazi"
    ],
    "countrycode": "SZ"
  },
  {
    "flag": "🇹🇩",
    "name": [
      "Chad",
      "Chadian"
    ],
    "countrycode": "TD"
  },
  {
    "flag": "🇹🇬",
    "name": [
      "Togo",
      "Togolese"
    ],
    "countrycode": "TG"
  },
  {
    "flag": "🇹🇭",
    "name": [
      "Thailand",
      "Thai"
    ],
    "countrycode": "TH"
  },
  {
    "flag": "🇹🇯",
    "name": [
      "Tajikistan",
      "Tadzhik"
    ],
    "countrycode": "TJ"
  },
  {
    "flag": "🇹🇰",
    "name": [
      "Tokelau",
      "Tokelauan"
    ],
    "countrycode": "TK"
  },
  {
    "flag": "🇹🇱",
    "name": [
      "Timor-Leste",
      "East Timorese"
    ],
    "countrycode": "TL"
  },
  {
    "flag": "🇹🇲",
    "name": [
      "Turkmenistan",
      "Turkmen"
    ],
    "countrycode": "TM"
  },
  {
    "flag": "🇹🇳",
    "name": [
      "Tunisia",
      "Tunisian"
    ],
    "countrycode": "TN"
  },
  {
    "flag": "🇹🇴",
    "name": [
      "Tonga",
      "Tongan"
    ],
    "countrycode": "TO"
  },
  {
    "flag": "🇹🇷",
    "name": [
      "Turkey",
      "Turkish"
    ],
    "countrycode": "TR"
  },
  {
    "flag": "🇹🇹",
    "name": [
      "Trinidad and Tobago",
      "Trinidadian"
    ],
    "countrycode": "TT"
  },
  {
    "flag": "🇹🇻",
    "name": [
      "Tuvalu",
      "Tuvaluan"
    ],
    "countrycode": "TV"
  },
  {
    "flag": "🇹🇼",
    "name": [
      "Taiwan",
      "Taiwanese"
    ],
    "countrycode": "TW"
  },
  {
    "flag": "🇹🇿",
    "name": [
      "Tanzania",
      "Tanzanian"
    ],
    "countrycode": "TZ"
  },
  {
    "flag": "🇺🇦",
    "name": [
      "Ukraine",
      "Ukrainian"
    ],
    "countrycode": "UA"
  },
  {
    "flag": "🇺🇬",
    "name": [
      "Uganda",
      "Ugandan"
    ],
    "countrycode": "UG"
  },
  {
    "flag": "🇺🇾",
    "name": [
      "Uruguay",
      "Uruguayan"
    ],
    "countrycode": "UY"
  },
  {
    "flag": "🇺🇿",
    "name": [
      "Uzbekistan",
      "Uzbekistani"
    ],
    "countrycode": "UZ"
  },
  {
    "flag": "🇻🇦",
    "name": [
      "Vatican City",
      "Vatican"
    ],
    "countrycode": "VA"
  },
  {
    "flag": "🇻🇨",
    "name": [
      "Saint Vincent and the Grenadines",
      "Saint Vincentian"
    ],
    "countrycode": "VC"
  },
  {
    "flag": "🇻🇪",
    "name": [
      "Venezuela",
      "Venezuelan"
    ],
    "countrycode": "VE"
  },
  {
    "flag": "🇻🇳",
    "name": [
      "Vietnam",
      "Vietnamese"
    ],
    "countrycode": "VN"
  },
  {
    "flag": "🇻🇺",
    "name": [
      "Vanuatu",
      "Ni-Vanuatu"
    ],
    "countrycode": "VU"
  },
  {
    "flag": "🇼🇸",
    "name": [
      "Samoa",
      "Samoan"
    ],
    "countrycode": "WS"
  },
  {
    "flag": "🇽🇰",
    "name": [
      "Kosovo",
      "Kosovar"
    ],
    "countrycode": "XK"
  },
  {
    "flag": "🇾🇪",
    "name": [
      "Yemen",
      "Yemeni"
    ],
    "countrycode": "YE"
  },
  {
    "flag": "🇿🇦",
    "name": [
      "South Africa",
      "South African"
    ],
    "countrycode": "ZA"
  },
  {
    "flag": "🇿🇲",
    "name": [
      "Zambia",
      "Zambian"
    ],
    "countrycode": "ZM"
  },
  {
    "flag": "🇿🇼",
    "name": [
      "Zimbabwe",
      "Zimbabwean"
    ],
    "countrycode": "ZW"
  }
]

module.exports = {
  countries: countries
}