# Webdriver.IO_Web_Test_Automation-Framework 

**Introduction:** \
TODO: This is WebdriverIO based Web Test Automation Framework to automate the UI login scenarios of the retail fashion website. This framework is a skeletal framework where we have automated Login Scenarios and can be extended to other areas of website (Registration of New User/Search for the New Product/Displaying New Product Details etc....).

**Pre Requisite Softwares:** \

Java: Version "1.8.0_261" \
Node.JS Version: "v.12.18.3" \
npm Version: 6.14.6 \
Version Control: git version 2.30.0.windows.1\
Chrome Browser: Version 92.0.4515.131 (Official Build) (64-bit)\
IDE: Webstorm 2021.2\

**Setup Procedure in Local Machine:**\

Step 1: Check for the Pre Requisite Softwares in your local system and install if anything missing from the list. \
Step 2: Clone the project to your local system using the command: "git clone git@github.com:SRK635/Webdriver.IO_Web_Test_Automation-Framework.git" \
Step 3: Open the project with IDE \
Step 4: Install the node module dependencies using the command: npm install \
Step 5: Execute the Command to run Test: "npm run test" in IDE terminal \
Step 6: If test execution success reports will generate under "depop2>allure-reports>index.html" folder and automatically opens in browser. ( Because of the command  in posttest": "allure generate allure-results --clean && allure open" in package.json file)\
Step 7: If test execution fails run the command in IDE terminal: "npm run posttest" to generate the reports\
Step 8: If you would like to run specific scenario using tags, use the tag (ex:@testThis) and update line no. 169 (tagExpression) with same value (ex:@testThis)\

**Build and Test:**\

Command to run Test: npm run test\

To Access Test Reports: depop2>allure-results>index.html\

**Challenges while developing this:**\
![1 depoperror1](https://user-images.githubusercontent.com/13045315/129104223-8b273f46-ac78-4a21-b948-b7d1bbbba316.png)\
![2 depoperro2](https://user-images.githubusercontent.com/13045315/129104227-95a1cd65-f1c8-413c-a3aa-fe29860dd966.PNG)\
![3 depoperro3](https://user-images.githubusercontent.com/13045315/129104232-1780bf6e-cb6c-4a84-adeb-5a7ff52632e8.PNG)\
![4 depoperro4](https://user-images.githubusercontent.com/13045315/129104234-febbfc8f-a767-4b0e-9899-d881de965784.PNG)\
![5 depoperro5](https://user-images.githubusercontent.com/13045315/129104239-4d73cffa-aaef-49db-978b-33b9f225fdcb.PNG)\
![Screenshot (18)](https://user-images.githubusercontent.com/13045315/129104246-ad524fba-b2ac-498f-9fb2-e275467e611d.png)


