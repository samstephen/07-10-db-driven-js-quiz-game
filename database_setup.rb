# load/create our database for this program
CONNECTION = SQLite3::Database.new("quiz-game.db")

# creating tables (no need for "IF NOT EXISTS" if dropping table)
CONNECTION.execute("CREATE TABLE IF NOT EXISTS quizzes (id INTEGER PRIMARY KEY, question TEXT, choices TEXT, right_answer TEXT);")

# transforms sqlite tables(or rows/columns) to ruby hashes
CONNECTION.results_as_hash = true

# create rows for categories



=begin
var quizArray = [
        {   question: "What is the name of Ned Stark's youngest daughter?",
            choices: ["(a) Yari", "(b) Arya", "(c) Darya", "(d) Catelyn"],
            rightAnswer: "b"
        },

        {   question: "What is the name of the country 'Game of Thrones' takes place in?",
            choices: ["(a) Westeros", "(b) Westrose", "(c) Braavos", "(d) King's Landing"],
            rightAnswer: "a"
        },

        {   question: "Who wields 'Longclaw' out of these characters?",
            choices: ["(a) Jaime Lannister", "(b) The Mountain", "(c) Sandor Clegane", "(d) Jon Snow"],
            rightAnswer: "d"
        },

        {   question: "What is the name of Jon Snow's dire wolf?",
            choices: ["(a) Ghost", "(b) Summer", "(c) Shaggy Dog", "(d) Nymeria"],
            rightAnswer: "a"
        }   ];
=end
