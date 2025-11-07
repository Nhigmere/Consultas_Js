
const peliculas = [
  { id: 1, titulo: "The Shawshank Redemption", año: 1994, director: "Frank Darabont", genero: "Drama", duracion: 142, calificacion: 9.3 },
  { id: 2, titulo: "The Godfather", año: 1972, director: "Francis Ford Coppola", genero: "Crimen", duracion: 175, calificacion: 9.2 },
  { id: 3, titulo: "The Dark Knight", año: 2008, director: "Christopher Nolan", genero: "Acción", duracion: 152, calificacion: 9.0 },
  { id: 4, titulo: "Pulp Fiction", año: 1994, director: "Quentin Tarantino", genero: "Crimen", duracion: 154, calificacion: 8.9 },
  { id: 5, titulo: "Forrest Gump", año: 1994, director: "Robert Zemeckis", genero: "Drama", duracion: 142, calificacion: 8.8 },
  { id: 6, titulo: "Inception", año: 2010, director: "Christopher Nolan", genero: "Ciencia ficción", duracion: 148, calificacion: 8.8 },
  { id: 7, titulo: "Fight Club", año: 1999, director: "David Fincher", genero: "Drama", duracion: 139, calificacion: 8.8 },
  { id: 8, titulo: "The Matrix", año: 1999, director: "Lana Wachowski, Lilly Wachowski", genero: "Ciencia ficción", duracion: 136, calificacion: 8.7 },
  { id: 9, titulo: "The Lord of the Rings: The Fellowship of the Ring", año: 2001, director: "Peter Jackson", genero: "Aventura", duracion: 178, calificacion: 8.8 },
  { id: 10, titulo: "The Lord of the Rings: The Two Towers", año: 2002, director: "Peter Jackson", genero: "Aventura", duracion: 179, calificacion: 8.7 },
  { id: 11, titulo: "The Lord of the Rings: The Return of the King", año: 2003, director: "Peter Jackson", genero: "Aventura", duracion: 201, calificacion: 8.9 },
  { id: 12, titulo: "Interstellar", año: 2014, director: "Christopher Nolan", genero: "Ciencia ficción", duracion: 169, calificacion: 8.6 },
  { id: 13, titulo: "Gladiator", año: 2000, director: "Ridley Scott", genero: "Acción", duracion: 155, calificacion: 8.5 },
  { id: 14, titulo: "Goodfellas", año: 1990, director: "Martin Scorsese", genero: "Crimen", duracion: 146, calificacion: 8.7 },
  { id: 15, titulo: "The Silence of the Lambs", año: 1991, director: "Jonathan Demme", genero: "Thriller", duracion: 118, calificacion: 8.6 },
  { id: 16, titulo: "Se7en", año: 1995, director: "David Fincher", genero: "Thriller", duracion: 127, calificacion: 8.6 },
  { id: 17, titulo: "Saving Private Ryan", año: 1998, director: "Steven Spielberg", genero: "Bélica", duracion: 169, calificacion: 8.6 },
  { id: 18, titulo: "Schindler’s List", año: 1993, director: "Steven Spielberg", genero: "Histórico", duracion: 195, calificacion: 9.0 },
  { id: 19, titulo: "The Green Mile", año: 1999, director: "Frank Darabont", genero: "Drama", duracion: 189, calificacion: 8.6 },
  { id: 20, titulo: "The Prestige", año: 2006, director: "Christopher Nolan", genero: "Drama", duracion: 130, calificacion: 8.5 },
  { id: 21, titulo: "Titanic", año: 1997, director: "James Cameron", genero: "Romance", duracion: 195, calificacion: 7.9 },
  { id: 22, titulo: "Avatar", año: 2009, director: "James Cameron", genero: "Ciencia ficción", duracion: 162, calificacion: 7.8 },
  { id: 23, titulo: "The Departed", año: 2006, director: "Martin Scorsese", genero: "Crimen", duracion: 151, calificacion: 8.5 },
  { id: 24, titulo: "The Wolf of Wall Street", año: 2013, director: "Martin Scorsese", genero: "Comedia", duracion: 180, calificacion: 8.2 },
  { id: 25, titulo: "Joker", año: 2019, director: "Todd Phillips", genero: "Drama", duracion: 122, calificacion: 8.4 },
  { id: 26, titulo: "Parasite", año: 2019, director: "Bong Joon-ho", genero: "Thriller", duracion: 132, calificacion: 8.6 },
  { id: 27, titulo: "Spirited Away", año: 2001, director: "Hayao Miyazaki", genero: "Animación", duracion: 125, calificacion: 8.6 },
  { id: 28, titulo: "Toy Story", año: 1995, director: "John Lasseter", genero: "Animación", duracion: 81, calificacion: 8.3 },
  { id: 29, titulo: "Finding Nemo", año: 2003, director: "Andrew Stanton", genero: "Animación", duracion: 100, calificacion: 8.2 },
  { id: 30, titulo: "Inside Out", año: 2015, director: "Pete Docter", genero: "Animación", duracion: 95, calificacion: 8.1 },
  { id: 31, titulo: "Up", año: 2009, director: "Pete Docter", genero: "Animación", duracion: 96, calificacion: 8.3 },
  { id: 32, titulo: "Coco", año: 2017, director: "Lee Unkrich", genero: "Animación", duracion: 105, calificacion: 8.4 },
  { id: 33, titulo: "WALL·E", año: 2008, director: "Andrew Stanton", genero: "Animación", duracion: 98, calificacion: 8.4 },
  { id: 34, titulo: "Avengers: Endgame", año: 2019, director: "Anthony y Joe Russo", genero: "Acción", duracion: 181, calificacion: 8.4 },
  { id: 35, titulo: "Iron Man", año: 2008, director: "Jon Favreau", genero: "Acción", duracion: 126, calificacion: 7.9 },
  { id: 36, titulo: "Black Panther", año: 2018, director: "Ryan Coogler", genero: "Acción", duracion: 134, calificacion: 7.3 },
  { id: 37, titulo: "Guardians of the Galaxy", año: 2014, director: "James Gunn", genero: "Aventura", duracion: 121, calificacion: 8.0 },
  { id: 38, titulo: "Doctor Strange", año: 2016, director: "Scott Derrickson", genero: "Acción", duracion: 115, calificacion: 7.5 },
  { id: 39, titulo: "Spider-Man: No Way Home", año: 2021, director: "Jon Watts", genero: "Acción", duracion: 148, calificacion: 8.3 },
  { id: 40, titulo: "Dune: Part One", año: 2021, director: "Denis Villeneuve", genero: "Ciencia ficción", duracion: 155, calificacion: 8.0 },
  { id: 41, titulo: "Blade Runner 2049", año: 2017, director: "Denis Villeneuve", genero: "Ciencia ficción", duracion: 164, calificacion: 8.0 },
  { id: 42, titulo: "Arrival", año: 2016, director: "Denis Villeneuve", genero: "Ciencia ficción", duracion: 116, calificacion: 7.9 },
  { id: 43, titulo: "Mad Max: Fury Road", año: 2015, director: "George Miller", genero: "Acción", duracion: 120, calificacion: 8.1 },
  { id: 44, titulo: "The Revenant", año: 2015, director: "Alejandro G. Iñárritu", genero: "Aventura", duracion: 156, calificacion: 8.0 },
  { id: 45, titulo: "Birdman", año: 2014, director: "Alejandro G. Iñárritu", genero: "Comedia", duracion: 119, calificacion: 7.7 },
  { id: 46, titulo: "The Grand Budapest Hotel", año: 2014, director: "Wes Anderson", genero: "Comedia", duracion: 99, calificacion: 8.1 },
  { id: 47, titulo: "La La Land", año: 2016, director: "Damien Chazelle", genero: "Romance", duracion: 128, calificacion: 8.0 },
  { id: 48, titulo: "Whiplash", año: 2014, director: "Damien Chazelle", genero: "Drama", duracion: 107, calificacion: 8.5 },
  { id: 49, titulo: "Oppenheimer", año: 2023, director: "Christopher Nolan", genero: "Histórico", duracion: 180, calificacion: 8.6 },
  { id: 50, titulo: "Barbie", año: 2023, director: "Greta Gerwig", genero: "Comedia", duracion: 114, calificacion: 6.9 },
  { id: 51, titulo: "The Social Network", año: 2010, director: "David Fincher", genero: "Drama", duracion: 120, calificacion: 7.8 },
  { id: 52, titulo: "Her", año: 2013, director: "Spike Jonze", genero: "Romance", duracion: 126, calificacion: 8.0 },
  { id: 53, titulo: "The Truman Show", año: 1998, director: "Peter Weir", genero: "Drama", duracion: 103, calificacion: 8.2 },
  { id: 54, titulo: "Cast Away", año: 2000, director: "Robert Zemeckis", genero: "Aventura", duracion: 143, calificacion: 7.8 },
  { id: 55, titulo: "The Sixth Sense", año: 1999, director: "M. Night Shyamalan", genero: "Thriller", duracion: 107, calificacion: 8.1 },
  { id: 56, titulo: "American Beauty", año: 1999, director: "Sam Mendes", genero: "Drama", duracion: 122, calificacion: 8.3 },
  { id: 57, titulo: "The Lion King", año: 1994, director: "Roger Allers, Rob Minkoff", genero: "Animación", duracion: 88, calificacion: 8.5 },
  { id: 58, titulo: "Beauty and the Beast", año: 1991, director: "Gary Trousdale, Kirk Wise", genero: "Animación", duracion: 84, calificacion: 8.0 },
  { id: 59, titulo: "Frozen", año: 2013, director: "Chris Buck, Jennifer Lee", genero: "Animación", duracion: 102, calificacion: 7.4 },
  { id: 60, titulo: "Shrek", año: 2001, director: "Andrew Adamson, Vicky Jenson", genero: "Animación", duracion: 90, calificacion: 7.9 },
  { id: 61, titulo: "The Incredibles", año: 2004, director: "Brad Bird", genero: "Animación", duracion: 115, calificacion: 8.0 },
  { id: 62, titulo: "Ratatouille", año: 2007, director: "Brad Bird", genero: "Animación", duracion: 111, calificacion: 8.1 },
  { id: 63, titulo: "Monsters, Inc.", año: 2001, director: "Pete Docter", genero: "Animación", duracion: 92, calificacion: 8.1 },
  { id: 64, titulo: "The Pursuit of Happyness", año: 2006, director: "Gabriele Muccino", genero: "Drama", duracion: 117, calificacion: 8.0 },
  { id: 65, titulo: "Slumdog Millionaire", año: 2008, director: "Danny Boyle", genero: "Drama", duracion: 120, calificacion: 8.0 },
  { id: 66, titulo: "12 Years a Slave", año: 2013, director: "Steve McQueen", genero: "Histórico", duracion: 134, calificacion: 8.1 },
  { id: 67, titulo: "The Pianist", año: 2002, director: "Roman Polanski", genero: "Histórico", duracion: 150, calificacion: 8.5 },
  { id: 68, titulo: "The Intouchables", año: 2011, director: "Olivier Nakache, Éric Toledano", genero: "Comedia", duracion: 112, calificacion: 8.5 },
  { id: 69, titulo: "Amélie", año: 2001, director: "Jean-Pierre Jeunet", genero: "Romance", duracion: 122, calificacion: 8.3 },
  { id: 70, titulo: "Life of Pi", año: 2012, director: "Ang Lee", genero: "Aventura", duracion: 127, calificacion: 7.9 },
  { id: 71, titulo: "Gravity", año: 2013, director: "Alfonso Cuarón", genero: "Ciencia ficción", duracion: 91, calificacion: 7.7 },
  { id: 72, titulo: "Children of Men", año: 2006, director: "Alfonso Cuarón", genero: "Ciencia ficción", duracion: 109, calificacion: 7.9 },
  { id: 73, titulo: "Roma", año: 2018, director: "Alfonso Cuarón", genero: "Drama", duracion: 135, calificacion: 7.7 },
  { id: 74, titulo: "The Shape of Water", año: 2017, director: "Guillermo del Toro", genero: "Fantasía", duracion: 123, calificacion: 7.3 },
  { id: 75, titulo: "Pan’s Labyrinth", año: 2006, director: "Guillermo del Toro", genero: "Fantasía", duracion: 118, calificacion: 8.2 },
  { id: 76, titulo: "Hellboy", año: 2004, director: "Guillermo del Toro", genero: "Acción", duracion: 122, calificacion: 6.8 },
  { id: 77, titulo: "No Country for Old Men", año: 2007, director: "Joel Coen, Ethan Coen", genero: "Thriller", duracion: 122, calificacion: 8.2 },
  { id: 78, titulo: "Fargo", año: 1996, director: "Joel Coen, Ethan Coen", genero: "Crimen", duracion: 98, calificacion: 8.1 },
  { id: 79, titulo: "The Big Lebowski", año: 1998, director: "Joel Coen, Ethan Coen", genero: "Comedia", duracion: 117, calificacion: 8.1 },
  { id: 80, titulo: "There Will Be Blood", año: 2007, director: "Paul Thomas Anderson", genero: "Drama", duracion: 158, calificacion: 8.2 },
  { id: 81, titulo: "Boogie Nights", año: 1997, director: "Paul Thomas Anderson", genero: "Drama", duracion: 155, calificacion: 7.9 },
  { id: 82, titulo: "Magnolia", año: 1999, director: "Paul Thomas Anderson", genero: "Drama", duracion: 188, calificacion: 8.0 },
  { id: 83, titulo: "Oldboy", año: 2003, director: "Park Chan-wook", genero: "Thriller", duracion: 120, calificacion: 8.4 },
  { id: 84, titulo: "Memories of Murder", año: 2003, director: "Bong Joon-ho", genero: "Crimen", duracion: 132, calificacion: 8.1 },
  { id: 85, titulo: "Snowpiercer", año: 2013, director: "Bong Joon-ho", genero: "Ciencia ficción", duracion: 126, calificacion: 7.1 },
  { id: 86, titulo: "Train to Busan", año: 2016, director: "Yeon Sang-ho", genero: "Terror", duracion: 118, calificacion: 7.6 },
  { id: 87, titulo: "Get Out", año: 2017, director: "Jordan Peele", genero: "Terror", duracion: 104, calificacion: 7.8 },
  { id: 88, titulo: "Us", año: 2019, director: "Jordan Peele", genero: "Terror", duracion: 116, calificacion: 6.8 },
  { id: 89, titulo: "Nope", año: 2022, director: "Jordan Peele", genero: "Terror", duracion: 130, calificacion: 6.9 },
  { id: 90, titulo: "A Quiet Place", año: 2018, director: "John Krasinski", genero: "Terror", duracion: 90, calificacion: 7.5 },
  { id: 91, titulo: "It", año: 2017, director: "Andy Muschietti", genero: "Terror", duracion: 135, calificacion: 7.3 },
  { id: 92, titulo: "The Conjuring", año: 2013, director: "James Wan", genero: "Terror", duracion: 112, calificacion: 7.5 },
  { id: 93, titulo: "Insidious", año: 2010, director: "James Wan", genero: "Terror", duracion: 103, calificacion: 6.8 },
  { id: 94, titulo: "Saw", año: 2004, director: "James Wan", genero: "Terror", duracion: 103, calificacion: 7.6 },
  { id: 95, titulo: "The Exorcist", año: 1973, director: "William Friedkin", genero: "Terror", duracion: 122, calificacion: 8.1 },
  { id: 96, titulo: "Psycho", año: 1960, director: "Alfred Hitchcock", genero: "Thriller", duracion: 109, calificacion: 8.5 },
  { id: 97, titulo: "Rear Window", año: 1954, director: "Alfred Hitchcock", genero: "Suspenso", duracion: 112, calificacion: 8.4 },
  { id: 98, titulo: "Vertigo", año: 1958, director: "Alfred Hitchcock", genero: "Misterio", duracion: 128, calificacion: 8.3 },
  { id: 99, titulo: "North by Northwest", año: 1959, director: "Alfred Hitchcock", genero: "Aventura", duracion: 136, calificacion: 8.3 },
  { id: 100, titulo: "Citizen Kane", año: 1941, director: "Orson Welles", genero: "Drama", duracion: 119, calificacion: 8.3 }
];


