### Task: Haunted mansion

#### Story

Tom has received a map of haunted mansion rooms. Each room has a number (1..N).

Room with number 1 may or may not be the main entrance.

On the map, the rooms are connected by secret passages or so called “creepy corridors”. Tom knows which rooms have passages to which other rooms (e.g., room 1 has passage to rooms 2 and 3).

No secret passage leads into the main entrance.

A spooky event has occurred: some rooms have mysteriously vanished from the mansion.

Tom needs to find out how many different rooms can still be reached from the main entrance, using the secret passages. He knows which of the rooms have disappeared. He also knows that the main entrance is the only one accessible from the outside.

Because the spell was cast by a “muggle”, there is one more obstacle to solving Toms task. Each room, that has been connected to at least two other vanished rooms, has disappeared also. Luckily, this “spell mishap” has not spread on further. In other words, “additionally” vanished rooms have not caused more rooms to vanish.

### Important:

Once Tom reaches a room via a secret passage, he cannot travel back to the previously visited room. In other words, the passages form a one-way path with no circular routes.  
 

### Input:

The first line contains a number: the total number of rooms (rooms are numbered from 1 to N). Room 1 may or may not be the main entrance.

The second line contains the number of the vanished rooms (M).

The next N lines each describe a room and its secret passages. The first number is the room itself, followed by numbers of rooms it has passage to. They are separated by commas.

For example, 1,4,5 means room 1 has passages to rooms 4 and 5.

2,8,9,11 means room 2 has passages to rooms 8, 9, and 11, etc.

If a room has no passages, the line contains only its number.

The next M lines each contain a number: these are the room numbers of the rooms that have vanished in the first round.  
 

### Output:

Output must contain three lines. Each line contains a single number.

1.  What is the room number of the main entrance?
2.  How many more rooms have additionally disappeared due to the “poorly” casted spell?
3.  How many rooms (including the main one) can be reached after the vanishings?

####  Example 1:

|     |     |
| --- | --- |
| Input:<br><br>4  <br>1  <br>1,2,3  <br>3,4  <br>2,3  <br>4  <br>3 | Output:<br><br>1  <br>0  <br>2 |

#### Example 2:

|     |     |
| --- | --- |
| Input:<br><br>6  <br>2  <br>4,1,5  <br>2  <br>5  <br>6,2  <br>3,4,6  <br>1  <br>1  <br>5 | Output:<br><br>3  <br>1  <br>3 |

### Your task:

Read input file and into the field with the answer, enter :

*   The resulting values on separated rows
*   At the end paste the source code of your program.

### Input file:

  Click **[HERE](/svc/stream/media/CG25task3_input)** to download the input file.

### Answer

Click [**HERE**](/svc/stream/media/CG25task3_answer) to download the answer.

|     |     |     |
| --- | --- | --- |
| Points for | **Correct answer** | **Source Code** |
| Round 3 | 3   | 1   |

|     |     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Bonus points for | **Quick and correct answer** |     |     |     |     |     |     |
| Round 3 | 7   | 6   | 5   | 4   | 3   | 2   | 1   |

Correct answer:

Room number of the main entrance : 1 point

Number of additionally vanished rooms : 1 point

Total reachable rooms (including the main one) : 1 point