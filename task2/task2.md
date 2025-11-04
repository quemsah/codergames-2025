### Task: Night of the Living Edges

At midnight on All Hallows’ Eve, spectral bridges connect the frightening houses. Some form harmless paths… but once a circle closes, the spirits inside can never rest.  
Count the cursed networks before daybreak reaches the night.

On All Hallows’ Eve, **N** haunted houses (numbered 1 … N) are linked by ghostly corridors that **only ever appear**.

Each corridor is undirected and, once created, never disappears.

You will receive **Q** events of two kinds:

*   \+ u v — a new corridor appears between houses **u** and **v**
*   ? — the witch asks:

How many connected components currently contain **at least one cycle**?

(in other words, how many components are **not trees**)

A connected component is called **cursed** if it contains **at least one simple cycle**.

### **Input**

*   The first line contains two integers N Q
*   (1 ≤ N ≤ 2·10⁵, 1 ≤ Q ≤ 2·10⁵)
*   N - number of nodes
*   Each of the next Q lines is one event in one of these forms:
    *   \+ u v ( 1 ≤ u,v ≤ N, u ≠ v )
    *   ?

Corridors are **undirected**.

If the same pair u v is added more than once, treat each addition as an extra edge — it only matters whether a component has at least one cycle.

### **Output**

For every ? event, output one integer —

the current number of **cursed** components.

#### Example 1

**Input**

5 7

\+ 1 2

\+ 2 3

?

\+ 3 1

?

\+ 4 5

?

**Output**

0

1

1

Explanation:

After 1–2 and 2–3, component {1,2,3} is a tree → 0.

Adding 3–1 creates a cycle → 1 cursed component.

Adding 4–5 doesn’t change that → still 1.

#### Example 2

4 8

\+ 1 2

\+ 2 3

\+ 3 4

?

\+ 2 4

?

\+ 1 3

?

**Output**

0

1

1

Logic checks out:

*   After the first three edges: path → 0 cursed.
*   Adding 2–4 creates a cycle → 1 cursed.
*   Adding 1–3 keeps it cyclic → still 1.

### **Constraints & Implementation Tips**

*   Up to 2·10⁵ operations → use efficient I/O.
*   1-indexed vertices.
*   Self-loops (u = v) can be ignored safely.

### **Your task:**

Read input file and into the field with the answer, enter :

*   the resulting values.
*   at the end paste the source code of your program.

###  Input file

Click [**HERE**](/svc/stream/media/CG25task2_input) to download the input file.

### Answer

Click [**HERE**](/svc/stream/media/CG25task2_answer) to download the answer.

|     |     |     |
| --- | --- | --- |
| Points for | **Correct answer** | **Source Code** |
| Round 2 | 2   | 1   |

|     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- |
| Bonus points for | **Quick and correct answer** |     |     |     |     |     |
| Round 2 | 6   | 5   | 4   | 3   | 2   | 1   |

Correct answer:

For each correct position - 0.7 point (rounded 0.05 high)