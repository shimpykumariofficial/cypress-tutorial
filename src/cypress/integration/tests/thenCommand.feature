Feature: Then Command

  I want to write then commands

  Scenario: Then command
    Given I open Conduit login page
    When I Sign In
    And I create a new post
    Then I mark unmark as favorite

