$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/feature/TestCase.feature");
formatter.feature({
  "line": 2,
  "name": "DemoWebShop Web site",
  "description": "",
  "id": "demowebshop-web-site",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@DemoWebShop"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "",
  "description": "Register in the DemoWebShop",
  "id": "demowebshop-web-site;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@TC01_Register"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the user launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user open the DemoWebShop Register page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the user register by filling all the necessary details",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "click on the register button user navigate to the next page",
  "keyword": "Then "
});
formatter.match({
  "location": "Demo_Register_Definition.the_User_Launch_The_Chrome_Application()"
});
formatter.result({
  "duration": 10983143300,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Register_Definition.the_User_Open_The_DemoWebShop_Register_page()"
});
formatter.result({
  "duration": 3649993300,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Register_Definition.the_User_Register_By_Filling_All_The_Necessary_Details()"
});
formatter.result({
  "duration": 4194049900,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Register_Definition.click_On_The_Register_Button_User_Nagivate_To_The_Next_Page()"
});
formatter.result({
  "duration": 4330496500,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "",
  "description": "Register in the DemoWebShop",
  "id": "demowebshop-web-site;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@TC02_InvalidRegister"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "user launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user open the DemoWebShop Register page",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user register by filling all invalid details",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "click on the register button user should not navigate to the next page",
  "keyword": "Then "
});
formatter.match({
  "location": "Demo_Invalid_Register_Definition.user_Launch_The_Chrome_Application()"
});
formatter.result({
  "duration": 9283096100,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Invalid_Register_Definition.user_Open_The_DemoWebShop_Register_page()"
});
formatter.result({
  "duration": 3549796300,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Invalid_Register_Definition.user_Register_By_Filling_All_Invalid_Details()"
});
formatter.result({
  "duration": 1439159400,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Invalid_Register_Definition.click_On_The_Register_Button_User_Should_Not_Nagivate_To_The_Next_Page()"
});
formatter.result({
  "duration": 70243200,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "",
  "description": "Login to DemoWebShop",
  "id": "demowebshop-web-site;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@TC03_Login"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "user launches the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "the user loggedin to the home page",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "the user login using emailid and password",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "click on the login button user navigate to the next page",
  "keyword": "Then "
});
formatter.match({
  "location": "Demo_Login_Definition.the_user_launches_the_chrome_application()"
});
formatter.result({
  "duration": 9312888600,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Login_Definition.the_user_loggedin_to_the_home_page()"
});
formatter.result({
  "duration": 2590152900,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Login_Definition.the_user_login_using_emailid_and_password()"
});
formatter.result({
  "duration": 2128115900,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Login_Definition.click_on_the_login_button_user_nagivate_to_the_next_page()"
});
formatter.result({
  "duration": 4021817100,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "",
  "description": "Login DemoWebShop",
  "id": "demowebshop-web-site;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@TC04_LoginInvalidEmailid"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "launching the chrome appy",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "user login too home page",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "the user0 login using invalid emailid",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "click on login button user1 should not navigate to the next page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Invalid_Email_Definition.launching_The_Chrome_Application()"
});
formatter.result({
  "duration": 9369374400,
  "status": "passed"
});
formatter.match({
  "location": "Login_Invalid_Email_Definition.the_User_Login_To_Home_Page()"
});
formatter.result({
  "duration": 2453552800,
  "status": "passed"
});
formatter.match({
  "location": "Login_Invalid_Email_Definition.the_User0_Login_Using_Invalid_Emailid()"
});
formatter.result({
  "duration": 1017952800,
  "status": "passed"
});
formatter.match({
  "location": "Login_Invalid_Email_Definition.click_On_The_Login_Button_User1_Should_Not_Navigate_To_The_Next_Page()"
});
formatter.result({
  "duration": 69513000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 36,
  "name": "",
  "description": "Login to the DemoWebShop",
  "id": "demowebshop-web-site;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 35,
      "name": "@TC05_LoginInvalidPassword"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "launching the chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "user login to the home page",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "the user login using valid \u003cemailid\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "the user login using invalid \u003cpass\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "click on login button user should not navigate to the next page",
  "keyword": "Then "
});
formatter.examples({
  "line": 44,
  "name": "",
  "description": "",
  "id": "demowebshop-web-site;;",
  "rows": [
    {
      "cells": [
        "emailid",
        "pass"
      ],
      "line": 45,
      "id": "demowebshop-web-site;;;1"
    },
    {
      "cells": [
        "candychandu186@gmail.com",
        "chandu12345"
      ],
      "line": 46,
      "id": "demowebshop-web-site;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 46,
  "name": "",
  "description": "Login to the DemoWebShop",
  "id": "demowebshop-web-site;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@DemoWebShop"
    },
    {
      "line": 35,
      "name": "@TC05_LoginInvalidPassword"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "launching the chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "user login to the home page",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "the user login using valid candychandu186@gmail.com",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "the user login using invalid chandu12345",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "click on login button user should not navigate to the next page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Invalid_Password_Definition.launching_The_Chrome()"
});
formatter.result({
  "duration": 9343269700,
  "status": "passed"
});
formatter.match({
  "location": "Login_Invalid_Password_Definition.user_Login_To_The_Home_Page()"
});
formatter.result({
  "duration": 2500486800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "candychandu186@gmail.com",
      "offset": 27
    }
  ],
  "location": "Login_Invalid_Password_Definition.the_User_Login_Using_Valid_Emailid(String)"
});
formatter.result({
  "duration": 756050500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "chandu12345",
      "offset": 29
    }
  ],
  "location": "Login_Invalid_Password_Definition.invalid_Password(String)"
});
formatter.result({
  "duration": 838572400,
  "status": "passed"
});
formatter.match({
  "location": "Login_Invalid_Password_Definition.click_On_Login_Button_User_Should_Not_Navigate_To_The_Next_Page()"
});
formatter.result({
  "duration": 73240600,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "",
  "description": "user get the info",
  "id": "demowebshop-web-site;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 48,
      "name": "@TC06_AccountInfo"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "launching chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "the user login to home page",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "the user get logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "user get the customer info",
  "keyword": "Then "
});
formatter.match({
  "location": "Account_Info_Definition.the_User_Launches_The_Chrome_Application()"
});
formatter.result({
  "duration": 9293862700,
  "status": "passed"
});
formatter.match({
  "location": "Account_Info_Definition.the_User_Loggedin_To_The_Home_Page()"
});
formatter.result({
  "duration": 2381041600,
  "status": "passed"
});
formatter.match({
  "location": "Account_Info_Definition.the_User_Login_Using_Emailid_And_Password()"
});
formatter.result({
  "duration": 9981108200,
  "status": "passed"
});
formatter.match({
  "location": "Account_Info_Definition.click_On_The_Login_Button_User_Nagivate_To_The_Next_Page()"
});
formatter.result({
  "duration": 3051758300,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "",
  "description": "Login and adding book to cart",
  "id": "demowebshop-web-site;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 56,
      "name": "@TC07_AddToCart"
    }
  ]
});
formatter.step({
  "line": 59,
  "name": "launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "the user logged in to the home page",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "the user login using id and password",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "the user click the book and add to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "the user does the checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "the user fills the details in billing address",
  "keyword": "Then "
});
formatter.match({
  "location": "Add_To_Cart_Definition.launch_The_Chrome_Application()"
});
formatter.result({
  "duration": 9326995300,
  "status": "passed"
});
formatter.match({
  "location": "Add_To_Cart_Definition.the_User_Logged_In_To_The_Home_Page()"
});
formatter.result({
  "duration": 3530800900,
  "status": "passed"
});
formatter.match({
  "location": "Add_To_Cart_Definition.the_User_Login_Using_Emailid_And_Password()"
});
formatter.result({
  "duration": 8242852400,
  "status": "passed"
});
formatter.match({
  "location": "Add_To_Cart_Definition.click_On_The_Book_And_Add_to_the_Cart()"
});
formatter.result({
  "duration": 2565431900,
  "status": "passed"
});
formatter.match({
  "location": "Add_To_Cart_Definition.the_User_Does_The_Checkout()"
});
formatter.result({
  "duration": 714254600,
  "status": "passed"
});
formatter.match({
  "location": "Add_To_Cart_Definition.the_User_Fills_The_Details_In_Billing_Address()"
});
formatter.result({
  "duration": 77956600,
  "status": "passed"
});
formatter.scenario({
  "line": 83,
  "name": "",
  "description": "counting the links",
  "id": "demowebshop-web-site;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 82,
      "name": "@TC10_CountingLinks"
    }
  ]
});
formatter.step({
  "line": 85,
  "name": "chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 86,
  "name": "demowebshop page",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "counting the number of links",
  "keyword": "Then "
});
formatter.step({
  "line": 88,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Demo_Links_Definition.chrome_Browser()"
});
formatter.result({
  "duration": 9380910700,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Links_Definition.demoWebShop_Page()"
});
formatter.result({
  "duration": 2637418200,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Links_Definition.counting_The_Number_Of_Links()"
});
formatter.result({
  "duration": 26040300,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Links_Definition.close_Browser()"
});
formatter.result({
  "duration": 70577500,
  "status": "passed"
});
formatter.scenario({
  "line": 91,
  "name": "",
  "description": "counting the image",
  "id": "demowebshop-web-site;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 90,
      "name": "@TC11_ImageCount"
    }
  ]
});
formatter.step({
  "line": 93,
  "name": "chromes browser",
  "keyword": "Given "
});
formatter.step({
  "line": 94,
  "name": "demowebshop pages",
  "keyword": "When "
});
formatter.step({
  "line": 95,
  "name": "counting the number of images",
  "keyword": "Then "
});
formatter.step({
  "line": 96,
  "name": "closing browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Demo_Image_Definition.chromes_Browser()"
});
formatter.result({
  "duration": 9221342900,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Image_Definition.demoWebShop_Pages()"
});
formatter.result({
  "duration": 2462911800,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Image_Definition.counting_The_Number_Of_Images()"
});
formatter.result({
  "duration": 16166900,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Image_Definition.closing_Browser()"
});
formatter.result({
  "duration": 68320400,
  "status": "passed"
});
formatter.scenario({
  "line": 99,
  "name": "",
  "description": "Login and adding computer to cart",
  "id": "demowebshop-web-site;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 98,
      "name": "@TC12_Computer"
    }
  ]
});
formatter.step({
  "line": 101,
  "name": "launch the chrome1 application",
  "keyword": "Given "
});
formatter.step({
  "line": 102,
  "name": "the user1 logged in to the home page",
  "keyword": "When "
});
formatter.step({
  "line": 103,
  "name": "the user1 login using id and password",
  "keyword": "Then "
});
formatter.step({
  "line": 104,
  "name": "the user1 click the computer and add to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 105,
  "name": "the user1 does the checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 106,
  "name": "the user1 fills the details in billing address",
  "keyword": "Then "
});
formatter.match({
  "location": "Demo_Computers_Definition.launch_the_chrome1_application()"
});
formatter.result({
  "duration": 9295281700,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Computers_Definition.the_user1_logged_in_to_the_home_page()"
});
formatter.result({
  "duration": 2569481000,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Computers_Definition.the_user_login_using_emailid_and_password()"
});
formatter.result({
  "duration": 8998130000,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Computers_Definition.click_on_the_login_button_user_nagivate_to_the_next_page()"
});
formatter.result({
  "duration": 2725945400,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Computers_Definition.the_user_does_the_checkout()"
});
formatter.result({
  "duration": 699393200,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Computers_Definition.the_user_fills_the_details_in_billing_address()"
});
formatter.result({
  "duration": 68359700,
  "status": "passed"
});
formatter.scenario({
  "line": 110,
  "name": "",
  "description": "Login and adding Electronics to cart",
  "id": "demowebshop-web-site;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 109,
      "name": "@TC13_CellPhone"
    }
  ]
});
formatter.step({
  "line": 112,
  "name": "launch the chrome2 application",
  "keyword": "Given "
});
formatter.step({
  "line": 113,
  "name": "the user2 logged in to the home page",
  "keyword": "When "
});
formatter.step({
  "line": 114,
  "name": "the user2 login using id and password",
  "keyword": "Then "
});
formatter.step({
  "line": 115,
  "name": "the user2 click the cellPhone and add to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 116,
  "name": "the user2 does the checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 117,
  "name": "the user2 fills the details in billing address",
  "keyword": "Then "
});
formatter.match({
  "location": "Demo_Electronics_Definition.launch_the_chrome2_application()"
});
formatter.result({
  "duration": 9351098100,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Electronics_Definition.the_User2_Logged_In_To_The_Home_Page()"
});
formatter.result({
  "duration": 2529570200,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Electronics_Definition.the_User2_Login_Using_Emailid_And_Password()"
});
formatter.result({
  "duration": 26509069300,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Electronics_Definition.the_User2_Click_The_Cellphone_And_Add_To_Cart()"
});
formatter.result({
  "duration": 3052159800,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Electronics_Definition.the_User2_Does_The_Checkout()"
});
formatter.result({
  "duration": 707024300,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Electronics_Definition.the_User2_Fills_The_Details_In_Billing_Address()"
});
formatter.result({
  "duration": 71569400,
  "status": "passed"
});
formatter.scenario({
  "line": 120,
  "name": "",
  "description": "Login and adding Apparel shoes to cart",
  "id": "demowebshop-web-site;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 119,
      "name": "@TC14_Apparel"
    }
  ]
});
formatter.step({
  "line": 122,
  "name": "launch the chrome3 application",
  "keyword": "Given "
});
formatter.step({
  "line": 123,
  "name": "the user3 logged in to the home page",
  "keyword": "When "
});
formatter.step({
  "line": 124,
  "name": "the user3 login using id and password",
  "keyword": "Then "
});
formatter.step({
  "line": 125,
  "name": "the user3 click the belt and add to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 126,
  "name": "the user3 does the checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 127,
  "name": "the user3 fills the details in billing address",
  "keyword": "Then "
});
formatter.match({
  "location": "Demo_Apparel_Definition.launch_The_Chrome3_Application()"
});
formatter.result({
  "duration": 9396983800,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Apparel_Definition.the_User3_Logged_In_To_The_Home_Page()"
});
formatter.result({
  "duration": 2591156700,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Apparel_Definition.the_User3_Login_Using_Emailid_And_Password()"
});
formatter.result({
  "duration": 6841908700,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Apparel_Definition.the_User3_Click_The_Belt_And_Add_To_Cart()"
});
formatter.result({
  "duration": 2941538200,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Apparel_Definition.the_User3_Does_The_Checkout()"
});
formatter.result({
  "duration": 639341600,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Apparel_Definition.the_User3_Fills_The_Details_In_Billing_Address()"
});
formatter.result({
  "duration": 64181600,
  "status": "passed"
});
formatter.scenario({
  "line": 130,
  "name": "",
  "description": "Login and adding Digital to cart",
  "id": "demowebshop-web-site;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 129,
      "name": "@TC15_Digital"
    }
  ]
});
formatter.step({
  "line": 132,
  "name": "launch the chrome4 application",
  "keyword": "Given "
});
formatter.step({
  "line": 133,
  "name": "the user4 logged in to the home page",
  "keyword": "When "
});
formatter.step({
  "line": 134,
  "name": "the user4 login using id and password",
  "keyword": "Then "
});
formatter.step({
  "line": 135,
  "name": "the user4 click the album and add to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 136,
  "name": "the user4 does the checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 137,
  "name": "the user4 fills the details in billing address",
  "keyword": "Then "
});
formatter.match({
  "location": "Demo_Digital_Definition.launch_The_Chrome4_Application()"
});
formatter.result({
  "duration": 9345841700,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Digital_Definition.the_User4_Logged_In_To_The_Home_Page()"
});
formatter.result({
  "duration": 2418920100,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Digital_Definition.the_User4_Login_Using_Emailid_And_Password()"
});
formatter.result({
  "duration": 7274247300,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Digital_Definition.the_User4_Click_The_album_And_Add_To_Cart()"
});
formatter.result({
  "duration": 2699566000,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Digital_Definition.the_User4_Does_The_Checkout()"
});
formatter.result({
  "duration": 741726400,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Digital_Definition.the_user4_fills_the_details_in_billing_address()"
});
formatter.result({
  "duration": 60324000,
  "status": "passed"
});
formatter.scenario({
  "line": 140,
  "name": "",
  "description": "Login and adding Jewelry to cart",
  "id": "demowebshop-web-site;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 139,
      "name": "@TC16_Jewelry"
    }
  ]
});
formatter.step({
  "line": 142,
  "name": "launch the chrome5 application",
  "keyword": "Given "
});
formatter.step({
  "line": 143,
  "name": "the user5 logged in to the home page",
  "keyword": "When "
});
formatter.step({
  "line": 144,
  "name": "the user5 login using id and password",
  "keyword": "Then "
});
formatter.step({
  "line": 145,
  "name": "the user5 click the chain and add to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 146,
  "name": "the user5 does the checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 147,
  "name": "the user5 fills the details in billing address",
  "keyword": "Then "
});
formatter.match({
  "location": "Demo_Jewelry_Definition.launch_The_Chrome5_Application()"
});
formatter.result({
  "duration": 9331166600,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Jewelry_Definition.the_User5_Logged_In_To_The_Home_Page()"
});
formatter.result({
  "duration": 3384754500,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Jewelry_Definition.the_User5_Login_Using_Emailid_And_Password()"
});
formatter.result({
  "duration": 10902874700,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Jewelry_Definition.the_User5_Click_The_chain_And_Add_To_Cart()"
});
formatter.result({
  "duration": 2799026600,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Jewelry_Definition.the_User5_Does_The_Checkout()"
});
formatter.result({
  "duration": 714365600,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Jewelry_Definition.the_User5_Fills_The_Details_In_Billing_Address()"
});
formatter.result({
  "duration": 73671000,
  "status": "passed"
});
formatter.scenario({
  "line": 150,
  "name": "",
  "description": "Login and adding GiftCard to cart",
  "id": "demowebshop-web-site;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 149,
      "name": "@TC17_GiftCard"
    }
  ]
});
formatter.step({
  "line": 152,
  "name": "launch the chrome6 application",
  "keyword": "Given "
});
formatter.step({
  "line": 153,
  "name": "the user6 logged in to the home page",
  "keyword": "When "
});
formatter.step({
  "line": 154,
  "name": "the user6 login using id and password",
  "keyword": "Then "
});
formatter.step({
  "line": 155,
  "name": "the user6 click the giftCard and add to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 156,
  "name": "the user6 does the checkout",
  "keyword": "Then "
});
formatter.match({
  "location": "Demo_Gift_Card_Definition.launch_The_Chrome6_Application()"
});
formatter.result({
  "duration": 9355529900,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Gift_Card_Definition.the_User6_Logged_In_To_The_Home_Page()"
});
formatter.result({
  "duration": 2452494600,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Gift_Card_Definition.the_User6_Login_Using_Emailid_And_Password()"
});
formatter.result({
  "duration": 6998205700,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Gift_Card_Definition.the_User6_Does_The_Checkout()"
});
formatter.result({
  "duration": 2846776400,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Gift_Card_Definition.the_User6_Click_The_chain_And_Add_To_Cart()"
});
formatter.result({
  "duration": 67732800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 159,
  "name": "",
  "description": "Login and writing enquiry",
  "id": "demowebshop-web-site;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 158,
      "name": "@TC18_ContactUs"
    }
  ]
});
formatter.step({
  "line": 161,
  "name": "launch the chrome7 browser",
  "keyword": "Given "
});
formatter.step({
  "line": 162,
  "name": "open the app page7",
  "keyword": "When "
});
formatter.step({
  "line": 163,
  "name": "user7 login using email \u003cemailid7\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 164,
  "name": "user7 login using password \u003cpassword7\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 165,
  "name": "user7 writes his \u003cenquiry1\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 166,
  "name": "user closes the chrome7 browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 168,
  "name": "",
  "description": "",
  "id": "demowebshop-web-site;;",
  "rows": [
    {
      "cells": [
        "emailid7",
        "password7",
        "enquiry1"
      ],
      "line": 169,
      "id": "demowebshop-web-site;;;1"
    },
    {
      "cells": [
        "eswar12@gmail.com",
        "eswar186",
        "Search is not working properly"
      ],
      "line": 170,
      "id": "demowebshop-web-site;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 170,
  "name": "",
  "description": "Login and writing enquiry",
  "id": "demowebshop-web-site;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 158,
      "name": "@TC18_ContactUs"
    },
    {
      "line": 1,
      "name": "@DemoWebShop"
    }
  ]
});
formatter.step({
  "line": 161,
  "name": "launch the chrome7 browser",
  "keyword": "Given "
});
formatter.step({
  "line": 162,
  "name": "open the app page7",
  "keyword": "When "
});
formatter.step({
  "line": 163,
  "name": "user7 login using email eswar12@gmail.com",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 164,
  "name": "user7 login using password eswar186",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 165,
  "name": "user7 writes his Search is not working properly",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 166,
  "name": "user closes the chrome7 browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Demo_Contactus_Definition.launch_The_Chrome7_Browser()"
});
formatter.result({
  "duration": 9362642300,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Contactus_Definition.user7_Logged_Into_App()"
});
formatter.result({
  "duration": 2629925600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "eswar12@gmail.com",
      "offset": 24
    }
  ],
  "location": "Demo_Contactus_Definition.user7_Login_Using_Emailid1(String)"
});
formatter.result({
  "duration": 721183400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "eswar186",
      "offset": 27
    }
  ],
  "location": "Demo_Contactus_Definition.user7_Login_Using_Pass1(String)"
});
formatter.result({
  "duration": 1207230800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search is not working properly",
      "offset": 17
    }
  ],
  "location": "Demo_Contactus_Definition.user7_Writes_His_Enquiry1(String)"
});
formatter.result({
  "duration": 1559011600,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Contactus_Definition.user_Closes_The_Chrome7_Browser()"
});
formatter.result({
  "duration": 1195017400,
  "status": "passed"
});
formatter.scenario({
  "line": 173,
  "name": "",
  "description": "",
  "id": "demowebshop-web-site;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 172,
      "name": "@TC19_NewsLetter"
    }
  ]
});
formatter.step({
  "line": 174,
  "name": "launch the chrome8 browser",
  "keyword": "Given "
});
formatter.step({
  "line": 175,
  "name": "open the app page8",
  "keyword": "When "
});
formatter.step({
  "line": 176,
  "name": "subscribe to newsletter",
  "keyword": "Then "
});
formatter.step({
  "line": 177,
  "name": "user closes the chrome8 browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Demo_News_Letter_Definition.launch_The_Chrome8_Browser()"
});
formatter.result({
  "duration": 9383263400,
  "status": "passed"
});
formatter.match({
  "location": "Demo_News_Letter_Definition.open_The_App_Page8()"
});
formatter.result({
  "duration": 2552279700,
  "status": "passed"
});
formatter.match({
  "location": "Demo_News_Letter_Definition.subscribe_To_Newsletter()"
});
formatter.result({
  "duration": 6299378300,
  "status": "passed"
});
formatter.match({
  "location": "Demo_News_Letter_Definition.user_Closes_The_Chrome8_Browser()"
});
formatter.result({
  "duration": 65199200,
  "status": "passed"
});
formatter.scenario({
  "line": 180,
  "name": "",
  "description": "",
  "id": "demowebshop-web-site;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 179,
      "name": "@TC20_Remove"
    }
  ]
});
formatter.step({
  "line": 181,
  "name": "launch the chrome9 browser",
  "keyword": "Given "
});
formatter.step({
  "line": 182,
  "name": "open the app page9",
  "keyword": "When "
});
formatter.step({
  "line": 183,
  "name": "user9 login in to the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 184,
  "name": "user9 remove item from the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 185,
  "name": "user9 closes the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Demo_Remove_Definition.launch_The_Chrome9_Browser()"
});
formatter.result({
  "duration": 9290821300,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Remove_Definition.open_The_App_Page9()"
});
formatter.result({
  "duration": 2410900600,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Remove_Definition.user9_Login_In_To_The_Home_Page()"
});
formatter.result({
  "duration": 2177940200,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Remove_Definition.user9_Remove_Item_From_The_Cart()"
});
formatter.result({
  "duration": 2718670000,
  "status": "passed"
});
formatter.match({
  "location": "Demo_Remove_Definition.user9_Closes_The_Browser()"
});
formatter.result({
  "duration": 65313500,
  "status": "passed"
});
});