CREATE DATABASE fwn;

CREATE TYPE game_status AS ENUM ('preparing', 'in progress', 'completed');

CREATE TABLE games (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    status game_status NOT NULL DEFAULT 'preparing',
    owner UUID NOT NULL REFERENCES accounts(id)
);

CREATE TABLE accounts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(254) NOT NULL UNIQUE,
    username VARCHAR(32) NOT NULL UNIQUE,
    password_hash TEXT NOT NULL
);

CREATE TYPE game_invite_status AS ENUM ('pending', 'canceled', 'accepted', 'declined');

CREATE TABLE game_invites {
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    status game_invite_status NOT NULL DEFAULT 'pending',
    sender_account_id UUID NOT NULL REFERENCES accounts(id),
    recipient_account_id UUID NOT NULL REFERENCES accounts(id),
    game_id BIGINT NOT NULL REFERENCES games(id)
}

CREATE UNIQUE INDEX game_invites_one_pending_per_recipient_game
ON game_invites (recipient_account_id, game_id)
WHERE status = 'pending';

CREATE TABLE players (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    game_id BIGINT NOT NULL REFERENCES games(id),
    account_id UUID NOT NULL REFERENCES accounts(id),
    score INTEGER NOT NULL DEFAULT 0,
    UNIQUE (game_id, account_id),
    UNIQUE (id, game_id)
);

CREATE TYPE continent_name AS ENUM ('North America', 'South America', 'Europe', 'Asia', 'Africa', 'Oceania');

CREATE TABLE countries (
    id SMALLINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    country_code CHAR(2) NOT NULL UNIQUE,
    flag TEXT NOT NULL UNIQUE,
    display_name TEXT NOT NULL UNIQUE,
    continent continent_name NOT NULL
);

CREATE TABLE country_ownerships (
    player_id BIGINT NOT NULL,
    country_id SMALLINT NOT NULL REFERENCES countries(id),
    game_id BIGINT NOT NULL,
    lineup_space continent_name,
    UNIQUE (player_id, country_id),
    UNIQUE (game_id, country_id),
    FOREIGN KEY (player_id, game_id) REFERENCES players(id, game_id)
);

CREATE TABLE country_names (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    country_id SMALLINT NOT NULL REFERENCES countries(id),
    name TEXT NOT NULL,
    UNIQUE (country_id, name)
);

CREATE TYPE trade_status AS ENUM ('pending', 'canceled', 'accepted', 'declined');

CREATE TABLE trades (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    game_id BIGINT NOT NULL,
    proposer_player_id BIGINT NOT NULL,
    target_player_id BIGINT,
    proposer_country_id SMALLINT REFERENCES countries(id),
    target_country_id SMALLINT NOT NULL REFERENCES countries(id),
    status trade_status NOT NULL DEFAULT 'pending',
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CHECK (proposer_player_id <> target_player_id),
    CHECK (proposer_country_id <> target_country_id),
    FOREIGN KEY (proposer_player_id, game_id) REFERENCES players(id, game_id),
    FOREIGN KEY (target_player_id, game_id) REFERENCES players(id, game_id)
);

CREATE TABLE news_sources (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL UNIQUE
);

CREATE TABLE headlines (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    text TEXT NOT NULL,
    fetched_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    news_source_id BIGINT NOT NULL REFERENCES news_sources(id),
    link TEXT NOT NULL
);

CREATE TABLE mentions (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    headline_id BIGINT NOT NULL REFERENCES headlines(id),
    country_name_id BIGINT NOT NULL REFERENCES country_names(id)
);