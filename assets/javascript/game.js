var wins = 0;
var state;

var counter = 0;

// Define Movies - (title, stub, video)
var gone_with_the_wind = new Movie('Gone With the Wind', '<p>Gone with the Wind is a 1939 American epic historical romance film, adapted from Margaret Mitchell\'s 1936 novel of the same name. The film was produced by David O. Selznick of Selznick International Pictures and directed by Victor Fleming. Set in the American South against the backdrop of the American Civil War and the Reconstruction era, the film tells the story of Scarlett O\'Hara, the strong-willed daughter of a Georgia plantation owner, from her romantic pursuit of Ashley Wilkes, who is married to his cousin, Melanie Hamilton, to her marriage to Rhett Butler. The leading roles are played by Vivien Leigh (Scarlett), Clark Gable (Rhett), Leslie Howard (Ashley), and Olivia de Havilland (Melanie).</p><p>Production was difficult from the start. Filming was delayed for two years because of Selznick\'s determination to secure Gable for the role of Rhett Butler, and the "search for Scarlett" led to 1,400 women being interviewed for the part. The original screenplay was written by Sidney Howard and underwent many revisions by several writers in an attempt to get it down to a suitable length. The original director, George Cukor, was fired shortly after filming began and was replaced by Fleming, who in turn was briefly replaced by Sam Wood while Fleming took some time off because he was exhausted.</p><p>The film received positive reviews upon its release, in December 1939, although some reviewers found it overlong. The casting was widely praised, and many reviewers found Leigh especially suited to her role as Scarlett. At the 12th Academy Awards, it received ten Academy Awards (eight competitive, two honorary) from thirteen nominations, including wins for Best Picture, Best Director (Fleming), Best Adapted Screenplay (posthumously awarded to Sidney Howard), Best Actress (Leigh), and Best Supporting Actress (Hattie McDaniel, becoming the first African American to win an Academy Award). It set records for the total number of wins and nominations at the time. The film was immensely popular, becoming the highest-earning film made up to that point, and held the record for over a quarter of a century. When adjusted for monetary inflation, it is still the most successful film in box-office history.</p><p>Gone with the Wind has been criticized as historical revisionism glorifying slavery, and it has been credited with triggering changes in the way in which African Americans are depicted cinematically. It was re-released periodically throughout the 20th century and became ingrained in popular culture. The film is regarded as one of the greatest films of all time; it has placed in the top ten of the American Film Institute\'s list of the top 100 American films since the list\'s inception, in 1998; and, in 1989, the United States Library of Congress selected it for preservation in the National Film Registry.</p>', 'assets/videos/gone_with_the_wind.mp4');
var casablanca = new Movie('Casablanca', '<p>Casablanca is a 1942 American romantic drama film directed by Michael Curtiz based on Murray Burnett and Joan Alison\'s unproduced stage play Everybody Comes to Rick\'s. The film stars Humphrey Bogart, Ingrid Bergman, and Paul Henreid; it also features Claude Rains, Conrad Veidt, Sydney Greenstreet, Peter Lorre, and Dooley Wilson. Set during contemporary World War II, it focuses on an American expatriate who must choose between his love for a woman and helping her and her husband, a Czech Resistance leader, escape from the Vichy-controlled city of Casablanca to continue his fight against the Nazis.</p><p>Story editor Irene Diamond convinced producer Hal B. Wallis to purchase the film rights to the play in January 1942. Brothers Julius and Philip G. Epstein were initially assigned to write the script. However, despite studio resistance, they left to work on Frank Capra\'s Why We Fight series early in 1942. Howard E. Koch was assigned to the screenplay until the Epsteins returned a month later. Principal photography began on May 25, 1942, ending on August 3; the film was shot entirely at Warner Bros. Studios in Burbank, California with the exception of one sequence at Van Nuys Airport in Van Nuys, Los Angeles.</p><p>Although Casablanca was an A-list film with established stars and first-rate writers, no one involved with its production expected it to be anything out of the ordinary, just one of the hundreds of pictures produced by Hollywood every year. Casablanca was rushed into release to take advantage of the publicity from the Allied invasion of North Africa a few weeks earlier. It had its world premiere on November 26, 1942, in New York City and was released nationally in the United States on January 23, 1943. The film was a solid if unspectacular success in its initial run.</p><p>Exceeding expectations, Casablanca went on to win the Academy Award for Best Picture, while Curtiz was selected as Best Director and the Epsteins and Koch were honored for writing the Best Adapted Screenplay - and gradually its reputation grew. Its lead characters, memorable lines, and pervasive theme song have all become iconic and the film consistently ranks near the top of lists of the greatest films in history.</p>', 'assets/videos/casablanca.ogv');
var sunrise = new Movie('Sunrise', '<p>Sunrise: A Song of Two Humans (also known as Sunrise) is a 1927 American silent romantic drama film directed by German director F. W. Murnau and starring George O\'Brien, Janet Gaynor, and Margaret Livingston. The story was adapted by Carl Mayer from the short story "The Excursion to Tilsit", from the collection with the same title by Hermann Sudermann.</p><p>Murnau chose to use the then new Fox Movietone sound-on-film system, making Sunrise one of the first feature films with a synchronized musical score and sound effects soundtrack. The film incorporated Charles Gounod\'s 1872 composition Funeral March of a Marionette, which was later used as the theme for the television series Alfred Hitchcock Presents (1955-65). Frederic Chopin\'s A minor prelude also features prominently in orchestral arrangement.</p>','assets/videos/sunrise.mp4');
var psycho = new Movie('Psycho','<p>Psycho is a 1960 American psychological horror film directed and produced by Alfred Hitchcock, and written by Joseph Stefano, starring Anthony Perkins, Janet Leigh, John Gavin, Vera Miles and Martin Balsam, and was based on the 1959 novel of the same name by Robert Bloch. The film centers on the encounter between a secretary, Marion Crane (Leigh), who ends up at a secluded motel after stealing money from her employer, and the motel\'s disturbed owner-manager, Norman Bates (Perkins), and its aftermath.</p><p>Psycho was seen as a departure from Hitchcock\'s previous film North by Northwest, having been filmed on a low budget, with a television crew and in black and white. The film initially received mixed reviews, but outstanding box office returns prompted reconsideration which led to overwhelming critical acclaim and four Academy Award nominations, including Best Supporting Actress for Leigh and Best Director for Hitchcock.</p><p>Psycho is now considered one of Hitchcock\'s best films and praised as a major work of cinematic art by international film critics and scholars. Often ranked among the greatest films of all time, it set a new level of acceptability for violence, deviant behavior and sexuality in American films, and is widely considered to be the earliest example of the slasher film genre.</p><p>After Hitchcock\'s death in 1980, Universal Studios began producing follow-ups: three sequels, a remake, a television film spin-off, and a contemporary prequel TV series. In 1992, the US Library of Congress deemed the film "culturally, historically, or aesthetically significant" and selected it for preservation in the National Film Registry.</p>','assets/videos/psycho.mp4');
var pulp_fiction = new Movie('Pulp Fiction','<p>Pulp Fiction is a 1994 American crime film written and directed by Quentin Tarantino, based on a story by Tarantino and Roger Avary, and starring John Travolta, Samuel L. Jackson, Bruce Willis, Ving Rhames, and Uma Thurman. The film tells a few stories of criminal Los Angeles. The film\'s title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue.</p><p>The screenplay of Pulp Fiction was written in 1992 and 1993, and incorporated some scenes originally written by Avary for True Romance. Its plot is presented out of chronological order. The film is also self-referential from its opening moments, beginning with a title card that gives two dictionary definitions of "pulp". Considerable screen time is devoted to monologues and casual conversations with eclectic dialogue revealing each character\'s perspectives on several subjects, and the film features an ironic combination of humor and strong violence. Its script was reportedly turned down by Columbia TriStar as "too demented". Miramax co-chairman Harvey Weinstein was instantly enthralled with it, however, and the film became the first that Miramax fully financed.</p><p>Pulp Fiction won the Palme d\'Or at the 1994 Cannes Film Festival, and was a major critical and commercial success upon its U.S. release. It was nominated for seven Oscars, including Best Picture; Tarantino and Avary won for Best Original Screenplay. John Travolta, Samuel L. Jackson, and Uma Thurman each received Academy Award nominations for their roles and revitalized and/or elevated their careers. The nature of its development, marketing, and distribution — and its consequent profitability — had a sweeping effect on the field of independent cinema.</p><p>Since its release, Pulp Fiction has been widely regarded as Tarantino\'s masterpiece, with particular praise singled out for its screenwriting. The film\'s self-reflexivity, unconventional structure, and extensive use of homage and pastiche have led critics to describe it as a touchstone of postmodern film. It is often considered a cultural watershed, with a strong influence felt not only in later movies that adopted various elements of its style, but in several other media as well. A 2008 Entertainment Weekly list named it the best film from 1983 to 2008 and the work has appeared on many critics\' lists of the greatest films ever made. In 2013, Pulp Fiction was selected for preservation in the United States National Film Registry by the Library of Congress as being "culturally, historically, or aesthetically significant".</p>','assets/videos/pulp_fiction.mp4');
var sunset_boulevard= new Movie('Sunset Boulevard','<p>Sunset Boulevard (stylized onscreen as SUNSET BLVD.) is a 1950 American film noir directed and co-written by Billy Wilder, and produced and co-written by Charles Brackett. It was named after the thoroughfare that runs through Los Angeles and Beverly Hills, California.</p><p>The film stars William Holden as Joe Gillis, an unsuccessful screenwriter, and Gloria Swanson as Norma Desmond, a faded silent-film star who draws him into her fantasy world, where she dreams of making a triumphant return to the screen, with Erich von Stroheim as Max von Mayerling, her devoted servant. Nancy Olson, Fred Clark, Lloyd Gough, and Jack Webb play supporting roles. Director Cecil B. DeMille and gossip columnist Hedda Hopper play themselves, and the film includes cameo appearances by leading silent-film actors Buster Keaton, H. B. Warner, and Anna Q. Nilsson.</p><p>Praised by many critics when first released, Sunset Boulevard was nominated for 11 Academy Awards (including nominations in all four acting categories) and won three. Deemed "culturally, historically, or aesthetically significant" by the U.S. Library of Congress in 1989, Sunset Boulevard was included in the first group of films selected for preservation in the National Film Registry. In 1998, it was ranked number 12 on the American Film Institute\'s list of the 100 best American films of the 20th century, and in 2007, it was 16th on their 10th Anniversary list.</p>','assets/videos/sunset_boulevard.mp4');
var forest_gump = new Movie('Forest Gump','<p>Forrest Gump is a 1994 American drama film based on the 1986 novel of the same name by Winston Groom. The film was directed by Robert Zemeckis and stars Tom Hanks, Robin Wright, Gary Sinise, Mykelti Williamson, and Sally Field. The story depicts several decades in the life of its titular character (Hanks), a slow-witted but kind-hearted, good-natured and athletically prodigious man from Alabama. Gump witnesses, and in some cases influences, some of the defining events of the latter half of the 20th century in the United States, specifically the period between his birth in 1944 and 1982. The film differs substantially from Winston Groom\'s novel, including Gump\'s personality and several events that were depicted.</p><p>Principal photography took place in late 1993, mainly in Georgia, North Carolina, and South Carolina. Extensive visual effects were used to incorporate the protagonist into archived footage and to develop other scenes. A comprehensive soundtrack was featured in the film, using music intended to pinpoint specific time periods portrayed on screen. Its commercial release made it a top-selling soundtrack, selling over 12 million copies worldwide.</p><p>Released in the United States on July 6, 1994, Forrest Gump became a commercial success as the top-grossing film in North America released in that year, being the first major success for Paramount since the studio\'s merger with Viacom, earning over US$677 million worldwide during its theatrical run. In 1995, it won the Academy Awards for Best Picture, Best Director for Robert Zemeckis, Best Actor for Tom Hanks, Best Adapted Screenplay for Eric Roth, Best Visual Effects, and Best Film Editing. It also garnered multiple other awards and nominations, including Golden Globes, People\'s Choice Awards, and Young Artist Awards, among others. Since the film\'s release, varying interpretations have been made of the film\'s protagonist and its political symbolism. In 1996, a themed restaurant, Bubba Gump Shrimp Company, opened based on the film and has since expanded to many locations worldwide. The scene of Gump running across the country is often referred to when real-life people attempt the feat. This aspect of the story was based on a man named Robert Sweetgall who walked across the continental United States seven times; at the end of one of his trips a crowd of spectators included the film\'s screenwriter.</p><p>In 2011, the Library of Congress selected the film for preservation in the United States National Film Registry as being "culturally, historically, or aesthetically significant".</p>','assets/videos/forest_gump.mp4');
var star_wars = new Movie('Star Wars','<p>Star Wars (later retitled Star Wars: Episode IV - A New Hope) is a 1977 American epic space opera film written and directed by George Lucas. It is the first film in the original Star Wars trilogy and the beginning of the Star Wars franchise. Starring Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing, Alec Guinness, David Prowse, James Earl Jones, Anthony Daniels, Kenny Baker, and Peter Mayhew, the film\'s plot focuses on the Rebel Alliance, led by Princess Leia (Fisher), and its attempt to destroy the Galactic Empire\'s space station, the Death Star. This conflict disrupts the isolated life of farmhand Luke Skywalker (Hamill), who inadvertently acquires two droids that possess stolen architectural plans for the Death Star. When the Empire begins a destructive search for the missing droids, Skywalker accompanies Jedi Master Obi-Wan Kenobi (Guinness) on a mission to return the plans to the Rebel Alliance and rescue Leia from her imprisonment by the Empire.</p><p>Star Wars was released in theatres in the United States on May 25, 1977. It earned $461 million in the U.S. and $314 million overseas, totaling $775 million. It surpassed Jaws (1975) to become the highest-grossing film of all time until the release of E.T. the Extra-Terrestrial (1982). When adjusted for inflation, Star Wars is the second-highest-grossing film in North America, and the third-highest-grossing film in the world. It received ten Academy Award nominations (including Best Picture), winning seven. It was among the first films to be selected as part of the U.S. Library of Congress\' National Film Registry as being "culturally, historically, or aesthetically significant". At the time, it was the most recent film on the registry and the only one chosen from the 1970s. In 2005, the British Film Institute included it in their list of the 50 films you should see by the age of 14. Its soundtrack was added to the U.S. National Recording Registry in 2004. Today, it is regarded as one of the most important films in the history of motion pictures. It launched an industry of tie-in products, including TV series spinoffs, novels, comic books, and video games, and merchandise including toys, games and clothing.</p><p>The film\'s success led to two critically and commercially successful sequels, The Empire Strikes Back in 1980 and Return of the Jedi in 1983. Star Wars was reissued multiple times at Lucas\' behest, incorporating many changes including modified computer-generated effects, altered dialogue, re-edited shots, remixed soundtracks, and added scenes. A prequel trilogy was released beginning with The Phantom Menace in 1999, continuing with Attack of the Clones in 2002, and concluding with Revenge of the Sith in 2005. The film was followed by a sequel trilogy beginning with The Force Awakens in 2015, and continued with The Last Jedi released in December 2017. A prequel set directly before Star Wars, Rogue One, was released in 2016. A spin-off prequel titled Solo, centered on the backstory of the character Han Solo, is set for release in 2018.</p>','assets/videos/star_wars.mp4');
var citizen_kane = new Movie('Citizen Kane','<p>Citizen Kane is a 1941 American mystery drama film by Orson Welles, its producer, co-screenwriter, director and star. The picture was Welles\'s first feature film. Nominated for Academy Awards in nine categories, it won an Academy Award for Best Writing (Original Screenplay) by Herman J. Mankiewicz and Welles. Considered by many critics, filmmakers, and fans to be the greatest film of all time, Citizen Kane was voted as such in five consecutive British Film Institute Sight & Sound polls of critics, until it was displaced by Vertigo in the 2012 poll. It topped the American Film Institute\'s 100 Years ... 100 Movies list in 1998, as well as its 2007 update. Citizen Kane is particularly praised for its cinematography, music, editing and narrative structure, which have been considered innovative and precedent-setting.</p><p>The quasi-biographical film examines the life and legacy of Charles Foster Kane, played by Welles, a character based in part upon the American newspaper magnate William Randolph Hearst, Chicago tycoons Samuel Insull and Harold McCormick, and aspects of Welles\'s own life. Upon its release, Hearst prohibited mention of the film in any of his newspapers.</p><p>Kane\'s career in the publishing world is born of idealistic social service, but gradually evolves into a ruthless pursuit of power. Narrated principally through flashbacks, the story is told through the research of a newsreel reporter seeking to solve the mystery of the newspaper magnate\'s dying word: "Rosebud".</p><p>After the Broadway successes of Welles\'s Mercury Theatre and the controversial 1938 radio broadcast "The War of the Worlds" on The Mercury Theatre on the Air, Welles was courted by Hollywood. He signed a contract with RKO Pictures in 1939. Unusually for an untried director, he was given the freedom to develop his own story, to use his own cast and crew, and to have final cut privilege. Following two abortive attempts to get a project off the ground, he wrote the screenplay for Citizen Kane, collaborating on the effort with Herman Mankiewicz. Principal photography took place in 1940 and the film received its American release in 1941.</p><p>While a critical success, Citizen Kane failed to recoup its costs at the box office. The film faded from view after its release but was subsequently returned to the public\'s attention when it was praised by such French critics as Andre Bazin and given an American revival in 1956. The film was released on Blu-ray on September 13, 2011, for a special 70th anniversary edition.</p>','assets/videos/citizen_kane.mp4');
var the_godfather = new Movie('The Godfather','<p>The Godfather is a 1972 American crime film directed by Francis Ford Coppola and produced by Albert S. Ruddy, based on Mario Puzo\'s best-selling novel of the same name. It stars Marlon Brando and Al Pacino as the leaders of a fictional New York crime family. The story, spanning 1945 to 1955, chronicles the family under the patriarch Vito Corleone (Brando), focusing on the transformation of Michael Corleone (Pacino) from reluctant family outsider to ruthless mafia boss.</p><p>Paramount Pictures obtained the rights to the novel for the price of $80,000, before it gained popularity. Studio executives had trouble finding a director; their first few candidates turned down the position. They and Coppola disagreed over who would play several characters, in particular, Vito and Michael. Filming was done on location and completed earlier than scheduled. The musical score was composed primarily by Nino Rota with additional pieces by Carmine Coppola.</p><p>The film was the highest-grossing film of 1972 and was for a time the highest-grossing film ever made. It won the Oscars for Best Picture, Best Actor (Brando) and Best Adapted Screenplay (for Puzo and Coppola). Its seven other Oscar nominations included Pacino, James Caan, and Robert Duvall for Best Supporting Actor and Coppola for Best Director.</p><p>The Godfather is widely regarded as one of the greatest films in world cinema and one of the most influential, especially in the gangster genre. It was selected for preservation in the U.S. National Film Registry of the Library of Congress in 1990, being deemed "culturally, historically, or aesthetically significant" and is ranked the second-greatest film in American cinema (behind Citizen Kane) by the American Film Institute. It was followed by sequels The Godfather Part II (1974) and The Godfather Part III (1990).</p>','assets/videos/the_godfather.mp4');
var the_wizard_of_oz = new Movie('The Wizard of Oz','<p>The Wizard of Oz is a 1939 American musical fantasy film produced by Metro-Goldwyn-Mayer. Widely considered to be one of the greatest films in cinema history, it is the best-known and most commercially successful adaptation of L. Frank Baum\'s 1900 children\'s book, The Wonderful Wizard of Oz. It stars Judy Garland as Dorothy Gale, alongside Ray Bolger, Jack Haley, Bert Lahr, Frank Morgan, Billie Burke and Margaret Hamilton, with Charley Grapewin, Pat Walshe and Clara Blandick, Terry (billed as Toto), and the Singer Midgets as the Munchkins.</p><p>Notable for its use of Technicolor, fantasy storytelling, musical score, and memorable characters, it has become an icon of American popular culture. It was nominated for six Academy Awards, including Best Picture, but lost to Gone with the Wind. It did win in two other categories, including Best Original Song for "Over the Rainbow" and Best Original Score by Herbert Stothart. While the film was considered a critical success upon release in August 1939, it failed to generate profit for MGM, earning only $3,017,000 on a $2,777,000 budget, which made it MGM\'s most expensive production to date.</p><p>The 1956 broadcast television premiere of the film on the CBS network reintroduced the film to the wider public and eventually made the presentation an annual tradition, making it one of the best known films in movie history. The film was named the most-viewed motion picture on television syndication by the Library of Congress, which also included the film in its National Film Registry in its inaugural year in 1989. Designation on the registry calls for efforts to preserve it for being "culturally, historically, and aesthetically significant". It is also one of the few films on UNESCO\'s Memory of the World Register. The film is among the top ten in the BFI list of the 50 films you should see by the age of 14.</p><p>The Wizard of Oz is the source of many quotes referenced in contemporary popular culture. It was directed primarily by Victor Fleming (who left production to take over direction on the troubled Gone with the Wind production). Noel Langley, Florence Ryerson and Edgar Allan Woolf received credit for the screenplay, but uncredited contributions were made by others. The songs were written by Edgar "Yip" Harburg (lyrics) and Harold Arlen (music). The musical score and the incidental music were composed by Stothart.</p>','assets/videos/the_wizard_of_oz.mp4');

