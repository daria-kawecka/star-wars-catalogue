# Internship task - Star Wars Catalogue

At the beginning, after reading the documentation, I used **axios** to fetch  data about characters. That's impossible to fetch all data using only one endpoit and because of that I created an array with 9 endpoints (at first I had loop for data fetch, but I decided to change that). Data is stored in *CharactersProvider* (**useContext hook**). I also created automatic data fetching when user scrolled to the bottom of the page (this handler is also located in *CharactersProvider*. Furthermore, I coded a button for fetching new characters. That button is usefull, when you search for a person and want to see all the characters again. Yes, there is *search input* too. You can enter name of the character. *When the search fails, an error occurs*.

*About character information:*
List containing basic information as name, gender (font color depends on it) and birth year. There is also button - *More Info*- you can check information like - height, age (*I created function to calculate it, when it's possible*) and films (*I also used axios to fetched data about that. I deployed solution to github-pages so I had to used **cors-bridge** At local-host it's unnecessary*). When the data is downloaded, **loader** appears on the screen.

*Styles:*
I used **styled components** to create UI. Transition is possible because of **react-transision-group**.
To create backgound I used third-party library called **react-big-bang-star-field** (I know there is memo error :( )

## Check it - https://daria-kawecka.github.io/star-wars-task/