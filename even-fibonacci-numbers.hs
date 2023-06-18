list = [1, 1] :: [Integer]

findEven :: [Integer] -> [Integer]
findEven [] = []
findEven [x] = [x]
findEven (x:y:xs) = findEven ((x+y) : xs)

main :: IO ()
main = do
       let list = [1, 1]
       let result = findEven list
       print result 
