import unittest
import selenium
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.common.by import By
import webbrowser
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium.webdriver.firefox.firefox_binary import FirefoxBinary 
import os
import sys
class test(unittest.TestCase):
    def setUp(self):
        # create a new Firefox session
        binary=FirefoxBinary(sys.executable('firefox.exe'))
        cap=DesiredCapabilities.FIREFOX
        cap["marionette"] = False
        self.driver = webdriver.Firefox(capabilities=cap, executable_path="geckodriver.exe" , firefox_binary=binary)
        self.driver.implicitly_wait(30)
        self.driver.maximize_window()
        # navigate to the application home page
        self.driver.get("https://pro-deploy-123.netlify.com/login")
    def test_checklogin_box(self):
        print("validation")
        self.user_name = "cb.en.u4cse20000@cb.students.amrita.edu"
        self.password = "chocolate"
        self.element = self.driver.find_element_by_id("email")
        self.element.send_keys(self.user_name)
        self.element = self.driver.find_element_by_id("pass")
        self.element.send_keys(self.password)
        self.element.send_keys(Keys.RETURN)
    def test_checkwronglogin_box(self):
        print("wrong validation")
        self.user_name = "cb.en.u4cse20000@cb.students.amrita.edu"
        self.password = ""
        self.element = self.driver.find_element_by_id("email")
        self.element.send_keys(self.user_name)
        self.element = self.driver.find_element_by_id("pass")
        self.element.send_keys(self.password)
        self.element.send_keys(Keys.RETURN)
        self.Alert=self.driver.switch_to_alert()
        self.alertmsg=self.Alert.text;
        print(self.alertmsg)
        self.Alert.accept();

    def test_search_box(self):

    # # check search box exists on Home page
            self.assertTrue(self.is_element_present(By.ID,"searchbar"))
            print("search bar")
    def test_searchbutton_box(self):

    # # check search box exists on Home page
            self.assertTrue(self.is_element_present(By.ID,"searchbutton"))
            print("searchbutton")
    def test_loginbutton_box(self):

    # # check search box exists on Home page
            self.assertTrue(self.is_element_present(By.ID,"login"))
            print("login button")


    def tearDown(self):
        # close the browser window
        self.driver.quit()

    def is_element_present(self, how, what):
        """
        Helper method to confirm the presence of an element on page
        :params how: By locator type
        :params what: locator value
        """
        try:
            self.driver.find_element(by=how, value=what)
        except NoSuchElementException:
            return False
        return True
if(__name__=="__main__"):
    print("hi..")
    unittest.main()