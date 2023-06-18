list = [1, 1] :: [Integer]

fibList :: [Integer] -> [Integer]
fibList [] = []
fibList (x: []) = [x]
fibList (x:y:xs)
 | y >= 4000000    = xs
 | x >= 4000000    = y:xs
 | otherwise       = fibList ((x+y) : x : y: xs )

main :: IO ()
main = do
       let list = [1, 1]
       let result = fibList list
       let getEven = [x | x <- result, even x]
       print getEven
       print (sum getEven)
