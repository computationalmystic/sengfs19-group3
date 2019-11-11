# Sprint-one <br><br>group3 <br><br> Created by Graeson, Zachanry, Guangzu


## Use case

###  Use case 1:

diagram link:https://github.com/Natsukie/glgw7/blob/master/Assignemnt-nine/UseCase/use%20case%201.jpg

Title: Repo and Repo Group display pages

Description: It is two pages basic on data, you can choose to go to repo/repo-group. If go to repo-group pages, you can search the repo by repo group. If you go to repo pages, it will show all the repo.

Actor: User and the administrators from augur data system

Goals: Main goal is the user can see repo pages is to display repo and can use repo group pages to search the repo detail follow by repo groups.

Fail: No result if there no response from Augur end point.

Steps for execution:

First case:

	- 1. go to repo pages
	- 2. loading repo data from Augur
	- 3. display repo data
Second case:

	- 1. go to repo group pages
	- 2. loading repo group pages from Augur
	- 3. display repo group data
	- 4. choose repo group to search repo data
	- 5. loading specific repo data from Augur
	- 6. display specific repo data


###  Use case 2:

diagram link:https://github.com/Natsukie/glgw7/blob/master/Assignemnt-nine/UseCase/use%20case%202.jpg

Title: Top commit, pull request, and contributor detail display pages

Description: We can get the detail from Augur end point such as top commit, pull request, and contributor.

Actor: User and the administrators from augur data system

Goals: Main goal is the user can get the specific detail from augur end point

Fail: No result if there no response from Augur end point.

Steps for execution:

	- 1. go to repo pages
	- 2. loading repo data from Augur end point
	- 3. Search data top commit pull request, or contributor by repo info
	- 4. loading specific info from Augur data
	- 5. display the specific info in pages

### use case 3:

diagram link:https://github.com/Natsukie/glgw7/blob/master/Assignemnt-nine/UseCase/use%20case%203.jpg

Title: Top commit, pull request, and contributor detail display pages

Description: We can get the detail from Augur end point such as top commit, pull request, and contributor. Show in more obvious way.

Actor: User and the administrators from augur data system

Goals: Main goal is the user can get the specific detail from augur end point. Also,make the comparison of data more obvious

Fail: No result if there no response from Augur end point.

Steps for execution:

	- 1. go to repo pages
	- 2. loading repo data from Augur end point
	- 3. Search data top commit pull request, or contributor by repo info
	- 4. loading specific info from Augur data
	- 5. display the specific info in pages
        - 6. change to graph info version pages


## Identify which parts of the Augur ERD are going to be relevant for your semester project
  List of the parts of the augur ERD will be used
  
	- augur_data.repo_info
  	- augur_data.repo_groups
	- augur_data.pull_request_repo 
 	- augur_data.commits
  	- augur_data.contributor
## Wireframes

repo link:https://github.com/Natsukie/glgw7/blob/master/Assignemnt-nine/Wireframes/Repo-page.jpg
repo group link:https://github.com/Natsukie/glgw7/blob/master/Assignemnt-nine/Wireframes/Repo-group-page.jpg
info word version link:https://github.com/Natsukie/glgw7/blob/master/Assignemnt-nine/Wireframes/Info-page.jpg
graph version link:https://github.com/Natsukie/glgw7/blob/master/Assignemnt-nine/Wireframes/Graph-version-page.jpg

## Define Endpoints or  End points you think you will need to develop or a combnination of the two

	- repo
	- repo group
	- pull requiest 
	- commits
	- contributors
