Feature: Login

  I want to log into Conduit Application

  @smoke
  Scenario: Conduit Login Application
    Given I open Conduit login page
    When I pass credentials
    And I click on Sign in button
    Then "Your Feed" should be visible
