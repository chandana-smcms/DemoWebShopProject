package com.steprunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/main/resources/feature/TestCase.feature",
		plugin = {"pretty", "html:Report/cucumber_html_report"},
		tags = {"@TC01_Register,@TC02_InvalidRegister,@TC03_Login,@TC04_LoginInvalidEmailid,@TC05_LoginInvalidPassword,@TC06_AccountInfo,@TC07_AddToCart,@TC08_RewardPoint"
				+ "@TC09_ForgotPassword,@TC10_CountingLinks,@TC11_ImageCount,@TC12_Computer,@TC13_CellPhone,@TC14_Apparel,@TC15_Digital,@TC16_Jewelry,@TC17_GiftCard,@TC18_ContactUs,@TC19_NewsLetter,@TC20_Remove"},
			//	dryRun = true, gives the scenario
		glue = {"com.stepdefinition"},
		monochrome = true
		)

public class All_Runner {

}
