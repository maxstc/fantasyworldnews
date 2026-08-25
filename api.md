# Accounts API

## `POST /accounts/signup`

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
Message associated with the request, ie "Username already taken" if the username wasn't available. null if success is true.
#### `String token`
Login token to be stored as a cookie and to be used for authentication. null if the creation failed.

## `POST /accounts/login`

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
Message associated with the request, ie "Username already taken" if the username wasn't available. null if success is true.
#### `String token`
Login token to be stored as a cookie and to be used for authentication. null if the login failed.