
import Haste
import Haste.Ajax
import Haste.JSON
import Haste.DOM
import qualified Haste.JSString as JS

ipUrl :: JSString
ipUrl = toJSString "http://ip-api.com/json"

weatherUrl :: JSON -> JSString
weatherUrl json  = JS.concat [ toJSString "http://api.openweathermap.org/data/2.5/weather?lat="
                             , lat 
		             , toJSString "&lon="
		             , lon
		             , toJSString "&APPID=e0737aaec18774db13c1434bc50f2fe5"
		             ]
    where lat = toJSString $ json ! (toJSString "lat")
          lon = toJSString $ json ! (toJSString "lon")

testDiv a = let writeA [test] = setProp test "innerHTML" (toString $ a) 
            in withElems ["test"] writeA


main :: IO ()
main = do 
  ajaxRequest GET ipUrl noParams 
    $ \callback -> case callback of
  	 Nothing -> return ()
         Just a  -> ajaxRequest GET (weatherUrl a) noParams $
		       \c' -> case c' of
			        Nothing -> return ()
			        Just c  -> do 
                                             testDiv $ JS.unpack c
				             return ()
  return ()
