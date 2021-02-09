Feature: Custom Commands

  I want to write custom commands

  Scenario: Custom Commands
    Given I open Conduit login page
    When I Sign In
    And I create a new post
    Then I mark unmark as favorite

