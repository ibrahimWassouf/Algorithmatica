import System.Environment

findPrime :: Integer -> Integer -> [Integer]
findPrime composite sqrt= 
  [p | p <- [2..sqrt], mod composite p == 0 && mod 2 p == mod (2^p) p]

main :: IO ()
main = do
  let square = toInteger $ ceiling $ sqrt 997799
  let primeList = findPrime 42 square
  print square
  print primeList
