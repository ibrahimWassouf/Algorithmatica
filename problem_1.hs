divisibleByThree = [x | x <- [1..1000], mod x 3 == 0]
divisibleByFive = [x | x <- [1..1000], mod x 5 == 0]
allDivisible = divisibleByThree ++ divisibleByFive

sumList :: [Integer] -> Integer
sumList [] = 0
sumList (x:xs) = x + sumList xs

combineList :: [Integer] -> [Integer] -> [Integer]
combineList (x:xs) (y:ys)
   | x == y              = combineList xs ys
   | null xs             = ys
   | null ys             = xs
   | null xs && null ys  = [] 
   | otherwise           = x : y : combineList xs ys



realAnswer = [x | x <- [1..1000], mod x 3 == 0 || mod x 5 == 0]

--Take two
list = [1..999]

divisible' :: [Integer] -> [Integer]
divisible' [] = []
divisible' (x:xs)
 | mod x 3 == 0 || mod x 5 == 0    = x : divisible' xs 
 | otherwise                       = divisible' xs


