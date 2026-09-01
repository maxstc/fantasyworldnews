# !!! Important to Note !!!

Every api call includes a `String` called `message` that contains a reason for failure if the API fails. Otherwise, this value is undefined.  

If an api call fails, assume that all of the "returns" are undefined.  

Unless otherwise specified, status code `200` should be used if a request was successful and `400` if unsuccessful.

# `POST /api/accounts/signup`

Use this to create a new account

### Parameters

- `String username` The username the user wants  
- `String password` The password the user wants  
- `String email` The user's email  

### Returns

- `String token` Login token to be stored as a cookie and to be used for authentication. `null` if the creation failed.  

# `POST /api/accounts/login`

Use this to log in

### Parameters

- `String username` The account's username  
- `String password` - The account's password  

### Returns

- `String token` Login token to be stored as a cookie and to be used for authentication. `null` if the login failed.  

# POST `/api/dashboard/headlines`

Use this to fetch headlines for the dashboard

### Parameters

- `integer lastHeadline` The headline at the end of your list of already fetched headlines. `null` if you don't have any headlines yet. ie when first loading headlines, use `null`.  
- `integer numHeadlines` The number of additional headlines to load in.  

### Returns

- `Object[] headlines` Array of headlines to append to your list. Ordered latest to oldest.  
- `String headlines[i].text` The text of the headline.  
- `integer headlines[i].timestamp` The timestamp of the article's entry into the db.  
- `String headlines[i].link` A link to the article.  

# POST `/api/dashboard/trades` (REQUIRES AUTHENTICATION)

Use this to get the trades for a specific user

### Parameters

- `String gameID` Your gameID  

### Returns

- `Object[] trades` The list of trades for this user  
- `integer trades[i].timestamp` The timestamp the trade was proposed  
- `String trades[i].proposerTeam` The id of the team/player that proposed the trade  
- `String trades[i].targetTeam` The id of the team/player that was proposed the trade  
- `String trades[i].proposerCountry` The country code of the country the proposer will give away  
- `String trades[i].targetCountry` The country code of the country the proposer wants  
- `String status` The status of the trade (pending, declined, etc.)  

# POST `/api/dashboard/players` (REQUIRES AUTHENTICATION)

Use this to get a list of player ids

### Parameters

- `String gameID` Your game ID  

### Returns

- `String[] players` The list of player IDs in this game  

# `POST /api/info/player` (REQUIRES AUTHENTICATION)

Get info about a specific player

### Parameters

- `String gameID` Your game ID  
- `String playerID` The player's ID  

### Returns

- `String displayName` The player's display name  
- `integer points` The number of points the player has  
- `String[] countries` The country codes of the countries the player has (lineup countries are ordered)  
- `Boolean isYou` true if this player is you :P  

# `POST /api/info/country` (REQUIRES AUTHENTICATION)

Get info about a specific country

### Parameters

- `String gameID` Your gameID  
- `String countryCode` The country code you're searching for  

### Returns

- `String displayName` Display name of country  
- `String matches` Matching names of country  
- `String flag` Flag of the country  
- `String continent` Continent of country  

# `POST /api/trade/propose` (REQUIRES AUTHENTICATION)

Propose a trade

### Parameters

- `String gameID` The game ID  
- `proposerCountry` The country code you're giving away  
- `targetCountry` The country you want  

### No Returns

# `POST /api/trade/accept` (REQUIRES AUTHENTICATION)

Propose a trade

### Parameters

- `String gameID` The game ID  
- `String tradeID` The trade ID you're trying to accept  

### No Returns

# `POST /api/trade/decline` (REQUIRES AUTHENTICATION)

Propose a trade

### Parameters

- `String gameID` The game ID  
- `String tradeID` The trade ID you're trying to decline  

### No Returns

# `POST /api/lineup/set` (REQUIRES AUTHENTICATION)

### Parameters

- `String gameID` The game ID  
- `String[] countries` The list of countries, ordered according to what you want your lineup to be  

### No Returns

# `POST /api/game/create` (REQUIRES AUTHENTICATION)

Creates a new game

### No Parameters

### Returns

- `String gameID` The game ID if successful.  

# `POST /api/game/invite` (REQUIRES AUTHENTICATION)

Invites a player to a game

### Parameters

- `String gameID` The game ID  
- `String playerID` The ID of the player to invite  

### No Returns

# `POST /api/game/accept` (REQUIRES AUTHENTICATION)

Accepts an invite to a game

### Parameters

- `String inviteID` The ID of the invite  

### No Returns

# `POST /api/game/get-invites` (REQUIRES AUTHENTICATION)

Fetches a list of invites an account has received

### No Parameters

### Returns

- `String[] inviteIDs` A list of IDs of invites, if successful.  

# `POST /api/game/decline` (REQUIRES AUTHENTICATION)

Declines an invite to a game

### Parameters

- `String inviteID` The invite ID  

### No Returns

# `POST /api/game/get-games` (REQUIRES AUTHENTICATION)

Gets a list of games an account is in

### No Parameters

### Returns

- `String[] gameIDs` A list of game IDs, if successful  