// 1. Peliculas que son del genero drama 
// 2. Peliculas que son del genero accion 
// 3. Peliculas que son de ciencia ficcion 
// 4. Peliculas que son del genero aventura o drama 
// 5. Peliculas que comiencen con la letra S
// 6. Peliculas que se encuentren en los 2000 a 2010 
// 7. Peliculas que duran de 90 min a 100 min
// 8. Promedio de calificacion para las peliculas que son drama
// 9. Peliculas de fantasia dirigidas por gillermo del toro
// 10. Verficar si una de las peliculas dura 2Hr



const movieDrama = peliculas.filter(movie => movie.genero === "Drama");
console.log(movieDrama);
// filter devuelve un nuevo array con las peliculas que cumplen con la condicion

const movieAction = peliculas.filter(movie => movie.genero === "Acción");
console.log(movieAction);
// filter devuelve un nuevo array con las peliculas que cumplen con la condicion

const movieCienciaF = peliculas.filter(movie => movie.genero === "Ciencia ficción");
console.log(movieCienciaF);
// filter devuelve un nuevo array con las peliculas que cumplen con la condicion

const movieAventuraDrama = peliculas.filter(movie => movie.genero === "Aventura" || movie.genero === "Drama");
console.log(movieAventuraDrama);

// filter devuelve un nuevo array con las peliculas que cumplen con la condicion
const movieLetraS = peliculas.filter(movie => movie.titulo.startsWith("S"));
console.log(movieLetraS);

