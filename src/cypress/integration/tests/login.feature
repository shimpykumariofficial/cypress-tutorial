Feature: Login

  I want to log into Conduit Application

  Scenario: Conduit Login Application
    Given I open Conduit login page
    When I pass credentials
    And I click on Sign in button
    Then "conduit" should be shown