// State constructor
function GameState(selectedMovie) {
    this.guessesLeft = 10;
    this.selectedMovie = selectedMovie;
    this.wrongLetters = [];
    this.correctLetters = [];
    letterCount: function countLetters () {
        // count the letters in selected title
    };
};

// Movie constructor
function Movie(title, stub, video) {
    this.title = title;
    this.stub = stub;
    this.video = video;
};

// Populate a new state
function setState () {
    var currentState = new GameState(chooseTitle());
    console.log('Inside current set state = ' + currentState.selectedMovie.title)
    currentTitle = currentState.selectedMovie.title;
    return(currentState);
};

// Choose a movie and remove it as an option for the next go round
function chooseTitle () {
    if (typeof movieTitles !== 'undefined' && movieTitles.length > 0) {             // Verify movieTitles has data in it
        var arraySelection = Math.floor(Math.random() * movieTitles.length);   // Generate a random number that is less than the array length
        selectedMovieObject = movieTitles[arraySelection];                                    // Define the answer selectedMovieObject    
        movieTitles = movieTitles.filter(function(a) {return a !== selectedMovieObject});
        return selectedMovieObject;

    } else {                                                            // Generate error message(s)     
        document.getElementById("game_status").innerHTML = "<br>We ran out of movies.  Refresh to start over. :( </br>";  
    }; 
};

