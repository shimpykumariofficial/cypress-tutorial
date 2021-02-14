Feature: Create Post

  I want to create post

  Scenario: Create a post
    Given I open Conduit login page
    When I pass credentials
    And I click on Sign in button
    And I create a new post
    And I mark post as favorite
    Then I unmark and verify

