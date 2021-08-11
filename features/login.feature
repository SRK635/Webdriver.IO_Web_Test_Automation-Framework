Feature:  Login functionality
  As a customer
  In order to use the Depop application
  I want to login with email and password

  Scenario Outline: As a user, I can able to login to the website successfully when I enter correct credentials.

    Given I am on the login page
    When I accept cookies
    And I login with <username> and <password>
    Then I should see my avatar

    Examples:
      | username                      | password     |
      | justsivaramakrishna@gmail.com | August@95057 |


  Scenario Outline: As a user, I can't able to login to the website when I enter invalid credentials

    Given I am on the login page
    When I accept cookies
    And I login with <username> and <password>
    Then I should see login error message

    Examples:
      | username                       | password     |
      | justsivaramakrishna@gmail.com  | August@95051 |
      | justsivaramakrishna@gmail.coms | August@95057 |
      | justsivaramakrishna@gmail.coms | August@95051 |


  Scenario Outline: As a user, I can't able to login to the website when I left blank Username and Password fields.

    Given I am on the login page
    When I accept cookies
    And I login with <username> and <password>
    Then I should see credentials required error message

    Examples:
      | username | password |
      |          |          |

  Scenario Outline: As a user, I can able to validate show and hide password functionalities.

    Given I am on the login page
    When I accept cookies
    And I enter <username> and <password>
    Then I validate hide password functionality
    And I validate show password functionality
#    Then I validate hide password functionality

    Examples:
      | username | password |
      | asdf     | j@1      |

  Scenario: As a user, I can able to login to the website successfully with my facebook credentials.

    Given I am on the login page
    When I accept cookies
    And I click on Facebook button
    And I accept cookies from Facebook
    Then I should see Facebook login Page
