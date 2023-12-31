valid :: [Char] -> [Char] -> Bool
valid [] []    = True
valid [_] []   = False
valid [] (_:_) = False
valid (x:z:xs) []
 | x == '('   = valid (z:xs) (x:[])
 | x == '{'   = valid (z:xs) (x:[])
 | x == '['   = valid (z:xs) (x:[])
 | otherwise  = False
valid (x:xs) (y:ys)
 | x == '('   = valid (xs) (x:y:ys)
 | x == '{'   = valid (xs) (x:y:ys)
 | x == '['   = valid xs (x:y:ys)
 | x == ')' && y == '('   = valid xs ys
 | x == '}' && y == '{'   = valid xs ys
 | x == ']' && y == '['   = valid xs ys
 | otherwise              = False