// Generate spans with dashes to represent the answer's characters
function createLetterPlaceholders (word) {
    for(var i = 0; i < word.length; i++) {                          // Create a span element for each letter in word                                  
        var node = document.createElement("span");                  
        node.className = 'letter';
        node.id = 'letter_' + i;
        if (word[i] === " ") {
            var textnode = document.createTextNode(" ");  
        } else {
        var textnode = document.createTextNode("-");                // Add hyphen for visual place holder
        }
        node.appendChild(textnode);                                 
        document.getElementById("answer").appendChild(node);       
    };
};

// Initiates the app functions and resets the app
function startApp () {

    state = setState();
    // console.log('The answer is: ' + state.selectedMovie.title)
    loadSpaces();   
    document.getElementById("remaining_guesses").textContent = state.guessesLeft;
    document.getElementById('answer').innerHTML = "";
    document.getElementById("incorrect").textContent = state.wrongLetters;
    createLetterPlaceholders(state.selectedMovie.title);
};

// Displays modal overlay, updates win counter, handles media playback
function winner () {
    var target = document.getElementById("modal_body");
    var headlineTarget = document.getElementById('exampleModalLabel');

    var video = document.createElement('video');
    video.src = state.selectedMovie.video;
    video.id = 'video';
    video.type = "video/mp4";  
    video.autoplay = true;
    video.controls = true;
    video.setAttribute('width', '100%');

    var stub = document.createElement('div');
    stub.innerHTML = state.selectedMovie.stub;
    stub.id = 'stub';
    headlineTarget.innerHTML = currentTitle;
    
    wins++;
    document.getElementById('wins').textContent = wins;

    $('#exampleModal').modal();
    target.appendChild(video);
    target.appendChild(stub);
    
    // console.log(movieTitles.length);
    $("#exampleModal").on("hidden.bs.modal", function () {
        target.innerHTML = "";
    });
    if (typeof movieTitles === 'undefined' || movieTitles.length === 0) {
        document.getElementById("game_status").innerHTML = "We ran out of movies.  Refresh to start over. :(";  
        return;
    } else {
        startApp();           
    }
};