// filter devuelve un nuevo array con las peliculas que cumplen con la condicion
const movie2000a2010 = peliculas.filter(movie => movie.año >= 2000 && movie.año <= 2010);
console.log(movie2000a2010);

// filter devuelve un nuevo array con las peliculas que cumplen con la condicion
const movie90a100min = peliculas.filter(movie => movie.duracion >= 90 && movie.duracion <= 100);
console.log(movie90a100min);

// filter devuelve un nuevo array con las peliculas que cumplen con la condicion
const dramaMovies = peliculas.filter(movie => movie.genero === "Drama");
const CalificacionPeliculasDrama = dramaMovies.reduce((acc, movie) => acc + movie.calificacion, 0) / dramaMovies.length;
console.log(CalificacionPeliculasDrama);
// utilice reduce para reducir el array de peliculas de drama a una sola calificacion promedio
// acc es el acumulador que guarda la suma de las calificaciones
//acc+= movie.calificacion agrega la calificacion de la pelicula actual al acumulador
//al final reduce devuelve la suma total de las calificaciones dividida por la cantidad de peliculas de drama

const fantasiaGDT = peliculas.filter(movie => movie.genero === "Fantasía" && movie.director === "Guillermo del Toro");
console.log(fantasiaGDT);

const dura2Hr = peliculas.some(movie => movie.duracion === 120);
console.log(dura2Hr);

// some devuelve true si al menos una pelicula cumple con la condicion de durar 120 min (2hr)
// de lo contrario devuelve false   