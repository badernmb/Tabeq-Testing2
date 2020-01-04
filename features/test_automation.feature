Feature: Test Automation demo


Scenario: scenario1
   Given The App apk
   When I input the name as "Bader"
   When I input the phone as "05555555550"
   When I input the street as "Aba Baker"
   When I input the comment as "Nothing"
   When I click to report
   Then The message should be "Report has been sent successfullyr"