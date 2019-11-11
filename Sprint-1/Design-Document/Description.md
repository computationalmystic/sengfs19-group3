# Design Document group3 <br><br> Created by Graeson, Zachanry, Guangzu

## what is necessary for your use cases to lead into a solution

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
