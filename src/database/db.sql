-- 1. TABLA PRINCIPAL DE USUARIOS
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    profile_image TEXT,
    cover_image TEXT,
    total_points INT DEFAULT 0,
    prestige_level INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW()
);

-- 2. TABLA DE EVENTOS
CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(255),
    points_awarded INT DEFAULT 0,
    start_date TIMESTAMP,
    end_date TIMESTAMP,
    created_by INT REFERENCES users(id) ON DELETE SET NULL
);

-- 3. TABLA DE DESAFÍOS
CREATE TABLE challenges (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    points_awarded INT DEFAULT 0,
    created_by INT REFERENCES users(id) ON DELETE SET NULL
);

-- 4. TABLA DE INSIGNIAS
CREATE TABLE badges (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    image TEXT,
    requirement TEXT
);

-- 5. TABLA DE RECOMPENSAS
CREATE TABLE rewards (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    points_required INT NOT NULL
);

-- 6. TABLA DE ASISTENCIA A EVENTOS (Depende de users y events)
CREATE TABLE event_attendance (
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    event_id INT REFERENCES events(id) ON DELETE CASCADE,
    attended_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (user_id, event_id)
);

-- 7. TABLA DE DESAFÍOS COMPLETADOS (Depende de users y challenges)
CREATE TABLE user_challenges (
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    challenge_id INT REFERENCES challenges(id) ON DELETE CASCADE,
    completed_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (user_id, challenge_id)
);

-- 8. TABLA DE INSIGNIAS OBTENIDAS (Depende de users y badges)
CREATE TABLE user_badges (
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    badge_id INT REFERENCES badges(id) ON DELETE CASCADE,
    earned_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (user_id, badge_id)
);

-- 9. TABLA DE RECOMPENSAS CANJEADAS (Depende de users y rewards)
CREATE TABLE user_rewards (
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    reward_id INT REFERENCES rewards(id) ON DELETE CASCADE,
    redeemed_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (user_id, reward_id)
);

-- 10. TABLA DE CLASIFICACIÓN (Depende de users)
CREATE TABLE leaderboard (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    total_points INT DEFAULT 0,
    rank INT DEFAULT 0
);

-- 11. TABLA DE NIVELES (Depende de users)
CREATE TABLE levels (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE UNIQUE,
    level INT DEFAULT 1,
    points_required INT DEFAULT 500
);

-- 12. TABLA DE PRESTIGIO (Depende de users)
CREATE TABLE prestige (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    prestige_level INT DEFAULT 0,
    reset_date TIMESTAMP DEFAULT NOW()
);