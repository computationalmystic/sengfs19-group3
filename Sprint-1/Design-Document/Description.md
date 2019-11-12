# Design Document group3 <br><br> Created by Graeson, Zachanry, Guangzu

## what is necessary for your use cases to lead into a solution

usecase:
1. https://github.com/computationalmystic/sengfs19-group3/blob/master/Sprint-1/Design-Document/use%20case%201.jpg
2. https://github.com/computationalmystic/sengfs19-group3/blob/master/Sprint-1/Design-Document/use%20case%202.jpg
3. https://github.com/computationalmystic/sengfs19-group3/blob/master/Sprint-1/Design-Document/use%20case%203.jpg

repo link:https://github.com/computationalmystic/sengfs19-group3/blob/master/Sprint-1/Design-Document/Repo-page.jpg <br>
repo group link:https://github.com/computationalmystic/sengfs19-group3/blob/master/Sprint-1/Design-Document/Repo-group-page.jpg<br>
info word version link:https://github.com/computationalmystic/sengfs19-group3/blob/master/Sprint-1/Design-Document/Info-page.jpg<br>

### Data source
  
    - Augur repo data
    - Augur repo group data
    - Augur pull request data
    - Augur contributors data
    - Augur commits data

### Functions

    - get info from Augur EndPoint
    - resorting data
    - search data which user want 
    - show two versions which are graph and word 

## how the different software components communicate 
    list of the software compoent
    - Views
    - Models
    - Controllers
    - Data Access objects
    - services
    - Api
    - Plugins
    
    - user can see the list of the request they can do in application by views.
    - Data Access objects set up the data structure
    - user can choose the request from the list.
    - Models handle request and data processing.
    - Controller receive request to call function (Plugins).
    - services save the data
    - application can get data (data structure from data Access object) from serveiceby calling Api 
    
    

## Document the reasons for your decision where you have choices in desgin
  
    - the info in Augur data base is unreadable
    - the word and graph way will show different information
    - the same key word in database
