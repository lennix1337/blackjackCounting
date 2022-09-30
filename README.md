#### Testing blackjack counting with JS using only prompt-sync

In the casino game Blackjack, a player can gain an advantage
over the house by keeping track of the relative number of high
and low cards remaining in the deck. This is called Card Counting.

Having more high cards remaining in the deck favors
the player. Each card is assigned a value according to the table
below. When the count is `positive`, the player should bet `high`.
When the count is zero or `negative`, the player should bet `low`.

Only start counting after the dealer changes the deck for a new one.

Count Change | Cards
--- | ---
+1 | 2, 3, 4, 5, 6
0 |	7, 8, 9
-1 | 10, 'J', 'Q', 'K', 'A'

* Install
~~~
npm install
~~~

Useful links
* Example
https://github.com/EQuimper/CodeChallenge/blob/master/javascript/FreeCodeCamps/Basic%20JavaScript/Counting%20Cards.md 
* Simulation of Blackjack
https://github.com/johntelforduk/blackjack 