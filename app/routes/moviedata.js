import Route from '@ember/routing/route';
//Declared and initialized Movie Data
var movieData = [
    {
      "rankTitle": "1. The Shawshank Redemption (1994)",
      "rating": 9.2,
      "Year": 1994,
      "totalRevenue": "28341469",
      "openRevenue": "727,327",
      "Genre": "Crime, Drama"
    },
    {
      "rankTitle": "2. The Godfather (1972)",
      "rating": 9.2,
      "Year": 1972,
      "totalRevenue": "134966411",
      "openRevenue": "302393",
      "Genre": "Crime, Drama"
    },
    {
      "rankTitle": "3. The Godfather: Part II (1974)",
      "rating": 9,
      "Year": 1974,
      "totalRevenue": "57300000",
      "openRevenue": "244,000",
      "Genre": "Crime, Drama"
    },
    {
      "rankTitle": "4. The Dark Knight (2008)",
      "rating": 9,
      "Year": 2008,
      "totalRevenue": "534858444",
      "openRevenue": "158,411,483",
      "Genre": "Action, Crime, Drama"
    },
    {
      "rankTitle": "5. 12 Angry Men (1957)",
      "rating": 8.9,
      "Year": 1957,
      "totalRevenue": null,
      "openRevenue": null,
      "Genre": "Crime, Drama"
    },
    {
      "rankTitle": "6. Schindler's List (1993)",
      "rating": 8.9,
      "Year": 1993,
      "totalRevenue": "96045248",
      "openRevenue": "656,636",
      "Genre": "Biography, Drama, History"
    },
    {
      "rankTitle": "7. Pulp Fiction (1994)",
      "rating": 8.9,
      "Year": 1994,
      "totalRevenue": "107928762",
      "openRevenue": "9,311,882",
      "Genre": "Crime, Drama"
    },
    {
      "rankTitle": "8. The Lord of the Rings: The Return of the King(2003)",
      "rating": 8.9,
      "Year": 2003,
      "totalRevenue": "377845905",
      "openRevenue": "72,629,713",
      "Genre": "Adventure, Drama, Fantasy"
    },
    {
      "rankTitle": "9. The Good, the Bad and the Ugly (1966)",
      "rating": 8.8,
      "Year": 1966,
      "totalRevenue": "25100000",
      "openRevenue": null,
      "Genre": "Western"
    },
    {
      "rankTitle": "10. Fight Club (1999)",
      "rating": 8.8,
      "Year": 1999,
      "totalRevenue": "37030102",
      "openRevenue": "11,035,485",
      "Genre": "Drama"
    },
    {
      "rankTitle": "11. The Lord of the Rings: The Fellowship of the Ring(2001)",
      "rating": 8.8,
      "Year": 2001,
      "totalRevenue": "315544750",
      "openRevenue": "66,114,741",
      "Genre": "Adventure, Drama, Fantasy"
    },
    {
      "rankTitle": "12. Forrest Gump (1994)",
      "rating": 8.7,
      "Year": 1994,
      "totalRevenue": "329,691,196",
      "openRevenue": "24,450,602",
      "Genre": "Comedy, Drama, Romance"
    },
    {
      "rankTitle": "13. Star Wars: Episode V - The Empire Strikes Back(1980)",
      "rating": 8.7,
      "Year": 1980,
      "totalRevenue": "290,475,067",
      "openRevenue": "6,415,804",
      "Genre": "Action, Adventure, Fantasy"
    },
    {
      "rankTitle": "14. Inception (2010)",
      "rating": 8.7,
      "Year": 2010,
      "totalRevenue": "292,576,195",
      "openRevenue": "62,785,337",
      "Genre": "Action, Adventure, Sci-Fi"
    },
    {
      "rankTitle": "15. The Lord of the Rings: The Two Towers (2002)",
      "rating": 8.7,
      "Year": 2002,
      "totalRevenue": "342,551,365",
      "openRevenue": "62,007,528",
      "Genre": "Action, Adventure, Drama"
    },
    {
      "rankTitle": "16. One Flew Over the Cuckoo's Nest (1975)",
      "rating": 8.7,
      "Year": 1975,
      "totalRevenue": "112,000,000",
      "openRevenue": "109,164",
      "Genre": "Drama"
    },
    {
      "rankTitle": "17. Goodfellas (1990)",
      "rating": 8.7,
      "Year": 1990,
      "totalRevenue": "46,836,394",
      "openRevenue": "6,368,901",
      "Genre": "Crime, Drama"
    },
    {
      "rankTitle": "18. The Matrix (1999)",
      "rating": 8.7,
      "Year": 1999,
      "totalRevenue": "171,479,930",
      "openRevenue": "27,788,331",
      "Genre": "Action, Sci-Fi"
    },
    {
      "rankTitle": "19. Seven Samurai (1954)",
      "rating": 8.6,
      "Year": 1954,
      "totalRevenue": "269,061",
      "openRevenue": "21,830",
      "Genre": "Adventure, Drama"
    },
    {
      "rankTitle": "20. Star Wars: Episode IV - A New Hope (1977)",
      "rating": 8.6,
      "Year": 1977,
      "totalRevenue": "460,935,665",
      "openRevenue": "1,554,475",
      "Genre": "Action, Adventure, Fantasy"
    },
    {
      "rankTitle": "21. City of God (2002)",
      "rating": 8.6,
      "Year": 2002,
      "totalRevenue": "7,563,397",
      "openRevenue": "114,442",
      "Genre": "Crime, Drama"
    },
    {
      "rankTitle": "22. Se7en (1995)",
      "rating": 8.6,
      "Year": 1995,
      "totalRevenue": "100,125,643",
      "openRevenue": null,
      "Genre": "Crime, Drama, Mystery"
    },
    {
      "rankTitle": "23. The Silence of the Lambs (1991)",
      "rating": 8.6,
      "Year": 1991,
      "totalRevenue": "130,742,922",
      "openRevenue": "13,766,814",
      "Genre": "Crime, Drama, Thriller"
    },
    {
      "rankTitle": "24. It's a Wonderful Life (1946)",
      "rating": 8.6,
      "Year": 1946,
      "totalRevenue": "7,270,000",
      "openRevenue": null,
      "Genre": "Drama, Family, Fantasy"
    },
    {
      "rankTitle": "25. Life Is Beautiful (1997)",
      "rating": 8.6,
      "Year": 1997,
      "totalRevenue": "57,598,247",
      "openRevenue": "118,920",
      "Genre": "Comedy, Drama, War"
    },
    {
      "rankTitle": "26. The Usual Suspects (1995)",
      "rating": 8.6,
      "Year": 1995,
      "totalRevenue": "23,341,568",
      "openRevenue": "645,363",
      "Genre": "Crime, Drama, Mystery"
    },
    {
      "rankTitle": "27. Léon: The Professional (1994)",
      "rating": 8.5,
      "Year": 1994,
      "totalRevenue": "19,501,238",
      "openRevenue": "5,306,558",
      "Genre": "Crime, Drama, Thriller"
    },
    {
      "rankTitle": "28. Saving Private Ryan (1998)",
      "rating": 8.5,
      "Year": 1998,
      "totalRevenue": "216,540,909",
      "openRevenue": "30,576,104",
      "Genre": "Drama, War"
    },
    {
      "rankTitle": "29. Spirited Away (2001)",
      "rating": 8.5,
      "Year": 2001,
      "totalRevenue": "10,049,886",
      "openRevenue": "449,839",
      "Genre": "Animation, Adventure, Family"
    },
    {
      "rankTitle": "30. Once Upon a Time in the West (1968)",
      "rating": 8.5,
      "Year": 1968,
      "totalRevenue": "5,321,508",
      "openRevenue": null,
      "Genre": "History, Western"
    },
    {
      "rankTitle": "31. American History X (1998)",
      "rating": 8.5,
      "Year": 1998,
      "totalRevenue": "6,712,241",
      "openRevenue": "1,340,166",
      "Genre": "Crime, Drama"
    },
    {
      "rankTitle": "32. Interstellar (2014)",
      "rating": 8.5,
      "Year": 2014,
      "totalRevenue": "188,020,017",
      "openRevenue": "47,510,360",
      "Genre": "Adventure, Drama, Sci-Fi"
    },
    {
      "rankTitle": "33. Psycho (1960)",
      "rating": 8.5,
      "Year": 1960,
      "totalRevenue": "32,000,000",
      "openRevenue": null,
      "Genre": "Horror, Mystery, Thriller"
    },
    {
      "rankTitle": "34. The Green Mile (1999)",
      "rating": 8.5,
      "Year": 1999,
      "totalRevenue": "136,801,374",
      "openRevenue": "18,017,152",
      "Genre": "Crime, Drama, Fantasy"
    },
    {
      "rankTitle": "35. City Lights (1931)",
      "rating": 8.5,
      "Year": 1931,
      "totalRevenue": "3,270,000",
      "openRevenue": null,
      "Genre": "Comedy, Drama, Romance"
    },
    {
      "rankTitle": "36. Casablanca (1942)",
      "rating": 8.5,
      "Year": 1942,
      "totalRevenue": "1,661,267",
      "openRevenue": "181,494",
      "Genre": "Drama, Romance, War"
    },
    {
      "rankTitle": "37. The Intouchables (2011)",
      "rating": 8.5,
      "Year": 2011,
      "totalRevenue": "13,179,837",
      "openRevenue": "103,507",
      "Genre": "Biography, Comedy, Drama"
    },
    {
      "rankTitle": "38. Modern Times (1936)",
      "rating": 8.5,
      "Year": 1936,
      "totalRevenue": "163,245",
      "openRevenue": "11,507",
      "Genre": "Comedy, Drama, Family"
    },
    {
      "rankTitle": "39. Raiders of the Lost Ark (1981)",
      "rating": 8.5,
      "Year": 1981,
      "totalRevenue": "242,374,454",
      "openRevenue": "8,305,823",
      "Genre": "Action, Adventure"
    },
    {
      "rankTitle": "40. The Pianist (2002)",
      "rating": 8.5,
      "Year": 2002,
      "totalRevenue": "32,572,577",
      "openRevenue": "111,261",
      "Genre": "Biography, Drama, Music"
    },
    {
      "rankTitle": "41. The Departed (2006)",
      "rating": 8.5,
      "Year": 2006,
      "totalRevenue": "132,384,315",
      "openRevenue": "26,887,467",
      "Genre": "Crime, Drama, Thriller"
    },
    {
      "rankTitle": "42. Rear Window (1954)",
      "rating": 8.5,
      "Year": 1954,
      "totalRevenue": "1,559,601",
      "openRevenue": "234,258",
      "Genre": "Mystery, Thriller"
    },
    {
      "rankTitle": "43. Terminator 2: Judgment Day (1991)",
      "rating": 8.5,
      "Year": 1991,
      "totalRevenue": "198,116,802",
      "openRevenue": "31,765,506",
      "Genre": "Action, Sci-Fi, Thriller"
    },
    {
      "rankTitle": "44. Back to the Future (1985)",
      "rating": 8.5,
      "Year": 1985,
      "totalRevenue": "197,902,294",
      "openRevenue": "11,332,134",
      "Genre": "Adventure, Comedy, Sci-Fi"
    },
    {
      "rankTitle": "45. Whiplash (2014)",
      "rating": 8.5,
      "Year": 2014,
      "totalRevenue": "13,092,000",
      "openRevenue": "135,388",
      "Genre": "Drama, Music"
    },
    {
      "rankTitle": "46. Gladiator (2000)",
      "rating": 8.5,
      "Year": 2000,
      "totalRevenue": "187,705,427",
      "openRevenue": "34,819,017",
      "Genre": "Action, Adventure, Drama"
    },
    {
      "rankTitle": "47. The Prestige (2006)",
      "rating": 8.5,
      "Year": 2006,
      "totalRevenue": "53,089,891",
      "openRevenue": "14,801,808",
      "Genre": "Drama, Mystery, Sci-Fi"
    },
    {
      "rankTitle": "48. The Lion King (1994)",
      "rating": 8.5,
      "Year": 1994,
      "totalRevenue": "422,783,777",
      "openRevenue": "1,825,849",
      "Genre": "Animation, Adventure, Drama"
    },
    {
      "rankTitle": "49. Memento (2000)",
      "rating": 8.5,
      "Year": 2000,
      "totalRevenue": "25,544,867",
      "openRevenue": "235,488",
      "Genre": "Mystery, Thriller"
    },
    {
      "rankTitle": "50. Apocalypse Now (1979)",
      "rating": 8.5,
      "Year": 1979,
      "totalRevenue": "4,626,290",
      "openRevenue": "118,558",
      "Genre": "Drama, War"
    },
    {
      "rankTitle": "51. Alien (1979)",
      "rating": 8.4,
      "Year": 1979,
      "totalRevenue": "83,944,003",
      "openRevenue": "3,527,881",
      "Genre": "Horror, Sci-Fi"
    },
    {
      "rankTitle": "52. The Great Dictator (1940)",
      "rating": 8.4,
      "Year": 1940,
      "totalRevenue": "5,000,000",
      "openRevenue": null,
      "Genre": "Comedy, Drama, War"
    },
    {
      "rankTitle": "53. Sunset Boulevard (1950)",
      "rating": 8.4,
      "Year": 1950,
      "totalRevenue": "2,350,000",
      "openRevenue": null,
      "Genre": "Drama, Film-Noir"
    },
    {
      "rankTitle": "54. Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb (1964)",
      "rating": 8.4,
      "Year": 1964,
      "totalRevenue": "9,440,272",
      "openRevenue": "11,751",
      "Genre": "Comedy"
    },
    {
      "rankTitle": "55. Cinema Paradiso (1988)",
      "rating": 8.4,
      "Year": 1988,
      "totalRevenue": "12,397,210",
      "openRevenue": "25,899",
      "Genre": "Drama"
    },
    {
      "rankTitle": "56. The Lives of Others (2006)",
      "rating": 8.4,
      "Year": 2006,
      "totalRevenue": "11,286,112",
      "openRevenue": "213,589",
      "Genre": "Drama, Thriller"
    },
    {
      "rankTitle": "57. Grave of the Fireflies (1988)",
      "rating": 8.4,
      "Year": 1988,
      "totalRevenue": null,
      "openRevenue": null,
      "Genre": "Animation, Drama, War"
    },
    {
      "rankTitle": "58. Paths of Glory (1957)",
      "rating": 8.4,
      "Year": 1957,
      "totalRevenue": null,
      "openRevenue": null,
      "Genre": "Drama, War"
    },
    {
      "rankTitle": "59. Django Unchained (2012)",
      "rating": 8.4,
      "Year": 2012,
      "totalRevenue": "162,804,648",
      "openRevenue": "30,688,000",
      "Genre": "Drama, Western"
    },
    {
      "rankTitle": "60. The Shining (1980)",
      "rating": 8.4,
      "Year": 1980,
      "totalRevenue": "44,017,374",
      "openRevenue": "622,337",
      "Genre": "Drama, Horror"
    },
    {
      "rankTitle": "61. WALL·E (2008)",
      "rating": 8.4,
      "Year": 2008,
      "totalRevenue": "223,808,164",
      "openRevenue": "63,087,526",
      "Genre": "Animation, Adventure, Family"
    },
    {
      "rankTitle": "62. American Beauty (1999)",
      "rating": 8.4,
      "Year": 1999,
      "totalRevenue": "130,058,047",
      "openRevenue": "861,531",
      "Genre": "Drama, Romance"
    },
    {
      "rankTitle": "63. The Dark Knight Rises (2012)",
      "rating": 8.4,
      "Year": 2012,
      "totalRevenue": "448,139,099",
      "openRevenue": "160,887,295",
      "Genre": "Action, Thriller"
    },
    {
      "rankTitle": "64. Princess Mononoke (1997)",
      "rating": 8.4,
      "Year": 1998,
      "totalRevenue": "2,375,308",
      "openRevenue": "144,446",
      "Genre": "Animation, Adventure, Fantasy"
    },
    {
      "rankTitle": "65. Aliens (1986)",
      "rating": 8.4,
      "Year": 1986,
      "totalRevenue": "77,632,096",
      "openRevenue": "10,052,042",
      "Genre": "Action, Adventure, Sci-FI"
    },
    {
      "rankTitle": "66. Oldboy (2003)",
      "rating": 8.4,
      "Year": 2003,
      "totalRevenue": "2,181,290",
      "openRevenue": "68,957",
      "Genre": "Action, Drama, Mystery"
    },
    {
      "rankTitle": "67. Witness for the Prosecution (1957)",
      "rating": 8.4,
      "Year": 1957,
      "totalRevenue": null,
      "openRevenue": null,
      "Genre": "Crime, Drama, Mystery"
    },
    {
      "rankTitle": "68. Once Upon a Time in America (1984)",
      "rating": 8.4,
      "Year": 1984,
      "totalRevenue": "5,321,508",
      "openRevenue": "2,412,014",
      "Genre": "Crime, Drama"
    },
    {
      "rankTitle": "69. Das Boot (1981)",
      "rating": 8.3,
      "Year": 1981,
      "totalRevenue": "11,487,676",
      "openRevenue": "26,994",
      "Genre": "Adventure, Drama, Thriller"
    },
    {
      "rankTitle": "70. Citizen Kane (1941)",
      "rating": 8.3,
      "Year": 1941,
      "totalRevenue": "1,140,769",
      "openRevenue": "216,239",
      "Genre": "Drama, Mystery"
    },
    {
      "rankTitle": "71. Dangal (2016)",
      "rating": 8.3,
      "Year": 2016,
      "totalRevenue": "11,151,900",
      "openRevenue": "3,248,481",
      "Genre": "Action, Biography, Drama"
    },
    {
      "rankTitle": "72. North by Northwest (1959)",
      "rating": 8.3,
      "Year": 1959,
      "totalRevenue": "13,275,000",
      "openRevenue": null,
      "Genre": "Action, Adventure, Mystery"
    },
    {
      "rankTitle": "73. Vertigo (1958)",
      "rating": 8.3,
      "Year": 1958,
      "totalRevenue": "15,000,000",
      "openRevenue": "10,783",
      "Genre": "Mystery, Romance, Thriller"
    },
    {
      "rankTitle": "74. Star Wars: Episode VI - Return of the Jedi (1983)",
      "rating": 8.3,
      "Year": 1983,
      "totalRevenue": "309,125,409",
      "openRevenue": "30,490,619",
      "Genre": "Action, Adventure, Fantasy"
    },
    {
      "rankTitle": "75. Braveheart (1995)",
      "rating": 8.3,
      "Year": 1995,
      "totalRevenue": "75,609,945",
      "openRevenue": "9,938,276",
      "Genre": "Biography, Drama, History"
    },
    {
      "rankTitle": "76. Reservoir Dogs (1992)",
      "rating": 8.3,
      "Year": 1992,
      "totalRevenue": "2,832,029",
      "openRevenue": "147,839",
      "Genre": "Crime, Drama, Thriller"
    },
    {
      "rankTitle": "77. M (1931)",
      "rating": 8.3,
      "Year": 1931,
      "totalRevenue": "28,877",
      "openRevenue": "6,123",
      "Genre": "Crime, Drama, Mystery"
    },
    {
      "rankTitle": "78. Requiem for a Dream (2000)",
      "rating": 8.3,
      "Year": 2000,
      "totalRevenue": "3,609,278",
      "openRevenue": "64,770",
      "Genre": "Drama"
    },
    {
      "rankTitle": "79. Dunkirk (2017)",
      "rating": 8.3,
      "Year": 2017,
      "totalRevenue": "165,422,464",
      "openRevenue": "50,513,488",
      "Genre": "Action, Drama, History"
    },
    {
      "rankTitle": "80. Amélie (2001)",
      "rating": 8.3,
      "Year": 2001,
      "totalRevenue": "33,201,661",
      "openRevenue": "136,470",
      "Genre": "Comedy, Romance"
    },
    {
      "rankTitle": "81. Like Stars on Earth (2007)",
      "rating": 8.3,
      "Year": 2007,
      "totalRevenue": "1,204,660",
      "openRevenue": "352,568",
      "Genre": "Drama, Family"
    },
    {
      "rankTitle": "82. A Clockwork Orange (1971)",
      "rating": 8.3,
      "Year": 1971,
      "totalRevenue": "26,589,355",
      "openRevenue": null,
      "Genre": "Crime, Drama, Sci-Fi"
    },
    {
      "rankTitle": "83. Your Name (2016)",
      "rating": 8.3,
      "Year": 2016,
      "totalRevenue": "5,017,246",
      "openRevenue": "1,637,509",
      "Genre": "Animation, Drama, Fantasy"
    },
    {
      "rankTitle": "84. Lawrence of Arabia (1962)",
      "rating": 8.3,
      "Year": 1962,
      "totalRevenue": "342,481",
      "openRevenue": "20,846",
      "Genre": "Adventure, Biography, Drama"
    },
    {
      "rankTitle": "85. Double Indemnity (1944)",
      "rating": 8.3,
      "Year": 1944,
      "totalRevenue": "5,720,000",
      "openRevenue": null,
      "Genre": "Crime, Drama, Film- Noir"
    },
    {
      "rankTitle": "86. Taxi Driver (1976)",
      "rating": 8.3,
      "Year": 1976,
      "totalRevenue": "28,262,574",
      "openRevenue": "116,458",
      "Genre": "Crime, Drama"
    },
    {
      "rankTitle": "87. Amadeus (1984)",
      "rating": 8.3,
      "Year": 1984,
      "totalRevenue": "51,564,280",
      "openRevenue": "505,276",
      "Genre": "Biography, Drama, History"
    },
    {
      "rankTitle": "88. Eternal Sunshine of the Spotless Mind (2004)",
      "rating": 8.3,
      "Year": 2004,
      "totalRevenue": "34,126,138",
      "openRevenue": "8,175,198",
      "Genre": "Drama, Romance, Sci-Fi"
    },
    {
      "rankTitle": "89. To Kill a Mockingbird (1962)",
      "rating": 8.3,
      "Year": 1962,
      "totalRevenue": "13,129,846",
      "openRevenue": null,
      "Genre": "Crime, Drama"
    },
    {
      "rankTitle": "90. Full Metal Jacket (1987)",
      "rating": 8.3,
      "Year": 1987,
      "totalRevenue": "46,357,676",
      "openRevenue": "2,217,307",
      "Genre": "Drama, War"
    },
    {
      "rankTitle": "91. 2001: A Space Odyssey (1968)",
      "rating": 8.3,
      "Year": 1968,
      "totalRevenue": "56,954,992",
      "openRevenue": null,
      "Genre": "Adventure, Sci-Fi"
    },
    {
      "rankTitle": "92. Toy Story 3 (2010)",
      "rating": 8.3,
      "Year": 2010,
      "totalRevenue": "415,004,880",
      "openRevenue": "110,307,189",
      "Genre": "Animation, Adventure, Comedy"
    },
    {
      "rankTitle": "93. Singin' in the Rain (1952)",
      "rating": 8.3,
      "Year": 1952,
      "totalRevenue": "12,360,000",
      "openRevenue": null,
      "Genre": "Comedy, Musical, Romance"
    },
    {
      "rankTitle": "94. The Sting (1973)",
      "rating": 8.3,
      "Year": 1973,
      "totalRevenue": "156,000,000",
      "openRevenue": null,
      "Genre": "Comedy, Crime, Drama"
    },
    {
      "rankTitle": "95. Toy Story (1995)",
      "rating": 8.3,
      "Year": 1995,
      "totalRevenue": "191,796,233",
      "openRevenue": "29,140,617",
      "Genre": "Animation, Adventure, Comedy"
    },
    {
      "rankTitle": "96. Bicycle Thieves (1948)",
      "rating": 8.3,
      "Year": 1948,
      "totalRevenue": "332,930",
      "openRevenue": "11,845",
      "Genre": "Drama"
    },
    {
      "rankTitle": "97. 3 Idiots (2009)",
      "rating": 8.3,
      "Year": 2009,
      "totalRevenue": "2,149,227",
      "openRevenue": "1,645,502",
      "Genre": "Adventure, Comedy, Drama"
    },
    {
      "rankTitle": "98. Inglourious Basterds (2009)",
      "rating": 8.3,
      "Year": 2009,
      "totalRevenue": "120,540,719",
      "openRevenue": "38,054,676",
      "Genre": "Adventure, Drama, War"
    },
    {
      "rankTitle": "99. The Kid (1921)",
      "rating": 8.3,
      "Year": 1921,
      "totalRevenue": "5,450,000",
      "openRevenue": null,
      "Genre": "Comedy, Family, Drama"
    },
    {
      "rankTitle": "100. Snatch (2000)",
      "rating": 8.3,
      "Year": 2000,
      "totalRevenue": "30,093,107",
      "openRevenue": "8,005,163",
      "Genre": "Comedy, Crime"
    },
    {
      "rankTitle": "101. Monty Python and the Holy Grail (1975)",
      "rating": 8.3,
      "Year": 1975,
      "totalRevenue": "1,229,197",
      "openRevenue": "45,487",
      "Genre": "Adventure, Comedy, Fantasy"
    },
    {
      "rankTitle": "102. For a Few Dollars More (1965)",
      "rating": 8.3,
      "Year": 1965,
      "totalRevenue": "15,000,000",
      "openRevenue": null,
      "Genre": "Western"
    },
    {
      "rankTitle": "103. Good Will Hunting (1997)",
      "rating": 8.3,
      "Year": 1997,
      "totalRevenue": "138,339,411",
      "openRevenue": "10,261,471",
      "Genre": "Drama"
    },
    {
      "rankTitle": "104. L.A. Confidential (1997)",
      "rating": 8.3,
      "Year": 1997,
      "totalRevenue": "64,604,977",
      "openRevenue": "5,211,198",
      "Genre": "Crime, Drama, Mystery"
    },
    {
      "rankTitle": "105. The Hunt (2012)",
      "rating": 8.3,
      "Year": 2012,
      "totalRevenue": "610,968",
      "openRevenue": "43,045",
      "Genre": "Drama"
    },
    {
      "rankTitle": "106. Scarface (1983)",
      "rating": 8.3,
      "Year": 1983,
      "totalRevenue": "45,598,982",
      "openRevenue": "4,597,536",
      "Genre": "Crime, Drama"
    },
    {
      "rankTitle": "107. The Apartment (1960)",
      "rating": 8.2,
      "Year": 1960,
      "totalRevenue": "18,600,000",
      "openRevenue": null,
      "Genre": "Comedy, Drama, Romance"
    },
    {
      "rankTitle": "108. Rashomon (1950)",
      "rating": 8.2,
      "Year": 1950,
      "totalRevenue": null,
      "openRevenue": null,
      "Genre": "Crime, Drama, Mystery"
    },
    {
      "rankTitle": "109. Metropolis (1927)",
      "rating": 8.2,
      "Year": 1927,
      "totalRevenue": "527,918",
      "openRevenue": "19,386",
      "Genre": "Drama, Sci-Fi"
    },
    {
      "rankTitle": "110. A Separation (2011)",
      "rating": 8.2,
      "Year": 2011,
      "totalRevenue": "7,098,492",
      "openRevenue": "59,481",
      "Genre": "Drama, Mystery"
    },
    {
      "rankTitle": "111. Indiana Jones and the Last Crusade (1989)",
      "rating": 8.2,
      "Year": 1989,
      "totalRevenue": "197,171,806",
      "openRevenue": "29,400,000",
      "Genre": "Action, Adventure, Fantasy"
    },
    {
      "rankTitle": "112. My Father and My Son (2005)",
      "rating": 8.2,
      "Year": 2005,
      "totalRevenue": "7,237,964",
      "openRevenue": "959,727",
      "Genre": "Drama"
    },
    {
      "rankTitle": "113. All About Eve (1950)",
      "rating": 8.2,
      "Year": 1950,
      "totalRevenue": "10,177",
      "openRevenue": "10,177",
      "Genre": "Drama"
    },
    {
      "rankTitle": "114. Yojimbo (1961)",
      "rating": 8.2,
      "Year": 1961,
      "totalRevenue": null,
      "openRevenue": null,
      "Genre": "Action, Drama, Thriller"
    },
    {
      "rankTitle": "115. Batman Begins (2005)",
      "rating": 8.2,
      "Year": 2005,
      "totalRevenue": "206,852,432",
      "openRevenue": "48,745,440",
      "Genre": "Action, Adventure, Thriller"
    },
    {
      "rankTitle": "116. Up (2009)",
      "rating": 8.2,
      "Year": 2009,
      "totalRevenue": "293,004,164",
      "openRevenue": "68,108,790",
      "Genre": "Animation, Adventure, Comedy"
    },
    {
      "rankTitle": "117. Some Like It Hot (1959)",
      "rating": 8.2,
      "Year": 1959,
      "totalRevenue": "206,852,432",
      "openRevenue": "48,745,440",
      "Genre": " Action, Adventure, Thriller"
    },
    {
      "rankTitle": "118. The Treasure of the Sierra Madre (1948)",
      "rating": 8.2,
      "Year": 1948,
      "totalRevenue": "25,000,000",
      "openRevenue": null,
      "Genre": " Comedy, Romance"
    },
    {
      "rankTitle": "119. Unforgiven (1992)",
      "rating": 8.2,
      "Year": 1992,
      "totalRevenue": "5,014,000",
      "openRevenue": null,
      "Genre": " Adventure, Drama, Western"
    },
    {
      "rankTitle": "120. Downfall (2004)",
      "rating": 8.2,
      "Year": 2004,
      "totalRevenue": "101,157,447",
      "openRevenue": "15,018,007",
      "Genre": "Drama, Western"
    },
    {
      "rankTitle": "121. Die Hard (1988)",
      "rating": 8.2,
      "Year": 1988,
      "totalRevenue": "5,509,040",
      "openRevenue": "18,195",
      "Genre": " Biography, Drama, History, War"
    },
    {
      "rankTitle": "122. Raging Bull (1980)",
      "rating": 8.2,
      "Year": 1980,
      "totalRevenue": "83,008,852",
      "openRevenue": "601,851",
      "Genre": " Action, Thriller"
    },
    {
      "rankTitle": "123. Heat (1995)",
      "rating": 8.2,
      "Year": 1995,
      "totalRevenue": "23,383,987",
      "openRevenue": "128,590",
      "Genre": " Biography, Drama, Sport"
    },
    {
      "rankTitle": "124. The Third Man (1949)",
      "rating": 8.2,
      "Year": 1949,
      "totalRevenue": "67,436,818",
      "openRevenue": "8,445,656",
      "Genre": " Action, Crime, Drama, Thriller"
    },
    {
      "rankTitle": "125. Children of Heaven (1997)",
      "rating": 8.2,
      "Year": 1997,
      "totalRevenue": "925,402",
      "openRevenue": "20,100",
      "Genre": " Drama, Family"
    },
    {
      "rankTitle": "126. The Great Escape (1963)",
      "rating": 8.2,
      "Year": 1963,
      "totalRevenue": "449,191",
      "openRevenue": "13,576",
      "Genre": "Film-Noir, Mystery, Thriller"
    },
    {
      "rankTitle": "127. Chinatown (1974)",
      "rating": 8.2,
      "Year": 1974,
      "totalRevenue": "11,744,471",
      "openRevenue": null,
      "Genre": " Adventure, Drama, History, Thriller, War"
    },
    {
      "rankTitle": "128. Ikiru (1952)",
      "rating": 8.2,
      "Year": 1952,
      "totalRevenue": "55,240",
      "openRevenue": "7,590",
      "Genre": " Drama"
    },
    {
      "rankTitle": "129. Pan's Labyrinth (2006)",
      "rating": 8.2,
      "Year": 2006,
      "totalRevenue": "29,200,000",
      "openRevenue": null,
      "Genre": " Drama, Mystery, Thriller"
    },
    {
      "rankTitle": "130. My Neighbor Totoro (1988)",
      "rating": 8.2,
      "Year": 1988,
      "totalRevenue": "37,634,615",
      "openRevenue": "779,427",
      "Genre": " Drama, Fantasy, War"
    },
    {
      "rankTitle": "131. Ran (1985)",
      "rating": 8.2,
      "Year": 1985,
      "totalRevenue": null,
      "openRevenue": null,
      "Genre": " Animation, Family, Fantasy"
    },
    {
      "rankTitle": "132. Inside Out (2015)",
      "rating": 8.2,
      "Year": 2015,
      "totalRevenue": "3,522,421",
      "openRevenue": "11,462",
      "Genre": " Action, Drama"
    },
    {
      "rankTitle": "133. The Gold Rush (1925)",
      "rating": 8.2,
      "Year": 1925,
      "totalRevenue": "6,857,096",
      "openRevenue": "50,679",
      "Genre": "Drama, Mystery, War"
    },
    {
      "rankTitle": "134. Incendies (2010)",
      "rating": 8.2,
      "Year": 2010,
      "totalRevenue": "5,450,000",
      "openRevenue": null,
      "Genre": "Adventure, Comedy, Drama, Family"
    },
    {
      "rankTitle": "135. The Secret in Their Eyes (2009)",
      "rating": 8.2,
      "Year": 2009,
      "totalRevenue": "356,461,711",
      "openRevenue": "90,440,272",
      "Genre": " Animation, Adventure, Comedy, Drama, Family, Fantasy"
    },
    {
      "rankTitle": "136. On the Waterfront (1954)",
      "rating": 8.2,
      "Year": 1954,
      "totalRevenue": "20,167,424",
      "openRevenue": "6,652,996",
      "Genre": " Drama, Mystery, Romance, Thriller"
    },
    {
      "rankTitle": "137. Judgment at Nuremberg (1961)",
      "rating": 8.2,
      "Year": 1961,
      "totalRevenue": "6,000,000",
      "openRevenue": null,
      "Genre": " Drama, War"
    },
    {
      "rankTitle": "138. The Bridge on the River Kwai (1957)",
      "rating": 8.2,
      "Year": 1957,
      "totalRevenue": "9,600,000",
      "openRevenue": null,
      "Genre": " Crime, Drama, Thriller"
    },
    {
      "rankTitle": "139. Howl's Moving Castle (2004)",
      "rating": 8.2,
      "Year": 2004,
      "totalRevenue": "4,711,096",
      "openRevenue": "427,987",
      "Genre": " Animation, Adventure, Family, Fantasy"
    },
    {
      "rankTitle": "140. Room (2015)",
      "rating": 8.2,
      "Year": 2015,
      "totalRevenue": "44,908,000",
      "openRevenue": "5,668,000",
      "Genre": " Adventure, Drama, War"
    },
    {
      "rankTitle": "141. Blade Runner (1982)",
      "rating": 8.2,
      "Year": 1982,
      "totalRevenue": "14,677,654",
      "openRevenue": "1,335,563",
      "Genre": "Drama"
    },
    {
      "rankTitle": "142. The Seventh Seal (1957)",
      "rating": 8.2,
      "Year": 1957,
      "totalRevenue": "27,000,000",
      "openRevenue": "89,150",
      "Genre": "Sci-Fi, Thriller"
    },
    {
      "rankTitle": "143. Mr. Smith Goes to Washington (1939)",
      "rating": 8.2,
      "Year": 1939,
      "totalRevenue": null,
      "openRevenue": null,
      "Genre": " Drama, Fantasy"
    },
    {
      "rankTitle": "144. Lock, Stock and Two Smoking Barrels (1998)",
      "rating": 8.2,
      "Year": 1998,
      "totalRevenue": "3,650,677",
      "openRevenue": "143,321",
      "Genre": "Comedy, Crime"
    },
    {
      "rankTitle": "145. Casino (1995)",
      "rating": 8.2,
      "Year": 1995,
      "totalRevenue": "9,600,000",
      "openRevenue": null,
      "Genre": " Comedy, Drama"
    },
    {
      "rankTitle": "146. A Beautiful Mind (2001)",
      "rating": 8.2,
      "Year": 2001,
      "totalRevenue": "42,438,300",
      "openRevenue": "9,946,480",
      "Genre": " Crime, Drama"
    },
    {
      "rankTitle": "147. The Elephant Man (1980)",
      "rating": 8.1,
      "Year": 1980,
      "totalRevenue": "170,742,341",
      "openRevenue": "2,501,096",
      "Genre": "Drama"
    },
    {
      "rankTitle": "148. Wild Strawberries (1957)",
      "rating": 8.1,
      "Year": 1957,
      "totalRevenue": "26,010,864",
      "openRevenue": null,
      "Genre": " Biography, Drama"
    },
    {
      "rankTitle": "149. V for Vendetta (2005)",
      "rating": 8.1,
      "Year": 2005,
      "totalRevenue": null,
      "openRevenue": null,
      "Genre": " Drama, Romance"
    },
    {
      "rankTitle": "150. The Wolf of Wall Street (2013)",
      "rating": 8.1,
      "Year": 2013,
      "totalRevenue": "70,511,035",
      "openRevenue": "25,642,640",
      "Genre": " Action, Drama, Thriller"
    },
    {
      "rankTitle": "151. The General (1926)",
      "rating": 8.1,
      "Year": 1926,
      "totalRevenue": "116,900,694",
      "openRevenue": "18,361,578",
      "Genre": " Biography, Comedy, Crime, Drama"
    },
    {
      "rankTitle": "152. Warrior (2011)",
      "rating": 8.1,
      "Year": 2011,
      "totalRevenue": null,
      "openRevenue": null,
      "Genre": " Action, Adventure, Comedy, Drama, War, Western"
    },
    {
      "rankTitle": "153. Trainspotting (1996)",
      "rating": 8.1,
      "Year": 1996,
      "totalRevenue": "13,657,115",
      "openRevenue": "5,242,107",
      "Genre": " Drama, Sport"
    },
    {
      "rankTitle": "154. Andrei Rublev (1966)",
      "rating": 8.1,
      "Year": 1966,
      "totalRevenue": "16,501,785",
      "openRevenue": "262,000",
      "Genre": "Drama"
    },
    {
      "rankTitle": "155. Dial M for Murder (1954)",
      "rating": 8.1,
      "Year": 1954,
      "totalRevenue": "12,562",
      "openRevenue": "12,562",
      "Genre": "Crime, Film-Noir, Thriller"
    },
    {
      "rankTitle": "156. La La Land (2016)",
      "rating": 8.1,
      "Year": 2016,
      "totalRevenue": "426,911,465",
      "openRevenue": "9,242,782",
      "Genre": "Comdey, Drama, Music"
    },
    {
      "rankTitle": "157. Gran Torino (2008)",
      "rating": 8.1,
      "Year": 2008,
      "totalRevenue": "148,095,302",
      "openRevenue": "271,720",
      "Genre": "Drama"
    },
    {
      "rankTitle": "158. Sunrise (1927)",
      "rating": 8.1,
      "Year": 1927,
      "totalRevenue": "17,054",
      "openRevenue": "6,867",
      "Genre": "Drama, Romance"
    },
    {
      "rankTitle": "159. Gone with the Wind (1939)",
      "rating": 8.1,
      "Year": 1939,
      "totalRevenue": "198,655,278",
      "openRevenue": "1,192,593",
      "Genre": "Drama, History, Romance"
    },
    {
      "rankTitle": "160. The Bandit (1996)",
      "rating": 8.1,
      "Year": 1996,
      "totalRevenue": "1,979,000",
      "openRevenue": null,
      "Genre": "Crime, Drama, Thriller"
    },
    {
      "rankTitle": "161. The Deer Hunter (1978)",
      "rating": 8.1,
      "Year": 1978,
      "totalRevenue": "48,979,328",
      "openRevenue": null,
      "Genre": "Drama, War"
    },
    {
      "rankTitle": "162. Fargo (1996)",
      "rating": 8.1,
      "Year": 1996,
      "totalRevenue": "24,611,975",
      "openRevenue": "730,265",
      "Genre": "Crime, Drama, Thriller"
    },
    {
      "rankTitle": "163. The Sixth Sense (1999)",
      "rating": 8.1,
      "Year": 1999,
      "totalRevenue": "293,501,675",
      "openRevenue": "26,681,262",
      "Genre": "Drama, Mystery, Thriller"
    },
    {
      "rankTitle": "164. The Big Lebowski (1998)",
      "rating": 8.1,
      "Year": 1998,
      "totalRevenue": "17,439,163",
      "openRevenue": "5,533,844",
      "Genre": "Comedy, Crime"
    },
    {
      "rankTitle": "165. The Thing (1982)",
      "rating": 8.1,
      "Year": 1982,
      "totalRevenue": "19,629,760",
      "openRevenue": "3,107,897",
      "Genre": "Horror, Mystery, Sci-Fi"
    },
    {
      "rankTitle": "166. No Country for Old Men (2007)",
      "rating": 8.1,
      "Year": 2007,
      "totalRevenue": "74,273,505",
      "openRevenue": "1,226,333",
      "Genre": "Crime, Drama, Thriller"
    },
    {
      "rankTitle": "167. Finding Nemo (2003)",
      "rating": 8.1,
      "Year": 2003,
      "totalRevenue": "339,714,978",
      "openRevenue": "70,251,710",
      "Genre": "Animation, Adventure, Comedy"
    },
    {
      "rankTitle": "168. Tokyo Story (1953)",
      "rating": 8.1,
      "Year": 1953,
      "totalRevenue": null,
      "openRevenue": null,
      "Genre": "Drama"
    },
    {
      "rankTitle": "169. Hacksaw Ridge (2016)",
      "rating": 8.1,
      "Year": 2016,
      "totalRevenue": "163,332,647",
      "openRevenue": "15,190,758",
      "Genre": "Biography, Drama, History"
    },
    {
      "rankTitle": "170. Cool Hand Luke (1967)",
      "rating": 8.1,
      "Year": 1967,
      "totalRevenue": "16,217,773",
      "openRevenue": null,
      "Genre": "Crime, Drama"
    },
    {
      "rankTitle": "171. Rang De Basanti (2006)",
      "rating": 8.1,
      "Year": 2006,
      "totalRevenue": "2,197,331",
      "openRevenue": "701,666",
      "Genre": "Comedy, Drama, Histoy"
    },
    {
      "rankTitle": "172. There Will Be Blood (2007)",
      "rating": 8.1,
      "Year": 2007,
      "totalRevenue": "40,218,903",
      "openRevenue": "302,845",
      "Genre": "Drama, History"
    },
    {
      "rankTitle": "173. Rebecca (1940)",
      "rating": 8.1,
      "Year": 1940,
      "totalRevenue": "1,500,000",
      "openRevenue": null,
      "Genre": "Drama, Mystery, Romance"
    },
    {
      "rankTitle": "174. Come and See (1985)",
      "rating": 8.1,
      "Year": 1985,
      "totalRevenue": null,
      "openRevenue": null,
      "Genre": "Drama, War"
    },
    {
      "rankTitle": "175. Logan (2017)",
      "rating": 8.1,
      "Year": 2017,
      "totalRevenue": "226,277,068",
      "openRevenue": "88,411,916",
      "Genre": "Action,Drama, Sci-Fi"
    },
    {
      "rankTitle": "176. The Passion of Joan of Arc (1928)",
      "rating": 8.1,
      "Year": 1928,
      "totalRevenue": null,
      "openRevenue": null,
      "Genre": "Biography, Drama, History"
    },
    {
      "rankTitle": "177. Kill Bill: Vol. 1 (2003)",
      "rating": 8.1,
      "Year": 2003,
      "totalRevenue": "70,099,045",
      "openRevenue": "22,089,322",
      "Genre": "Action, Crime, Thriller"
    },
    {
      "rankTitle": "178. How to Train Your Dragon (2010)",
      "rating": 8.1,
      "Year": 2010,
      "totalRevenue": "217,581,231",
      "openRevenue": "43,732,319",
      "Genre": "Animation, Adventure, Comedy"
    },
    {
      "rankTitle": "179. Mary and Max (2009)",
      "rating": 8.1,
      "Year": 2009,
      "totalRevenue": null,
      "openRevenue": "123,210",
      "Genre": "Animation, Comedy, Drama"
    },
    {
      "rankTitle": "180. Gone Girl (2014)",
      "rating": 8.1,
      "Year": 2014,
      "totalRevenue": "167,735,396",
      "openRevenue": "37,513,109",
      "Genre": "Crime, Drama, Mystery"
    },
    {
      "rankTitle": "181. Into the Wild (2007)",
      "rating": 8.1,
      "Year": 2007,
      "totalRevenue": "18,352,454",
      "openRevenue": "212,440",
      "Genre": "Adventure, Biography, Drama"
    },
    {
      "rankTitle": "182. A Wednesday (2008)",
      "rating": 8.1,
      "Year": 2008,
      "totalRevenue": null,
      "openRevenue": null,
      "Genre": "Crime, Drama, Mystery"
    },
    {
      "rankTitle": "183. Shutter Island (2010)",
      "rating": 8.1,
      "Year": 2010,
      "totalRevenue": "128,012,934",
      "openRevenue": "41,062,440",
      "Genre": "Mystery, Thriller"
    },
    {
      "rankTitle": "184. It Happened One Night (1934)",
      "rating": 8.1,
      "Year": 1934,
      "totalRevenue": null,
      "openRevenue": null,
      "Genre": "Comedy, Romance"
    },
    {
      "rankTitle": "185. Life of Brian (1979)",
      "rating": 8.1,
      "Year": 1979,
      "totalRevenue": "646,124",
      "openRevenue": "140,034",
      "Genre": "Comedy"
    },
    {
      "rankTitle": "186. Wild Tales (2014)",
      "rating": 8.1,
      "Year": 2014,
      "totalRevenue": "3,079,012",
      "openRevenue": "85,100",
      "Genre": "Comedy, Drama, Thriller"
    },
    {
      "rankTitle": "187. Platoon (1986)",
      "rating": 8.1,
      "Year": 1986,
      "totalRevenue": "138,530,565",
      "openRevenue": "241,080",
      "Genre": "Drama, War"
    },
    {
      "rankTitle": "188. Hotel Rwanda (2004)",
      "rating": 8.1,
      "Year": 2004,
      "totalRevenue": "23,472,900",
      "openRevenue": "100,091",
      "Genre": "Biography, Drama, History"
    },
    {
      "rankTitle": "189. The Wages of Fear (1953)",
      "rating": 8.1,
      "Year": 1953,
      "totalRevenue": null,
      "openRevenue": null,
      "Genre": "Adventure, Drama, Thriller"
    },
    {
      "rankTitle": "190. Rush (2013)",
      "rating": 8.1,
      "Year": 2013,
      "totalRevenue": "26,903,709",
      "openRevenue": "187,289",
      "Genre": "Action, Biography, Drama"
    },
    {
      "rankTitle": "191. Network (1976)",
      "rating": 8.1,
      "Year": 1976,
      "totalRevenue": "23,689,877",
      "openRevenue": null,
      "Genre": "Drama"
    },
    {
      "rankTitle": "192. In the Name of the Father (1993)",
      "rating": 8.1,
      "Year": 1993,
      "totalRevenue": "25,096,862",
      "openRevenue": null,
      "Genre": "Biography, Drama"
    },
    {
      "rankTitle": "193. Stand by Me (1986)",
      "rating": 8.1,
      "Year": 1986,
      "totalRevenue": "51,914,208",
      "openRevenue": "242,795",
      "Genre": "Adventure, Drama"
    },
    {
      "rankTitle": "194. The 400 Blows (1959)",
      "rating": 8.1,
      "Year": 1959,
      "totalRevenue": null,
      "openRevenue": null,
      "Genre": "Crime, Drama"
    },
    {
      "rankTitle": "195. Persona (1966)",
      "rating": 8.1,
      "Year": 1966,
      "totalRevenue": null,
      "openRevenue": null,
      "Genre": "Drama, Thriller"
    },
    {
      "rankTitle": "196. Ben-Hur (1959)",
      "rating": 8.1,
      "Year": 1959,
      "totalRevenue": "74,700,000",
      "openRevenue": null,
      "Genre": "Adventure, Drama, History"
    },
    {
      "rankTitle": "197. The Grand Budapest Hotel (2014)",
      "rating": 8.1,
      "Year": 2014,
      "totalRevenue": "59,073,773",
      "openRevenue": "811,166",
      "Genre": "Adventure, Comedy, Drama"
    },
    {
      "rankTitle": "198. Mad Max: Fury Road (2015)",
      "rating": 8.1,
      "Year": 2015,
      "totalRevenue": "153,636,354",
      "openRevenue": "45,428,128",
      "Genre": "Action, Adventure, Sci-Fi"
    },
    {
      "rankTitle": "199. 12 Years a Slave (2013)",
      "rating": 8.1,
      "Year": 2013,
      "totalRevenue": "56,667,870",
      "openRevenue": "923,715",
      "Genre": "Biography, Drama, History"
    },
    {
      "rankTitle": "200. Memories of Murder (2003)",
      "rating": 8.1,
      "Year": 2003,
      "totalRevenue": "72,309",
      "openRevenue": "46,380",
      "Genre": "Crime, Drama, History"
    },
    {
      "rankTitle": "201. Spotlight (2015)",
      "rating": 8.1,
      "Year": 2015,
      "totalRevenue": "44,988,180",
      "openRevenue": "295,009",
      "Genre": "Crime, Drama, History"
    },
    {
      "rankTitle": "202. Million Dollar Baby (2004)",
      "rating": 8.1,
      "Year": 2004,
      "totalRevenue": "100,422,786",
      "openRevenue": "3,828,000",
      "Genre": "Drama, Sport"
    },
    {
      "rankTitle": "203. Jurassic Park (1993)",
      "rating": 8.1,
      "Year": 1993,
      "totalRevenue": "402,348,347",
      "openRevenue": "50,159,460",
      "Genre": "Adventure, Sci-Fi, Thriller"
    },
    {
      "rankTitle": "204. Butch Cassidy and the Sundance Kid (1969)",
      "rating": 8.1,
      "Year": 1969,
      "totalRevenue": "102,308,889",
      "openRevenue": null,
      "Genre": "Biography, Crime, Drama"
    },
    {
      "rankTitle": "205. Amores Perros (2000)",
      "rating": 8.1,
      "Year": 2000,
      "totalRevenue": "5,383,834",
      "openRevenue": "61,047",
      "Genre": "Drama,Thriller"
    },
    {
      "rankTitle": "206. Stalker (1979)",
      "rating": 8.1,
      "Year": 1989,
      "totalRevenue": "234,723",
      "openRevenue": "20,540",
      "Genre": "Drama, Sci-Fi"
    },
    {
      "rankTitle": "207. The Truman Show (1998)",
      "rating": 8.1,
      "Year": 1998,
      "totalRevenue": "125,603,360",
      "openRevenue": "31,542,121",
      "Genre": "Comedy, Drama, Sci-Fi"
    },
    {
      "rankTitle": "208. The Maltese Falcon (1941)",
      "rating": 8.1,
      "Year": 1941,
      "totalRevenue": "1,772,000",
      "openRevenue": null,
      "Genre": "Film-Noir, Mystery"
    },
    {
      "rankTitle": "209. Paper Moon (1973)",
      "rating": 8.1,
      "Year": 1973,
      "totalRevenue": "30,933,743",
      "openRevenue": null,
      "Genre": "Comedy, Crime, Drama"
    },
    {
      "rankTitle": "210. Hachi: A Dog's Tale (2009)",
      "rating": 8.1,
      "Year": 2009,
      "totalRevenue": "45,000,000",
      "openRevenue": "2,037,351",
      "Genre": "Drama, Family"
    },
    {
      "rankTitle": "211. Nausicaä of the Valley of the Wind (1984)",
      "rating": 8.1,
      "Year": 1984,
      "totalRevenue": "7,951,190",
      "openRevenue": null,
      "Genre": "Animation, Adventure, Fantasy"
    },
    {
      "rankTitle": "212. The Nights of Cabiria (1957)",
      "rating": 8.1,
      "Year": 1957,
      "totalRevenue": "752,045",
      "openRevenue": "38,988",
      "Genre": "Drama"
    },
    {
      "rankTitle": "213. The Princess Bride (1987)",
      "rating": 8.1,
      "Year": 1987,
      "totalRevenue": "24,650,738",
      "openRevenue": "206,243",
      "Genre": "Adventure, Family, Fantasy"
    },
    {
      "rankTitle": "214. Before Sunrise (1995)",
      "rating": 8.1,
      "Year": 1995,
      "totalRevenue": "5,381,891",
      "openRevenue": "1,423,537",
      "Genre": "Drama, Romance"
    },
    {
      "rankTitle": "215. Munna Bhai M.B.B.S. (2003)",
      "rating": 8,
      "Year": 2003,
      "totalRevenue": null,
      "openRevenue": null,
      "Genre": "Comedy, Drama, Romance"
    },
    {
      "rankTitle": "216. Harry Potter and the Deathly Hallows: Part 2(2011)",
      "rating": 8,
      "Year": 2011,
      "totalRevenue": "381,011,219",
      "openRevenue": "169,189,427",
      "Genre": "Adventure, Drama, Fantasy"
    },
    {
      "rankTitle": "217. Prisoners (2013)",
      "rating": 8,
      "Year": 2013,
      "totalRevenue": "61,002,302",
      "openRevenue": "20,817,053",
      "Genre": "Crime, Drama, History"
    },
    {
      "rankTitle": "218. The Grapes of Wrath (1940)",
      "rating": 8,
      "Year": 1940,
      "totalRevenue": null,
      "openRevenue": null,
      "Genre": "Drama, History"
    },
    {
      "rankTitle": "219. Rocky (1976)",
      "rating": 8,
      "Year": 1976,
      "totalRevenue": "117,235,247",
      "openRevenue": "5,000,000",
      "Genre": "Drama, Sport"
    },
    {
      "rankTitle": "220. Catch Me If You Can (2002)",
      "rating": 8,
      "Year": 2002,
      "totalRevenue": "164,435,221",
      "openRevenue": "30,082,000",
      "Genre": "Biography, Drama, Crime"
    },
    {
      "rankTitle": "221. Touch of Evil (1958)",
      "rating": 8,
      "Year": 1958,
      "totalRevenue": "2,237,659",
      "openRevenue": "70,725",
      "Genre": "Crime, Drama, Film-noir"
    },
    {
      "rankTitle": "222. Star Wars: The Force Awakens (2015)",
      "rating": 8,
      "Year": 2015,
      "totalRevenue": "936,627,416",
      "openRevenue": "247,966,675",
      "Genre": "Action, Adventure, Fantasy"
    },
    {
      "rankTitle": "223. Diabolique (1955)",
      "rating": 8,
      "Year": 1955,
      "totalRevenue": null,
      "openRevenue": null,
      "Genre": "Crime, Drama, Horror"
    },
    {
      "rankTitle": "224. Gandhi (1982)",
      "rating": 8,
      "Year": 1982,
      "totalRevenue": "52,767,889",
      "openRevenue": "131,153",
      "Genre": "Biography, Drama, History"
    },
    {
      "rankTitle": "225. Donnie Darko (2001)",
      "rating": 8,
      "Year": 2001,
      "totalRevenue": "727,883",
      "openRevenue": "110,494",
      "Genre": "Drama, Sci-Fi, Thriller"
    },
    {
      "rankTitle": "226. Monsters, Inc. (2001)",
      "rating": 8,
      "Year": 2001,
      "totalRevenue": "289,907,418",
      "openRevenue": "62,577,067",
      "Genre": "Animation, Adventure, Comedy"
    },
    {
      "rankTitle": "227. Annie Hall (1977)",
      "rating": 8,
      "Year": 1977,
      "totalRevenue": "38,251,425",
      "openRevenue": null,
      "Genre": "Comedy, Romance"
    },
    {
      "rankTitle": "228. Sholay (1975)",
      "rating": 8,
      "Year": 1975,
      "totalRevenue": null,
      "openRevenue": null,
      "Genre": "Action, Adventure, Comedy"
    },
    {
      "rankTitle": "229. The Terminator (1984)",
      "rating": 8,
      "Year": 1984,
      "totalRevenue": "38,371,200",
      "openRevenue": "4,020,663",
      "Genre": "Action, Sci-Fi"
    },
    {
      "rankTitle": "230. The Bourne Ultimatum (2007)",
      "rating": 8,
      "Year": 2007,
      "totalRevenue": "227,471,070",
      "openRevenue": "69,283,690",
      "Genre": "Action, Mystery, Thriller"
    },
    {
      "rankTitle": "231. Barry Lyndon (1975)",
      "rating": 8,
      "Year": 1975,
      "totalRevenue": "31,500,000",
      "openRevenue": null,
      "Genre": "Adventure, Drama, History"
    },
    {
      "rankTitle": "232. The Wizard of Oz (1939)",
      "rating": 8,
      "Year": 1939,
      "totalRevenue": "22,202,612",
      "openRevenue": "5,354,311",
      "Genre": "Adventure, Family, Fantasy"
    },
    {
      "rankTitle": "233. Groundhog Day (1993)",
      "rating": 8,
      "Year": 1993,
      "totalRevenue": "70,835,374",
      "openRevenue": "14,652,108",
      "Genre": "Comedy, Fantasy, Romance"
    },
    {
      "rankTitle": "234. 8½ (1963)",
      "rating": 8,
      "Year": 1963,
      "totalRevenue": "50,690",
      "openRevenue": "11,947",
      "Genre": "Drama"
    },
    {
      "rankTitle": "235. La Haine (1995)",
      "rating": 8,
      "Year": 1995,
      "totalRevenue": "309,811",
      "openRevenue": null,
      "Genre": "Crime, Drama"
    },
    {
      "rankTitle": "236. Baby Driver (2017)",
      "rating": 8,
      "Year": 2017,
      "totalRevenue": "101,689,495",
      "openRevenue": "20,553,320",
      "Genre": "Action, Crime, Music"
    },
    {
      "rankTitle": "237. Jaws (1975)",
      "rating": 8,
      "Year": 1975,
      "totalRevenue": "124,322,872",
      "openRevenue": "7,061,513",
      "Genre": "Adventure, Drama, Thriller"
    },
    {
      "rankTitle": "238. Twelve Monkeys (1995)",
      "rating": 8,
      "Year": 1995,
      "totalRevenue": "57,141,459",
      "openRevenue": "14,200,000",
      "Genre": "Mystery, Sci-Fi, Thriller"
    },
    {
      "rankTitle": "239. The Best Years of Our Lives (1946)",
      "rating": 8,
      "Year": 1946,
      "totalRevenue": "44,309,982",
      "openRevenue": null,
      "Genre": "Drama, Romance, War"
    },
    {
      "rankTitle": "240. Infernal Affairs (2002)",
      "rating": 8,
      "Year": 2002,
      "totalRevenue": "169,659",
      "openRevenue": "25,680",
      "Genre": "Crime, Drama, Mystery"
    },
    {
      "rankTitle": "241. The Help (2011)",
      "rating": 8,
      "Year": 2011,
      "totalRevenue": "169,708,112",
      "openRevenue": "26,044,590",
      "Genre": "Drama"
    },
    {
      "rankTitle": "242. In the Mood for Love (2000)",
      "rating": 8,
      "Year": 2000,
      "totalRevenue": "2,734,044",
      "openRevenue": "113,280",
      "Genre": "Drama, Romance"
    },
    {
      "rankTitle": "243. Beauty and the Beast (1991)",
      "rating": 8,
      "Year": 1991,
      "totalRevenue": "218,967,620",
      "openRevenue": "17,754,905",
      "Genre": "Animation, Family, Fantasy"
    },
    {
      "rankTitle": "244. The Battle of Algiers (1966)",
      "rating": 8,
      "Year": 1966,
      "totalRevenue": "814,345",
      "openRevenue": "77,570",
      "Genre": "Drama, War"
    },
    {
      "rankTitle": "245. Gangs of Wasseypur (2012)",
      "rating": 8,
      "Year": 2012,
      "totalRevenue": "4,300,000",
      "openRevenue": null,
      "Genre": "Action, Crime, Drama, Thriller"
    },
    {
      "rankTitle": "246. Dog Day Afternoon (1975)",
      "rating": 8,
      "Year": 1975,
      "totalRevenue": "50,000,000",
      "openRevenue": null,
      "Genre": "Biography, Crime, Drama, Thriller"
    },
    {
      "rankTitle": "247. Pirates of the Caribbean: The Curse of the Black Pearl (2003)",
      "rating": 8,
      "Year": 2003,
      "totalRevenue": "305,413,918",
      "openRevenue": "46,630,690",
      "Genre": "Action, Adventure, Fantasy"
    },
    {
      "rankTitle": "248. What Ever Happened to Baby Jane? (1962)",
      "rating": 8,
      "Year": 1962,
      "totalRevenue": "9,000,000",
      "openRevenue": null,
      "Genre": "Drama, Horror, Thriller"
    },
    {
      "rankTitle": "249. PK (2014)",
      "rating": 8,
      "Year": 2014,
      "totalRevenue": "129,788,000",
      "openRevenue": "3,565,258",
      "Genre": "Comedy, Drama, Fantasy"
    },
    {
      "rankTitle": "250. Paris, Texas (1984)",
      "rating": 8,
      "Year": 1984,
      "totalRevenue": "2,164,507",
      "openRevenue": "22,709",
      "Genre": "Drama"
    }
   ]



   var revenueChart1;  
   var initial_ds =   
   {  
     "chart": {  
         "caption": "Movie Data",  
         "subCaption": "For the movie data I just did the first object Shawshank Redemption to provide an example.  I did have to change the value to display the data.",  
         "yAxisName": "Total Revenue (In USD)",  
         "numberPrefix": "$",  
           
         //Cosmetics  
                   "captionpadding": "30",  
                      "yaxisname": "Estimated fans",  
                      "rotatevalues": "0",  
                      "divlinecolor": "#CCCCCC",  
                      "yaxisvaluespadding": "15",  
                      "valuefontbold": "1",  
                      "labelsepchar": ": ",  
                      "labeldisplay": "AUTO",  
                      "numberscalevalue": "1000,1000,1000",  
                      "numberscaleunit": "K,M,B",  
                      "animation": "0",  
                      "palettecolors": "e44a00",  
                      "theme": "zune",  
                      "valueBgAlpha": "0",  
           
                      "usePlotGradientColor": "0"  
     },  
     "data": [  
         {  
             "label": movieData[0].rankTitle,  
             "value": movieData[0].totalRevenue,  
             "alpha": "85", 
         },   
         {  
            "label": movieData[1].rankTitle,  
            "value": movieData[1].totalRevenue,   
             "alpha": "85"  
         },   
         {  
            "label": movieData[2].rankTitle,  
            "value": movieData[2].totalRevenue,   
             "alpha": "75"  
         },   
         {  
            "label": movieData[3].rankTitle,  
            "value": movieData[3].totalRevenue,  
             "alpha": "65"  
         },   
         {  
            "label": movieData[4].rankTitle,  
            "value": movieData[4].totalRevenue,  
             "alpha": "56"  
         },   
         {  
            "label": movieData[5].rankTitle,  
            "value": movieData[5].totalRevenue,  
             "alpha": "50"  
         },   
         {  
            "label": movieData[6].rankTitle,  
            "value": movieData[6].totalRevenue,   
             "alpha": "45"  
         },   
         {  
            "label": movieData[7].rankTitle,  
            "value": movieData[7].totalRevenue, 
             "alpha": "35"  
         },   
         {  
            "label": movieData[8].rankTitle,  
            "value": movieData[8].totalRevenue,  
             "alpha": "30"  
         },   
         {  
            "label": movieData[9].rankTitle,  
            "value": movieData[9].totalRevenue,   
             "alpha": "20"  
         }  
     ]  
   };  







