# Booking app with dashboards

# 거의 표준 프래임 워크

## React + Vite@4
## styled-components : design
## react-router : routing
## context-api : local state management(not redux)
## react hook form: form management(for easy control)
## supabase: create a back-end with a Postgres database
## react query : remote state management

### react-icons
curl "https://dfmbiacecpehxhgsveaj.supabase.co/rest/v1/cabins?select=*" 
-H "apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmbWJpYWNlY3BlaHhoZ3N2ZWFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE5MzQ3NTksImV4cCI6MjAyNzUxMDc1OX0.hHtWvxWe7_ypQdyYW2Hmo6zws-cBymSOlCzoHfJC3N4" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmbWJpYWNlY3BlaHhoZ3N2ZWFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE5MzQ3NTksImV4cCI6MjAyNzUxMDc1OX0.hHtWvxWe7_ypQdyYW2Hmo6zws-cBymSOlCzoHfJC3N4"
> curl 요청시 모두 double quote 로 해야함

> @tanstack/react-query@4
> 
> @tanstack/react-query-devtools@4

npm i react-hot-toast

> https://react-hot-toast.com/

> npm i react-hook-form@7 