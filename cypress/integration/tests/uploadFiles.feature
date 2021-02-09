Feature: Upload Files

  I want to upload file

  Scenario: File Upload
    Given I open upload file page
    When I submit a pdf file
    Then Verify file is uploaded