export default Route.extend({

    actions: {  
        renderChart: function() {  
  
            var ds = this.get('myds');  
  
            revenueChart1.setJSONData(ds);  
        },  
  
        renderColumn: function() {  
            FusionCharts.ready(function() {  
                revenueChart1 = new FusionCharts({  
                    "type": "column2d",  
                    "width": "800",  
                    "height": "350",  
                    "renderAt": "chart-container",  
                    "dataFormat": "json",  
                    "dataSource": initial_ds  
                }).render();  
            });  
        },  
  
        renderBar: function() {  
            FusionCharts.ready(function() {  
                revenueChart1 = new FusionCharts({  
                    "type": "bar2d",  
                    "width": "800",  
                    "height": "350",  
                    "renderAt": "chart-container",  
                    "dataFormat": "json",  
                    "dataSource": initial_ds  
                }).render();  
            });  
        },  
  
        renderLine: function() {  
            FusionCharts.ready(function() {  
                revenueChart1 = new FusionCharts({  
                    "type": "line",  
                    "width": "800",  
                    "height": "350",  
                    "renderAt": "chart-container",  
                    "dataFormat": "json",  
                    "dataSource": initial_ds  
                }).render();  
            });  
        },  
  
        renderArea: function() {  
            FusionCharts.ready(function() {  
                revenueChart1 = new FusionCharts({  
                    "type": "area2d",  
                    "width": "800",  
                    "height": "350",  
                    "renderAt": "chart-container",  
                    "dataFormat": "json",  
                    "dataSource": initial_ds  
                }).render();  
            });  
        }  
    },





   model(){
       //returning movie data to the template
       return movieData;
    }    
 
});
