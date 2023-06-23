findMax :: [Integer] -> Integer
findMax [] = 0
findMax [x] = x;
findMax (x:xs) 
 | findMax xs > x = findMax xs
 | findMax xs <= x = x


--takes the first item and finds the highest profit
--this will be useful because the selling day cannot
--be be before the buying day in the given question
--which this implementation will not allow
findProfit :: [Integer] -> Integer
findProfit [] = 0
findProfit [x] = 0
findProfit (x:xs) 
 | (findMax xs) - x >=0  = findMax xs - x
 | (findMax xs) - x < 0  = 0

findHighestProfit :: [Integer] -> Integer
findHighestProfit [] = 0
findHighestProfit [x] = 0
findHighestProfit (x:xs) 
 | findProfit (x:xs) > findHighestProfit xs = findProfit (x:xs)
 | findProfit (x:xs) <= findHighestProfit xs = findHighestProfit xs