// Autopopulates spaces, so only letters are required to win
function loadSpaces () {
    var indices = [];
    for (var i = 0; i < state.selectedMovie.title.length; i++) {
        if (state.selectedMovie.title[i] === " ") indices.push(i); 
    };
    for (var j = 0; j < indices.length; j++) {
        state.correctLetters[indices[j]] = " "; 
    };
};

var movieTitles = [gone_with_the_wind, casablanca, sunrise, psycho, pulp_fiction, sunset_boulevard, forest_gump, star_wars, citizen_kane, the_godfather, the_wizard_of_oz];  // Not sure why, but chooseTitle() doesn't work if this is placed at the begining.
var currentTitle;
startApp();

// Listens for key press and populates letter spans based on user input.  Updates the game's state based on key presses
document.onkeyup = function(event) {
    keyPress = event.key;
    keyPress = keyPress.toLowerCase();

    state.selectedMovie.title = state.selectedMovie.title.toLowerCase();

    var letters = "abcdefghijklmnopqrstuvwxyz0";
    if (letters.indexOf(keyPress) > -1 && state.correctLetters.join("") !== state.selectedMovie.title) {
        if (keyPress === '0') {
            winner();
        } else if (state.selectedMovie.title.indexOf(keyPress) > -1) {                                  // correct guess
            var indices = [];                                               // create a variable to store all correct guesses
            for (var i = 0; i < state.selectedMovie.title.length; i++) {                      
                if (state.selectedMovie.title[i] === keyPress) indices.push(i);                  // Add the position within the word array to indices for all correct guesses
            }
            for (var j = 0; j < indices.length; j++) {
                document.getElementById("letter_" + indices[j]).textContent = keyPress;  // Add correct guesses to the appropriate span
                state.correctLetters[indices[j]] = keyPress;                              // Update answer[] with appropriate letter in appropriate space
                if (state.correctLetters.join("") === state.selectedMovie.title) {                             // If answer array has all letter in word in correct order, generate win conditions
                    winner();
                };
            };
        } else {  // incorrect guess
            if (state.wrongLetters.indexOf(keyPress) === -1) {
                state.guessesLeft--;
                state.wrongLetters.push(keyPress);
                document.getElementById("remaining_guesses").textContent = state.guessesLeft;

                for (var k = 0; k < state.wrongLetters.length; k++) {
                    document.getElementById("incorrect").textContent = state.wrongLetters;
                };
            };
        };
    } else {
        // console.log('invalid keypress');
    };
};
