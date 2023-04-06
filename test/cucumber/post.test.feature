Feature: Post tests

    Scenario: Get all posts
        Given User gets all posts
        Then User recives status code 200
        And User recives more then 0 posts grom Get posts response

    Scenario: Get post by id
        Given User gets post by id 1
        Then User recives status code 200
        And User gets valid jsonSchema for Get posts.id response

    Scenario: Add post
        Given User adds new post
        Then User recives status code 201
        And User gets valid jsonSchema for Post posts.id response
