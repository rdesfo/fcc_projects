import Haste
import Haste.Ajax

testUrl = "http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=e0737aaec18774db13c1434bc50f2fe5"

main = do 
  test <- fmap toJSString $ ajaxRequest GET (toJSString testUrl) noParams $ \c' ->
    case c' of
      Nothing -> return ()
      Just c -> writeLog c
  return ()

