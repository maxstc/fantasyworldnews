# Accounts

Signup and login to accounts

## `POST /api/accounts/signup`

Use this to create a new account

### Parameters

#### `String username`
The username the user wants
#### `String password`
The password the user wants
#### `String email`
The user's email

### Returns

#### `Boolean success`
true if the account was created, false otherwise
#### `String message`
Message associated with the request, ie "Username already taken" if the username wasn't available. `null` if success is true.
#### `String token`
Login token to be stored as a cookie and to be used for authentication. `null` if the creation failed.

## `POST /api/accounts/login`

Use this to log in

### Parameters

#### `String username`
The account's username
#### `String password`
The account's password

### Returns

#### `Boolean success`
true if the account was created, false otherwise
#### `String message`
Message associated with the request, ie "Username already taken" if the username wasn't available. `null` if success is true.
#### `String token`
Login token to be stored as a cookie and to be used for authentication. `null` if the login failed.

# Dashboard

Get info to display on dashboard

## POST `/api/dashboard/headlines`

Use this to fetch headlines for the dashboard

### Parameters

#### 'integer lastHeadline`

The latest headline you already have. `null` if you don't have any headlines yet. ie when first loading headlines, use null. As the user reaches the bottom of the list of headlines, use the last headline in the list.

#### `integer numHeadlines`

The number of additional headlines to load in.

### Returns

#### `Boolean success`
true if the request is successful.
#### `String message`
Message to display if something went wrong. `null` if request was successful.
#### `Object[] headlines`
Array of headlines to append to your list. Ordered latest to oldest.
#### `String headlines[i].text`
The text of the headline.
#### `integer headlines[i].timestamp`
The timestamp of the article's entry into the db.
#### `String headlines[i].link`
A link to the article.

## POST `/api/dashboard/trades`

Use this to get the trades for a specific user

### Parameters

#### `String token`
Your session token
#### `String gameID`
Your gameID

### Returns

#### `Boolean success`
true if the request was successful.
#### `String message`
Message to display if the request failed. null if the request was successful.
#### `Object[] trades`
The list of trades for this user
#### `integer trades[i].timestamp`
The timestamp the trade was proposed
#### `String trades[i].proposerTeam`
The id of the team/player that proposed the trade
#### `String trades[i].targetTeam`
The id of the team/player that was proposed the trade
#### `String trades[i].proposerCountry`
The country code of the country the proposer will give away
#### `String trades[i].targetCountry`
The country code of the country the proposer wants
#### `String status`
The status of the trade (pending, declined, etc.)

## POST `/api/dashboard/players`

Use this to get a list of player ids

### Parameters

#### `String token`
Your session token
#### `String gameID`
Your game ID

# Info

Get info about a specific player or country

## `POST /api/info/player`

### Parameters

#### `String token`
Your session token
#### `String gameID`
Your game ID
#### `String playerID`
The player's ID

### Returns

#### `Boolean success`
true if successful
#### `String message`
Message to display if query unsuccessful. `null` if successful.
#### `String displayName`
The player's display name
#### `integer points`
The number of points the player has
#### `String[] countries`
The country codes of the countries the player has (lineup countries are ordered)
#### `Boolean isYou`
true if this player is you :P

## `POST /api/info/country`

### Parameters

#### `String token`
Your session token
#### `String gameID`
Your gameID
#### `String countryCode`
The country code you're searching for

### Returns

#### `Boolean success`
true if successful
#### `String message`
Message to display if query unsuccessful. `null` if successful.
#### `String displayName`
Display name of country
#### `String matches`
Matching names of country
#### `String flag`
Flag of the country
#### `String continent`
Continent of country

# Trade

Propose, accept, and decline trades

## `POST /api/trade/propose`

Propose a trade

### Parameters

#### `String token`
Your session token
#### `String gameID`
The game ID
#### `proposerCountry`
The country code you're giving away
#### `targetCountry`
The country you want

### Returns

#### `Boolean success`
true if the request was successful.
#### `String message`
Message to display if request unsuccessful. `null` if request unsuccessful.

## `POST /api/trade/accept`

Propose a trade

### Parameters

#### `String token`
Your session token
#### `String gameID`
The game ID
#### `String tradeID`
The trade ID you're trying to accept

### Returns

#### `Boolean success`
true if the request was successful.
#### `String message`
Message to display if request unsuccessful. `null` if request unsuccessful.

## `POST /api/trade/decline`

Propose a trade

### Parameters

#### `String token`
Your session token
#### `String gameID`
The game ID
#### `String tradeID`
The trade ID you're trying to decline

### Returns

#### `Boolean success`
true if the request was successful.
#### `String message`
Message to display if request unsuccessful. `null` if request unsuccessful.

# Lineup

Set your lineup

## `POST /api/lineup/set`

### Parameters

#### `String token`
Your session token
#### `String gameID`
The game ID
#### `String[] countries`
The list of countries, ordered according to what you want your lineup to be

### Returns

#### `Boolean success`
true if the request was successful.
#### `String message`
Message to display if request unsuccessful. `null` if request unsuccessful.